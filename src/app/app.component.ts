import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ApiService} from './service/api.service';
import {Item} from './model/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  itemform: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) {
    this.itemform = this.formBuilder.group({
      name: ['', [Validators.required]],
      accountnumber: ['', [Validators.required, Validators.minLength(16), Validators.pattern('^\\d{9,18}$')]],
      ifsc: ['', [Validators.required, Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')]],
      amount: ['', [Validators.required, Validators.min(150), Validators.max(1500)]],
    });
  }


  submit(item: Item) {
    this.apiService.createItem(item).subscribe((res) => {
      console.log('Created a item');
      alert('Posted the data');
    });
  }
}

