import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Response} from "../shared/models/response";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(private service: AppService) {
    this.searchForm = new FormGroup({
      search: new FormControl('',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.subscription = this.service.search(this.searchForm.value.search).subscribe(
      (data: Response[]) => {
        let shows = data?.map((data: Response) => data.show);
        this.service.shows.next(shows);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
