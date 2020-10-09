import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { QuestionsComponent } from './questions/questions.component';
import { AccordionComponent } from './questions/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    MatExpansionModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
