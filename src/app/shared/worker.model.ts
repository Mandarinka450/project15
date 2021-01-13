export interface MyWorker {
  id?: number;
  phone: string,
  name: string;
  surname: string;
  type: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, phone:'8 (968) 634-56-78', name: 'Иван', surname: 'Иванов', type: 0 },
  { id: 2, phone:'8 (968) 634-56-78', name: 'Петр', surname: 'Петров', type: 1 },
  { id: 3, phone:'8 (968) 634-56-78', name: 'Сидор', surname: 'Сидоров', type: 2 },
  { id: 4, phone:'8 (968) 634-56-78', name: 'Василий', surname: 'Васильев', type: 3 },
];
