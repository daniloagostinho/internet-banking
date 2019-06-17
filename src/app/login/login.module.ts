import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxMaskModule, IConfig} from 'ngx-mask'
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';

export let options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [LoginComponent, FormLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ]
})
export class LoginModule { }
