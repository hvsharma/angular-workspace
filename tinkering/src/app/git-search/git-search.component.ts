import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';
import { GitUserService } from '../git-user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  searchResults: GitSearch;
  searchQuery: string;
  isSearching: boolean;
  title: string;
  displayQuery: string;

  constructor(
    private gitSearchService: GitSearchService,
    private gitUserService: GitUserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.isSearching = false;

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.displayQuery = params.get('query');
      this.searchQuery = params.get('query');
      this.submitQuery();
    });

    this.route.data.subscribe((result) => {
      this.title = result.title;
    });
  }

  sendQuery() {
    this.searchResults = null;
    this.router.navigate(['/repo-search/' + this.searchQuery]);
  }

  submitQuery() {
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      this.isSearching = true;
      this.executeGitSearch(this.searchQuery);
    }
  }

  private executeGitSearch(query: string) {
    console.log('Calling GitSearch....');
    this.gitSearchService
      .gitSearch(query)
      .then((result) => {
        this.searchResults = result;
        this.isSearching = false;
      }, (error) => {
        alert('Error occurred: ' + error.statusText);
        this.isSearching = false;
      });
  }

  private executeUserSearch(query: string) {
    console.log('Calling Git Users Search!');
    this.gitUserService.searchUsers(query)
      .then((response) => {
        console.log('Users found: ' + response.total_count);
        console.log('Users found: ' + JSON.stringify(response, null, 1));
      }, (error) => {
        console.log('Error Occurred: ' + error.statusText);
      });
  }

}
