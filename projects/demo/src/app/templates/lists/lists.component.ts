import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '@caravancoop/ui-kit/item';
import { AvatarComponent } from '@caravancoop/ui-kit/avatar';
import { BadgeComponent } from '@caravancoop/ui-kit/badge';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule, ItemComponent, AvatarComponent, BadgeComponent],
  templateUrl: './lists.component.html',
  styleUrls: []
})
export class ListsComponent {
  today = new Date();

  list = [
    {
      "id" : 1,
      "title": "Home Improvement Device"
    },
    {
      "id" : 2,
      "title": "Furniture Item"
    },
    {
      "id" : 3,
      "title": "Music Contraption"
    },
    {
      "id" : 4,
      "title": "Furniture Contraption"
    },
    {
      "id" : 5,
      "title": "Camera Doodad"
    },
    {
      "id" : 6,
      "title": "Personal Kit"
    }
  ]

  jobList = [
    {
      "name": "Joshua",
      "title": "Accountant",
      "content": "Curabitur ut dolor scelerisque eros hendrerit vestibulum vel eget massa. Sed finibus dolor at mauris rhoncus, et ornare est venenatis. Maecenas erat magna, viverra a posuere at, pellentesque et eros. Mauris ac sapien a est dictum volutpat. Fusce massa ipsum, ultricies ut commodo vitae, semper sit amet dui. Cras nec turpis eu enim vestibulum condimentum eu eget nunc. Pellentesque faucibus tempor mi eget tincidunt. Integer ipsum ante, eleifend id ante aliquam, feugiat efficitur sapien. Integer tellus nisi, auctor ut sapien id, eleifend ultricies nisl. Aliquam malesuada commodo laoreet. Quisque elementum interdum quam at luctus. Sed luctus molestie augue eu luctus.",
      "date": new Date()
    },
    {
      "name": "Alyssa",
      "title": "Accountant",
      "content": "Praesent sit amet sem tempor, blandit risus id, aliquam metus. Fusce convallis consequat sodales. Nam dignissim consequat finibus. Sed condimentum finibus neque, ut tincidunt ipsum lobortis vel. Vivamus sed rutrum nisl, sed hendrerit ipsum. Nullam volutpat ut dui nec gravida. In non malesuada tortor. Nullam gravida nulla vel ante condimentum volutpat. Donec et odio ac leo elementum lacinia. Integer consequat vulputate dolor a maximus. Maecenas ut commodo lacus. Donec dictum est nec auctor condimentum. Nam maximus dapibus lacus ut ultricies. Praesent vulputate dapibus risus, quis suscipit arcu pellentesque eget. Nam malesuada lorem ut lacus tincidunt, id pellentesque velit pulvinar. Nulla facilisi."
    },
    {
      "name": "Chelsea",
      "title": "Accounting Manager",
      "content": "Ut venenatis id velit id interdum. Maecenas eu posuere sapien. Integer viverra commodo dui, eu tristique odio efficitur vehicula. Mauris vitae nulla interdum, consectetur nunc eu, maximus nibh. Curabitur id est egestas neque mattis laoreet vel vitae lectus. Quisque et tortor in justo venenatis facilisis a ac quam. Proin pellentesque ac velit a bibendum. Quisque varius semper orci, sit amet auctor metus venenatis sed. Mauris orci ex, convallis efficitur dapibus id, viverra ac nibh."
    },
    {
      "name": "Kevin",
      "title": "Account Director",
      "content": "Vestibulum lacinia massa nec viverra vulputate. Cras a ante sem. Morbi interdum lobortis lacus id ullamcorper. Integer pellentesque fringilla libero quis cursus. Curabitur vitae dictum nibh, non accumsan turpis. Quisque aliquam nec nibh a aliquam. Curabitur nunc arcu, rutrum eget mattis id, semper in mi. In arcu augue, commodo sit amet finibus eget, dignissim in quam. Nulla sollicitudin enim in nibh venenatis, in cursus dui hendrerit. Morbi at mollis nulla."
    },
    {
      "name": "Lauren",
      "title": "Associate Content Executive",
      "content": "Phasellus eget fringilla justo. Integer sem mauris, viverra non ligula sagittis, consectetur pharetra tortor. Donec et varius leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mollis ante, eget vestibulum turpis vestibulum vel. Donec dictum, tellus vitae fermentum egestas, erat leo tristique orci, ut aliquet lectus massa sed mauris. Integer viverra hendrerit nisl a vulputate. Pellentesque finibus auctor nisl, nec aliquet magna cursus ut."
    },
    {
      "name": "Richard",
      "title": "Head Analyst",
      "content": "Sed nec dictum sem. Pellentesque dictum ante ac quam lobortis placerat. Suspendisse consectetur, sapien consectetur ornare venenatis, ante quam mollis lorem, a vehicula est enim sed quam. Etiam volutpat lacus diam, in elementum erat pharetra eget. Pellentesque lacus nisi, dapibus non volutpat non, lacinia nec nulla. Fusce eget purus suscipit, sagittis lacus sed, posuere mauris. Vivamus porttitor elementum iaculis. Nam id iaculis erat. Maecenas sit amet leo a magna aliquam suscipit id ut dolor. Cras vulputate nisl a scelerisque bibendum. In condimentum viverra congue. Fusce vitae ex vitae dolor venenatis aliquet. Vivamus id blandit lectus, eget vehicula nulla. Quisque laoreet ullamcorper consequat. Donec vitae risus vel lacus eleifend scelerisque."
    },
    {
      "name": "Layla",
      "title": "Lead Operations Specialist",
      "content": "In semper urna sem, sagittis rutrum magna volutpat in. Vestibulum hendrerit vulputate euismod. Suspendisse ante erat, viverra et dui euismod, semper rhoncus neque. Aenean nulla neque, tempus condimentum faucibus a, dignissim eget magna. Proin ut imperdiet leo, commodo ultricies velit. Sed tempor ipsum eget enim convallis accumsan. Sed a tortor sit amet magna mollis porttitor non eget mauris. Fusce imperdiet augue id tellus laoreet, ac blandit ante ullamcorper. Quisque id varius risus. Sed ullamcorper id ligula at placerat."
    },
    {
      "name": "Amelia",
      "title": "Senior Budget Manager",
      "content": "Nulla facilisi. Aliquam imperdiet bibendum nisi vitae condimentum. Suspendisse eleifend nibh in enim ornare, id tempus orci dapibus. Proin sed scelerisque neque. Vestibulum blandit mi quis leo euismod faucibus. Vestibulum eget libero eget nibh sodales vehicula vitae ut est. Integer vel commodo massa, eget imperdiet sapien. Mauris auctor elementum nibh, ac vehicula leo pellentesque quis. Cras pulvinar ipsum vulputate, hendrerit quam ut, ullamcorper lectus."
    },
    {
      "name": "Claire",
      "title": "Associate Service Director",
      "content": "In pulvinar ullamcorper lectus, id venenatis magna tincidunt eu. Etiam maximus blandit lacinia. Quisque malesuada auctor posuere. Donec iaculis ante in arcu hendrerit euismod. Mauris vel tincidunt risus. In bibendum, nisl nec aliquet blandit, neque nulla semper enim, ac mattis ligula ante ac tellus. Fusce maximus, turpis ut facilisis interdum, quam nisl mollis diam, quis commodo dui est a est."
    },
    {
      "name": "David",
      "title": "Research Executive",
      "content": "Nunc pharetra, tortor eu placerat sagittis, ligula eros gravida neque, luctus interdum purus ipsum et diam. Phasellus quis leo vitae sem commodo tempus a at odio. Nam venenatis metus nibh, malesuada vestibulum purus consectetur eu. Morbi at tincidunt leo, eu rutrum lorem. Pellentesque quis mollis tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sed erat ac lorem facilisis fermentum. Cras venenatis diam in mi sodales commodo. Integer vitae ipsum sed erat tincidunt euismod in a odio. Donec lacus sapien, mollis nec consequat at, sodales sit amet orci. Donec fermentum neque orci, ac lobortis metus suscipit non. Phasellus vehicula mauris vitae ante rhoncus, et volutpat sapien faucibus. Mauris auctor libero eu hendrerit consectetur. Pellentesque elementum, velit id iaculis fermentum, felis velit molestie neque, at pharetra leo risus vitae mi. In tempor tortor sit amet leo sollicitudin, ultrices commodo turpis posuere. Donec molestie fermentum velit, in blandit lectus pharetra vitae."
    }
  ]

}
