export interface LoginUser {
    email: string;
    id: number;
    first_name: string;
    last_name: string;
    patronymic: string;
  }

  export class Person {
    constructor(public email: string,
        public id: number,
        public first_name: string,
        public last_name: string,
        public patronymic: string) {}
    }