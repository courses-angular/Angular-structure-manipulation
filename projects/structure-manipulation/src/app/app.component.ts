import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container m-5">
      <h1>
        <span class="text-muted">Master Class</span> Structural-manipulation
      </h1>

<!--      <ng-container #container></ng-container>-->
<!--      <ng-container [ylTemplate]="title"></ng-container>-->

<!--      <ng-template ylTemplate>-->
<!--        <h3>Attach template to ng-container</h3>-->
<!--      </ng-template>-->

      <ng-template ylTemplate>
        <h3>Attach template to AppRoot ViewContainer</h3>
      </ng-template>

<!--      Same as ng-template with HTML inside-->
<!--      <h3 *ylTemplate>Attach template to ng-container with *ylTemplate directive</h3>-->


    </div>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit {
  // @ViewChild(TemplateRef) template: TemplateRef<any>;
  // @ViewChild('container', {read: ViewContainerRef}) viewContainer: ViewContainerRef;

  ngAfterViewInit(): void {
    // this.viewContainer.createEmbeddedView(this.template);
  }
}
