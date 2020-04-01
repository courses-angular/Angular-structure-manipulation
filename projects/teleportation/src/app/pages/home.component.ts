import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yl-home',
  template: `
    <h3 class="mt-3">
      Home page
    </h3>

    <ng-template ylAttachTo="footer">
      <h4>Home content in footer</h4>
    </ng-template>

    <ng-template ylAttachTo="header">
      <button class="btn btn-outline-danger">Home action</button>
    </ng-template>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
