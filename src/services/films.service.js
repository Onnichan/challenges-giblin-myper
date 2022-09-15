import { ApiRequest } from "./";

const getfilms = (limit = 250) => {
  return ApiRequest.get("films", {
    params: { limit },
  });
};

const getFilm = (id) => {
  return ApiRequest.get(`film/${id}`);
};

export default {
  getfilms,
  getFilm,
};
