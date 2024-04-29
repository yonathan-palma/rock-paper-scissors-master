import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  @Input({required:true}) points!:number
  @Output() updatePoints = new EventEmitter()

  myPicked:string = ""
  housePicked = ""
  imgDir:string = ""
  imgHouseDir:string = ""
  resultMessege:string = "" 

  btn_hidden = false

  handlerPicked(event: Event):void {
    const picked = event.currentTarget as HTMLButtonElement
    this.imgDir = picked.dataset['picked'] ?? ""
    this.myPicked = `../../../assets/images/icon-${picked.dataset['picked']}.svg`
    setTimeout(() => {
      this.pickedHouse()
    }, 1000);
  }

  pickedHouse():void {
    const options = ["paper", "scissors", "rock"];
    this.imgHouseDir = options[Math.floor(Math.random() * options.length)]
    this.btn_hidden = true
    this.housePicked = `../../../assets/images/icon-${this.imgHouseDir}.svg`
    this.result(this.imgDir, this.imgHouseDir)
  }

  result(myPicked: string, housePicked:string):void {
    if (myPicked === housePicked) {
      // Empate
      this.resultMessege = "TIED"
      console.log("Empate. Ambos eligieron " + myPicked + ".");
    } else if (
      (myPicked === "rock" && housePicked === "scissors") ||
      (myPicked === "paper" && housePicked === "rock") ||
      (myPicked === "scissors" && housePicked === "paper")
    ) {
      // El usuario gana
      this.resultMessege = "WIN"
      this.updatePoints.emit(this.points + 1)
      console.log("¡Ganaste! Tú eliges " + myPicked + " y la máquina elige " + housePicked + ".");
    } else {
      // El usuario pierde
      this.resultMessege = "LOSE"
      this.points > 0 && this.updatePoints.emit(this.points - 1)
      console.log(this.points);
      console.log("Perdiste. Tú eliges " + myPicked + " y la máquina elige " + housePicked + ".");
    }
  }

  reset(): void{
    this.myPicked = ""
    this.housePicked = ""
    this.btn_hidden = false
    console.log("reset")
  }

}
