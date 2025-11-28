// Componente di logout: pulisce la session storage e reindirizza al login.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  user = new User();
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Pulisce le credenziali salvate; un auth service dedicato renderebbe la logica riusabile.
    window.sessionStorage.setItem('userdetails', '');
    // window.sessionStorage.setItem('XSRF-TOKEN', '');
    this.router.navigate(['/login']);
  }
}
