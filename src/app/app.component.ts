import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './sass/styles.scss'
  ]
})
export class AppComponent {
  MenuData:Array<any>=[
    {path:"",name:"Home"},
    {path:"offers",name:"Offers"},
    {path:"travels",name:"Travels"},
    {path:"contact",name:"Contact"}
  ];
  title = 'babysitting';
}
