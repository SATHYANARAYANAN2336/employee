import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tl-login',
  templateUrl: './tl-login.component.html',
  styleUrls: ['./tl-login.component.css']
})
export class TlLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigateByUrl('/tlm');
  }

  onLogout(){
    this.router.navigateByUrl("home");
  }
}
