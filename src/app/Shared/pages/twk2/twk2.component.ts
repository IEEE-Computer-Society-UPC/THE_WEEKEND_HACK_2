import { Component } from '@angular/core';

@Component({
  selector: 'app-twk2',
  templateUrl: './twk2.component.html',
  styleUrls: ['./twk2.component.css']
})
export class TWK2Component {
  date = 'Agenda';
  twk2 = 'The WeekEnd Hack Edition I';
  exhibitors = 'Expositores';
  sponsors = 'Patrocinadores';
  members = [
    {
      name: 'Goblin Slayer',
      description: '',
      position: 'Ciberseguridad',
      image: 'assets/img/expositores/goblin.png'
    },
    {
      name: 'Gianpaul Custodio',
      description: '',
      position: 'El peligro de descargarte aplicaciones no oficiales "FREE"',
      image: 'assets/img/expositores/Jean.jpeg'
    },
    {
      name: 'Jesus Hurtado',
      description: '',
      position: 'Evolución de la Ciberseguridad luego del COVID-19',
      image: 'https://media.licdn.com/dms/image/C4E03AQEi_6sOhLn12g/profile-displayphoto-shrink_800_800/0/1558632041827?e=1725494400&v=beta&t=n8xCP3yRzUMfNivscsYyQLsg4spCsNlJ-vLJIqnO5ts',
    },
    {
      name: 'Christopher Díaz',
      description: '',
      position: 'Ciberseguridad en acción: una década de anécdotas y memes',
      image: 'https://media.licdn.com/dms/image/C4E03AQH6rIiANTPJDA/profile-displayphoto-shrink_200_200/0/1583619560802?e=1723680000&v=beta&t=_Fg9xFqG33h5yb8YOl6O_z1um80PBgySD3ozlLFv2j4',
    },{
      name: 'Sandra Tovar',
      description: '',
      position: 'Las Estrategias de un Ciberataque: Principales Actores y el Análisis de MITRE ATT&CK',
      image: 'assets/img/expositores/Sandra.jpeg',
    }
];
}
