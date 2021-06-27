import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  winHeight: number;
  loginForm: FormGroup;
  errMessage: string = '';
  constructor(private route: Router, private fb:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.winHeight = window.innerHeight;
    this.initialiseForm();
  }

  initialiseForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signIn(loginForm:FormGroup) {
    console.log(loginForm.value);
    this.authService.signIn(loginForm.value.username,loginForm.value.password).subscribe(res => {
      const data:any = res;
      localStorage.setItem("token",data.token);
      this.route.navigate(['/patients']);
    },err => {
      console.log("Err",err);
    });
  }

  signUp() {
    this.route.navigate(['/signup']);
  }

}
