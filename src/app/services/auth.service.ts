import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    return true;
  }

  isAdmin(): boolean {
    return true;
  }

  isLoggedAsAdmin(): boolean {
    return this.isLoggedIn() && this.isAdmin();
  }
}
