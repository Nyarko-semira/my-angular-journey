import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss',
})
export class SignupPageComponent {
  signupForm = new FormGroup({
    firstname: new FormControl('kofi',Validators.required),
    lastname: new FormControl('mensah',[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phonen : new FormControl(null,[Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
  

  
  
  });

   submit() {
    if(this.signupForm.status==='VALID')
    console.log(this.signupForm.value, this.signupForm)
   }
}
