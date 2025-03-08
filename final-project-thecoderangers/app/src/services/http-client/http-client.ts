import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
  } from "axios";
  
  export default class HttpClient {
    private static instance: AxiosInstance;
  
    private static initInstance(): void {
      if (!HttpClient.instance) {
        const config: AxiosRequestConfig = {
          baseURL: process.env.API_BASEURL || "http://localhost:3001",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };
  
        HttpClient.instance = axios.create(config);
  
        HttpClient.instance.interceptors.response.use(
          (response: AxiosResponse) => response,
          (error: AxiosError) => {
            // Handle errors globally here
            return Promise.reject(error);
          }
        );
      }
    }
  
    public static get(url: string): Promise<AxiosResponse> {
      HttpClient.initInstance();
      return HttpClient.instance.get(url);
    }
  
    public static post(url: string, payload: object): Promise<AxiosResponse> {
      HttpClient.initInstance();
      return HttpClient.instance.post(url, payload);
    }
  
    public static patch(url: string, payload: object): Promise<AxiosResponse> {
      HttpClient.initInstance();
      return HttpClient.instance.patch(url, payload);
    }
  
    public static put(url: string, payload: object): Promise<AxiosResponse> {
      HttpClient.initInstance();
      return HttpClient.instance.put(url, payload);
    }
  
    public static delete(url: string): Promise<AxiosResponse> {
      HttpClient.initInstance();
      return HttpClient.instance.delete(url);
    }
  }
  