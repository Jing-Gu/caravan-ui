import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { AlertComponent } from '@caravancoop/ui-kit/alert';
import { ButtonComponent } from '@caravancoop/ui-kit/button';
import { FeatherIconsModule } from '../../shared/feather-icons/feather-icons.module';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule, FeatherIconsModule, HeaderComponent, AlertComponent, ButtonComponent],
  templateUrl: './alerts.component.html',
  styleUrls: []
})
export class AlertsComponent {
  title = 'Alerts/ Banners';
  subtitle = 'To communicate a small piece of info, at the top of the screen';
  importIcons = `import { Info, AlertTriangle, CheckCircle, XCircle } from 'angular-feather/icons'`;

}
