import * as firebase from 'firebase'
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  constructor(private router:Router){}

  token: string;
  signUpUser(email:string,password:string)
  {
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(
      (error) => console.log(error)
    )
  }

  signInUser(email:string, password:string)
  {
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      (response) => {
        this.router.navigate(['recipes'])
        firebase.auth().currentUser.getToken().then(
          (token:string) => this.token = token
        )
      }
    ).catch(
      error => console.log(error)
    )
  }

  signOutUser()
  {
    firebase.auth().signOut()
    return this.token = null;
  }

  getToken()
  {
    firebase.auth().currentUser.getToken().then(
      (token: string) => this.token = token
    );
    return this.token
  }

  isAuthenticated()
  {
    return this.token !=null;
  }
}
