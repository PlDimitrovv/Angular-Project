import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from 'rxjs/operators'
import { environment } from "src/environments/environment";
import { IUser } from "../shared/interfaces/user";
import { LogoutComponent } from "./logout/logout.component";

const API_URL = environment.apiUrl

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user: any | null = null
    constructor(private http: HttpClient, private router: Router) { }




    register(userData: {}) {
        return this.http.post<IUser>(`${API_URL}/auth/register`, userData).pipe(
            tap((user) => {
                this.user = user
                localStorage.setItem('token', user.accessToken)
            })
        )
    }

    login(userData: {}) {
        return this.http.post<IUser>(`${API_URL}/auth/login`, userData).pipe(
            tap((user) => {
                this.user = user
                localStorage.setItem('token', user.accessToken)
            })
        )
    }
    
    logout() {
        this.user = null
        localStorage.removeItem('token')
        this.router.navigate(['/'])
    }

    isLogged() {
        return this.user
    }
}



