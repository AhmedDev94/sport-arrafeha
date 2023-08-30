import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootbalSearchComponent } from './footbal-search.component';

describe('FootbalSearchComponent', () => {
  let component: FootbalSearchComponent;
  let fixture: ComponentFixture<FootbalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootbalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootbalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
