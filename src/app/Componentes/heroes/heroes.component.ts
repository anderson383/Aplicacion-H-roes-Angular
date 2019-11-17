import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/Servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

   heroes:any[] = [];
  
  constructor( private _heroeService:HeroesService, private router:Router ) { }

  ngOnInit() {
    this.heroes = this._heroeService.getInfo();
  }
  
  verMas(idx:number){
    this.router.navigate(['/heroe',idx])
  }
}
