import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryComponent} from './projet/country/country.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {PrioritiesComponent} from './projet/priorities/priorities.component';
import {CategoriesComponent} from './projet/categories/categories.component';
import {FctEmailDataComponent} from './projet/email/fct-email-data/fct-email-data.component';
import {LoginComponent} from './login/login.component';
import {FctEmailDataDetailComponent} from './projet/email/fct-email-data-detail/fct-email-data-detail.component';
import {MenuComponent} from './projet/menu/menu.component';
import {DashboardComponent} from './projet/dashboard/dashboard.component';
import {UniNfzComponent} from './projet/uni-nfz/uni-nfz.component';
import {ProfilComponent} from './projet/profil/profil.component';
import {CategorieListComponent} from './projet/categories/categorie-list/categorie-list.component';
import {CategorieCreateComponent} from './projet/categories/categorie-create/categorie-create.component';
import {CountryListComponent} from './projet/country/country-list/country-list.component';
import {CountryCreateComponent} from './projet/country/country-create/country-create.component';
import {PrioritieListComponent} from './projet/priorities/prioritie-list/prioritie-list.component';
import {PrioritieCreateComponent} from './projet/priorities/prioritie-create/prioritie-create.component';
import {EmailComponent} from './projet/email/email.component';
import {FctEmailDataSearchComponent} from './projet/email/fct-email-data-search/fct-email-data-search.component';
import {HomeComponent} from './projet/home/home.component';
import {NotFoundComponent} from './projet/not-found/not-found.component';
import {ChekEmailComponent} from './projet/email/chek-email/chek-email.component';
import {EmailModefyComponent} from './projet/email/email-modefy/email-modefy.component';
import {AppComponent} from './app.component';

export const  routingsComponents = [AppComponent , EmailModefyComponent , ChekEmailComponent, MenuComponent, CategoriesComponent, CountryComponent, CategorieListComponent, CategorieCreateComponent, CountryListComponent, CountryCreateComponent, PrioritiesComponent, PrioritieListComponent, PrioritieCreateComponent, EmailComponent, FctEmailDataComponent, LoginComponent, FctEmailDataDetailComponent, FctEmailDataSearchComponent, DashboardComponent, UniNfzComponent, HomeComponent, ProfilComponent, NotFoundComponent];

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'notFounded', component: NotFoundComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'cat', component: CategoriesComponent},
      {path: 'UniNfz', component: UniNfzComponent},
      {path: '', component: DashboardComponent},
      {path: 'profile', component: ProfilComponent},
      {path: 'country', component: CountryComponent},
      {path: 'prio', component: PrioritiesComponent},
      {path: 'detail', component: FctEmailDataDetailComponent},
      {path: 'migration', component: FctEmailDataComponent},
      {path: 'cat', component: CategoriesComponent},
      {path: 'chek-mail', component: ChekEmailComponent},
      {path: 'modify-mail', component: EmailModefyComponent},
      {path: '**', component: NotFoundComponent},
]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
