import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import {MatCardModule} from '@angular/material/card';
import { CardItemComponent } from './card-item/card-item.component';


@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule
  ]
})
export class CardsModule { }
