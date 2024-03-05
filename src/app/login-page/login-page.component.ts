import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  http =inject(HttpClient)
//   loginForm= new FormGroup ({
//   username :new FormControl(null,Validators.required),
//   password2 : new FormControl(null, Validators.maxLength(8)),
//   remember : new FormControl()

//  })
     login={username :null, password2 : null, remember:false}
 submit(form:NgForm) {
  if(form.status==='VALID'){
    this.http.post('https://jsonplaceholder.typicode.com/todos',form.value).subscribe((res) =>{
      console.log(res)
    })

  }
  console.log(form.value, this.login)
 }

}




