import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/Servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

    heroe:any = {};
  constructor(private activaRoute:ActivatedRoute,
    private _heroeService:HeroesService) { 
    this.activaRoute.params.subscribe( params => {
      this.heroe = _heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    })
  }


}
