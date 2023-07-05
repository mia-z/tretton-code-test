/** Ambient typing for types declared elsewhere, but expected in this app */

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