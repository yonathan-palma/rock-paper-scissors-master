import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// components
import { HeaderScoreComponent } from './components/header-score/header-score.component';
import { GamesComponent } from './components/games/games.component';
import { RulesComponent } from './components/rules/rules.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderScoreComponent, 
    GamesComponent,
    RulesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rock-paper-scissors-master';
  points = signal<number>(0)
}
