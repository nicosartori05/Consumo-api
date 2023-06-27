import { Component } from '@angular/core';

import {AuthService} from './services/auth.service'
import {UsersService} from './services/users.service'
import { User } from './models/user.model';
import { FilesService } from './services/files.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';

  constructor(private authService: AuthService, private userService: UsersService, private fileService: FilesService){}

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

 downloadPDF(){
  this.fileService.getFile('myPDF', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
  .subscribe()
 }
}

