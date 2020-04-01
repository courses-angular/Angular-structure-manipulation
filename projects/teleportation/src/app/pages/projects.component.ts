import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yl-projects',
  template: `
    <h3 class="mt-3">
      Projects page
    </h3>

    <ng-template ylAttachTo="footer">
      <h4>Project content in footer</h4>
    </ng-template>

    <ng-template ylAttachTo="header">
      <button class="btn btn-outline-success">Project action</button>
    </ng-template>
  `,
  styles: []
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
