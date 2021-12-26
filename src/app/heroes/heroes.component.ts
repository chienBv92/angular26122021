import { Component, OnInit } from '@angular/core';
import {HEROES} from "../mock-heroes";
import {Hero} from "../interface/hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }

  heroes = HEROES;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}
