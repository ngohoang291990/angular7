import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vchild',
  templateUrl: './vchild.component.html',
  styles: []
})
export class VchildComponent implements OnInit {

  @Input('myValue') public name;

  @Output() private eventHanding=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCLick(){
    this.eventHanding.emit('V-Child xin chao V-Parent');
  }

}
