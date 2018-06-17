import { Injectable } from '@angular/core';
import { entry } from './entry.model';
import { Http } from '@angular/http';

@Injectable()
export class entryService{
  constructor(private http : Http){

  }
  getEntries(){
    return this.http.get('/app/entries')
      .toPromise()
      .then(response => response.json().data as entry[]);
  };

  addComment(entryId: number, comment:{name:string; comment:string;}){
    return this.http.post(`/app/entries/${entryId}/comments`, comment)
    .toPromise();
  }
}