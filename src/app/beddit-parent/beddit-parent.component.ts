import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';

// interface FeedCapture {
//   title : string;
//   thumbNail : string;
//   url : string;
// }

@Component({
  selector: 'app-beddit-parent',
  templateUrl: './beddit-parent.component.html',
  styleUrls: ['./beddit-parent.component.css']
}) 
export class BedditParentComponent implements OnInit {

  retrievedData : any;

  constructor(private redditSvc : RedditService) { }

  ngOnInit() {

    this.getRedditFeed();
  }

  getRedditFeed(){

  this.redditSvc.getFeed().subscribe((redditShape : any) => {
    this.retrievedData = redditShape.data.children;
  });
 }

}
