import { Component, OnInit } from '@angular/core';
import { GitSearch } from './git-search';
import { GitSearchService } from './git-search.service';
import { GitUserService } from './git-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'GitHub Browser';

  ngOnInit() {

  }

  constructor() { }
}
