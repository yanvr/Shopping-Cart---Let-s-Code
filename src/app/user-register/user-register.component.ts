import { UserHandleService } from './../services/user-handle.service';
import { User } from './../model/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user: User;
  userRegisterForm: FormGroup;
  
  constructor(private userHandleService: UserHandleService) {
    this.user = {
      id: "",
      username: "",
      lastname: "",
      email: "",
      cpf: "",
      rg: "",
      cep: "",
      address: "",
      city: "",
      state: "",
      password: ""
    }
    
    this.userRegisterForm = new FormGroup({
      "username": new FormControl(this.user.username, [
        Validators.required,
        Validators.minLength(3)
      ]),
      "lastname": new FormControl(this.user.lastname, [
        Validators.required,
        Validators.minLength(3)
      ]),
      "email": new FormControl(this.user.email, [Validators.required, Validators.email]),
      "cpf": new FormControl(this.user.cpf, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
    ]),
      "rg": new FormControl(this.user.rg, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)
      ]),
      "cep": new FormControl(this.user.cep, [Validators.required]),
      "address": new FormControl(this.user.address, [Validators.required]),
      "city": new FormControl(this.user.city, [Validators.required]),
      "state": new FormControl(this.user.state, [Validators.required]),
      "password": new FormControl(this.user.password, [Validators.required])
    })
    
  }

  
  ngOnInit(): void {}

  onSubmit(): void {
    this.user.id = uuidv4();
    this.user.username = this.userRegisterForm.get('username')?.value;
    this.user.lastname = this.userRegisterForm.get('lastname')?.value;
    this.user.email = this.userRegisterForm.get('email')?.value;
    this.user.cpf = this.userRegisterForm.get('cpf')?.value;
    this.user.rg = this.userRegisterForm.get('rg')?.value;
    this.user.cep = this.userRegisterForm.get('cep')?.value;
    this.user.address = this.userRegisterForm.get('address')?.value;
    this.user.city = this.userRegisterForm.get('city')?.value;
    this.user.state = this.userRegisterForm.get('state')?.value;
    this.user.password = this.userRegisterForm.get('password')?.value;

    this.userHandleService.addUser(this.user);
    this.userRegisterForm.reset();
  }
  
}
