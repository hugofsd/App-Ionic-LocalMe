import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pequisar endereço', url: '/documentos', icon: 'search' },
    { title: 'Minha localização', url: '/maps', icon: 'paper-plane' },
    { title: 'Página inicial', url: '/home', icon: 'home' },
 
  ];
  constructor() {}
}


