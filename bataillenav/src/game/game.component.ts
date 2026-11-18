import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit {
  constructor(private http: HttpClient) { }


  personnalBoard: any[][] = [];
  shotBoard:any[][]=[];
  ngAfterViewInit() {
    let apiUrl = 'https://localhost:7080/';
    let params = new HttpParams().set('id', 6);
    
    this.http.get<any[][]>(`${apiUrl}api/GameArea/GetPersonnalBoard`, { params }).subscribe(
      (data)=>{
        this.personnalBoard=data;
        this.doSomething();
      },
      (error)=>{
        console.log("Non");
      }      
    );

    this.http.get<any[][]>(`${apiUrl}api/GameArea/GetShotBoard`, { params }).subscribe(
      (data)=>{
        this.shotBoard=data;
        this.doOther();
      },
      (error)=>{
        console.log("Non");
      }      
    );
    
  }

  doSomething(){
    const container = document.getElementById("buttonsContainer");
    if (container) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const button = document.createElement("button");
          button.classList.add("container", "water");
          const buttonId = `${i};${j}`;
          button.id = buttonId;
          button.textContent =  this.personnalBoard[i][j].toString();
          if(this.personnalBoard[i][j]==0){
            button.style.backgroundColor = 'blue';
          }else if(this.personnalBoard[i][j]==1){
            button.style.backgroundColor = 'grey';
          }else if(this.personnalBoard[i][j]==2){
            button.style.backgroundColor = 'green';
          }else{
            button.style.backgroundColor = 'red';
          }
          container.appendChild(button);
        }
      }
    } else {
      console.error('Element with ID "buttonsContainer" not found.');
    }

    
  }

  doOther(){
    const containerad = document.getElementById("buttonsContainerad");
    if (containerad) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const button = document.createElement("button");
          button.classList.add("container", "water");
          const buttonId = `${i};${j}ad`;
          if(this.shotBoard[i][j]==0){
            button.style.backgroundColor = 'blue';
          }else if(this.shotBoard[i][j]==1){
            button.style.backgroundColor = 'grey';
          }else if(this.shotBoard[i][j]==2){
            button.style.backgroundColor = 'green';
          }else{
            button.style.backgroundColor = 'red';
          }
          button.textContent =  this.shotBoard[i][j].toString();
          button.id = buttonId;
          containerad.appendChild(button);
        }
      }
    } else {
      console.error('Element with ID "buttonsContainer" not found.');
    }
  }

  //Create grid for the game with mutiple buttons
  test_github(){
    console.log("test");

  }


}

/*
<script >
                function tirer(){
        let tableauAdversaire = document.getElementById("buttonsContainerad");
        let adversaireButtons = tableauAdversaire.getElementsByTagName("button");
        for (let i = 0; i < adversaireButtons.length; i++){
            adversaireButtons[i].onclick = function() {
                this.style.backgroundColor = "red";
                
            }}}
    </script>

*/