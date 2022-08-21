import { Component, OnInit } from '@angular/core';
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

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    // this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => { console.log(error);})
  }

  logout(){
    this.loggedIn = false;
  }

  // setCurrentUser(){
  //   const user: any = JSON.parse(localStorage.getItem('user'));
  //   this.accountService.setCurrentUser(user);
  // }


}
