import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { onErrorResumeNext } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  http = inject(HttpClient);
  router = inject(Router);
  //   loginForm= new FormGroup ({
  //   username :new FormControl(null,Validators.required),
  //   password2 : new FormControl(null, Validators.maxLength(8)),
  //   remember : new FormControl()

  //  })
  login = { username: null, password: null, remember: false };
  submit(form: NgForm) {
    if (form.status === 'VALID') {
      this.http
        .post('https://jsonplaceholder.typicode.com/todos', form.value)
        .subscribe({
          next: (res) => {
            console.log('res',res);
            this.router.navigateByUrl('homepage');
          },

          error: (error) => {
            console.log(error);
          },
        });
    }
  }
}

//     subscribe((res) =>{
//       console.log(res)
//     })

//   }
//   console.log(form.value, this.login)
//  }

// }
