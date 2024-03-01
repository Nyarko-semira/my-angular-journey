import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss',
})
export class SignupPageComponent {
  singupForm = new FormGroup({
    firstname: new FormControl('kofi',Validators.required),
    lastname: new FormControl('mensah',[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phonen : new FormControl(null,[Validators.minLength(10)]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
  

  
  
  });

   submit() {
    if(this.singupForm.status==='VALID')
    console.log(this.singupForm.value, this.singupForm)
   }
}
