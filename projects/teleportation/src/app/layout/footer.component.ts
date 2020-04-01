import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'yl-footer',
  template: `
    <footer id="footer" class="footer mt-auto py-3 border-top">
      <div class="container">
        <span class="text-muted">
          <ng-container ylTarget="footer"></ng-container>
        </span>
      </div>
    </footer>
  `,
  styles: [
    `
    .container{
      text-align: center;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
