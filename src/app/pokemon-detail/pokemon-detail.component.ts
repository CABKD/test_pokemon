import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/interfaces/pokemon';
import { ApiService } from '../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonId!: number;
  id!: string;
  name!: string;
  image!: string;
  types!: string;
  weight!: number;
  height!: number;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtains the id parameter from the url, and obtains the details for that pokemon from the PokeAPI
    // Redirects to the home page if the id provided is not a number (e.g. /pokemon/test)
    this.id = this.route.snapshot.paramMap.get('id')!;
    if (isNaN(Number(this.id))) {
      this.router.navigate([''], { queryParams: { page: 1 } });
    } else {
      this.getDetails(this.id);
      console.log(this.id);
    }
    console.log(this.pokemon);
  }

  getDetails(id: string): void {
    this.apiService
      .getPokemonById(id)

      .subscribe((response) => {
        console.log(response);
        if (response !== null) {
          this.pokemon = response;
          this.pokemonId = response.pokedex_id;
          this.name = response.name ? response.name?.fr : '';
          this.image = response.sprites?.shiny;
          this.types = response.types.map((type) => type.name).join(', ');
          this.weight = response.weight;
          this.height = response.height;
        }
      });
  }
}
