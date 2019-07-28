import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
    MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
    MatButtonModule, MatExpansionModule, MatListModule, MatTableModule, MatCardModule
} from '@angular/material';

import { PresentationComponent } from './page/presentation/presentation.component';
import { ParticulierComponent } from './page/particulier/particulier.component';
import { ProfessionnelComponent } from './page/professionnel/professionnel.component';
import { ActualiteComponent } from './page/actualite/actualite.component';
import { ContactComponent } from './page/contact/contact.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { ImageComponent } from './component/image/image.component';
import { PagePrestationComponent } from './page/page-prestation/page-prestation.component';

import { HtmlPipe } from './pipe/html.pipe';
import { TargetPriceFilterPipe } from './pipe/target-price-filter.pipe';
import { CibleFilterPipe } from './pipe/cible-filter.pipe';
import { CategoryFilterPipe } from './pipe/category-filter.pipe';
import { ImagepathPipe } from './pipe/imagepath.pipe';

const appRoutes: Routes = [
  { path: 'accueil',
    component: AccueilComponent,
    data : { title: 'Accueil'}},
  { path: 'actualite',
    component: ActualiteComponent,
    data : { title: 'Actualités'}},
  { path: 'contact',
    component: ContactComponent,
    data : { title: 'Contact'}},
  { path: 'presentation',
    component: PresentationComponent,
    data : { title: 'Presentation'}},
  { path: 'particulier',
    component: ParticulierComponent,
    data : { title: 'Initiation'}},
  { path: 'professionnel',
    component: ProfessionnelComponent,
    data : { title: 'Initiation'}},
  { path: 'page_prestation/:id',
    component: PagePrestationComponent,
    data : { title: 'Prestation'}},
  { path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'},
  { path: '**',
    component: AccueilComponent,
    data : { title: 'Accueil'}},
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
    AccueilComponent,
    ImageComponent,
    HtmlPipe,
    PagePrestationComponent,
    TargetPriceFilterPipe,
    CibleFilterPipe,
    CategoryFilterPipe,
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
        HttpClientModule,
        MatTableModule,
        MatCardModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
