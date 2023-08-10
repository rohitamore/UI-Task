import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyoutPageComponent } from './leyout-page.component';

describe('LeyoutPageComponent', () => {
  let component: LeyoutPageComponent;
  let fixture: ComponentFixture<LeyoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeyoutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
