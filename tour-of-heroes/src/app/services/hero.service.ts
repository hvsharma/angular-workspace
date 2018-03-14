import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../heroes/hero';
import { HEROES } from '../heroes/mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched all heroes!');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched ${heroes}`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
    .pipe(
      tap(res => this.log(`Fetched Hero with ID = ${id}`)),
      catchError(this.handleError<Hero>(`getHero ID = ${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.getHttpOptions())
      .pipe(
        tap(res => this.log(`Updated hero with ID = ${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.getHttpOptions())
    .pipe(
      tap((result: Hero) => this.log(`Added new Hero with ID : ${result.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.getHttpOptions())
    .pipe(
      tap((result) => this.log(`Deleted Hero with ID : ${id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  searchHeros(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    const url = `${this.heroesUrl}/?name=${term}`;
    return this.http.get<Hero[]>(url).pipe(
      tap(result => this.log(`Found Heroes with matching term : ${term}`)),
      catchError(this.handleError<Hero[]>('searchHeros'))
    );
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  private getHttpOptions(): Object {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return httpOptions;
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
