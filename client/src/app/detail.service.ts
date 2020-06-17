import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Detail} from './detail';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http:Http) { }

  getDetails(){
    return this.http.get('http://localhost:3000/api/details')
      .pipe(map( res => res.json()));
  }

  addDetail(newDetail){
    var headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/detail',newDetail,{headers:headers})
      .pipe(map(res => res.json()));
  }


  deleteDetail(id){
    return this.http.delete("http://localhost:3000/api/detail/"+id)
      .pipe(map(res => res.json()));
  }
  deleteForUpdate(emp_id){
    return this.http.delete("http://localhost:3000/api/detail/update/"+emp_id)
    .pipe(map(res=>res.json()));
  }
}
