import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-objetives',
  templateUrl: './objetives.component.html',
  styleUrls: ['./objetives.component.css']
})
export class ObjetivesComponent {
  objetives = [
    {
      name: 'Educar y Capacitar',
      description: 'Proporcionar a los participantes conocimientos prácticos y habilidades en ',
      image: 'assets/img/educar.png'
    },
    {
      name:'Fomentar el Interés en Ciberseguridad',
      description: 'Motivar a estudiantes y entusiastas a explorar y considerar carreras en ' +
        'ciberseguridad a través de experiencias prácticas y conferencias informativas.',
      image: 'assets/img/fomentar.png'
    },
    {
      name: 'Crear Conexiones y Comunidad',
      description: 'Facilitar un espacio para el intercambio de conocimientos y la creación de ' +
        'redes entre participantes.',
      image: 'assets/img/connexion.png'
    }
  ]
}
