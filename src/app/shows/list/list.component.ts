import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {Show} from "../../shared/models/show";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  shows: Show[] = [];
  subscription = new Subscription();

  constructor(private service: AppService) {
  }

  ngOnInit(): void {
    this.subscription = this.service.shows.subscribe(data => {
      this.shows = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
