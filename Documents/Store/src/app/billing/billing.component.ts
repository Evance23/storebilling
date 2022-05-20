import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
billingForm=this.fb.group(
  {
    product:[''],
    cost:[''],
    quantity:[''],
    vat:[''],
    billingDetails: this.fb.array( []) 
  }
)
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  addBillingDetails(){
    const {product, cost, quantity, vat} = this.billingForm.value;
    (this.billingForm.get('billingDetails') as FormArray).push(this.fb.group({product, cost, quantity, vat}))
    this.billingForm.patchValue({
      product:'',
      cost:0,
      quantity:0,
      vat:0,
    }) 
  }
  get billingDetailsArray(){
    return this.billingForm.get('billingDetails') as FormArray
  }

}
