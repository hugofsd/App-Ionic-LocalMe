import { Component, OnInit } from '@angular/core';
import { Geolocation} from '@capacitor/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  loading: boolean;
  latitude: number;
  longitude: number;

  constructor(
    public loadingController: LoadingController
  ) { }
  ngOnInit() {} 
  pesquisar(){
    this.getLocation();
  }
  async getLocation() {
    this.loading = true;
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.loading = false;
  }
}
