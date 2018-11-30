import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/Film'; 
import { INT_TYPE, NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  listFilms : Film[];
  showNumbers : boolean;

  constructor() {}

  show(){
    this.showNumbers = true;
  }
  getColor(duree){
    switch (duree) {
      case '2 heures' : return 'blue';
      case '3 heures' : return 'red' ;
      default : return 'black';
    }  
      
  }

  getFontSize(duree){
    switch (duree) {
      case '2 heures' : return '24px';
      case '3 heures' : return 'auto' ;
      default : return 'auto';
    }  
      
  }

  getNombreFilms(){
    return this.listFilms.length;
  }

  getNombreFilmsParType(type){
    let i : number;
    i = 0;
    this.listFilms.forEach(element => {
      if (element.categorie === type) i++;
    });
    return i;
  }
  ngOnInit() {
    this.showNumbers = false;
    this.listFilms= [
      {
        'nom' : 'Mandy',
        'duree' : '2 heures',
        'categorie' : 'Action'
      }
      ,
      {
        'nom' : 'LOVE AFTER LOVE',
        'duree' : '3 heures',
        'categorie' : 'Drama'
      }
      ,
      {
        'nom' : 'YOU WERE NEVER REALLY HERE',
        'duree' : '2 heures',
        'categorie' : 'Comic'
      }
      ,
      {
        'nom' : 'The rider',
        'duree' : '3 heures',
        'categorie' : 'Drama'
      }
      ,
      {
        'nom' : 'First performed',
        'duree' : '2 heures',
        'categorie' : 'Action'
      }
    ];  
  }

}
