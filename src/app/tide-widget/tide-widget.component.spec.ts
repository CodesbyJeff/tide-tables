import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TideWidgetComponent } from './tide-widget.component';

describe('TideWidgetComponent', () => {
  let component: TideWidgetComponent;
  let fixture: ComponentFixture<TideWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TideWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TideWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
