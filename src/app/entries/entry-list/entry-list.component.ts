import { Component, OnInit } from '@angular/core';
import { entryService } from '../shared/entryService';
import { entry } from '../shared/entry.model';

@Component({
  selector : 'app-entry-list',
  templateUrl : 'entry-list.component.html',
  styleUrls : ['entry-list.component.css']
})
export class entryListComponent implements OnInit{
  private entries: entry[];
  constructor(private entryService : entryService){

  }
  ngOnInit(){
    this.entryService.getEntries()
    .then(entries => this.entries = entries)
  }
}