import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [MatSidenavModule , MatButtonModule, RouterLinkWithHref],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
sidenav: any;
}
