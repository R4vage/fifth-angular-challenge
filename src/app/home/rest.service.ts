import { Hamburger } from './../models/hamburger.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  public get(url: string) {
    return this.http.get(url);
  }

  public post(url: string, body: any) {
    return this.http.post(url, body);
  }

  public updateCurrent(body: Hamburger) {
    this.post('http://localhost:3000/currentHamburger', body).subscribe(
      (respuesta) => {}
    );
  }

  public updatePreviouses(body: Hamburger[]) {
    this.post('http://localhost:3000/previousHamburgers', {
      hamburgers: body,
    }).subscribe((respuesta) => {});
  }
}
