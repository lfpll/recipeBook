import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit()
  {
    firebase.initializeApp({
      apiKey: "AIzaSyA-jY_tY_Xs6EQK_q6SZVDeWycDYt7YIjM",
      authDomain: "recipe-91f86.firebaseapp.com",
    });
  }

}
