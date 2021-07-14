import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

   cardForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CardModalComponent>,
    private fb: FormBuilder,
    private cardService: CardService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group( {
      //Zorunlu bulunması gerek olduğundan belirtiyoruz.
      name: ['', Validators.maxLength(50)],
      title: ['', [Validators.required, Validators.maxLength(255)]],  
      phone: ['', [Validators.required,Validators.maxLength(20)]],
      email: ['', [Validators.email, Validators.maxLength(50)]],
      address: ['', Validators.maxLength(255)],
    })
  }

    addCard(): void {
      console.log(this.cardForm.value);
      this.cardService.addCard(this.cardForm.value)
      .subscribe(( res: any) => {
        console.log(res);
        this._snackBar.open( res|| 'Kartvizit başarıyla eklendi.', '', {
          duration: 4000, 
        });
        this.dialogRef.close(true);
      });
      
    } 
}
function res(res: any) {
  throw new Error('Function not implemented.');
}

