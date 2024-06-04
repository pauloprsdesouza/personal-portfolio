export interface ProjectModel {
    name: string;
    image: string
    github: string,
    liveDemoLink: string
}

export type ProjectsModel = Array<ProjectModel>;