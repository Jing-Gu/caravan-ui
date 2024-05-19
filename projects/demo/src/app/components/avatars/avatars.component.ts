import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { AvatarComponent } from '@caravancoop/ui-kit/avatar';
import { BadgeComponent } from '@caravancoop/ui-kit/badge';
import { FeatherIconsModule } from '../../shared/feather-icons/feather-icons.module';

@Component({
  selector: 'app-avatars',
  standalone: true,
  imports: [CommonModule, AvatarComponent, HeaderComponent, BadgeComponent, FeatherIconsModule],
  templateUrl: './avatars.component.html',
  styleUrls: []
})
export class AvatarsComponent {
  title = "Avatars";
  subtitle = "To visually represent a user, an avatar is a circle with initals or photo";

  photoUrl = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50';

}
