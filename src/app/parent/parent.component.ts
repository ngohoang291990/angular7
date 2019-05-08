import { Component, OnInit, Input, Directive, ViewChild } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: []
})
export class ParentComponent implements OnInit {

  public name='Nguyen Van A';

  public message="";

  constructor() { }

  ngOnInit() {
  }

}
