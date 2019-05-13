import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostDisplayComponent } from './post-display/post-display.component';
import { PostDisplayService } from './post-display/post-display.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PostDisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
