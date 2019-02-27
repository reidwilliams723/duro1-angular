import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationPageComponent } from './configuration-page.component';

describe('ConfigurationPageComponent', () => {
  let component: ConfigurationPageComponent;
  let fixture: ComponentFixture<ConfigurationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
