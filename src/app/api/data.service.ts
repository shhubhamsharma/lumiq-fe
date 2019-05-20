import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api =`http://localhost:4000/`
  constructor(private http: HttpClient ) { }
  /**
   * callSuperHero
   */
  public callSuperHero(data) {
    return this.http.post(`${this.api}callSuperHero`, data);
  }
}
