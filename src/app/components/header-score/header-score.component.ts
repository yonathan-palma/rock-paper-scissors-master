import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-score',
  standalone: true,
  imports: [],
  templateUrl: './header-score.component.html',
  styleUrl: './header-score.component.css'
})
export class HeaderScoreComponent {
  @Input({required:true}) points!:number
}
