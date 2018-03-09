import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-builder',
  templateUrl: './server-builder.component.html',
  styleUrls: ['./server-builder.component.css']
})
export class ServerBuilderComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    // if (this.newServerName.trim() !== '' && this.newServerContent.trim() !== '') {
    //   this.serverElements.push({
    //     type: 'server',
    //     name: this.newServerName,
    //     content: this.newServerContent
    //   });
    // }
  }

  onAddBlueprint() {
    // if (this.newServerName.trim() !== '' && this.newServerContent.trim() !== '') {
    //   this.serverElements.push({
    //     type: 'blueprint',
    //     name: this.newServerName,
    //     content: this.newServerContent
    //   });
    // }
  }

}
