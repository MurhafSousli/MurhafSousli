import { combineReducers } from 'redux';
import { dataReducer, IAppData } from './data.reducer';
import {IResumeData, ResumeDataReducer} from "./resume-data.reducer";

export interface IAppState {
  appData?: IAppData;
  resumeData?: IResumeData;
};

export const rootReducer = combineReducers<IAppState>({
  appData: dataReducer,
  resumeData: ResumeDataReducer,
});
