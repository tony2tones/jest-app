import { Injectable } from "@angular/core";
import { Name } from "./model/names.model";
import { Occupation } from "./model/occupation.model";
import { from, of, Observable } from "rxjs";

const names: Name[] = [{ name: "Trev" }, { name: "Malone" }, { name: "Eric" }];

const occupation: Occupation[] = [
  { jobTitle: "Dev", name: "Tony" },
  { jobTitle: "Dev", name: "Raph" },
  { jobTitle: "QA", name: "Steve" },
  { jobTitle: "QA", name: "Cash" },
  { jobTitle: "BA", name: "Lee" },
];

@Injectable()
export class MockService {
  getOccupation(): Observable<Occupation[]> {
    return of<Occupation[]>(occupation);
  }

  getNames(): Observable<Name[]> {
    return of<Name[]>(names);
  }
}
