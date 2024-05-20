import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoadingDialogComponent } from 'src/app/core/components/loading/loading-dialog.component';
import {
    FormControl,
    FormGroup,
    Validators,
    ReactiveFormsModule,
    FormGroupDirective,
    NgForm
} from '@angular/forms';

import { OnInit } from '@angular/core';



@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatDialogModule,
        LoadingDialogComponent
    ],
    templateUrl: './login.component.html',
})

export default class LoginComponent implements ErrorStateMatcher, OnInit {
    loginForm: FormGroup;
    passwordHide: boolean = true;

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }

    constructor(
        private auth: AuthenticationService,
        private router: Router,
        private _snackBar: MatSnackBar,
        public dialog: MatDialog
    ) {

        this.loginForm = new FormGroup({
            username: new FormControl<string | null>(null, [Validators.required, Validators.minLength(8)]),
            password: new FormControl<string | null>(null, [Validators.required, Validators.minLength(8)])
        })
    }

    ngOnInit(){
        console.log(this.auth.isValidated())
        if(this.auth.isValidated()){
            this.router.navigate(["/"])
        }
    }

    login() {
        const dialogRef = this.dialog.open(LoadingDialogComponent,{
            data:{
                title: "Iniciando sesión",
                message: "Validando credenciales"
            }
        });

        if (this.loginForm.valid) {
            this.auth.login(this.loginForm.getRawValue()).subscribe(
                res => {
                    let token = res?.data?.token || null
                    let message
                    dialogRef.close()
                    if(token){
                        this.auth.setValidated(true)
                        this.auth.setToken(token)
                        message = `Bienvenido ${res.data.username}`
                        this.router.navigate(["/"])
                    }else{
                        this.auth.setValidated(false)
                        message = `Credenciales invalidas`
                        this.loginForm.reset()
                    }
                    this._snackBar.open(message, 'Close', {
                        horizontalPosition: "right",
                        verticalPosition: "bottom",
                        duration: 1000
                    });
                }
            )

        } else {
            this._snackBar.open('Antes de continuar finaliza el fomulario', 'Splash', {
                horizontalPosition: "right",
                verticalPosition: "bottom"
            });
            dialogRef.close()
        }
    }
}
