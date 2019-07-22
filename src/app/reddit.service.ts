import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private httpClient : HttpClient) { }

  getFeed(){
    return this.httpClient.get("https://www.reddit.com/r/aww/.json?limit=10");
  }
}
