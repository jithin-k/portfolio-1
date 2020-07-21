import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private _infoJsonURL = 'assets/resources/info.json';

  public info;
  constructor(private http: HttpClient) {
    this.getInfo()
  }

  private getInfo() {
    this.getJSON(this._infoJsonURL).subscribe(data => {
      this.info = data;
      console.log(this.info);
     });
   }

   private getJSON(urlString: string): Observable<any> {
     return this.http.get(urlString);
   }

  ngOnInit(): void {
  }

}
