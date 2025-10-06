import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ resource: string }> }
) {
  try {
    const params = await context.params;
    const { resource } = params;
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const model = (prisma as any)[resource];
    if (!model) {
      return NextResponse.json(
        { error: `Resource ${resource} not found` },
        { status: 404 }
      );
    }

    if (id) {
      const item = await model.findUnique({
        where: { id },
      });
      return NextResponse.json(item);
    } else {
      const page = parseInt(searchParams.get("_page") || "1");
      const perPage = parseInt(searchParams.get("_perPage") || "10");
      const skip = (page - 1) * perPage;

      const sort = searchParams.get("_sort");
      const order = searchParams.get("_order") || "asc";

      let orderBy = undefined;
      if (sort) {
        orderBy = {
          [sort]: order.toLowerCase() as "asc" | "desc",
        };
      }

      const filter: any = {};
      searchParams.forEach((value, key) => {
        if (!key.startsWith("_") && value && key !== "id") {
          filter[key] = { contains: value, mode: "insensitive" };
        }
      });

      const where = Object.keys(filter).length > 0 ? filter : undefined;

      const [data, total] = await Promise.all([
        model.findMany({
          where,
          skip,
          take: perPage,
          orderBy, // Исправленный orderBy
        }),
        model.count({ where }),
      ]);

      return NextResponse.json(data, {
        headers: {
          "x-total-count": total.toString(),
        },
      });
    }
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json([], { status: 500 });
  }
}

// POST - создание новой записи
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ resource: string }> }
) {
  try {
    const params = await context.params;
    const { resource } = params;
    const body = await request.json();

    const model = (prisma as any)[resource];
    if (!model) {
      return NextResponse.json(
        { error: `Resource ${resource} not found` },
        { status: 404 }
      );
    }

    const newItem = await model.create({
      data: body,
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PUT - обновление записи
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ resource: string }> }
) {
  try {
    const params = await context.params;
    const { resource } = params;
    const body = await request.json();

    if (!body.id) {
      return NextResponse.json(
        { error: "ID is required for update" },
        { status: 400 }
      );
    }

    const model = (prisma as any)[resource];
    if (!model) {
      return NextResponse.json(
        { error: `Resource ${resource} not found` },
        { status: 404 }
      );
    }

    const { id, ...data } = body;
    const updatedItem = await model.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE - удаление записи
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ resource: string }> }
) {
  try {
    const params = await context.params;
    const { resource } = params;
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID is required for deletion" },
        { status: 400 }
      );
    }

    const model = (prisma as any)[resource];
    if (!model) {
      return NextResponse.json(
        { error: `Resource ${resource} not found` },
        { status: 404 }
      );
    }

    await model.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
