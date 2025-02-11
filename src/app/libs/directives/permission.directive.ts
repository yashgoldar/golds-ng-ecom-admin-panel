import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appPermission]' })
export class PermissionDirective {
  @Input() set appPermission(allowedRoles: string[]) {
    const userRole = localStorage.getItem('userRole'); // Example: Replace with actual auth service
    if (allowedRoles.includes(userRole!)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
