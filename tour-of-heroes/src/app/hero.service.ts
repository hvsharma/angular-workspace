import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';

@Injectable()
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }

}
