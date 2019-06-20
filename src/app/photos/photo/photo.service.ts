import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

  constructor(private http: HttpClient) {}

  public listFromUser(userName: string): Observable<Object[]> {
    return this.http.get<Object[]>(`${API}/${userName}/photos`);
  }

}
