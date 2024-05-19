import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '@caravancoop/ui-kit/card';
import { ButtonComponent } from '@caravancoop/ui-kit/button';
import { DividerComponent } from '@caravancoop/ui-kit/divider';
import { BadgeComponent } from '@caravancoop/ui-kit/badge';
import { AvatarComponent } from '@caravancoop/ui-kit/avatar';
import { ItemComponent } from '@caravancoop/ui-kit/item';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent, ButtonComponent, DividerComponent, BadgeComponent, AvatarComponent, ItemComponent],
  templateUrl: './cards.component.html',
  styleUrls: []
})
export class CardsComponent {

  imgSrc = 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
  photoUrl = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50';

  foodurl = 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVhbHxlbnwwfHwwfHx8MA%3D%3D'
  chickurl = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMGFuZCUyME11c2hyb29tfGVufDB8fDB8fHww'
}
