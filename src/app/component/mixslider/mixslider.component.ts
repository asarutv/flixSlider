import { Component, OnInit } from '@angular/core';

declare const myTest: any;
declare const init: any;

declare const controls: any;

@Component({
  selector: 'app-mixslider',
  templateUrl: './mixslider.component.html',
  styleUrls: ['./mixslider.component.scss']
})
export class MixsliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Angular Tutorial';

  onClick() {
    myTest();
  }

}
