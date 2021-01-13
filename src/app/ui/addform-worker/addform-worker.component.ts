import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  MyFormAdd : FormGroup = new FormGroup({
    "phone" : new FormControl ("", Validators.required),
    "name" : new FormControl ("", Validators.required),
    "surname" : new FormControl ("", Validators.required),
    "type" : new FormControl (0, Validators.required),
  })
  public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}

  onAddWorker() {
    this.addWorker.emit({
      name: this.MyFormAdd.controls["name"].value,
      surname: this.MyFormAdd.controls["surname"].value,
      type: this.MyFormAdd.controls["type"].value,
      phone: this.MyFormAdd.controls["phone"].value
    });
  }
}
