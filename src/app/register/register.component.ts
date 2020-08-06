import { Component, OnInit } from '@angular/core';
import { User } from 'app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addUser(data): void {console.log(data);
    let user: User = {
      username: data.value.username,
      email: data.value.email,
      firstName: data.value.firstName,
      lastName: data.value.lastName,
      password: data.value.password
    };
    console.log(user);
  }

}
