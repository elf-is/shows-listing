import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import { ListComponent } from './shows/list/list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ItemComponent } from './shows/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
