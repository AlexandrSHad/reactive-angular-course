import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../model/course";
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll,
  shareReplay,
} from "rxjs/operators";
import { merge, fromEvent, Observable, concat } from "rxjs";
import { Lesson } from "../model/lesson";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "course",
  templateUrl: "./search-lessons.component.html",
  styleUrls: ["./search-lessons.component.css"],
})
export class SearchLessonsComponent implements OnInit {
  searchResults$: Observable<Lesson[]>;
  activeLesson: Lesson | null = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {}

  onSearch(searchString: string): void {
    this.searchResults$ = this.coursesService.searchLessons(searchString);
  }

  openLesson(lesson: Lesson): void {
    this.activeLesson = lesson;
  }

  onBackToSearch(): void {
    this.activeLesson = null;
  }
}
