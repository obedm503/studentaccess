import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Auth } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public nav: NavController, public auth: Auth) {

  }
  ngAfterViewInit(){
    this.auth.getUser().then( user => {
      if(!user){
        this.nav.setRoot('Login');
      }
    });
  }
  logout(){
    this.auth.logout().subscribe( () => {
      this.nav.setRoot('Login');
    });
  }
}
