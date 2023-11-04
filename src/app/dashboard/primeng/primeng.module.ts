import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg Modules
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule ,
    CarouselModule,
    CommonModule,
    InputTextareaModule,
    InputTextModule
  ],
})
export class PrimengModule { }
