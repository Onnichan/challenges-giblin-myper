import { ApiRequest } from "./";

const getfilms = (limit = 40) => {
  return ApiRequest.get(`films?limit=${limit}`);
};

const getFilm = (id) => {
  return ApiRequest.get(`film/${id}`);
};

export default {
  getfilms,
  getFilm
}