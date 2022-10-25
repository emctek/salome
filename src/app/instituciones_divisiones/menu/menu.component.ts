import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListamenuService } from '../listamenu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  listamenu = [];
  titulo: string;
  componente: string;

  constructor(private  opciones: ListamenuService, private router: Router) { }



  ngOnInit() {
    this.listamenu = this.opciones.obtenerlistamenu();
  }


  valores(opcion: string, com: string){

    this.titulo = opcion;
    this.componente = com;


      }

      onClick(com: string){

        this.router.navigate([com]);
      }

}
