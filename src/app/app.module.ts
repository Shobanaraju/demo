import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { DemoPipePipe } from './demo-pipe.pipe';
import { IndiancurrencyPipe } from './indiancurrency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DemoPipePipe,
    IndiancurrencyPipe
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
