export interface IRegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  export interface IRegisterResponseShort {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    _id: string;
  }
  
  export interface IRegisterResponse {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    previousEducation: any[];
    listings: any[];
    preferences: {
      rentInclude: string[];
      features: any[];
    };
    _id: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface IRegisterPageState {
    data?: IRegisterResponse;
    loading: boolean;
    error?: string;
  }
  