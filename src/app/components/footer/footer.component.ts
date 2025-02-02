import { Component } from '@angular/core';
import { ExternalLinkDirective } from '../../directives/external-link.directive';

@Component({
  selector: 'app-footer',
  imports: [ExternalLinkDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
