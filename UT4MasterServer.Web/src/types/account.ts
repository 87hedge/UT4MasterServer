import { AccountFlag } from "@/enums/account-flag";

export interface IAccount {
    ID: string;
    Username: string;
    CreatedAt: string;
    LastLoginAt: string;
    Email: string;
    CountryFlag: string;
    Avatar: string;
    GoldStars: number;
    BlueStars: number;
    XP: number;
    XPLastMatch: number;
    LastMatchAt: string;
    Level: number;
    LevelStockLimited: number;
    Roles?: AccountFlag[];
}
