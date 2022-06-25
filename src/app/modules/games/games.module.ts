import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './games-list/games-list.component';
import { GameComponent } from './game/game.component';

@NgModule({
    imports: [CommonModule, GamesRoutingModule],
    declarations: [GamesListComponent, GameComponent]
})
export class GamesModule {}
