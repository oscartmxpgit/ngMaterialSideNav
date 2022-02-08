import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorbanComponent } from './korban.component';

describe('KorbanComponent', () => {
  let component: KorbanComponent;
  let fixture: ComponentFixture<KorbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
