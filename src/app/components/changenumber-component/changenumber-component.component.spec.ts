import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangenumberComponentComponent } from './changenumber-component.component';

describe('ChangenumberComponentComponent', () => {
  let component: ChangenumberComponentComponent;
  let fixture: ComponentFixture<ChangenumberComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangenumberComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangenumberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
