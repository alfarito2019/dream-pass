import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PhotoCarouselComponent } from '../photo-carousel/photo-carousel.component';
type NombrePlan = 'Ola Dorada' | 'Coral' | 'Brisa';

@Component({
  selector: 'app-planes',
  imports: [CommonModule, MatDialogModule,PhotoCarouselComponent],
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss'],
})
export class PlanesComponent {
  showPopup = false;

  constructor(private _matDialog: MatDialog) {}
  showModal = false;

  
  abrirModal() {
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
  }

  planSeleccionado: 'Ola Dorada' | 'Coral' | 'Brisa' = 'Ola Dorada';

  planes: Record<
    NombrePlan,
    { imagen: string; titulo: string; descripcion: string; carouselImages: string[]; }
  > = {
    'Ola Dorada': {
      imagen: './assets/img/planes/ola-dorada-portada.png',
      titulo: 'Haz de cada encuentro una tradición inolvidable',
      descripcion:
        'Este plan fue creado para quienes valoran lo más importante: el tiempo juntos, la tranquilidad merecida y la alegría de tener siempre un lugar al que volver.',

      carouselImages : [
    'assets/img/planes/ola-dorada-portada.png',
    'assets/img/planes/ola-dorada-portada.png',
    'assets/img/planes/ola-dorada-portada.png',
  ]


      },
    Coral: {
      imagen: './assets/img/planes/coral-portada.png',
      titulo: 'Conecta, descansa y comparte lo mejor de la vida junto al mar',
      descripcion:
        'Risas alrededor de la mesa y experiencias que se transforman en recuerdos inolvidables. El Plan Coral es para quienes entienden que la felicidad crece cuando se comparte.',

      carouselImages : [
    'assets/img/planes/coral-portada.png',
    'assets/img/planes/coral-portada.png',
    'assets/img/planes/coral-portada.png',
  ]
    },
    Brisa: {
      imagen: './assets/img/planes/brisa-portada.png',
      titulo: 'Tu descanso merece un lugar como este',
      descripcion:
        'Descubre la esencia de unas vacaciones sin complicaciones. Beneficios que te acompañan, experiencias que te relajan.',
      
      carouselImages : [
    'assets/img/planes/brisa-portada.png',
    'assets/img/planes/brisa-portada.png',
    'assets/img/planes/brisa-portada.png',
  ]
      
      },
  };

  roundPorPlan = {
    'Ola Dorada': '0 24px 24px 24px',
    Coral: '24px 24px 24px 24px',
    Brisa: '24px 0 24px 24px',
  };

  seleccionarPlan(plan: NombrePlan) {
    this.planSeleccionado = plan;
  }
}
