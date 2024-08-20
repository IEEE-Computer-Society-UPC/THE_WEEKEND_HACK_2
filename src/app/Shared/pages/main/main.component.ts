import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  objt='Objetivos';
  quienesSomos = 'Nuestro Equipo';
  metas = 'Metas';

  members = [
    {
      name: 'Luis Umiña',
      description: 'Estudiante de Ingeniería de Sistemas ',
      position: 'Presidente',
      image: 'assets/img/users/luis.jpeg'
    },
    {
      name: 'James Hurtado',
      description: 'Estudiante de Ingeniería de Sistemas',
      position: 'Vicepresidente',
      image: 'assets/img/users/james.jpeg'
    },
    {
      name: 'Tamara García',
      description: 'Estudiante de Ingeniería de Sistemas',
      position: 'Secretaria',
      image: 'assets/img/users/tami.jpeg'
    },
    {
      name:'Zidane Ayala',
      description: 'Estudiante de Ingeniería de Sistemas',
      position: 'Tesorero',
      image: 'assets/img/users/zidane.jpeg'
    },
    {
      name: 'Katherine Porras',
      description: 'Estudiante de Ingeniería de Sistemas',
      position: 'Web Master',
      image: 'assets/img/users/katy.jpeg'
    },
    {
      name: 'Lucero Obispo',
      description: 'Estudiante de Ingeniería de Sistemas',
      position: 'Coord. de Desarrollo y Ejecución de Actividades',
      image: 'assets/img/users/lucero.jpeg'
    },
    {
      name:'Claudia Sifuentes',
      description: 'Estudiante de Ingeniería de Sistemas',
      position: 'Coord. de Relaciones Públicas',
      image: 'assets/img/users/claudia.jpeg'
    },
    {
      name: 'Diego Defilippi',
      description: 'Estudiante de Ingeniería de Software',
      position: 'Coord. de Proyectos',
      image: 'assets/img/users/diego.jpeg'
    },
    {
      name:'Marcelo Poggi',
      description: 'Estudiante de Ingeniería de Sistemas',
      position: 'Coord. Estrategias en Redes Sociales',
      image: 'assets/img/users/marcelo.jpeg'
    },
    {
      name: 'Abraham Ayquipa',
      description: 'Estudiante de Ingeniería de Sistemas',
      position: 'Coord. de Comunicaciones Digitales',
      image: 'assets/img/users/abraham.jpeg'
    }
  ]
}
