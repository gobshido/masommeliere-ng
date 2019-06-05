import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
  MatButtonModule, MatExpansionModule, MatListModule } from '@angular/material';
import { PresentationComponent } from './page/presentation/presentation.component';
import { ParticulierComponent } from './page/particulier/particulier.component';
import { ProfessionnelComponent } from './page/professionnel/professionnel.component';
import { ActualiteComponent } from './page/actualite/actualite.component';
import { ContactComponent } from './page/contact/contact.component';
import { ImagepathPipe } from './pipe/imagepath.pipe';
import { AccueilComponent } from './page/accueil/accueil.component';

const appRoutes: Routes = [
  { path: 'accueil',
    component: AccueilComponent,
    data : { title: 'Accueil'}},
  { path: 'presentation',
    component: PresentationComponent,
    data : { title: 'Presentation'}},
  { path: 'particulier',
    component: ParticulierComponent,
    data : { title: 'Particuliers'}},
  { path: 'professionnel',
    component: ProfessionnelComponent,
    data : { title: 'Professionnels'}},
  { path: 'actualite',
    component: ActualiteComponent,
    data : { title: 'Actualités'}},
  { path: 'contact',
    component: ContactComponent,
    data : { title: 'Contact'}},
];

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    ParticulierComponent,
    ProfessionnelComponent,
    ActualiteComponent,
    ContactComponent,
    ImagepathPipe,
    AccueilComponent
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
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
