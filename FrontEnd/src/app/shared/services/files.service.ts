import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private http: HttpClient
  ) { }

  subirJson(json: any){
    const url = "http://127.0.0.1:8000/api/uploadJson";
    return this.http.post(url,json)
    
  }
}
