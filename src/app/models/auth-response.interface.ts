// src/app/models/auth-response.interface.ts

export interface AuthResponse {
  token: string;
  user: {
    name: string;
    email: string;
    password: string;
    dob: string;
  };
}
