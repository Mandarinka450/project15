import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  routeApi = 'http://localhost:3000/workers';

  constructor(private http: HttpClient) { }

  getWorker() {
    return this.http.get(this.routeApi);
  }
  postWorker(worker){
    return this.http.post(this.routeApi, worker).toPromise();
  }
  editsWorker(worker){
    return this.http.put(this.routeApi + `/${worker.id}`, worker);
  }
  delWorker(id) {
    return this.http.delete(this.routeApi +`/${id}`);
  }
}
