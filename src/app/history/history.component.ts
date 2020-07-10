import { Component, OnInit, Input } from '@angular/core';
import { History } from 'src/app/models/history-item.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @Input() public history: History;

  constructor() {

   }
 

  ngOnInit(): void {
  }

}
