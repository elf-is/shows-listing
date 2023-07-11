import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, Subject} from "rxjs";
import {apiUrl} from "./shared/global";
import {Show} from "./shared/models/show";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  shows = new Subject<Show []>();

  constructor(private httpClient: HttpClient) {
  }

  search(urlParams: string): Observable<any> {
    return this.httpClient
      .get(apiUrl + '/search/shows?q=' + urlParams)
      .pipe(
        catchError(err => {
          throw new Error(err.error);
        }),
        retry(1),
      );
  }
}
