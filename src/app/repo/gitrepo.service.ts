import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitrepoService {

  constructor(private _http: HttpClient) { }
  getResume () {
    return this._http.get("https://raw.githubusercontent.com/ansarinaeemakhtar/resume-1/master/resume.json");
  }
}
