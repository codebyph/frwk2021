import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  constructor(private http: HttpClient) {}

  trazerTarefas(params: any, page: number, limit: number): Observable<any> {
    if (params == "todas") {
      return this.http.get<any>(
        `${environment.baseUrl}/todos?_page=${page}&_limit=${limit}`
      );
    } else {
      return this.http.get<any>(
        `${environment.baseUrl}/todos?completed=${params}&_page=${page}&_limit=${limit}`
      );
    }
  }
  trazerTodasAsTarefas(params: any) {
    return params === "todas"
      ? this.http.get<any>(`${environment.baseUrl}/todos`)
      : this.http.get(`${environment.baseUrl}/todos?completed=${params}`);
  }
}
