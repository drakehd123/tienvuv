import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHaComponent } from './icon-ha.component';

describe('IconHaComponent', () => {
  let component: IconHaComponent;
  let fixture: ComponentFixture<IconHaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconHaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
