import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const LOGIN_KEY = "125" // token;

interface Breed {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1/user/signup",
    prepareHeaders(headers) {
      headers.set("X-XSRF-TOKEN", LOGIN_KEY);
      
      return headers;
    },
  }),
  endpoints(builder){
      return{
          fetchBreeds : builder.query<Breed[],number | void >({
            query(limit = 10){
                return `/breeds?limit=${limit}`;
            },
          }),
      };
  }
});


export const {useFetchBreedsQuery } = apiSlice;