import { IJob, IJobCreate } from '../types/Job';
import store from '../store';
export interface IJobService {
  /**
   * Retrieves all jobs for current user
   */
  getMyJobs(query?: string): Promise<IJob[]>;

  /**
   * Get Siingle ID
   */
  getJob(uuid: string): Promise<IJob>;

  /**
   * Retrieves all jobs for current user
   */
  createJob(data: IJobCreate): Promise<IJob>;
}

export default class JobService implements IJobService {
  constructor(private _axios: any) {}

  private setHeaders() {
    return {
      headers: { Authorization: `Bearer ${store.getters.jwt}` },
    };
  }

  async getMyJobs(query?: string): Promise<IJob[]> {
    const res = await this._axios.get(`/jobs?${query}`, this.setHeaders());
    return res.data;
  }

  async getJob(uuid: string): Promise<IJob> {
    const res = await this._axios.get(`/jobs/${uuid}`, this.setHeaders());
    return res.data;
  }

  async createJob(data: IJobCreate): Promise<IJob> {
    const res = await this._axios.post(`/jobs`, data, this.setHeaders());
    return res.data;
  }
}
