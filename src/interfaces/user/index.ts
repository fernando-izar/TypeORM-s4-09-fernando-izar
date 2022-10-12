export interface ICreateUser {
  email: string;
  name: string;
  age: number;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

// export interface IUserListOne {
//   authorization?: string;
// }
