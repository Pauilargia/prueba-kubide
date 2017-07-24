import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooPageComponent } from './foo-page.component';

describe('FooPageComponent', () => {
  let component: FooPageComponent;
  let fixture: ComponentFixture<FooPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
