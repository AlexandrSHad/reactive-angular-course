import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("/api/courses").pipe(
      map((res) => res["payload"]),
      shareReplay()
    );
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<unknown> {
    return this.http
      .put<unknown>(`/api/courses/${courseId}`, changes)
      .pipe(shareReplay());
  }
}
