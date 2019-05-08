import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {
 @Input("myValue") public value;
 @Output() public eventChild=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.eventChild.emit('Nguyen Van B');
  }

}
