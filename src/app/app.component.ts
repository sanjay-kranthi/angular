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
  myForm = new FormGroup({});

  get f() {
    return this.myForm.controls;
  }

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) {
    this.myForm = formBuilder.group({
      amount: ['', [Validators.min(1000), Validators.max(2000)]]
    });
  }


  submit(item: Item) {
    this.apiService.createItem(item).subscribe((res) => {
      console.log('Created a item');
      alert('Posted the data');
    });
  }
}

