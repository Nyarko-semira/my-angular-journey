import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm= new FormGroup ({
  username :new FormControl(null,Validators.required),
  password2 : new FormControl(null, Validators.maxLength(8)),
  remember : new FormControl()

 })

 submit() {
  if(this.loginForm.status==='VALID')
  console.log(this.loginForm.value, this.loginForm)
 }

}




