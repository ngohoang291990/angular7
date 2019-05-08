import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nodechild',
  templateUrl: './nodechild.component.html',
  styles: []
})
export class NodechildComponent implements OnInit {

  @Input('myValue') public value;

  @Output() public eventHandlder=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.eventHandlder.emit("Day la component NodeChild");
  }
}
