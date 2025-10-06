"use client";
import dynamic from "next/dynamic";

const AdminClient = dynamic(() => import("./admin-panel"), {
  ssr: false,
});

export { AdminClient };
