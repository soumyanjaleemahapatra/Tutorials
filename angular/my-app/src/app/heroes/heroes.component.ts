import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'

import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*hero: Hero = {
    id: 1,
    name:'Mahi'
  };*/
  //heroesList = HEROES

  heroesList: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    //this.heroesList = this.heroService.getHeroes();
    this.heroService.getHeroes()
        .subscribe(heroesFromService => this.heroesList = heroesFromService)
  }
  onSelect(heroInfo: Hero): void {
    this.selectedHero = heroInfo;
  }

}
