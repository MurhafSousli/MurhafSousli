import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ProjectsStateModel } from './projects.model';
import {
  AddProject,
  AddProjectFailed,
  AddProjectSuccess,
  GetAllProjects,
  GetAllProjectsFailed,
  GetAllProjectsSuccess,
  GetProject,
  GetProjectFailed,
  GetProjectSuccess,
  RemoveProject,
  RemoveProjectFailed,
  RemoveProjectSuccess,
  UpdateProject,
  UpdateProjectFailed,
  UpdateProjectSuccess
} from './projects.actions';
import { ProjectsService } from './projects.service';

@State<ProjectsStateModel>({
  name: 'projects',
  defaults: {
    entities: null,
    selectedId: null,
    loading: false,
    error: null
  }
})
export class AuthState {

  constructor(private _projects: ProjectsService) {
  }

  @Action(GetAllProjects)
  getProject({patchState}: StateContext<ProjectsStateModel>, {payload}: any) {
    return this._projects.get(payload).pipe(
      tap(() => {
        patchState({
          entities: payload
        });
      })
    );
  }

  @Action(GetProject)
  getAllProjects({patchState}: StateContext<ProjectsStateModel>, {payload}: any) {
    return this._projects.getAll().pipe(
      tap(() => {
        patchState({
          entities: payload
        });
      })
    );
  }

  @Action(AddProject)
  addProject({patchState}: StateContext<ProjectsStateModel>, payload: any) {
    return this._projects.add(payload).pipe(
      tap(() => {
      })
    );
  }

  @Action(UpdateProject)
  updateProject({setState}: StateContext<ProjectsStateModel>, payload: any) {
    return this._projects.update(payload).pipe(
      tap(() => {
      })
    );
  }

  @Action(RemoveProject)
  removeProject({setState}: StateContext<ProjectsStateModel>, payload: any) {
    return this._projects.remove(payload).pipe(
      tap(() => {
      })
    );
  }

  @Action(GetProjectSuccess)
  getProjectSuccess({patchState}: StateContext<ProjectsStateModel>, payload: any) {
    patchState({
      entities: payload,
      loading: false,
      error: null
    });
  }

  @Action(GetAllProjectsSuccess)
  getAllProjectsSuccess({patchState}: StateContext<ProjectsStateModel>, payload: any) {
    patchState({
      entities: payload,
      loading: false,
      error: null
    });
  }

  @Action([AddProjectSuccess, UpdateProjectSuccess, RemoveProjectSuccess])
  projectsSuccess({patchState}: StateContext<ProjectsStateModel>, payload: any) {
    patchState({
      entities: payload,
      loading: false,
      error: null
    });
  }

  @Action(GetProjectFailed)
  getProjectFailed({patchState}: StateContext<ProjectsStateModel>, {error}: any) {
    patchState({
      loading: false,
      error: error
    });
  }

  @Action(GetAllProjectsFailed)
  getAllProjectsFailed({patchState}: StateContext<ProjectsStateModel>, {error}: any) {
    patchState({
      loading: false,
      error: error
    });
  }

  @Action([AddProjectFailed, UpdateProjectFailed, RemoveProjectFailed])
  projectFailed({patchState}: StateContext<ProjectsStateModel>, {error}: any) {
    patchState({
      loading: false,
      error: error
    });
  }
}
