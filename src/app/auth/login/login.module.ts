import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, // Asegurarse de que CommonModule esté importado
    FormsModule   // Asegurarse de que FormsModule esté importado si usas ngModel
  ],
  exports: [

  ]
})
export class LoginModule { }
