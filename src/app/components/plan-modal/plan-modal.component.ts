import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 importa esto

@Component({
  selector: 'app-plan-modal',
  standalone: true, // 👈 si estás usando standalone
  templateUrl: './plan-modal.component.html',
  imports: [CommonModule], // 👈 necesario para usar *ngIf
})
export class PlanModalComponent {
  @Input() plan: string = '';
  @Output() onClose = new EventEmitter<void>();
}
