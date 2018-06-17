import { Component, Input } from '@angular/core';
import { entry } from '../shared/entry.model';

@Component({
  selector : 'app-entry',
  templateUrl : 'entry.component.html',
  styleUrls : ['entry.component.css']
})
export class entryComponent{
  @Input() entry:entry;
  
  onCommentAdded(comment : {name: string; comment:string;}){
    this.entry.comments.push(comment);
  }
}