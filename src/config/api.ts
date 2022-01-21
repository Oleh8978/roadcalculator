interface IHostEnv {
    MAIN_SERVICE_HOST: string;
    AUTH_SERVICE_HOST: string;
    HISTORY_SERVICE_HOST: string;
    WS_API_HOST: string;
    GOOGLE_GEO_API_KEY: string;
  }
  
  export class Config {
    public static init(env: IHostEnv) {
      this.WS_API_HOST = env.WS_API_HOST;
      this.MAIN_SERVICE_HOST = env.MAIN_SERVICE_HOST;
      this.AUTH_SERVICE_HOST = env.AUTH_SERVICE_HOST;
      this.GOOGLE_GEO_API_KEY = env.GOOGLE_GEO_API_KEY;
      this.HISTORY_SERVICE_HOST = env.HISTORY_SERVICE_HOST;
    }
  
    // General
    public static MAIN_SERVICE_HOST: string;
    public static AUTH_SERVICE_HOST: string;
    public static HISTORY_SERVICE_HOST: string;
    public static WS_API_HOST: string;
    public static GOOGLE_GEO_API_KEY: string;
  
    public static API_PREFIX = "api/v1";
  
    public static get GOOGLE_API_KEY() {
      return this.GOOGLE_GEO_API_KEY;
    }
  
    public static get MAIN_SERVICE_ENDPOINT() {
      return `${this.MAIN_SERVICE_HOST}/`;
    };
  
    public static get AUTH_SERVICE_ENDPOINT() {
      return `${this.AUTH_SERVICE_HOST}/auth/`;
    };
  
    public static get HISTORY_SERVICE_ENDPOINT() {
      return `${this.HISTORY_SERVICE_HOST}/`;
    };
    public static get WS_ENDPOINT() { return `${Config.WS_API_HOST}`; };
  }
  
  export enum SocketEventEnum {
    // UpdateEvent = 'UpdateEvent',
  }
  
  export enum DevicePlatformEnum {
    IOS = 'ios',
    Android = 'android',
    Web = 'web',
  }