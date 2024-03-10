import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IFComponentComponent } from './if-component.component';

describe('IFComponentComponent', () => {
  let component: IFComponentComponent;
  let fixture: ComponentFixture<IFComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IFComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IFComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
