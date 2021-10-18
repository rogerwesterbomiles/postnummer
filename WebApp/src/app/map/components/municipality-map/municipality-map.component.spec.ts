import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalityMapComponent } from './municipality-map.component';

describe('MunicipalityMapComponent', () => {
  let component: MunicipalityMapComponent;
  let fixture: ComponentFixture<MunicipalityMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipalityMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalityMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
