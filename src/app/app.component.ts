import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    document.addEventListener('click', event => {
      console.log(event);
    });

    let counter = 1000;
    setInterval(() => {
      console.log(counter);
      counter++;
    },10000);

    setTimeout(() => {
      console.log("finish");
    }, 1000);
  }
}
