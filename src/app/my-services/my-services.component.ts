import { Component, Input, OnInit } from '@angular/core';
import { MyServices } from 'src/app/models/my-services.model'

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit {

  @Input() public myServices: MyServices;

  constructor() { }

  ngOnInit(): void {
  }

}
