import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedditParentComponent } from './beddit-parent.component';

describe('BedditParentComponent', () => {
  let component: BedditParentComponent;
  let fixture: ComponentFixture<BedditParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedditParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedditParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
