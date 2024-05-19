import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { DividerComponent } from '@caravancoop/ui-kit/divider';

@Component({
  selector: 'app-dividers',
  standalone: true,
  imports: [CommonModule, HeaderComponent, DividerComponent],
  templateUrl: './dividers.component.html',
  styleUrls: []
})
export class DividersComponent {
  title = "Dividers";
  subtitle = "To help reduce page noise and organize the layout";
}
