import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescPageComponent } from './desc-page.component';

describe('DescPageComponent', () => {
  let component: DescPageComponent;
  let fixture: ComponentFixture<DescPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescPageComponent]
    });
    fixture = TestBed.createComponent(DescPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
