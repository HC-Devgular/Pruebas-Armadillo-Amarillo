import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthResponse } from '../models/auth-response.interface';  // Importamos la interfaz

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Simulación de registro con la interfaz AuthResponse
  register(userData: any): Observable<AuthResponse> {
    const simulatedResponse: AuthResponse = {
      token: 'simulated_token_123456',  // Token simulado
      user: userData  // Datos del usuario registrado
    };
    return of(simulatedResponse);  // Simulamos la respuesta como un Observable
  }

  // Simulación de login con la interfaz AuthResponse
  login(credentials: any): Observable<AuthResponse> {
    // Simulamos la respuesta de login con datos por defecto para los campos faltantes
    const simulatedResponse: AuthResponse = {
      token: 'simulated_token_123456',  // Token simulado
      user: {
        name: 'Default Name',  // Valor por defecto para 'name'
        email: credentials.email,  // Email proporcionado
        password: 'default_password',  // Valor por defecto para 'password'
        dob: '2000-01-01'  // Valor por defecto para 'dob'
      }
    };
    return of(simulatedResponse);  // Simulamos la respuesta como un Observable
  }

  // Métodos para guardar, obtener y eliminar el token
  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }
}
