import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { DemoPipePipe } from './demo-pipe.pipe';
<<<<<<< HEAD
import { IndiancurrencyPipe } from './indiancurrency.pipe';
=======
>>>>>>> 2a8de6217dd6b6a9cf4962b7c35b1f7253f47aa7

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
<<<<<<< HEAD
    DemoPipePipe,
    IndiancurrencyPipe
=======
    DemoPipePipe
>>>>>>> 2a8de6217dd6b6a9cf4962b7c35b1f7253f47aa7
    
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
