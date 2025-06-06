import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,NavbarComponent,LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dream-pass';
}
