export type User = {
  email: string | null;
  name: string | null;
  token: string | null;
};

export type LoginResponse = {
  status: 'success' | 'error';
  msg: string;
  field: 'email' | 'password' | null;
};
