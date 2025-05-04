import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginCredentials } from '../auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    // if (this.loginForm.invalid) {
    //   return;
    // }

    // this.isLoading = true;
    // this.errorMessage = '';

    // const credentials: LoginCredentials = {
    //   username: this.loginForm.value.username,
    //   password: this.loginForm.value.password
    // };

    // this.authService.login(credentials).subscribe({
    //   next: () => {
    //     this.isLoading = false;
    //     this.router.navigate(['/dashboard']);
    //   },
    //   error: (error) => {
    //     this.isLoading = false;
    //     this.errorMessage = error.error?.message || 'Error al iniciar sesión. Por favor, intente nuevamente.';
    //   }
    // });
  }
}
