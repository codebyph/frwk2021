import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  trazerProdutos(page: number, limit: number): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/posts?_page=${page}&_limit=${limit}`
    );
  }

  trazerProdutosLength(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/posts`);
  }
}
