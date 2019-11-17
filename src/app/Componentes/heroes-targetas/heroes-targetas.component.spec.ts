import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTargetasComponent } from './heroes-targetas.component';

describe('HeroesTargetasComponent', () => {
  let component: HeroesTargetasComponent;
  let fixture: ComponentFixture<HeroesTargetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesTargetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesTargetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
