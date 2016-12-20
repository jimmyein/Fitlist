import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail-page/detail-page';
import { WorkoutServiceClient } from '../../services/workoutServiceClient';
import { WorkoutConstants } from '../../constants/WorkoutConstants';
import { FEATUREDWORKOUTS } from '../../mockData/mockData';


@Component({
  templateUrl: './store-page.html',
  providers: [WorkoutServiceClient]
})
export class StorePage {
  public DifficultyLevels: string[] = WorkoutConstants.DifficultyLevels;
  public FocusOptions: string[] = WorkoutConstants.FocusOptions;
  public BodyPartsOptions: string[] = WorkoutConstants.BodyPartsOptions;
  public WorkoutTypeOptions: string[] = WorkoutConstants.WorkoutTypeOptions;
  public featuredWorkoutSlideOptions = {
    loop: true,
    autoplay: 5000,
    speed: 200
  };
  public filter: string;
  public featuredWorkouts;

  constructor(private navController: NavController,
    private workoutServiceClient: WorkoutServiceClient) {
    this.featuredWorkouts = FEATUREDWORKOUTS;
    this.filter = "WorkoutTypeOptions";
  }

  goToDetailPage(filter: string, value: string) {
    this.navController.push(DetailPage, {
      filter: filter, value: value
    });
  }
}
