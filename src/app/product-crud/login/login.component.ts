import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }


  login(loginForm:NgForm){
this.service.loginUser(loginForm.form.value).subscribe(
data =>
{
  if(data[0]){
    console.log(data)
    this.router.navigate(['products'])
  }
}
)
  }

}
