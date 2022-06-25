import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '@app/@shared/services/data.service';
import { GameService, IGame, IJackpot } from '@app/@shared/services/game.service';
import { map, Observable, takeUntil, Subject, mergeMap, combineLatest, timer } from 'rxjs';

@Component({
    selector: 'app-games-games-list',
    templateUrl: './games-list.component.html',
    styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit, OnDestroy {

    public $games: Observable<IGame[]>;
    public currentCategory: string;
    private JACKPOTS_FETCH_INTERVAL = 5000;
    private unsubscribeNotifier = new Subject<void>();

    constructor(private gameService: GameService, private dataService: DataService) { }

    ngOnInit(): void {
        this.listenToCategoryChangeEvent();
    }

    private listenToCategoryChangeEvent = (): void => {
        this.dataService.currentCategory.pipe(
            takeUntil(this.unsubscribeNotifier)
        ).subscribe(category => {
            this.currentCategory = category;
            this.$games = this.getGames(category);
        });
    };

    private getGames = (category: string): Observable<IGame[]> => {
        return combineLatest([
            this.gameService.getGames(),
            timer(0, this.JACKPOTS_FETCH_INTERVAL).pipe(mergeMap(() => this.gameService.getJackpots())),
        ]).pipe(
            map(([games, jackpots]) => {
                return games?.map(game => this.mapJackpotToGame(game, jackpots))?.filter(game => this.isGameInCurrentCategory(game, category));
            })
        );
    };

    private isGameInCurrentCategory = (game: IGame, currentCategory: string): boolean => {
        switch (currentCategory) {
            case 'jackpots':
                return !!game?.jackpot;
            case 'other':
                return game?.categories?.some(category => ['fun', 'ball', 'virtual'].includes(category));
            default:
                return game?.categories?.includes(currentCategory);
        }
    };

    private mapJackpotToGame = (game: IGame, jackpots: IJackpot[]): IGame => ({ ...game, jackpot: jackpots?.find(jackpot => jackpot?.game === game?.id) });

    ngOnDestroy(): void {
        this.unsubscribeNotifier.next();
        this.unsubscribeNotifier.complete();
    }
}
