import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ButtonComponent } from '@caravancoop/ui-kit/button';
import { CheckboxComponent } from '@caravancoop/ui-kit/checkbox';
import { RadioComponent } from '@caravancoop/ui-kit/radio';
import { FormFieldComponent } from '@caravancoop/ui-kit/form-field';
import { SelectComponent } from '@caravancoop/ui-kit/select';
import { SliderComponent } from '@caravancoop/ui-kit/slider';
import { FormService } from '@caravancoop/ui-kit/services/form';
import { TooltipDirective } from '@caravancoop/ui-kit/shared/directives/tooltip';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    FormFieldComponent,
    SelectComponent,
    ButtonComponent,
    CheckboxComponent,
    RadioComponent,
    SliderComponent,
    TooltipDirective],
  templateUrl: './signup-form.component.html',
  styleUrls: []
})
export class SignupFormComponent {
  constructor(
    private fb: FormBuilder,
    private formService: FormService) { }

  isDisabled = true;

  provinces =  ['Ontario', 'Alberta', 'Manitoba', 'Quebec', 'British Columbia', 'Yukon']
  kingdoms = [{
      "id": "9",
      "value": "cloud",
      "label": "Cloud kingdom"
    },
    {
      "id": "10",
      "value": "bowser",
      "label": "Bowser's kingdom"
    },
    {
      "id": "11",
      "value": "snow",
      "label": "Snow kingdom"
    },
    {
      "id": "12",
      "value": "lake",
      "label": "Lake kingdom"
    },
    {
      "id": "13",
      "value": "cap",
      "label": "Cap kingdom"
    },
    {
      "id": "14",
      "value": "cascade",
      "label": "Cascade kingdom"
    }
  ]
  drinks = ['milk', 'coffee', 'water', 'tea', 'juice', 'soda']
  fruits = [
    { value: 'apple', label: 'Apple', checked: true },
    { value: 'pear', label: 'Pear', checked: false },
    { value: 'melon', label: 'Melon', checked: true },
    { value: 'carrot', label: 'Carrot', checked: false },
  ]

  selectedDrink: string;
  selectedProvince: string;

  sliderOptions = { min: 0, max: 100, step: 10, appearance: 'slider' }
  rangeOptions = { min: 0, max: 200, step: 20, appearance: 'range' }


  signupForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(10)]],
    age: ['', [Validators.min(1)]],
    birthday: ['', [Validators.required, Validators.pattern(/^(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/\d{4}$/)]],
    telephone: { value: null, disabled: this.isDisabled },
    intro: [''],
    planet: ['pluto', Validators.required],
    province: ['', Validators.required],
    kingdoms: [''],
    drinks: { value: '', disabled: this.isDisabled },
    scores: [this.sliderOptions.min],
    range: { low: this.rangeOptions.min, high: this.rangeOptions.max },
    rangeWithInitalVal: { low: 20, high: 160 },
    terms: [false, Validators.requiredTrue],
    selectedFruits: this.fb.array([this.fb.control(true), this.fb.control(false), this.fb.control(true), this.fb.control(false)]),
    checkDisabled: { value: false, disabled: this.isDisabled },
  })



  ngOninit() {

  }


  get selectedFruits() {
    return this.signupForm.get('selectedFruits') as FormArray
  }

  get username() {
    return this.signupForm.get('username');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get telephone() {
    return this.signupForm.get('telephone');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get birthday() {
    return this.signupForm.get('birthday');
  }
  get province() {
    return this.signupForm.get('province');
  }
  get drinksSelect() {
    return this.signupForm.get('drinks');
  }
  get range() {
    return this.signupForm.get('range')?.value;
  }

  onSubmit() {
    console.log(this.signupForm.value)
  }

  reset() {
    this.signupForm.reset(
      {
        planet: null,
        scores: this.sliderOptions.min,
        range: {low: this.rangeOptions.min, high: this.rangeOptions.max},
        rangeWithInitalVal: { low: this.rangeOptions.min, high: this.rangeOptions.max },
      }
    )

    this.formService.resetRange();
    this.formService.resetSlider();
    console.log(this.signupForm.value)
    //reset multichoice

    //reset slider
  }



}
