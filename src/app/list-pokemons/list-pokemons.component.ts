import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../shared/interfaces/pokemon';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrl: './list-pokemons.component.scss',
})
export class ListPokemonsComponent implements OnInit {
  pokemonList?: Pokemon[];
  page: number = 1;
  currentPage: number = 1;
  start: number = 0;
  end: number = 0;
  pagesLength = 0;
  filteredPokemonList?: Pokemon[];

  constructor(
    public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.pokemonList) {
      this.pagesLength = Array(Math.ceil(this.pokemonList?.length / 10)).length;
    }

    // Obtains the page number from the http query parameter and calculates the required offset, e.g. page 3 => 100
    this.route.queryParams.subscribe((params) => {
      if (params['page']) {
        this.page = params['page'];
      }
      const offset = 10 * (this.page - 1);
      this.getPokemons(offset);
    });
  }

  getPokemons(offset: number): void {
    this.apiService.getPokemons(offset).subscribe((response) => {
      this.pokemonList = response;
      if (response.length === 0) {
        this.router.navigate([''], { queryParams: { page: 1 } });
      }
    });
  }

  searchPokemon(text: string) {
    if (!text) {
      return;
    } else {
      this.pokemonList = this.pokemonList?.filter(
        (pokemon) => pokemon?.name.fr.toLowerCase() === text.toLowerCase()
      );
    }
  }
}
