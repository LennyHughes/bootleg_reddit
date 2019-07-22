import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvote-button',
  templateUrl: './upvote-button.component.html',
  styleUrls: ['./upvote-button.component.css']
})
export class UpvoteButtonComponent implements OnInit {

  value : number = 0;

  constructor() { }

  ngOnInit() {
  }

  updatePostValue( vote: number) : void{
    this.value += vote;
  }

}
