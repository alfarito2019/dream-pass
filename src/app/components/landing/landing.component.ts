import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('tarjetasHorizontal') tarjetasHorizontalRef!: ElementRef;
  showRightScrollButton: boolean = false;
  showLeftScrollButton: boolean = true;
  private cardWidth: number = 0;
  private scrollPosition: number = 0;
  private totalScrollableWidth: number = 0;
  private totalCardsWidth: number = 0;
  private containerWidth: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const container = this.tarjetasHorizontalRef.nativeElement;
    const cards = container.querySelectorAll('.tarjeta-motivos');
    if (cards.length > 0) {
      let totalWidth = 0;
      cards.forEach((card: Element) => {
        if (card instanceof HTMLElement) {
          totalWidth += card.offsetWidth;
        }
      });
      this.totalCardsWidth = totalWidth;
      this.containerWidth = container.offsetWidth;
      this.totalScrollableWidth = this.totalCardsWidth - this.containerWidth;
      this.calculateCardWidth();
      this.checkScrollPosition();
    } else {
      console.warn('No se encontraron tarjetas.');
    }
  }

  private calculateCardWidth(): void {
    const container = this.tarjetasHorizontalRef.nativeElement;
    const firstCard = container.querySelector('.tarjeta-motivos');
    if (firstCard instanceof HTMLElement) {
      this.cardWidth = firstCard.offsetWidth + parseFloat(getComputedStyle(firstCard).marginRight || '0') + parseFloat(getComputedStyle(container).gap || '0');
    }
  }

  scrollToNextSection(): void {
    if (this.tarjetasHorizontalRef) {
      const container = this.tarjetasHorizontalRef.nativeElement;
      this.scrollPosition += this.cardWidth;
      container.scrollTo({
        left: this.scrollPosition, // No exceder el ancho total desplazable
        behavior: 'smooth'
      });
      setTimeout(() => this.checkScrollPosition(), 300);
    }
  }
  scrollToPrevSection(): void {
    if (this.tarjetasHorizontalRef) {
      const container = this.tarjetasHorizontalRef.nativeElement;
      this.scrollPosition -= this.cardWidth;
      container.scrollTo({
        left: this.scrollPosition, // No exceder el ancho total desplazable
        behavior: 'smooth'
      });
      setTimeout(() => this.checkScrollPosition(), 300);
    }
  }

  private checkScrollPosition(): void {
    if (this.tarjetasHorizontalRef) {
      const container = this.tarjetasHorizontalRef.nativeElement;
      this.showRightScrollButton = container.scrollLeft < this.totalScrollableWidth - 1;
      this.showLeftScrollButton = container.scrollLeft > 10;
      this.cdr.detectChanges();
    }
  }

  onScroll(): void {
    this.checkScrollPosition();
  }
}