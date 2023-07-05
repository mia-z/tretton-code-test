/** Ambient typing for types declared elsewhere, but expected in this app */

const cities = ["Helsingborg", "Lund", "Ljubljana" ,"Stockholm", "Borlänge"] as const;

declare type TrettonCountry = typeof cities[number];

declare type User = {
    name: string,
    email: string,
    phoneNumber: string,
    office: string,
    manager: string,
    orgUnit: string,
    mainText: string,
    github?: string,
    twitter?: string,
    stackoverflow?: string,
    linkedIn?: string,
    imagePortraitUrl: string,
    imageWallOfLeetUrl: string,
    highlighted: boolean,
    published: boolean,
    primaryRole: string,
    secondaryRole?: string,
    area: string
}