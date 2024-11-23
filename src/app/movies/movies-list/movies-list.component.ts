import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MoviesListComponent implements OnInit {
  nowPlaying: any[] = [];
  popular: any[] = [];
  movieDetails: any = null;  // Almacenamos los detalles de la película seleccionada

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    // Cargamos las películas en cartelera
    this.moviesService.getNowPlaying().subscribe(data => {
      this.nowPlaying = data.results;
    });

    // Cargamos las películas populares
    this.moviesService.getPopular().subscribe(data => {
      this.popular = data.results;
    });
  }

  // Mostrar detalles de la película cuando el ratón se pone sobre la imagen
  showMovieDetails(movieId: number) {
    this.moviesService.getCredits(movieId).subscribe(data => {
      this.movieDetails = data;  // Guardamos los detalles de la película
    });
  }

  // Sincronizar datos
  syncData() {
    console.log("Sincronizando datos...");
  }
    // Cerrar sesión y redirigir a login
    logout() {
      localStorage.removeItem('auth_token');  // Eliminamos el token del almacenamiento
      this.router.navigate(['/login']);  // Redirigimos a la página de login
    }

}

