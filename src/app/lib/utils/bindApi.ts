import { Api, api } from "@/src/app/lib/api/Api";

const bindApi = <T extends keyof Api, K extends keyof Api[T]>(
  context: T,
  fn: K,
) => {
  return (api("server")[context][fn] as Function).bind(api("server")[context]);
};

export default bindApi;
