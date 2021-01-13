import { Component, Input } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';
import { DataService } from './shared/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  @Input() searchStr: string;
  myWorkerType = MyWorkerType;

  constructor(private DataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      this.DataService.getWorker().subscribe((data:MyWorker[]) => this.workers=data);
    } catch (err) {
      console.log(err);
    }
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    let id_del:string = String(this.workers[index].id);
    if (index !== -1) {
      this.workers.splice(index, 1);
      this.DataService.delWorker(id_del).subscribe(()=>this.getData(), (err) => console.log(err));
    }
  }
  onEditWorker(editWorker){
    let index = this.workers.findIndex((worker) => worker.id === editWorker.id);
    console.log(this.workers)
    if (index !== -1) {
      this.workers.splice(index, 1, editWorker);
      this.DataService.editsWorker(editWorker).subscribe(()=>this.getData(), (err) => console.log(err));
  }
}
  async onAddWorker(worker) {
    try {
      let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
      worker.id = id;
      this.workers.push(worker);
      await this.DataService.postWorker(worker);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
    // let id =
    //   this.workers.length > 0
    //     ? this.workers[this.workers.length - 1].id + 1
    //     : 0;
    // worker.id = id;
    // this.workers.push(worker);
    // this.DataService.postWorker(worker).subscribe(()=>this.getData(), (err) => console.log(err));
  }
}
