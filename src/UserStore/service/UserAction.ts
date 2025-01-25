import {makeAutoObservable} from "mobx";
import {UserService} from "./UserService";
import {UserState} from "../model/UserState";
import {fromPromise} from "mobx-utils";

export class UserAction {
    private userService: UserService;
    private readonly userState: UserState;

    constructor(userState: UserState) {
        this.userState = userState;
        this.userService = new UserService();
        makeAutoObservable(this)
    }

    async fetchUser() {
        this.userState.setUserList = fromPromise(this.userService.getUser())
    }
}