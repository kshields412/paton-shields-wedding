import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    SplashComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SplashModule { }
