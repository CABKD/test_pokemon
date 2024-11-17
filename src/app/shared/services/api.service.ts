import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) {}

  getPokemons(offset: number = 0): Observable<Pokemon[]> {
    const options = {
      params: new HttpParams().set('limit', '10').set('offset', offset),
    };
    return this.http.get<Pokemon[]>(environment.apiUrl, options);
  }

  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(environment.apiUrl + '/' + id).pipe(
      catchError((err) => {
        this.router.navigate([''], { queryParams: { page: 1 } });
        throw 'Error:' + err;
      })
    );
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon> {
    const id = route.paramMap.get('id') ?? '';
    return this.getPokemonById(id);
  }
}
