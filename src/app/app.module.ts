import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
	{ path: 'languages', component: LanguagesComponent },
	{ path: 'languages/:id', component: LanguagesComponent },
	// {
	//   path: 'heroes',
	//   component: HeroListComponent,
	//   data: { title: 'Heroes List' }
	// },
	// {
	//   path: '',
	//   redirectTo: '/heroes',
	//   pathMatch: 'full'
	// },
	// { path: '**', component: PageNotFoundComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		LanguagesComponent,
		NavbarComponent
	],
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		),
		BrowserModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
