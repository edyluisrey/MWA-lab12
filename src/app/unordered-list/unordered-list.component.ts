import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  template: `
    <ul>
        <li *ngFor="let item of items; let i = index">{{item}}</li>
    </ul>
  `,
  styles: []
})
export class UnorderedListComponent implements OnInit {
  @Input('arrayStr') items:[String];
  constructor() { }

  ngOnInit() {
  }

}
