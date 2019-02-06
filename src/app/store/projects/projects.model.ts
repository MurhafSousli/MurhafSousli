export class ProjectsStateModel {
  entities: Map<string, Project>;
  selectedId: string;
  loading: boolean;
  error: Error;
}

export interface Project {
  uid: string;
  title: string;
  content: string;
  createdAt: Date;
  modifiedAt: Date;
  coverPhoto: string;
}
