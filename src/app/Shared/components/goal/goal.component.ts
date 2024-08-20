import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  goals = [
    {
      name: 'Aumentar el Reconocimiento',
      description: 'Utilizar el evento como plataforma para aumentar la visibilidad y reputación del' +
        ' capítulo estudiantil tanto a nivel local como internacional.',
      image: 'assets/img/increase.png'
    },
    {
      name:'Crecimiento en Redes Sociales',
      description: 'Aumentar el número de seguidores y participantes en las redes sociales del capítulo estudiantil,' +
        ' involucrando a la audiencia con contenido relevante y atractivo.',
      image: 'assets/img/grow.png'
    },
    {
      name: 'Fomentar la membresía en IEEE',
      description: 'Promover la membresía de Computer Society IEEE entre los participantes del evento, resaltando los' +
        ' beneficios y oportunidades que ofrece la membresía.',
      image: 'assets/img/membership.png'
    }
  ]
}
