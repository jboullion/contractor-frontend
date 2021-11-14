import { IJob } from './Job';

export interface IAuthCredentials {
  email: string;
  password: string;
}

export interface IAuthRefreshCredentials {
  email: string;
  refreshToken: string;
}

export interface ISignInResponse {
  accessToken: string;
  refreshToken: string;
}

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
  email: string;
  status: UserStatus;
  jobs?: IJob[];
  createdAt: Date;
  updatedAt: Date;
}
