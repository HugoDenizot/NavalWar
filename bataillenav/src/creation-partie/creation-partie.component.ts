import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-creation-partie',
  templateUrl: './creation-partie.component.html',
  styleUrls: ['./creation-partie.component.css']
})
export class CreationPartieComponent {
  constructor(private http: HttpClient) { }

  Id:number=0;

  ngAfterViewInit() {
    let apiUrl = 'https://localhost:7080/api/GameArea/CreateGame';
    this.http.get<any>(apiUrl).subscribe(joueur => {
      this.Id=joueur.sessionId;
      // faire quelque chose avec le joueur créé
    });
  }

  goHome(): void {
    //this.router.navigate(['/profile']);
  }

  createJoueur(nomJoueur: string){
    
  }

  createNewJoueur() {
    this.createJoueur('Hugo')
      
  }

  

}
