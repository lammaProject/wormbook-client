import http from "@/src/app/lib/api/backend/http";

const profile = "profile";

export const getProfile = async () => await http.get(profile + "/");
