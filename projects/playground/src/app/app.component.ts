import {Component, Renderer2, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container m-5">
      <!--      Directive 'ylClass' without parameter-->
      <!--      <h1 ylClass>-->
      <!--        <span class="text-muted">Master Class</span> Directive without parameters-->
      <!--      </h1>-->

      <!--      Directive 'yClass' with parameter-->
      <h1 ylClass="red">
        <span class="text-muted">Master Class</span> Directive with input parameter
      </h1>

      <h1 [ylClass]="classRed">
        <span class="text-muted">Master Class</span> Directive with dynamic input parameter
      </h1>
    </div>

  `,
  styles: [
      `
      .red {
        color: red;
      }
    `
  ]
})
export class AppComponent implements AfterViewInit {
  // @ViewChild('title') title: ElementRef;
  classRed: string = 'red';
  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    // this.renderer.addClass(this.title.nativeElement, 'display-1');
  }

}
