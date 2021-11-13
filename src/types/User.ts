import { IJob } from './Job';

export enum UserStatus {
  UNACTIVATED = 'UNACTIVATED',
  ACTIVATED = 'ACTIVATED',
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  DISABLED = 'DISABLED',
  BANNED = 'BANNED',
}

export interface User {
  id: number;
  username: string;
  status: UserStatus;
  jobs?: IJob[];
  createdAt: Date;
  updatedAt: Date;
}
