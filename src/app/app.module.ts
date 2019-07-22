import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ImagepathPipe } from './pipe/imagepath.pipe';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
  MatButtonModule, MatExpansionModule, MatListModule } from '@angular/material';

import { PresentationComponent } from './page/presentation/presentation.component';
import { ParticulierComponent } from './page/particulier/particulier.component';
import { ProfessionnelComponent } from './page/professionnel/professionnel.component';
import { ActualiteComponent } from './page/actualite/actualite.component';
import { ContactComponent } from './page/contact/contact.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { ImageComponent } from './component/image/image.component';
import { HtmlPipe } from './pipe/html.pipe';
import { WineShopperComponent } from './page/wine-shopper/wine-shopper.component';
import { CaveComponent } from './page/cave/cave.component';
import { BordelaisEleganceComponent } from './page/bordelais-elegance/bordelais-elegance.component';
import { IntensementBordeauxComponent } from './page/intensement-bordeaux/intensement-bordeaux.component';
import { GrandeBoucleComponent } from './page/grande-boucle/grande-boucle.component';
import { TeamBuildingComponent } from './page/team-building/team-building.component';
import { WineClubComponent } from './page/wine-club/wine-club.component';
import { InvitationVoyageComponent } from './page/invitation-voyage/invitation-voyage.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'},
  { path: 'accueil',
    component: AccueilComponent,
    data : { title: 'Accueil'}},
  { path: 'presentation',
    component: PresentationComponent,
    data : { title: 'Presentation'}},
  { path: 'particulier',
    component: ParticulierComponent,
    data : { title: 'Initiation pour les particuliers'}},
  { path: 'professionnel',
    component: ProfessionnelComponent,
    data : { title: 'Initiation pour les professionnels'}},
  { path: 'actualite',
    component: ActualiteComponent,
    data : { title: 'Actualités'}},
  { path: 'contact',
    component: ContactComponent,
    data : { title: 'Contact'}},
  { path: 'personal-wine-shopper',
    component: WineShopperComponent,
    data : { title: 'Personal Wine Shopper'}},
  { path: 'bordelais-elegance',
    component: BordelaisEleganceComponent,
    data : { title: 'Le Bordelais et son élégance'}},
  { path: 'intensement-bordeaux',
    component: IntensementBordeauxComponent,
    data : { title: 'Intensément Bordeaux'}},
  { path: 'grande-boucle',
    component: GrandeBoucleComponent,
    data : { title: 'La Grande Boucle'}},
  { path: 'invitation-voyage',
    component: InvitationVoyageComponent,
    data : { title: 'Invitation au voyage'}},
  { path: 'gestion-cave',
    component: CaveComponent,
    data : { title: 'Expertise et gestion de cave'}},
  { path: 'team-building',
    component: TeamBuildingComponent,
    data : { title: 'Into the Wine !'}},
  { path: 'wine-club',
    component: WineClubComponent,
    data : { title: 'Wine club'}},
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
    WineShopperComponent,
    CaveComponent,
    BordelaisEleganceComponent,
    IntensementBordeauxComponent,
    GrandeBoucleComponent,
    TeamBuildingComponent,
    WineClubComponent,
    InvitationVoyageComponent,
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
