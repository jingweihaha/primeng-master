import { TreeTableModule } from 'primeng/treetable';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MytreetableComponent } from './mytreetable/mytreetable.component';


@NgModule({
  declarations: [
    AppComponent,
    MytreetableComponent
  ],
  imports: [
    BrowserModule,
    TreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
