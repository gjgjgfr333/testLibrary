import {makeAutoObservable} from "mobx";
import {User} from "../type/UserType";
import {IPromiseBasedObservable} from "mobx-utils";

export type UserType = IPromiseBasedObservable<User[]> | null

export class UserState {
    private userList?: UserType
    constructor() {
        makeAutoObservable(this);
    }

   get getUserList() {
        return this.userList
   }

   set setUserList(value: UserType) {
        this.userList = value
   }
}