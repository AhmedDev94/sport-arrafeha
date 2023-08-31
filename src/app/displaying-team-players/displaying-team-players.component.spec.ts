import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingTeamPlayersComponent } from './displaying-team-players.component';

describe('DisplayingTeamPlayersComponent', () => {
  let component: DisplayingTeamPlayersComponent;
  let fixture: ComponentFixture<DisplayingTeamPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayingTeamPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayingTeamPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
