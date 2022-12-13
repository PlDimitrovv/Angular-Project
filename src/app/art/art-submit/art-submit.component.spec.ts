import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtSubmitComponent } from './art-submit.component';

describe('ArtSubmitComponent', () => {
  let component: ArtSubmitComponent;
  let fixture: ComponentFixture<ArtSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
