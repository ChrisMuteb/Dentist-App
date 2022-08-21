import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css']
})
export class NewpatientComponent implements OnInit {
  registerMode = false;
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  register(){
    console.log(this.model);
    this.accountService.register(this.model).subscribe(Response => {
      console.log(Response);
      this.cancel();
    }, error => {
      console.log(error);
    })
  }

  cancel(){
    console.log('cancel');
  }

}
