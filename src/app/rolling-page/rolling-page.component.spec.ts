import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingPageComponent } from './rolling-page.component';

describe('RollingPageComponent', () => {
  let component: RollingPageComponent;
  let fixture: ComponentFixture<RollingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
