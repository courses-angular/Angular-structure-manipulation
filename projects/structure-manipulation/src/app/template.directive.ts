import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ylTemplate]'
})
export class TemplateDirective implements OnInit {
// @Input('ylTemplate') templateRef: TemplateRef<any>;
  constructor(private container: ViewContainerRef,
              private templateRef: TemplateRef<any>) {
  }

  ngOnInit(): void {
    console.log(this.container);
    this.container.createEmbeddedView(this.templateRef);

  }
}
