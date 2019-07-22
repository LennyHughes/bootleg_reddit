import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() title : string;
  @Input() picStr : string;
  @Input() urlStr : string;

  constructor() { }

  ngOnInit() {
  }

}
