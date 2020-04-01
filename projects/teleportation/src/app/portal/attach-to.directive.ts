import {Directive, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {PortalService} from './portal.service';

@Directive({
  selector: '[ylAttachTo]'
})
export class AttachToDirective implements OnInit, OnDestroy {
  @Input('ylAttachTo') targetName: string;

  constructor(private portalService: PortalService,
              private template: TemplateRef<any>) {
  }

  ngOnInit(): void {
    this.portalService.attach(this.targetName, this.template);
  }

  ngOnDestroy(): void {
    this.portalService.clear(this.targetName);
  }
}
