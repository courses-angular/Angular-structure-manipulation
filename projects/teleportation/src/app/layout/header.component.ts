import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'yl-header',
  template: `
    <nav class="navbar navbar-expand navbar-light border-bottom d-flex justify-content-end">
      <form class="form-inline">
        <!--       <button class="btn btn-primary" type="button">Action button</button>-->
        <ng-container ylTarget="header"></ng-container>
      </form>
    </nav>
  `,
  styles: [
    `
    nav.navbar{
      width: 100%;
      padding: 5px;
      min-height: 49px;
    }
    `
  ],
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
