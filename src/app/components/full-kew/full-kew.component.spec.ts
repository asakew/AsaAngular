import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullKewComponent } from './full-kew.component';

describe('FullKewComponent', () => {
  let component: FullKewComponent;
  let fixture: ComponentFixture<FullKewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullKewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullKewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
