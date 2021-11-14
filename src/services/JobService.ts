import { IJob, IJobCreate } from '../types/Job';
export interface IJobService {
  /**
   * Retrieves all jobs for current user
   */
  getMyJobs(token: string, query?: string): Promise<IJob[]>;

  /**
   * Retrieves all jobs for current user
   */
  createJob(token: string, data: IJobCreate): Promise<IJob>;
}

export default class JobService implements IJobService {
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
