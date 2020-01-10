import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AloqaComponent } from './aloqa.component';

describe('AloqaComponent', () => {
  let component: AloqaComponent;
  let fixture: ComponentFixture<AloqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
