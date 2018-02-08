import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytreetableComponent } from './mytreetable.component';

describe('MytreetableComponent', () => {
  let component: MytreetableComponent;
  let fixture: ComponentFixture<MytreetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytreetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytreetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
