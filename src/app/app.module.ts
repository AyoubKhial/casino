import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@shared';
import { CoreModule } from '@core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesModule } from './modules/games/games.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule,
		HttpClientModule,
		GamesModule,
		AppRoutingModule // must be imported as the last module as it contains the fallback route
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
