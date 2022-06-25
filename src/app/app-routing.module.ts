import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/games', pathMatch: 'full' },
	{
		path: 'games',
		loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule)
	},
	// Fallback when no prior route is matched
	{ path: '**', redirectTo: 'games', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
