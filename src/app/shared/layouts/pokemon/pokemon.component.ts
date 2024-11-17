import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent implements OnInit {
  ngOnInit(): void {}
  @Input() pokemon!: Pokemon;
}
