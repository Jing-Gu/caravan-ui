import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherIconsModule } from '@caravancoop/ui-kit/shared/featherIcon'
import { TooltipDirective } from '@caravancoop/ui-kit/shared/directives/tooltip'
import { AvatarComponent } from '@caravancoop/ui-kit/avatar'

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [CommonModule, TooltipDirective, FeatherIconsModule, AvatarComponent],
  templateUrl: './tooltips.component.html',
  styleUrls: []
})
export class TooltipsComponent {

}
