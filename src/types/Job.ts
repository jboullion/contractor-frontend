import { User } from './Auth';

export enum JobStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface IJob {
  id: number;
  uuid: string;
  title: string;
  description: string;
  status: JobStatus;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface IJobResponse {
  data?: IJob[];
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface IJobCreate {
  title: string;
  description?: string;
}
