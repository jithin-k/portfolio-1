import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {

  faCheck = faCheck;
  faDownload = faDownload;
  linkedin = faLinkedinIn;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faHackerrank = faHackerrank;

  constructor() { }

  ngOnInit(): void {
  }

}
