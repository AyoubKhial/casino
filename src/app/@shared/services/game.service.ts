import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IGame {
    id: string;
    name: string;
    image: string;
    categories: string[];
    jackpot?: IJackpot;
};

export interface IJackpot {
    game: string;
    amount: number;
};

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private BASE_PATH = 'http://stage.whgstage.com/front-end-test';

    constructor(private http: HttpClient) {}

    public getGames = (): Observable<IGame[]> => this.http.get<IGame[]>(`${this.BASE_PATH}/games.php`);

    public getJackpots = (): Observable<IJackpot[]> => this.http.get<IJackpot[]>(`${this.BASE_PATH}/jackpots.php`);
}
