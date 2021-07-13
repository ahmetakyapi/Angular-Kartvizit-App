 import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardItem = {
    title: 'Frontend Developer',
    name: 'Ahmet Akyapı',
    phone: '0111 111 11 11',
    email: 'ahmet@ahmet.com',
    address: 'Başakşehir, İstanbul'
  }

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openAddCardModal(): void {
    this.dialog.open(CardModalComponent, {
      width: '400px'
    });
  }
  
}
 