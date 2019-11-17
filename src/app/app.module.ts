import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes'

//Componentes
import { AppComponent } from './app.component';
import { NavBarComponent } from './Componentes/TempleatesComp/nav-bar/nav-bar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { AboutComponent } from './Componentes/about/about.component';
import { HeroesComponent } from './Componentes/heroes/heroes.component';
import { HeroesService } from './Servicios/heroes.service';
import { HeroeComponent } from './Componentes/heroe/heroe.component';
import { BuscadorComponent } from './Componentes/buscador/buscador.component';
import { HeroesTargetasComponent } from './Componentes/heroes-targetas/heroes-targetas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroesTargetasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
