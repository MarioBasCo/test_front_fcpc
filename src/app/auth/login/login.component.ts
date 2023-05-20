import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _svcAuth: AuthService,
    private router: Router) {
    this.form = this.formBuilder.group({
      'correo': ['', [Validators.required, Validators.email]],
      'clave': ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {

  }

  iniciarSesion() {
    const data = {
      email: this.form.get('correo')?.value,
      password: this.form.get('clave')?.value
    };

    this._svcAuth.login(data).subscribe({
      next: (resp) => {
        console.log(resp);
        localStorage.setItem('userf', JSON.stringify(resp.user));
        this.router.navigate(['/admin']);
      },
      error: (err) => { 
        alert(err.error.message);
      }
    });
  }
}
