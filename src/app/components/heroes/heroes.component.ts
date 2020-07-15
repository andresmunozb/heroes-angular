import { Component, OnInit } from '@angular/core';
/** Services */
import { HeroesService, Heroe } from './../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService,
              private _router:Router
    ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  showHeroe(idx:number){
    this._router.navigate(['/heroes', idx]);
  }

}
