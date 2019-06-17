import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  // controle do formulario
  loginForm  = this.fb.group({
    cpf: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }
}
