import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from '../shared/interfaces/pokemon';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input()
  pokemonList?: Pokemon[];

  /** The number of pokemons to display */
  @Input()
  pageSize = 10;

  @Input()
  currentPage = 1;

  /** The number of buttons to show either side of the current page */
  @Input()
  maxSize = 2;

  /** Display the Next/Previous buttons */
  @Input()
  nextPreviousButtons = true;

  totalPages: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.totalPages = this.pokemonList
      ? new Array(Math.ceil(this.pokemonList?.length / this.pageSize))
      : [];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalPages = this.pokemonList
      ? new Array(Math.ceil(this.pokemonList?.length / this.pageSize))
      : [];
  }

  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  /** Set next page number */
  next() {
    const nextPage = this.currentPage + 1;
    nextPage <= this.totalPages.length && this.selectPageNumber(nextPage);
  }

  /** Set previous page number */
  previous() {
    const previousPage = this.currentPage - 1;
    previousPage >= 1 && this.selectPageNumber(previousPage);
  }
}
