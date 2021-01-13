import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyWorkerType } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  MyForm : FormGroup = new FormGroup({
    "editid" : new FormControl ("", Validators.required),
    "editphone" : new FormControl ("", Validators.required),
    "editname" : new FormControl ("", Validators.required),
    "editsurname" : new FormControl ("", Validators.required),
    "type" : new FormControl (0, Validators.required),
  })

  public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  

  @Output() editWorker = new EventEmitter<object>();
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onEditWorker() {
    this.editWorker.emit({
      id: this.MyForm.controls["editid"].value,
      name: this.MyForm.controls["editname"].value,
      surname: this.MyForm.controls["editsurname"].value,
      type: this.MyForm.controls["type"].value,
      phone: this.MyForm.controls["editphone"].value
   });
  }
}
