import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Importar AuthService
import { Router } from '@angular/router'; // Importar Router
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,  // Hacemos el componente standalone
  imports: [FormsModule, CommonModule] // Importamos FormsModule para ngModel
})
export class RegisterComponent {
  name: string = ''; // Definir las propiedades
  email: string = '';
  password: string = '';
  dob: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    // Llamamos al servicio de registro
    this.authService.register({
      name: this.name,
      email: this.email,
      password: this.password,
      dob: this.dob
    }).subscribe((response) => {
      // Tipar la respuesta para evitar el error de 'any'
      const authResponse = response as { token: string };  // Aquí puedes tipar la respuesta según lo que esperas

      // Guardamos el token en localStorage
      this.authService.setToken(authResponse.token);

      // Redirigimos a la página de login después de registrar
      this.router.navigate(['/login']);
    });
  }
}
