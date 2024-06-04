export interface ExperienceModel {
    type: 'frontend' | 'backend' | 'infra';
    stack: string;
    level: string
}

export type ExperiencesModel = Array<ExperienceModel>;