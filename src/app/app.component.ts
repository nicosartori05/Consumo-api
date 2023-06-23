import { Component } from '@angular/core';

import {AuthService} from './services/auth.service'
import {UsersService} from './services/users.service'
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';

  constructor(private authService: AuthService, private userService: UsersService){}

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser(){
    this.userService.create({
      name:'Sebas',
      email: 'sebas@email.com',
      password:'1212'
    })
    .subscribe(rta => {
      console.log(rta);
    });
  }

  login(){
    this.authService.login('sebas@email.com','1212')
    .subscribe(rta => {
      console.log(rta.access_token);
      this.token = rta.access_token;
    });
  }

  getProfile(){
    this.authService.profile(this.token)
    .subscribe(profile => {
      console.log(profile);
    })
  }
}
