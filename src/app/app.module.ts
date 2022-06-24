import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		AppRoutingModule // must be imported as the last module as it contains the fallback route
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
