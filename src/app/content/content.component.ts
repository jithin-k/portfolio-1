import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private _jsonURL = 'assets/resources/work.json';
  public workHistory;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.workHistory = data;
      console.log(this.workHistory)
     });
   }
   public getJSON(): Observable<any> {
     return this.http.get(this._jsonURL);
   }

  ngOnInit(): void {
  }

}
