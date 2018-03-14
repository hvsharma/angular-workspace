import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../services/hero.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerm$ = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerm$.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // https://angular.io/guide/http#switchmap
      switchMap((term: string) => this.heroService.searchHeros(term))
    );
  }

  // Push a search term into the observable stream.
  search(term: string) {
    this.searchTerm$.next(term);
  }

}
