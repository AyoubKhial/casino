export interface IMenuItem {
    label: string;
    value: string;
}

const MENU_ITEMS: IMenuItem[] = [
    {
        value: 'top',
        label: 'Top Games'
    },
    {
        value: 'new',
        label: 'New Games'
    },
    {
        value: 'slots',
        label: 'Slots'
    },
    {
        value: 'jackpots',
        label: 'Jackpots'
    },
    {
        value: 'live',
        label: 'Live'
    },
    {
        value: 'blackjack',
        label: 'Blackjack'
    },
    {
        value: 'roulette',
        label: 'Roulette'
    },
    {
        value: 'table',
        label: 'Table'
    },
    {
        value: 'poker',
        label: 'Poker'
    },
    {
        value: 'other',
        label: 'Other'
    }
]

export { MENU_ITEMS };