import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrenderComponentComponent } from './listrender-component.component';

describe('ListrenderComponentComponent', () => {
  let component: ListrenderComponentComponent;
  let fixture: ComponentFixture<ListrenderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListrenderComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListrenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
