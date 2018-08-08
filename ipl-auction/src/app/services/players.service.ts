import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

/**
 * 
 * @author : Naveen Kumar
 * @date : 07-Aug-2018
 * @class - PlayersService
 *    This service which helps to fetch data from the json file in the
 *    jsonData/players.json
 * 
 *  RxJS - Operators are used to map the players data from the response and returns it.
 * 
*/

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getAllPalyersDetails() {
    const url = 'assets/jsonData/players.json';
    return this.http
    .get(url)
    .pipe(
      map(res => res["players"])
    );
  }
}
