import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOverdueComponent } from './list-overdue.component';

describe('ListOverdueComponent', () => {
  let component: ListOverdueComponent;
  let fixture: ComponentFixture<ListOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
