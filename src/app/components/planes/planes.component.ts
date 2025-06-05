import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
type NombrePlan = 'Ola Dorada' | 'Coral' | 'Brisa';


@Component({
  standalone: true,
  selector: 'app-planes',
  imports: [CommonModule],
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent {
  planSeleccionado: 'Ola Dorada' | 'Coral' | 'Brisa' = 'Ola Dorada';

  planes: Record<NombrePlan, { imagen: string; titulo: string; descripcion: string }> = {
    'Ola Dorada': {
      imagen: './assets/img/planes/ola-dorada-portada.png',
      titulo: 'Haz de cada encuentro una tradición inolvidable',
      descripcion: 'Este plan fue creado para quienes valoran lo más importante: el tiempo juntos, la tranquilidad merecida y la alegría de tener siempre un lugar al que volver.'
    },
    'Coral': {
      imagen: './assets/img/planes/coral-portada.png',
      titulo: 'Sumérgete en la experiencia Coral',
      descripcion: 'Un plan ideal para quienes buscan relax, elegancia y atención exclusiva junto al mar.'
    },
    'Brisa': {
      imagen: './assets/img/planes/brisa-portada.png',
      titulo: 'Conecta, descansa y comparte lo mejor de la vida junto al mar',
      descripcion: 'Risas alrededor de la mesa y experiencias que se transforman en recuerdos inolvidables. El Plan Coral es para quienes entienden que la felicidad crece cuando se comparte.'
    }
  };

  roundPorPlan = {
    'Ola Dorada': '0 24px 24px 24px',
    'Coral': '24px 24px 24px 24px',
    'Brisa': '24px 0 24px 24px'
  };

  seleccionarPlan(plan: NombrePlan) {
    this.planSeleccionado = plan;
  }
}
