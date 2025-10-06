const apiUrl = "/api/admin";

export const dataProvider = {
  getList: async (resource, params) => {
    try {
      console.log("getList called for:", resource, params);

      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;

      const queryParams = new URLSearchParams({
        _page: page.toString(),
        _perPage: perPage.toString(),
        ...(field && { _sort: field }),
        ...(order && { _order: order }),
      });

      Object.keys(params.filter || {}).forEach((key) => {
        if (params.filter[key] !== undefined && params.filter[key] !== null) {
          queryParams.append(key, params.filter[key]);
        }
      });

      const url = `${apiUrl}/${resource}?${queryParams}`;
      console.log("Fetching URL:", url);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Received data:", data);

      if (!Array.isArray(data)) {
        console.error("Data is not an array:", data);
        return { data: [], total: 0 };
      }

      const total = parseInt(
        response.headers.get("x-total-count") || data.length.toString()
      );

      return { data, total };
    } catch (error) {
      console.error("getList error:", error);
      return { data: [], total: 0 };
    }
  },

  getOne: async (resource, params) => {
    try {
      const response = await fetch(`${apiUrl}/${resource}?id=${params.id}`);
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error("getOne error:", error);
      return { data: {} };
    }
  },

  create: async (resource, params) => {
    try {
      const response = await fetch(`${apiUrl}/${resource}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params.data),
      });
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error("create error:", error);
      throw error;
    }
  },

  update: async (resource, params) => {
    try {
      const response = await fetch(`${apiUrl}/${resource}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params.data),
      });
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error("update error:", error);
      throw error;
    }
  },

  delete: async (resource, params) => {
    try {
      await fetch(`${apiUrl}/${resource}?id=${params.id}`, {
        method: "DELETE",
      });
      return { data: { id: params.id } };
    } catch (error) {
      console.error("delete error:", error);
      throw error;
    }
  },

  // Простые реализации остальных методов
  getMany: async (resource, params) => {
    return { data: [] };
  },

  getManyReference: async (resource, params) => {
    return { data: [], total: 0 };
  },

  updateMany: async (resource, params) => {
    return { data: [] };
  },

  deleteMany: async (resource, params) => {
    return { data: [] };
  },
};

// // lib/dataProvider.ts
// const apiUrl = "/api/admin";

// export const dataProvider = {
//   getList: async (resource, params) => {
//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;

//     const queryParams = new URLSearchParams({
//       _page: page.toString(),
//       _perPage: perPage.toString(),
//       _sort: field,
//       _order: order,
//       ...params.filter,
//     });

//     const response = await fetch(`${apiUrl}/${resource}?${queryParams}`);
//     const data = await response.json();
//     const total = parseInt(
//       response.headers.get("x-total-count") || data.length
//     );

//     return { data, total };
//   },

//   getOne: async (resource, params) => {
//     const response = await fetch(`${apiUrl}/${resource}?id=${params.id}`);
//     const data = await response.json();
//     return { data };
//   },

//   getMany: async (resource, params) => {
//     const query = params.ids.map((id) => `id=${id}`).join("&");
//     const response = await fetch(`${apiUrl}/${resource}?${query}`);
//     const data = await response.json();
//     return { data };
//   },

//   getManyReference: async (resource, params) => {
//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;

//     const queryParams = new URLSearchParams({
//       _page: page.toString(),
//       _perPage: perPage.toString(),
//       _sort: field,
//       _order: order,
//       [params.target]: params.id,
//       ...params.filter,
//     });

//     const response = await fetch(`${apiUrl}/${resource}?${queryParams}`);
//     const data = await response.json();
//     const total = parseInt(
//       response.headers.get("x-total-count") || data.length
//     );

//     return { data, total };
//   },

//   create: async (resource, params) => {
//     const response = await fetch(`${apiUrl}/${resource}`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(params.data),
//     });
//     const data = await response.json();
//     return { data };
//   },

//   update: async (resource, params) => {
//     const response = await fetch(`${apiUrl}/${resource}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(params.data),
//     });
//     const data = await response.json();
//     return { data };
//   },

//   updateMany: async (resource, params) => {
//     const responses = await Promise.all(
//       params.ids.map((id) =>
//         fetch(`${apiUrl}/${resource}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ ...params.data, id }),
//         })
//       )
//     );

//     const data = await Promise.all(responses.map((r) => r.json()));
//     return { data };
//   },

//   delete: async (resource, params) => {
//     await fetch(`${apiUrl}/${resource}?id=${params.id}`, {
//       method: "DELETE",
//     });
//     return { data: { id: params.id } };
//   },

//   deleteMany: async (resource, params) => {
//     await Promise.all(
//       params.ids.map((id) =>
//         fetch(`${apiUrl}/${resource}?id=${id}`, {
//           method: "DELETE",
//         })
//       )
//     );
//     return { data: params.ids.map((id) => ({ id })) };
//   },
// };
