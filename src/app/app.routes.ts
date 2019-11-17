import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { HeroesComponent } from './Componentes/heroes/heroes.component';
import { AboutComponent } from './Componentes/about/about.component';
import { HeroeComponent } from './Componentes/heroe/heroe.component';
import { BuscadorComponent } from './Componentes/buscador/buscador.component';
const APP_ROUTES:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);