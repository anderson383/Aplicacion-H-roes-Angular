import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/Servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes:any[] = [];
  termino:string;
  constructor(private _activaRoute:ActivatedRoute, private heroesService:HeroesService,private router:Router) { }

  ngOnInit() {
    this._activaRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.heroes = this.heroesService.getBuscarHeroe(params['termino'])
      console.log(this.heroes)
    })
  }
  verMas(idx:number){
    this.router.navigate(['/heroe',idx])
  }

}
