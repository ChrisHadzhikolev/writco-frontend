export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  username: string;
}

export interface AuthUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
  role?: string;
  restricted: boolean;
}
