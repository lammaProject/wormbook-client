import http from "./http";

const admin = "/admin";

export const createBook = async (formData: FormData) =>
  await http.postForm(admin + "/create-book", formData);
