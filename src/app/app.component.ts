import { Component, VERSION, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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
      console.log(counter++);
    },1000);

    setTimeout(() => {
      console.log("finish");
    }, 5000);

    let obs = interval(1000);
    obs.subscribe(val => {console.log(counter+1);});

  }
}
