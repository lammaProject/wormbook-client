import http from "./http";

const admin = "/admin";

export const createBook = (FormData: FormData) =>
  http.post(admin + "/create-book", FormData);
