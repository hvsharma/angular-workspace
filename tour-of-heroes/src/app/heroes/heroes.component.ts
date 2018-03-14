import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../services/hero.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroesOutput) => { this.heroes = heroesOutput; });
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  add (name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(((hero) => { this.heroes.push(hero); }));
  }

  delete (hero: Hero): void {
    if (hero) {
      this.heroService.deleteHero(hero)
        .subscribe(() => {
          this.heroes = this.heroes.filter((heroElement) => heroElement !== hero);
        });
    }
  }

}
