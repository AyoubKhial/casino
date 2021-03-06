import { Component, OnInit } from '@angular/core';
import { IMenuItem, MENU_ITEMS } from '@app/@shared/app-constants';
import { DataService } from '@app/@shared/services/data.service';

interface IReactiveMenuItem extends IMenuItem {
    active: boolean;
};

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public menuItems: IReactiveMenuItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.menuItems = MENU_ITEMS?.map(item => ({ ...item, active: false }));
        this.changeMenuItem(this.menuItems[0]?.value);
    }

    public changeMenuItem = (value: string): void => {
        this.menuItems = MENU_ITEMS?.map(item => ({ ...item, active: item?.value === value }));
        this.dataService.changeCategory(value);
    };

}
