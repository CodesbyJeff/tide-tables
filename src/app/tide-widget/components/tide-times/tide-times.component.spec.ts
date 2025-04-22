import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TideTimesComponent } from './tide-times.component';

describe('TideTimesComponent', () => {
  let component: TideTimesComponent;
  let fixture: ComponentFixture<TideTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TideTimesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TideTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
