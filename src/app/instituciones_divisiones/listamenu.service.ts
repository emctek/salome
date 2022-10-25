import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListamenuService {

  listamenu = [
    {
      id: 1,
      opcion: 'Nueva Institucion',
      com: 'altas-in-di/Menu'

    },
    {
      id: 2,
      opcion: 'Nueva Division',
      com: '<app-nuevadivision></app-nuevadivision>'

    },
    {
      id: 3,
      opcion: 'Asignar Division',
      com: '<app-nuevainstitucion></app-nuevainstitucion>'

    },
    {
      id: 4,
      opcion: 'Modificar/Eliminar Institucion',
      com: '<app-nuevainstitucion></app-nuevainstitucion>'

    },
    {
      id: 5,
      opcion: 'Modificar/Eliminar Division',
      com: '<app-nuevainstitucion></app-nuevainstitucion>'

    },
    {
      id: 6,
      opcion: 'Modificar/Eliminar Asignacion de Division',
      com: '<app-nuevainstitucion></app-nuevainstitucion>'

    },
    {
      id: 7,
      opcion: 'Consultas',
      com: '<app-nuevainstitucion></app-nuevainstitucion>'
    },
  ];

  constructor() {}

  obtenerlistamenu() {
    return this.listamenu;
  }
}
