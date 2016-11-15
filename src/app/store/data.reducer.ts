import { ActionReducer, Action } from '@ngrx/store';

export interface IAppData {
  name: string
  profilePic: string,
  logo: string,
  titles: string[],
  menu: any[],
  social: any[]
}

const INITIAL_STATE = {};

export const dataReducer: ActionReducer<IAppData> = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return action.payload || state;
  }
};
