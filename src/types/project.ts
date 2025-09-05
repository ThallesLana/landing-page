export enum ProjectStatus {
  COMPLETED = 'Concluído',
  IN_PROGRESS = 'Em Andamento',
  PLANNED = 'Planejado'
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
}
