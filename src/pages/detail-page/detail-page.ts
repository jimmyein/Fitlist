import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { WorkoutDto, QueryDto, OrderBy, DifficultyLevels } from '../../model/Workouts';
import { GuidedWorkoutService } from '../../services/guidedWorkoutService';
import { WorkoutServiceClient } from '../../services/workoutServiceClient';
import { ExerciseSearchResultDTO } from '../../model/ExerciseSearchResultDTO';
import { FitnessSearchResultSchema } from '../../model/FitnessSearchResultSchema';
import { workoutDetailPage } from '../workoutDetail-page/workoutDetail-page';

@Component({
  templateUrl: './detail-page.html'
})
export class DetailPage {

  private filter: string;
  private value: string;
  private loading: Loading;
  public workoutPlans: FitnessSearchResultSchema[];

  constructor(
    private loadingController: LoadingController,
    private navController: NavController,
    platform: Platform,
    navParams: NavParams,
    private guidedWorkoutService: GuidedWorkoutService,
    private workoutServiceClient: WorkoutServiceClient) {
    this.filter = navParams.get("filter");
    this.value = navParams.get("value");

    this.presentLoading();
    this.workoutServiceClient.searchWorkoutPlans().then((response) => {
      if (this.loading) {
        this.loading.dismiss();
      }

      this.workoutPlans = this.guidedWorkoutService.getWokroutPlans().results;
    });
  }

  presentLoading() {
    this.loading = this.loadingController.create({
      content: "Loading...",
      duration: 20
    });

    this.loading.present();
  }

  private getExercises(): Promise<Object> {
    switch (this.filter) {
      case "DifficultyLevels":
        return this.workoutServiceClient.getExercises(0, 1, "level", this.value);

      case "FocusOptions":
        return this.workoutServiceClient.getExercises(0, 1, "focus", this.value);

      case "BodyPartsOptions":
        return this.workoutServiceClient.getExercises(0, 1, "level", this.value);

      case "WorkoutTypeOptions":
        return this.workoutServiceClient.getExercises(0, 1, "bodyParts", this.value);

      default:
        return this.workoutServiceClient.getExercises();
    }
  }

  goBack() {
    this.navController.pop();
  }

  public goToDetail(workoutPlan: FitnessSearchResultSchema) {
    this.presentLoading();
    this.workoutServiceClient.getExercisesById(workoutPlan.id).then(response => {
      this.loading.dismiss();
      //var exerciseDetail = this.guidedWorkoutService.getExercisesById();
    });

    this.navController.push(workoutDetailPage,
      { workoutPlan: workoutPlan });
  }
}