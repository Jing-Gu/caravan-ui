import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from '@caravancoop/ui-kit/progress';
import { DividerComponent } from '@caravancoop/ui-kit/divider';

@Component({
  selector: 'app-linear-progress',
  standalone: true,
  imports: [CommonModule, ProgressComponent, DividerComponent],
  templateUrl: './linear-progress.component.html',
  styleUrls: []
})
export class LinearProgressComponent {

}
