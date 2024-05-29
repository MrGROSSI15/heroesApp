import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HeroesService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = environments.baseUrl;

  getHeroes():Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

}
