export interface AuthStateModel {
  loggedIn: boolean;
  loading: boolean;
  loginForm: any;
}

export interface AuthForm {
  email: string;
  password: string;
}
