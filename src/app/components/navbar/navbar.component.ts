import { Component} from '@angular/core';
import { RouterLink , RouterLinkActive } from '@angular/router';
import { ElementPaddingDirective} from '../../directives/element-padding.directive';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,ElementPaddingDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
