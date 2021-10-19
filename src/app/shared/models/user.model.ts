export interface User {

  id?: number;

  email?: string;

  password?: string;

  phone?: string;

  active_sign?: boolean;

  verify_code?: string;

}

  export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    EXECUTOR = 'executor',
    MANAGER = 'manager',
    SUPERADMIN = 'superadmin'
  }

export enum UserStatus {
    blocked = 'blocked',
    pending = 'pending',
    active = 'active'
}