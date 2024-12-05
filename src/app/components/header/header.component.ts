import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  seasons = ['Temporada 1', 'Temporada 2', 'Temporada 3', 'Temporada 4'];
}
