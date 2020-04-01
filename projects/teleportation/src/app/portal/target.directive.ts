import {Directive, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {PortalService} from './portal.service';

@Directive({
  selector: '[ylTarget]'
})
export class TargetDirective implements OnInit {
  @Input('ylTarget') targetName: string;

  constructor(private portalService: PortalService, private viewContainer: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.portalService.addTarget(this.targetName, this.viewContainer);

  }



}
