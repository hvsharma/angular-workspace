import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  private visibility: boolean;
  private loggingArray: String[];

  constructor() { }

  ngOnInit() {
    this.visibility = false;
    this.loggingArray = [];
  }

  toggleVisibility() {
    this.visibility = ! this.visibility;
    this.loggingArray.push(new Date().toUTCString());
  }

  getVisibility() {
    return this.visibility;
  }

  getLoggingArray() {
    return this.loggingArray;
  }

}
