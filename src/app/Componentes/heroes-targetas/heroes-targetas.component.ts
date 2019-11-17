import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-targetas',
  templateUrl: './heroes-targetas.component.html',
  styleUrls: ['./heroes-targetas.component.css']
})
export class HeroesTargetasComponent implements OnInit {
  @Input() heroe:any = {}
  @Input() index:number;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  verMas(){
    this.router.navigate(['/heroe',this.index])
  }
}
