/** Ambient typing for types declared elsewhere, but expected in this app */

const cities = ["Helsingborg", "Lund", "Ljubljana" ,"Stockholm", "Borlänge"] as const;

declare type TrettonCity = typeof cities[number];

declare type User = {
    name: string,
    email: string,
    phoneNumber: string,
    office: TrettonCity,
    manager: string,
    orgUnit: string,
    mainText: string,
    gitHub?: string,
    twitter?: string,
    stackOverflow?: string,
    linkedIn?: string,
    imagePortraitUrl: string,
    imageWallOfLeetUrl: string,
    highlighted: boolean,
    published: boolean,
    primaryRole: string,
    secondaryRole?: string,
    area: string
}