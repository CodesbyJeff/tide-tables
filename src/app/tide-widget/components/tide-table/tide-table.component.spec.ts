import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TideTableComponent } from './tide-table.component';

describe('TideTableComponent', () => {
  let component: TideTableComponent;
  let fixture: ComponentFixture<TideTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TideTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
