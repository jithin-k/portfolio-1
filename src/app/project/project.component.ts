import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  chevron = faChevronRight;
  
  constructor() { }

  ngOnInit(): void {
    this.masonryLayoutHeightSetUp();
  }

  masonryLayoutHeightSetUp() {
    const numCols = 2;
    const colHeights = Array(numCols).fill(0);
    const container = document.getElementById('masonry-with-columns');

    Array.from(container.children as HTMLCollectionOf<HTMLElement>).forEach((child, i) => {
      const order = i % numCols;
      child.style.order = order as any;
      colHeights[order] += parseFloat(child.clientHeight as any);
    })
    container.style.height = Math.max(...colHeights) + 'px';
  }

}
