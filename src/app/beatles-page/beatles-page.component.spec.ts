import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatlesPageComponent } from './beatles-page.component';

describe('BeatlesPageComponent', () => {
  let component: BeatlesPageComponent;
  let fixture: ComponentFixture<BeatlesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatlesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
