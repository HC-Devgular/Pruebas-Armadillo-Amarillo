import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Importar AuthService
import { Router } from '@angular/router'; // Importar Router
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
   // Simulamos la llamada al servicio de login
   this.authService.login({ email: this.email, password: this.password }).subscribe(response => {
    // Almacenamos el token simulado en localStorage
    this.authService.setToken(response.token);
    // Redirigimos al usuario a la pantalla de películas (movies-list)
    this.router.navigate(['/movies']);
  });
  }
}
