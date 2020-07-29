import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-connect-me',
  templateUrl: './connect-me.component.html',
  styleUrls: ['./connect-me.component.scss']
})
export class ConnectMeComponent implements OnInit {

  user = faUser;
  email = faAt;
  message = faEnvelope

  constructor() { }

  ngOnInit(): void {
  }

   onSubmit() {
    console.log("submitted")
  }
}

