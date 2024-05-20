import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/api-response';
import { Login } from '../models/login';
import { Observable, ObservedValueOf, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private validated!:boolean;
    constructor(private http:HttpClient) {}

    isValidated(){
        return this.validated ?? this.validateToken()
    }

    setValidated(validated: boolean){
        this.validated = validated
    }

    login(login:Login): Observable<any>{
        return this.http.post<ApiResponse>("/api/login",login,{
            headers: {"Content-Type":"application/json", "Accept":"application/json"}
        })
    }

    setToken(token:string): boolean{
        if(token.trim() != ''){
            localStorage.setItem("token",token)
            return true
        }
        return false
    }

    getToken():string{
        return localStorage.getItem("token") || ''
    }

    validateToken(token:string|null = null): Observable<any>{
        if(!token){
            token = this.getToken()
        }
        return this.http.post<ApiResponse>("/api/user/validate-token",{token},{
            headers: {"Content-Type":"application/json", "Accept":"application/json"}
        })

    }
}
