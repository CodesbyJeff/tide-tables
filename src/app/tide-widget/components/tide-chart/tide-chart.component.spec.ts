import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TideChartComponent } from './tide-chart.component';

describe('TideChartComponent', () => {
  let component: TideChartComponent;
  let fixture: ComponentFixture<TideChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TideChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TideChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
