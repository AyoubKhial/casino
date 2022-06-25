import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesListComponent } from './games-list/games-list.component';

const routes: Routes = [
    {
        path: '',
        component: GamesListComponent,
        data: { title: 'Games List' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class GamesRoutingModule {}
