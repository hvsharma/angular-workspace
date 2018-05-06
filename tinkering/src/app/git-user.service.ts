import { Injectable } from '@angular/core';
import { GitUser } from './git-user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitUserService {

  private cachedvalues: Array<{[query: string]: GitUser}> = [];

  constructor(private http: HttpClient) { }

  searchUsers = (query: string): Promise<GitUser> => {
    const promise = new Promise<GitUser>((resolve, reject) => {
      if (this.cachedvalues[query]) {
        resolve(this.cachedvalues[query]);
      } else {
        this.http.get('https://api.github.com/search/users?q=' + query)
          .toPromise()
          .then((response) => {
            resolve(response as GitUser);
          }, (error) => {
            reject(error);
          });
      }
    });

    return promise;
  }

}
