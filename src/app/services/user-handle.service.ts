import { User } from './../model/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHandleService {

  constructor() { }

  addUser(user: User) {
    let list = JSON.parse(localStorage.getItem("users") ?? "[]");
    list.push(user);
    localStorage.setItem("users", JSON.stringify(list));
  }
}
