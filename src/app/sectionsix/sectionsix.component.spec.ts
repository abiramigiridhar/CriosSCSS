import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsixComponent } from './sectionsix.component';

describe('SectionsixComponent', () => {
  let component: SectionsixComponent;
  let fixture: ComponentFixture<SectionsixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
