import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { entryService } from '../shared/entryService';

@Component({
  selector : 'app-antry-comment-form',
  templateUrl :  'entry-comment-form.component.html'
})
export class entryCommentFromComponent{
  name: string = "";
  comment: string = "";
  @Input() entryId : number;
  @Output() onCommentAdded = new EventEmitter<{name: string; comment:string;}>();
  @ViewChild('commentForm') commentForm : NgForm; 
  constructor(private entryService: entryService){  

  }

  onSubmit(commentForm : NgForm){
    debugger;
    if(this.commentForm.invalid) return;
    let comment  = {name : this.name, comment: this.comment};
    this.entryService.addComment(this.entryId, comment)
    .then(() => {
      this.onCommentAdded.emit(comment);
      this.commentForm.resetForm();
    })
  }
}