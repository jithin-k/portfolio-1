import { Component, Input, OnInit } from '@angular/core';
import { MyServices } from 'src/app/models/my-services.model'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faAd } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faBluetooth } from "@fortawesome/free-brands-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit {

  @Input() public myServices: MyServices;

  cart = faShoppingCart;
  health = faHeartbeat;
  ads = faAd;
  google = faGoogle;
  bluetooth = faBluetooth;
  aws = faAws;
  twitter = faTwitter;


  constructor() { }

  ngOnInit(): void {
  }

  getIcon(name) {

    switch (name) {
      case "google":
        return this.google

      case "aws":
        return this.aws

      case "twitter":
        return this.twitter

      case "ads":
        return this.ads

      case "bluetooth":
        return this.bluetooth

      case "cart":
        return this.cart

      case "health":
        return this.health

      default: return this.health
    }
  };

}
