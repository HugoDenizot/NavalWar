import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})


export class PlacementComponent implements AfterViewInit {
  ngAfterViewInit() {
    const container = document.getElementById("buttonsContainer");
    if (container) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const button = document.createElement("button");
          button.classList.add("container", "water");
          const buttonId = `${i};${j}`;
          button.id = buttonId;
          //button.style.backgroundColor = 'blue';
          container.appendChild(button);
        }
      }
    } else {
      console.error('Element with ID "buttonsContainer" not found.');
    }
  }

  public onButtonClick(buttonId: string): void {
    const button = document.getElementById(buttonId);
    if (button) {
      button.style.backgroundColor = 'grey';
    }
  }
  
}