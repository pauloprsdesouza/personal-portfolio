export interface ProjectModel {
    name: string;
    image: string
    github: string
}

export type ProjectsModel = Array<ProjectModel>;