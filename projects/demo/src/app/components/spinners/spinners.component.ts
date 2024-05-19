import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '@caravancoop/ui-kit/spinner';

@Component({
  selector: 'app-spinners',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './spinners.component.html',
  styleUrls: []
})
export class SpinnersComponent {

}
