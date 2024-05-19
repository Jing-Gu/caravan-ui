import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { ToggleComponent } from '@caravancoop/ui-kit/toggle';

@Component({
  selector: 'app-toggles',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ToggleComponent],
  templateUrl: './toggles.component.html',
  styleUrls: []
})
export class TogglesComponent {
  title = "Toggle";
  subtitle = "To switch between on and off";

}
