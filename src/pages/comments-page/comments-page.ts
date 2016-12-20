import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Comment } from '../../model/Comment';
import { COMMENTS } from '../../mockData/mockData';

@Component({
  templateUrl: './comments-page.html'
})
export class CommentsPage {

  public comments: Comment[];


  constructor(private _navController: NavController,
    private loadingController: LoadingController) {

    this.comments = COMMENTS;
    this.presentLoading();
  }

  presentLoading() {
    let loading = this.loadingController.create({
      content: "Loading...",
      duration: 100
    });

    loading.present();
  }
}
