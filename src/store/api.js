import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CODE = "FOOBARBAZ";
const API_URL = `https://strangers-things.herokuapp.com/api/${CODE}`;

// Central API slice
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      token && headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default api;
