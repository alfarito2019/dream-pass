import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PhotoCarouselComponent } from '../photo-carousel/photo-carousel.component';
import { FormularioComponent } from '../formulario/formulario.component';
type NombrePlan = 'Ola Dorada' | 'Coral' | 'Brisa';

@Component({
  selector: 'app-planes',
  imports: [CommonModule, MatDialogModule,PhotoCarouselComponent,FormularioComponent],
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

  seleccionarPlan(plan: NombrePlan) {
    this.planSeleccionado = plan;
  }

  abrirMaqueta() {
    
  }

  planSeleccionado: 'Ola Dorada' | 'Coral' | 'Brisa' = 'Ola Dorada';

  planes: Record<
    NombrePlan,
    { imagen: string; titulo: string; descripcion: string; carouselImages: string[]; descripcion2: string, beneficios: string[] }
  > = {
    'Ola Dorada': {
      imagen: './assets/img/planes/ola-dorada-portada.png',
      titulo: 'Haz de cada encuentro una tradición inolvidable',
      descripcion:
        'Este plan fue creado para quienes valoran lo más importante: el tiempo juntos, la tranquilidad merecida y la alegría de tener siempre un lugar al que volver.',

      carouselImages : [
    'assets/img/carrusel/ola-1.png',
    'assets/img/carrusel/ola-2.png',
    'assets/img/carrusel/ola-3.png',
  ], 

  descripcion2: 'El plan Ola Dorada es una invitación a vivir el lujo sin límites y a descubrir destinos de forma privilegiada, compartiendo momentos inolvidables con quienes más amas.',
      beneficios: [
        '15 % de descuento para disfrutar de la mejor gastronomía del hotel. ',
        '15% menos en sesiones fotográficas con Infinity Photos, para capturar los momentos más memorables de tu viaje. ',
        '20% de descuento para disfrutar de tratamientos exclusivos en nuestro spa, diseñados para tu descanso y bienestar.',
        '20% menos en los planes turísticos que elijas con ZuAgencia.  ',
        'Viaja con descuentos exclusivos en tiquetes áereos con Avianca. ',
        'Disfruta de noches gratis en hoteles alidados cada dos años. ',
        'Accede a un asistente personal durante toda tu estadía: te ayudará a planear tu día, atenderá tus preferencias personales y resoverá imprevistos al instante.    ',
        'Sumérgete en clases de buceo en las paradisíacas playas de Taganga y Playa Granate.  ',
        'Vive una cena íntima diseñada para ti y tus seres queridos, en un ambeinte inolvidable. ',
      ],


      },
    Coral: {
      imagen: './assets/img/planes/coral-portada.png',
      titulo: 'Conecta, descansa y comparte lo mejor de la vida junto al mar',
      descripcion:
        'Risas alrededor de la mesa y experiencias que se transforman en recuerdos inolvidables. El Plan Coral es para quienes entienden que la felicidad crece cuando se comparte.',

      carouselImages : [
    'assets/img/carrusel/coral-1.png',
    'assets/img/carrusel/coral-2.png',
    'assets/img/carrusel/coral-3.png',
  ], 

  descripcion2: 'El plan Coral combina descanso con estilo y experiencias memorables para disfrutar junto a tus amigos o en familia. ',
      beneficios: [
        '10% de descuento para disfrutar de la mejor gastronomía del hotel.  ',
        '10% menos en sesiones fotográficas con Infinity Photos, para capturar los momentos más memorables de tu viaje. ',
        '15% de descuento para disfrutar de tratamientos exclusivos en el spa, diseñados para tu descanso y bienestar.',
        '15% menos en los planes turísticos que elijas con ZuAgencia.',
        'Acumula noches gratis cada dos años y redímelas en nuestro hotel. ¡Tú decides cuándo usarlas!',
        'Recibe un bono de compras de $xxxxx para usar en el supermercado del hotel.',
        'Participa en clases exclusivas de yoga frente al mar y siente toda la relajación que te ofrece la playa.'
      ],



    },
    Brisa: {
      imagen: './assets/img/planes/brisa-portada.png',
      titulo: 'Tu descanso merece un lugar como este',
      descripcion:
        'Descubre la esencia de unas vacaciones sin complicaciones. Beneficios que te acompañan, experiencias que te relajan.',
      
      carouselImages : [
    'assets/img/carrusel/brisa-1.png',
    'assets/img/carrusel/brisa-2.png',
    'assets/img/carrusel/brisa-3.png',
  ], 

  descripcion2: 'El Plan Brisa está pensado para quienes valoran los pequeños grandes placeres del viaje, combinando beneficios exclusivos disfrutando sin complicaciones.',
      beneficios: [
        '5% de descuento en sesiones fotográficas con Infinity Photos, para capturar los momentos más memorables de tu viaje. ',
        '10% en los planes turísticos que elijas con ZuAgencia. ',
        '10% de descuento para disfrutar de tratamientos exclusivos en el spa,  diseñados para tu descanso y bienestar. ',
        'Usa tus puntos de fidelidad para acceder a zonas exclusivas del resort y vivir experiencias reservadas para los huéspedes más especiales.',
        'Disfruta del servicio exclusivo de organización de eventos en el hotel, ideal para celebraciones íntimas, reuniones familiares o encuentros especiales. ',
        'Accede libremente a todas las zonas comunes del hotel y vive la experiencia completa: piscinas, terrazas, lounges y más, sin restricciones.'
      ],

      
      },
  };

  roundPorPlan = {
    'Ola Dorada': '0 24px 24px 24px',
    Coral: '24px 24px 24px 24px',
    Brisa: '24px 0 24px 24px',
  };

  
}
