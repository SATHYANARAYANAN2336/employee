import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-login',
  templateUrl: './developer-login.component.html',
  styleUrls: ['./developer-login.component.css']
})
export class DeveloperLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigateByUrl('/dlm');
  }

  onLogout(){
    this.router.navigateByUrl("home");
  }
}
