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
    constructor(private http: HttpClient, private router: Router) {
        const userCheck = localStorage.getItem('user')
        if (userCheck) {
            this.user = JSON.parse(userCheck)
        }
    }

    register(userData: {}) {
        return this.http.post<IUser>(`${API_URL}/auth/register`, userData).pipe(
            tap((user) => {
                this.user = user
                localStorage.setItem('user', JSON.stringify(user))
            })
        )
    }

    login(userData: {}) {
        return this.http.post<IUser>(`${API_URL}/auth/login`, userData).pipe(
            tap((user) => {
                this.user = user 
                localStorage.setItem('user', JSON.stringify(user))
            })
        )
    }

    logout() {
        this.user = null
        localStorage.removeItem('user')
        this.router.navigate(['/'])
    }

    isLoggedIn(): boolean {
        return !!this.user
    }
    getCurrentUser(): any {
        return this.user
    }
}



