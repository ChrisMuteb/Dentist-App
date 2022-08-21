import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notyf } from 'notyf';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-bookanappointment',
  templateUrl: './bookanappointment.component.html',
  styleUrls: ['./bookanappointment.component.css']
})
export class BookanappointmentComponent implements OnInit {
  model: any = {}
  loggedIn: boolean = false;//should remove the bookappoin button
  currentUser$: Observable<User> = new Observable<User>;
  notyf = new Notyf();

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    // this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.notyf.success(`Welcome ${this.model.username}`);
      this.router.navigateByUrl('bookanappointment/123');
    }, error => {
      console.log(error);
      this.notyf.error(error.error);
    })
  }

  logout(){
    this.loggedIn = false;
    this.router.navigateByUrl('/');
  }

  // setCurrentUser(){
  //   const user: any = JSON.parse(localStorage.getItem('user'));
  //   this.accountService.setCurrentUser(user);
  // }


}
