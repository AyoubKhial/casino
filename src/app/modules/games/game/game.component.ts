import { Component, Input, OnInit } from '@angular/core';
import { RIBBON_CATEGORIES } from '@app/@shared/app-constants';
import { IGame } from '@app/@shared/services/game.service';

@Component({
    selector: 'app-games-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    @Input() game: IGame;
    @Input() currentCategory: string;
    public ribbon: string | undefined;

    ngOnInit(): void {
        this.ribbon = this.getRibbon(this.game?.categories, this.currentCategory);
    }

    private getRibbon = (categories: string[], currentCategory: string): string | undefined => {
        const filteredCategories = categories?.filter(category => category !== currentCategory);
        return filteredCategories?.find(category => RIBBON_CATEGORIES?.includes(category));
    };
}
