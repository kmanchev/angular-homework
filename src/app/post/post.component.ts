import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { POSTS } from '../mock-posts';
import { PostDisplayService } from '../post-display/post-display.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    posts = POSTS;
    selectedPost: Post;


  constructor(private postDisplayService: PostDisplayService) 
  { }


  ngOnInit() {
  }

  onSelect(post: Post): void {
    this.postDisplayService.selectPost(post);
  }

}
