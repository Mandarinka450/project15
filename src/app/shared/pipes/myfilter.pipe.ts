import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(workers: any[], searchStr: string): any[]{
    if (searchStr === '') {
    return workers;
    }
    else {
      let filterWorkers = workers.filter((worker) => {
        let filterNameSur: string = worker.name + ' ' + worker.surname;
        return filterNameSur.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
      });
      return filterWorkers;
    }
  }
}
