import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
interface Breadcrumb {
    label: string;
    url?: string; // If undefined, it's the current page (inactive breadcrumb)
}
@Component({
    selector: 'app-breadcrumbs',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './breadcrumbs.component.html',
    styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
    @Input() breadcrumbs: Breadcrumb[] = []; // Accept breadcrumb data

}
