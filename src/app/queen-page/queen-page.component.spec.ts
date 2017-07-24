import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenPageComponent } from './queen-page.component';

describe('QueenPageComponent', () => {
  let component: QueenPageComponent;
  let fixture: ComponentFixture<QueenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
