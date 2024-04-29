import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {

  showModal = signal<boolean>(false)

  toogleModal():void {
    this.showModal.set(!this.showModal())
    console.log(this.showModal());
  } 

}
