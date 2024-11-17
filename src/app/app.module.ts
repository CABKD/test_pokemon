import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http'; // Import du provider
import { PokemonComponent } from './shared/layouts/pokemon/pokemon.component';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ListPokemonsComponent,
    PaginationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [
    provideHttpClient(), // Ajout du provider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
