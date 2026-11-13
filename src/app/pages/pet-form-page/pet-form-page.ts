import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
export const SOLO_LETRAS = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;
export const TELEFONO = /^(\+34 ?)?[6-9]\d{8}$/;
export const NOMBRE_MASCOTA = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;
export const MICROCHIP = /^\d{15}$/;
export const PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/;

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-pet-form-page',
  styleUrl: './pet-form-page.css',
  templateUrl: './pet-form-page.html',
})

export class PetFormPage {

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2),
      Validators.maxLength(30), Validators.pattern(SOLO_LETRAS)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2),
      Validators.maxLength(50), Validators.pattern(SOLO_LETRAS)]),
    phone: new FormControl('', [Validators.required,
      Validators.pattern(TELEFONO)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    
    
    petName: new FormControl('', [Validators.required, Validators.minLength(2),
      Validators.maxLength(20), Validators.pattern(NOMBRE_MASCOTA)]),
    species: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    breed: new FormControl('', Validators.maxLength(40)),
    age: new FormControl<number | null>(null, [Validators.required,
      Validators.min(0), Validators.max(30)]),
    weight: new FormControl<number | null>(null, [Validators.required,
      Validators.min(0.1), Validators.max(90)]),
    microchip: new FormControl('', [Validators.required, Validators.pattern(MICROCHIP)]),

    password: new FormControl('', [Validators.required, Validators.minLength(10),
      Validators.maxLength(24), Validators.pattern(PASSWORD)]),
    reason: new FormControl('', [Validators.required, Validators.minLength(10),
      Validators.maxLength(300)]),
    privacy: new FormControl(false, Validators.requiredTrue),
    reminders: new FormControl(false),

  });

    species = ['Perro', 'Gato', 'Ave', 'Otro'];



    
  isInvalidField(field: string) {
    const c = this.registerForm.get(field);
    return c?.invalid && (c?.dirty || c?.touched);
  }

  hasError(field: string, error: string) {
    return this.registerForm.get(field)?.hasError(error);
  }

  password() {
    return this.registerForm.get('password')?.value ?? '';
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }


}

