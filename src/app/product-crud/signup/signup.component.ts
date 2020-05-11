import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  modalRef: BsModalRef;


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private router:Router,private service:AuthService,private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  signup(details:NgForm){

    this.service.signupUser(details.form.value).subscribe(
      data => {
        console.log(data)
      }
    )
    alert('Sign Up Successful Please Login')
  }


  login(loginForm:NgForm){
    this.service.loginUser(loginForm.form.value).subscribe(
    data =>
    {
      if(data[0]){
        console.log(data)
        this.modalRef.hide()
        this.router.navigate(['products'])
      }
    }
    )
      }

}
