// TODO: CREATE A JOBS SERVICE!!
// https://www.youtube.com/watch?v=-BYZAO99UVA
// import http from './http-common';

import { IJob, IJobCreate } from '../types/Job';

export interface IJobsService {
  /**
   * Retrieves all jobs for current user
   */
  getMyJobs(token: string, query?: string): Promise<IJob[]>;

  /**
   * Retrieves all jobs for current user
   */
  createJob(token: string, data: IJobCreate): Promise<IJob>;
}

export default class JobService {
  constructor(private _axios: any) {}

  private setHeaders(token: string) {
    return {
      headers: { Authorization: `Bearer ${token}` },
    };
  }

  async getMyJobs(token: string, query?: string): Promise<IJob[]> {
    const res = await this._axios.get(`/jobs?${query}`, this.setHeaders(token));
    return res.data;
  }

  async createJob(token: string, data: IJobCreate): Promise<IJob> {
    const res = await this._axios.post(`/jobs`, data, this.setHeaders(token));
    return res.data;
  }
}
