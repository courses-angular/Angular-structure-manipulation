import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'yl-sidebar',
  template: `
    <div class="bg-light border-right w-100" id="sidebar-wrapper">
      <!--   <div class="sidebar-heading">Teleportation</div>-->
      <div class="list-group list-group-flush">
        <a routerLink="home" class="list-group-item list-group-item-action bg-light">Home</a>
        <a routerLink="projects" class="list-group-item list-group-item-action bg-light">Projects</a>
        <a routerLink="profile" class="list-group-item list-group-item-action bg-light">Profile</a>

        <ng-container ylTarget="sidebar">

        </ng-container>
      </div>
    </div>
  `,
  styles: [
      `
      #sidebar-wrapper {
        height: 90vh;
        margin-right: 6rem;
      }

    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
