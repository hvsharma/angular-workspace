import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:['app-servers']         <---- This is for selection of component by attribute (Look app.component.html).
  // selector:'.app-servers'         <---- This is for selection of component by class (Look app.component.html).
  // selection by ID is not supported
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreatedStatus = 'No Servers have been created yet!';
  serverName = 'Test String';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = 'Server have been created! Name of the server is : ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
