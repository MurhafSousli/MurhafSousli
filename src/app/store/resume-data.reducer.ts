export interface IResumeData {
  summary: string
  skills: any,
  workflow: any,
  education: any,
  experiences: any
}

const INITIAL_STATE = {};

export function ResumeDataReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    default:
      return action.payload|| state;
  }
}
