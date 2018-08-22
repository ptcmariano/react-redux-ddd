/* @flow */
export type User = {
  email: string,
  token: string,
  username: string,
  bio: string,
  image: ?string
};

export type UserAuthInfo = {
  username?: string,
  email?: string,
  password?: ?string
};

export type UserRepository = {
  byAuthInfo: (UserAuthInfo) => Promise<User>,
  add: (UserAuthInfo) => Promise<User>
};

export type WithCurrentUser = {
  currentUser: ?User
};
