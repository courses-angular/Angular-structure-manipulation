import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ylClass]'
})
export class ClassDirective implements OnInit {
  @Input('ylClass') className: string;
  constructor(private renderer: Renderer2,
              private hostElement: ElementRef) {
  }

  ngOnInit(): void {
    this.renderer.addClass(this.hostElement.nativeElement, 'display-1');
    this.renderer.addClass(this.hostElement.nativeElement, this.className);
  }
}
