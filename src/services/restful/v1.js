import axios from 'axios';

const DEFAULT_API_CONFIG = {
  baseURL: '/',
  timeOut: 30000,
};

export default class RestClient {
  constructor(config = {}) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
    this._requestInterceptor();
    this._responseInterceptor();
  }

  _requestInterceptor() {
    this.client.interceptors.request.use(config => {
      // middleware for request go here
      return config;
    });
  }

  _responseInterceptor() {
    this.client.interceptors.response.use(res => {
      // middleware for response go here
      return res;
    });
  }
}
