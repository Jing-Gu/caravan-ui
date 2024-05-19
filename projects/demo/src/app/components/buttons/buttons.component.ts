import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FeatherIconsModule } from '../../shared/feather-icons/feather-icons.module';
import { ButtonComponent } from '@caravancoop/ui-kit/button';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule,
    FeatherIconsModule,
    HeaderComponent,
    ButtonComponent,
  ],
  templateUrl: './buttons.component.html',
  styleUrls: []
})
export class ButtonsComponent implements OnInit {
  title = "Buttons";
  subtitle = "To let users know what will happen next, a button triggers an event or action";

  btnPriCode: string;
  btnSecCode: string;
  btnTerCode: string;

  testClick() {
    console.log('btn clicked');
  }

  ngOnInit() {
    this.btnPriCode = this.primaryBtns[0].code;
    this.btnSecCode = this.secondaryBtns[0].code;
    this.btnTerCode = this.tertiaryBtns[0].code;
  }


  showCode(btn: any, category: string) {
    if (category === 'pri') {
      this.btnPriCode = btn.code;
    }
    if (category === 'sec') {
      this.btnSecCode = btn.code;
    }
    if (category === 'ter') {
      this.btnTerCode = btn.code;
    }
  }

  primaryBtns = [
    {
      color: 'primary',
      content: 'Primary CTA',
      code:'<car-button car-solid-btn color="primary" (click)="showCode()">Primary CTA</car-button>'
    },
    {
      color: 'secondary',
      content: 'Primary CTA',
      code: '<car-button car-solid-btn color="secondary" (click)="showCode()">Primary CTA</car-button>'
    },
    {
      color: 'success',
      content: 'Success',
      code: '<car-button car-solid-btn color="success" (click)="showCode()">Success</car-button>'
    },
    {
      color: 'error',
      content: 'Warning',
      code: '<car-button car-solid-btn color="error" (click)="showCode()">Warning</car-button>'
    }
  ]

  secondaryBtns = [
    {
      appearance: 'outline',
      color: 'neutral',
      content: 'Secondary CTA',
      code:'<car-button car-outline-btn color="neutral" (click)="showCode()">Secondary CTA</car-button>'
    },
    {
      appearance: 'outline',
      color: 'primary',
      content: 'Secondary CTA',
      code:'<car-button car-outline-btn color="primary" (click)="showCode()">Secondary CTA</car-button>'
    },
    {
      appearance: 'outline',
      color: 'secondary',
      content: 'Secondary CTA',
      code: '<car-button car-outline-btn color="secondary" (click)="showCode()">Secondary CTA</car-button>'
    },
    {
      appearance: 'outline',
      color: 'success',
      content: 'Success',
      code: '<car-button car-outline-btn color="success" (click)="showCode()">Success</car-button>'
    },
    {
      appearance: 'outline',
      color: 'error',
      content: 'Warning',
      code: '<car-button car-outline-btn color="error" (click)="showCode()">Warning</car-button>'
    }
  ]
  tertiaryBtns = [
    {
      appearance: 'text',
      color: 'neutral',
      content: 'Tertiary',
      code:'<car-button color="neutral" (click)="showCode()">Tertiary</car-button>'
    },
    {
      appearance: 'text',
      color: 'primary',
      content: 'Tertiary',
      code:'<car-button car-text-btn color="primary" (click)="showCode()">Tertiary</car-button>'
    },
    {
      appearance: 'text',
      color: 'secondary',
      content: 'Tertiary',
      code: '<car-button car-text-btn color="secondary" (click)="showCode()">Tertiary</car-button>'
    },
    {
      appearance: 'text',
      color: 'success',
      content: 'Success',
      code: '<car-button car-text-btn color="success" (click)="showCode()">Success</car-button>'
    },
    {
      appearance: 'text',
      color: 'error',
      content: 'Warning',
      code: '<car-button car-text-btn color="error" (click)="showCode()">Warning</car-button>'
    }
  ]
}
