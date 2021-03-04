import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  trazerAlbuns(page: number, limit: number): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/albums?_page=${page}&_limit=${limit}`
    );
  }
  trazerAlbunsLength(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/albums`);
  }
}
