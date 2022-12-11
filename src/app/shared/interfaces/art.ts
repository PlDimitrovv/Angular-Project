import { IUser } from "./user"

export interface IArt {
    title: string,
    imageUrl: string,
    artCategory: string,
    description: string,
    rating: number
    _id: string,
    owner:IUser
}