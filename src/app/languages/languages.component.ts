import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  title = 'Languages';
  subTitle = 'List';
  languageList = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/languages').subscribe(res => {
      this.languageList = res;
    });
  }
}
