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
    this.executeGitSearch();
    this.executeUserSearch();
  }

  private executeGitSearch() {
    console.log('Calling GitSearch....');
    this.gitSearchService
      .gitSearch('angular')
      .then((response) => {
        console.log('Total Libraries Found: ' + response.total_count);
      }, (error) => {
        console.log('Error occurred: ' + error.statusText);
      });
  }

  private executeUserSearch() {
    console.log('Calling Git Users Search!');
    this.gitUserService.searchUsers('hvsharma')
      .then((response) => {
        console.log('Users found: ' + response.total_count);
        console.log('Users found: ' + JSON.stringify(response, null, 1));
      }, (error) => {
        console.log('Error Occurred: ' + error.statusText);
      });
  }

  constructor(private gitSearchService: GitSearchService, private gitUserService: GitUserService) { }
}
