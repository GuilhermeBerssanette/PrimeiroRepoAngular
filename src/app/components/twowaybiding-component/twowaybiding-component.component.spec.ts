import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybidingComponentComponent } from './twowaybiding-component.component';

describe('TwowaybidingComponentComponent', () => {
  let component: TwowaybidingComponentComponent;
  let fixture: ComponentFixture<TwowaybidingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwowaybidingComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwowaybidingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
