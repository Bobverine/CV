import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { TupleComponent } from './components/tuple/tuple.component';
// import localeFr from '@angular/common/locales/fr';
// registerLocaleData(localeFr);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CvComponent, TupleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class AppComponent {
  title = 'cv';
}
