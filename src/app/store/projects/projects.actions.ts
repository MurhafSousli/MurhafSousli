import { Project } from './projects.model';

export class GetAllProjects {
  static readonly type = '[Projects] Get All Projects';
}

export class GetAllProjectsSuccess {
  static readonly type = '[Projects] Get All Projects Success';

  constructor(public projects: Project[]) {
  }
}

export class GetAllProjectsFailed {
  static readonly type = '[Projects] Get All Projects Failed';

  constructor(public error: Error) {
  }
}

export class GetProject {
  static readonly type = '[Projects] Get Project';
}

export class GetProjectSuccess {
  static readonly type = '[Projects] Get Project Success';

  constructor(public projects: Project[]) {
  }
}

export class GetProjectFailed {
  static readonly type = '[Projects] Get Project Failed';

  constructor(public error: Error) {
  }
}

export class AddProject {
  static readonly type = '[Projects] Add Project';
}

export class AddProjectSuccess {
  static readonly type = '[Projects] Add Project Success';

  constructor(public projects: Project[]) {
  }
}

export class AddProjectFailed {
  static readonly type = '[Projects] Add Project Failed';

  constructor(public error: Error) {
  }
}

export class RemoveProject {
  static readonly type = '[Projects] Remove Project';
}

export class RemoveProjectSuccess {
  static readonly type = '[Projects] Remove Project Success';

  constructor(public projects: Project[]) {
  }
}

export class RemoveProjectFailed {
  static readonly type = '[Projects] Remove Project Failed';

  constructor(public error: Error) {
  }
}

export class UpdateProject {
  static readonly type = '[Projects] Update Project';

  constructor(payload: any) {
  }
}

export class UpdateProjectSuccess {
  static readonly type = '[Projects] Update Project Success';

  constructor(public projects: Project[]) {
  }
}

export class UpdateProjectFailed {
  static readonly type = '[Projects] Update Project Failed';

  constructor(public error: Error) {
  }
}


