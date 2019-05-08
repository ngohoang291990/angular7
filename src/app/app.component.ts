import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoRouting';
  @ViewChild('myInputText') myInputText;

  public message='';

  public name="Ngo XUan Hoang";
  
  constructor(){
    setInterval(()=>{this.send2Server();},2000);
  }

  send2Server(){
    let data= this.myInputText.nativeElement;
    console.log(data.value);
  }
}
