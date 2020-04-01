import {Injectable, TemplateRef, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  private targets: Map<string, ViewContainerRef>;

  constructor() {
    this.targets = new Map<string, ViewContainerRef>();
  }

  addTarget(targetName: string, viewContainer: ViewContainerRef) {
    console.log(targetName);
    this.targets.set(targetName, viewContainer);
  }

  attach(targetName: string, template: TemplateRef<any>) {

    this.getTarget(targetName).createEmbeddedView(template);
  }

  clear(targetName: string) {
    this.getTarget(targetName).clear();
  }

   getTarget(targetName: string) {
    console.log(targetName);
    return this.targets.has(targetName) ? this.targets.get(targetName) : null;
  }
}
