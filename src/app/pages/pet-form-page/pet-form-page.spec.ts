import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetFormPage } from './pet-form-page';

describe('PetFormPage', () => {
  let component: PetFormPage;
  let fixture: ComponentFixture<PetFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetFormPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PetFormPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
