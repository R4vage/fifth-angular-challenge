import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedHamburgersComponent } from './saved-hamburgers.component';

describe('SavedHamburgersComponent', () => {
  let component: SavedHamburgersComponent;
  let fixture: ComponentFixture<SavedHamburgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedHamburgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedHamburgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
