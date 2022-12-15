import { IUser } from "./user"

export interface IArt {
    title: string,
    imageUrl: string,
    artCategory: string,
    description: string,
    likes: []
    _id: string,
    owner:IUser
}