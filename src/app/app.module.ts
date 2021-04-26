import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./state/app.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {BarcodeReaderComponent} from "./components/barcode-reader/barcode-reader.component";
import {MaterialModule} from "./shared/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PrinterComponent} from './components/printer/printer.component';
import {LcdScreenComponent} from './components/lcd-screen/lcd-screen.component';
import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "./views/products/state/products.effects";
import {HttpClientModule} from "@angular/common/http";
import {ProductsComponent} from './views/products/products.component';
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    BarcodeReaderComponent,
    PrinterComponent,
    LcdScreenComponent,
    ProductsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([ProductsEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
