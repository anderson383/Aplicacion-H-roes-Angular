import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/Servicios/heroes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

    heroes:any[] = [];
  constructor(private router:Router) { }

  buscarHeroe(texto:string){

    this.router.navigate([ '/buscar',texto ])
    
  }

}
