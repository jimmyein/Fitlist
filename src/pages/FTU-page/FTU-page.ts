import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { AuthenticationService } from '../../services/authenticationService';
import { TabsPage } from './tabs/tabs';
import { SLIDES } from '../../mockData/mockData';
import { Slide } from '../../model/Slide';

@Component({
    templateUrl: './FTU-page.html'
})
export class FTUPage {
    public slides: Slide[];
    
    constructor(
        private _navController: NavController,
        private authenticationService: AuthenticationService) {
        this.slides = SLIDES;
    }

    public login() {
    }

    public skip() {
        window.localStorage.setItem("FTUset", "true");
        this._navController.setRoot(TabsPage);
        this._navController.popToRoot();
    }
}