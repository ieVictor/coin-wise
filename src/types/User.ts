export type User = {
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
};

export type LoginResponse_CODES =
  | 'INVALID_CREDENTIALS'
  | 'VALIDATION_ERROR'
  | 'SUCCESS'
  | 'UNKNOWN_ERROR';

export type LoginResponse = {
  success: boolean;
  message: string;
  accessToken?: string;
  code?: LoginResponse_CODES;
  user?: User;
  errors?: {
    email: string | null;
    password: string | null;
  };
};
