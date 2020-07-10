import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from 'src/app/models/history-item.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  private _jsonURL = 'assets/resources/work.json';
  public history;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.history = data;
      console.log(this.history)
     });
   }
   public getJSON(): Observable<any> {
     return this.http.get(this._jsonURL);
   }
 

  ngOnInit(): void {
  }

}
