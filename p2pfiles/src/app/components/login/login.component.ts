import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, EMPTY, of } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest$: Observable<any>;
  loginForm: FormGroup;
  submitted: boolean;

  isLoginValid$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this._InitLoginForm();
    this.isLoginValid$ = EMPTY;
  }

  public validateUser(): boolean {
    this.submitted = true;

    if (!this.loginForm.valid) {
      this.submitted = false;
      alert('here');
      return false;
    }

    //this.loginRequest$ = this.usuariosService.Login(this.loginForm.getRawValue());
    this.isLoginValid$ = of(true);
    this.loginRequest$.subscribe(
      (response: any) => {

        // Almacena en el session storage
        // this.tokenService.setToken(response);

        // // Almacena la información del proveedor en el session storage
        // this.tokenService.setLoggedUser();

        // Redirige a la ruta de info básica
        this.router.navigate(['/']);
      },
      (err: any) => {
        this.isLoginValid$ = of(false);
      }
    );
    
  }

  public IsValid(control: string): boolean {
    return this.loginForm.get(control).valid;
  }

  private _InitLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
