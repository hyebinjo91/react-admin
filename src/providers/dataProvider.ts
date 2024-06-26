import { DataProvider, fetchUtils } from "react-admin";

export const dataProvider: DataProvider = {
  getList: async (resource) => {
    const response = await fetchUtils.fetchJson(`${resource}`);
    return {
      data: response.json,
      total: response.json.length,
      // pageInfo: { page: 1, perPage: 5 },
    };
  },
  getOne: async (resource, params) => {
    const response = await fetchUtils.fetchJson(`/${resource}/${params.id}`);
    return { data: response.json };
  },
  create: async (resource, params) => {
    const response = await fetchUtils.fetchJson(`${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: response.json };
  },
  update: async (resource, params) => {
    const response = await fetchUtils.fetchJson(`${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: response.json };
  },
  delete: async (resource, params) => {
    const response = await fetchUtils.fetchJson(`${resource}/${params.id}`, {
      method: "DELETE",
    });
    return { data: response.json };
  },
};
