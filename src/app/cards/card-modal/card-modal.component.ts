import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

   cardForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group( {
      //Zorunlu bulunması gerek olduğundan belirtiyoruz.
      title: ['', Validators.required],  
      name: '',
      phone: ['', Validators.required],
      email: [''],
      address: '',
    })
  }

    addCard(): void {
      console.log(this.cardForm.value);
    } 
}
