import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../app.routes';


@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss',
})

export class SignupPageComponent {
  http = inject(HttpClient);
  router = inject(Router);
  signupForm = new FormGroup({
    firstname: new FormControl(null,Validators.required),
    lastname: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phonen : new FormControl(null,[Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
    Cpassword: new FormControl(null,[Validators.required,Validators.minLength(8)]),
  
  });


   submit() {
  if(this.signupForm.valid){
    console.log(this.signupForm.value, this.signupForm)
    this.http
    .post('https://jsonplaceholder.typicode.com/todos', this.signupForm.value)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl('login');
      },

      error: (er) => {
        console.log(er);
      },
    });
}

   }
   }

