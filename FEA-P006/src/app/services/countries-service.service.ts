import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly API: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.API}/all`);
  }
}
