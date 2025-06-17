import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss'],
})
export class PhotoCarouselComponent {
  /** URLs de las imágenes a mostrar */
  @Input() images: string[] = [];

  /** Índice del slide actualmente visible */
  currentIndex = 0;

  /** Ir al slide anterior */
  prev() {
    if (this.images.length > 0) {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }

  /** Ir al siguiente slide */
  next() {
    if (this.images.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }

  /** Ir a un slide concreto */
  goTo(index: number) {
    if (index >= 0 && index < this.images.length) {
      this.currentIndex = index;
    }
  }
}
