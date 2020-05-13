import { MockService } from "../services/mock-service.service";
import { TestBed, async } from "@angular/core/testing";
import { JestTestComponent } from "./jest-test.component";

jest.mock("../services/mock-service.service.ts");

describe("MockService", () => {
  let _jestTestComponenrt;
  let _mockService;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JestTestComponent],
      providers: [MockService],
    }).compileComponents();
    _mockService = TestBed.get(MockService);
    fixture = TestBed.createComponent(JestTestComponent);
    _jestTestComponenrt = fixture.componentInstance;

  }));

  it("getLanguages should return a array with 5 results", () => {
    _jestTestComponenrt.getOccy();
    expect(_mockService.getOccupation).toHaveBeenCalled();
  });

});
