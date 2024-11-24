import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // Simulación de datos para 'now_playing' y 'popular'
  private nowPlayingData = {
    results: [
      {
        id: 1,  // Asignamos un ID único para cada película
        title: 'Gladiator 2',
        poster_path: 'https://pics.filmaffinity.com/Gladiator_II-152686913-large.jpg',  // Imagen disponible
        description: 'La continuación épica de Gladiator con nuevas batallas y aventura.',
        cast: [
          { name: 'Russell Crowe', character: 'Maximus Decimus Meridius' },
          { name: 'Joaquin Phoenix', character: 'Commodus' }
        ]
      },
      {
        id: 2,  // Asignamos un ID único
        title: 'Robot salvaje',
        poster_path: 'https://movies.universalpictures.com/media/thewildrobot-poster-66686a8d0fd04-1.jpg',
        description: 'Una historia futurista donde los robots cobran vida.',
        cast: [
          { name: 'Will Smith', character: 'Detective Del Spooner' },
          { name: 'Eva Mendes', character: 'Susan Calvin' }
        ]
      },
      {
        id: 3,  // Asignamos un ID único
        title: 'Moana 2',
        poster_path: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRBulekkIqapPs5_QbHNG2G1zYTMYUftSOFglrjbvnCVTqKOm0', // Imagen disponible
        description: 'La aventura continúa en el océano con Moana y Maui.',
        cast: [
          { name: 'Auli\'i Cravalho', character: 'Moana' },
          { name: 'Dwayne Johnson', character: 'Maui' }
        ]
      },
      {
        id: 4,  // Asignamos un ID único
        title: 'Traje Rojo',
        poster_path: 'https://archivos-cms.cinecolombia.com/images/1/3/6/8/68631-1-esl-CO/ebc3eef33715-warner_redone_cinecol_480x670.jpg',  // Imagen proporcionada
        description: 'Un superhéroe con traje rojo combate el crimen en la ciudad.',
        cast: [
          { name: 'Ryan Reynolds', character: 'Red Suit Man' },
          { name: 'Emma Stone', character: 'Partner' }
        ]
      },
      {
        id: 5,  // Asignamos un ID único para cada película
        title: 'Gladiator 2',
        poster_path: 'https://pics.filmaffinity.com/Gladiator_II-152686913-large.jpg',  // Imagen disponible
        description: 'La continuación épica de Gladiator con nuevas batallas y aventura.',
        cast: [
          { name: 'Russell Crowe', character: 'Maximus Decimus Meridius' },
          { name: 'Joaquin Phoenix', character: 'Commodus' }
        ]
      },
      {
        id: 6,  // Asignamos un ID único
        title: 'Robot salvaje',
        poster_path: 'https://movies.universalpictures.com/media/thewildrobot-poster-66686a8d0fd04-1.jpg',
        description: 'Una historia futurista donde los robots cobran vida.',
        cast: [
          { name: 'Will Smith', character: 'Detective Del Spooner' },
          { name: 'Eva Mendes', character: 'Susan Calvin' }
        ]
      },
    ]
  };

  private popularData = {
    results: [
      {
        id: 5,  // Asignamos un ID único
        title: 'Popular Movie 1',
        poster_path: 'https://archivos-cms.cinecolombia.com/images/1/3/6/8/68631-1-esl-CO/ebc3eef33715-warner_redone_cinecol_480x670.jpg',
        description: 'Película popular del momento con acción ininterrumpida.',
        cast: [
          { name: 'Actor 1', character: 'Hero' },
          { name: 'Actor 2', character: 'Villain' }
        ]
      },
      {
        id: 6,  // Asignamos un ID único
        title: 'Popular Movie 2',
        poster_path: 'https://movies.universalpictures.com/media/thewildrobot-poster-66686a8d0fd04-1.jpg',
        description: 'Película de aventuras en un mundo fantástico.',
        cast: [
          { name: 'Actor 3', character: 'Explorer' },
          { name: 'Actor 4', character: 'Guide' }
        ]
      },
      {
        id: 7,  // Asignamos un ID único
        title: 'Popular Movie 3',
        poster_path: 'https://pics.filmaffinity.com/Gladiator_II-152686913-large.jpg',
        description: 'La lucha por el poder entre gladiadores.',
        cast: [
          { name: 'Russell Crowe', character: 'Maximus' },
          { name: 'Joaquin Phoenix', character: 'Emperor Commodus' }
        ]
      },
      {
        id: 8,  // Asignamos un ID único
        title: 'Popular Movie 4',
        poster_path: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRBulekkIqapPs5_QbHNG2G1zYTMYUftSOFglrjbvnCVTqKOm0',
        description: 'Nueva aventura en el océano con el regreso de Moana.',
        cast: [
          { name: 'Auli\'i Cravalho', character: 'Moana' },
          { name: 'Dwayne Johnson', character: 'Maui' }
        ]
      }
    ]
  };

  constructor() {}

  // Simula la respuesta de la API para las películas en cartelera
  getNowPlaying(): Observable<any> {
    return of(this.nowPlayingData);  // Retorna los datos simulados de películas en cartelera
  }

  // Simula la respuesta de la API para las películas populares
  getPopular(): Observable<any> {
    return of(this.popularData);  // Retorna los datos simulados de películas populares
  }

  // Simula la respuesta para obtener los créditos de una película
  getCredits(movieId: number): Observable<any> {
    return of(this.nowPlayingData.results.find(movie => movie.id === movieId) || this.popularData.results.find(movie => movie.id === movieId));
  }
}
