import { Component, OnInit } from '@angular/core';
import { PostDisplayService } from './post-display.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  selectedPost:Post;

  constructor(private postDisplayService: PostDisplayService
  ) { }

  ngOnInit() {
    this.postDisplayService.change.subscribe(selectedPost => {
      this.selectedPost = selectedPost;
    });
  }

}
