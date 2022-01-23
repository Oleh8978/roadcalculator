interface IHostEnv {
    GOOGLE_API_SERVICE_HOST: string;
    GOOGLE_API_SERVICE_PATH: string;
    GOOGLE_API_SERVICE_PATH_LNG_LAT: string;
    OSRM_API_PATH: string;
    GOOGLE_GEO_API_KEY: string;
  }
  
  export class Config {
    public static init(env: IHostEnv) {
      this.GOOGLE_API_SERVICE_HOST = env.GOOGLE_API_SERVICE_HOST;
      this.GOOGLE_API_SERVICE_PATH = env.GOOGLE_API_SERVICE_PATH;
      this.GOOGLE_API_SERVICE_PATH_LNG_LAT = env.GOOGLE_API_SERVICE_PATH_LNG_LAT;
      this.OSRM_API_PATH = env.OSRM_API_PATH;
      this.GOOGLE_GEO_API_KEY = env.GOOGLE_GEO_API_KEY;
    }
  
    public static GOOGLE_API_SERVICE_HOST: string;
    public static GOOGLE_API_SERVICE_PATH: string;
    public static GOOGLE_API_SERVICE_PATH_LNG_LAT: string;
    public static OSRM_API_PATH: string;
    public static GOOGLE_GEO_API_KEY: string;
    
    public static get GOOGLE_API_KEY() {
      return this.GOOGLE_GEO_API_KEY;
    }

    public static get OSRM_API_ENDPOINT() {
      return this.OSRM_API_PATH
    }
  
    public static get GOOGLE_SELECT_SEARCH_ENDPOINT() {
      return `${this.GOOGLE_API_SERVICE_HOST}${this.GOOGLE_API_SERVICE_PATH}`;
    };

  }
  