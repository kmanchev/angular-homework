import { Injectable, Output, EventEmitter } from '@angular/core'
import { Post } from '../post';

@Injectable()
export class PostDisplayService {

  post:Post;

  @Output() change: EventEmitter<Post> = new EventEmitter();

  selectPost(post: Post) {
    this.post = post;
    this.change.emit(this.post);
  }

}