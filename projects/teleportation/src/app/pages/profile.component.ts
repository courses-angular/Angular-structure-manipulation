import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yl-profile',
  template: `
    <h3 class="mt-3">
      Profile page
    </h3>

    <ng-template ylAttachTo="footer">
      <h4>Profile content on footer</h4>
    </ng-template>


    <ng-template ylAttachTo="header">
      <button class="btn btn-outline-primary">Profile action</button>
    </ng-template>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
