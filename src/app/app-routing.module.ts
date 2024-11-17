import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { ApiService } from './shared/services/api.service';

const routes: Routes = [
  {
    path: '',
    component: ListPokemonsComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailComponent,
    resolve: { pokemon: ApiService },
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
