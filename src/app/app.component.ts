import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from './coponents/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'standalone';
}
