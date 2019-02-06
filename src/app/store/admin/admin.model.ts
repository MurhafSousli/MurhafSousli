export interface Info {
  displayName?: string;
  email?: string;
  map?: string;
  bio?: string;
  photoUrl?: string;
  primaryColor?: string;
}

export interface AdminStateModel {
  error: Error;
  loading: boolean;
  info: Info;
  infoForm: any;
}
