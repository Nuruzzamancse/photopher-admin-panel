import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  photographer(){
    this.router.navigate(['/photographer']);
  }

  home(){
    this.router.navigate(['/']);
  }

  logut(){
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

}
