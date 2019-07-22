import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BedditParentComponent } from './beddit-parent/beddit-parent.component';
import { PostsComponent } from './beddit-parent/posts/posts.component';
import { RedditService } from './reddit.service';

import {HttpClientModule} from '@angular/common/http';
import { UpvoteButtonComponent } from './beddit-parent/posts/upvote-button/upvote-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BedditParentComponent,
    PostsComponent,
    UpvoteButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
