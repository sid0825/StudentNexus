export interface IUserResponse {
    user: IUser;
  }
  
  export interface IPageState {
    data: IUserResponse | undefined;
    loading: boolean;
    error?: string;
  }
  export interface IUser {
    user(user: any): string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    previousEducation: string[];
    listings: string[];
    preferences: {
      rent: number;
      dietary: string;
      spotType: string;
      smoking: string;
      drinking: string;
      beds: number;
      baths: number;
      laundry: string;
      pet: string;
      distance: number;
      rentInclude: string[];
      features: string[];
    };
    _id: string;
    createdAt: string;
    updatedAt: string;
    resetToken: {
      token: number;
    };
    aboutMe: string;
    homeTown: string;
    intake: string;
    major: string;
    phone: string;
    photo: string;
    university: {
      _id: string;
      name: string;
      location: string;
      domain: string;
    };
    workExperience: string;
  }
  