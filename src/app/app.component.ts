import { Component } from '@angular/core';
import { LeftSidebarComponent } from './core/layout/left-sidebar/left-sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,LeftSidebarComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-ecom';
}
