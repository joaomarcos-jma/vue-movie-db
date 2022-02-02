import http from './api.service';

const get = async (url, opts = {}) => {
  const options = {
    params: {
      api_key: process.env.VUE_APP_KEY,
      language: process.env.VUE_APP_LANGUAGE,
      ...opts,
    },
  };
  return http.get(url, options).then((response) => response).catch((err) => err);
};
export default get;
