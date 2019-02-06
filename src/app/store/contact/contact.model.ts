export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ContactStateModel {
  submitted: boolean;
  loading: boolean;
  error: any;
}
