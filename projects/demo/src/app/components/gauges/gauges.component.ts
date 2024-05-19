import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeComponent } from '@caravancoop/ui-kit/gauge';

@Component({
  selector: 'app-gauges',
  standalone: true,
  imports: [CommonModule, GaugeComponent],
  templateUrl: './gauges.component.html',
  styleUrls: []
})
export class GaugesComponent {

}
