import { Component } from '@angular/core';

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html',
  styleUrls : ['app.component.css']
})
export class appComponent{
  private emoji: string[];
  private activeEmoji : string;
  constructor(){
    this.emoji = ['🎉', '😍', '😜', '👍'];
  }
  changeEmoji(){
    this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
  }
}