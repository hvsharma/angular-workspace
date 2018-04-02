import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // tslint:disable-next-line:max-line-length
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyR1VJRCI6IjM1ZWZlOGQ2LTFjNjktNDQwMC05NWI0LWMzODA0NzdkNDI5NCIsInJvbGVzIjoiW1wiTENPXCJdIiwiaXNzIjoiWGVyb3ggQ29ycG9yYXRpb24iLCJuYW1lIjoiS2FyaWx5bm4gU3B5a2lucyIsImV4cCI6MTUyMzM0NDQ3MSwiaWF0IjoxNTIyNDgwNDcxLCJlbWFpbCI6ImtzcHlraW5zMkB6ZG5ldC5jb20ifQ.X7yhSIkMW-LN0xmFr915dnHrCVrHbRo649hBiIpXFgM'
  })
};

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8080/mps-api/rest/user/details/all';

  constructor(
    private http: HttpClient
  ) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl, httpOptions)
      .pipe(
        tap(users => this.log(`fetched ${users}`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getUser(id: string): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url)
    .pipe(
      tap(res => this.log(`Fetched Hero with ID = ${id}`)),
      catchError(this.handleError<User>(`getHero ID = ${id}`))
    );
  }

  private log(message: string) {
    console.log('HeroService: ' + message);
  }


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
