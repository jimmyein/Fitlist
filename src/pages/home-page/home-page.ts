import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/UserService';
import { Comment } from '../../model/Comment';
import { ACTIVITIES, SLEEP, SOCIALMETRIC, COMMENTS } from '../../mockData/mockData';

@Component({
  templateUrl: './home-page.html',
  providers: [UserService]
})
export class HomePage {

  public activity;
  public sleep;
  public socialMetrics;
  public comments: Comment[];
  public events = null;
  public showDetail = false;

  constructor(private navController: NavController,
    private userService: UserService) {
    this.activity = ACTIVITIES;
    this.sleep = SLEEP;
    this.socialMetrics = SOCIALMETRIC;
    this.comments = COMMENTS;
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public toggle(): void {
    this.showDetail = !this.showDetail;
  }

  public getEvents(): void {
    this.userService.getEvent().then(data => {
      this.events = data;
    });
  }
}