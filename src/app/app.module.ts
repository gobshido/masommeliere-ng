import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
MatButtonModule, MatExpansionModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
