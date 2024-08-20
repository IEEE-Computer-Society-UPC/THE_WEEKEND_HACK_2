import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  isMenuOpen: boolean;


  constructor(private router:Router) {
    this.isMenuOpen = false;
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  navigateTWH2() {
    this.router.navigate(['theWeekEnd']);
    this.isMenuOpen = false;
  }

  navigateHome() {
    this.router.navigate(['home']);
    this.isMenuOpen = false;

  }

  navigateRegister(){
    this.router.navigate(['register'])
    this.isMenuOpen = false;

  }
  ngOnInit(): void {
  }
}
