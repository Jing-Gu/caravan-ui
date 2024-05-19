import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  openIcon = 'plus';
  closeIcon = 'minus';

  menuOpen = false;

  darkTheme = false


  componentLinks = [
    {
      link: '/components/avatar',
      name: 'Avatar'
    },
    {
      link: '/components/alert',
      name: 'Alert / Banner'
    },
    {
      link: '/components/accordion',
      name: 'Accordion'
    },
    {
      link: '/components/button',
      name: 'Button'
    },
    {
      link: '/components/badge',
      name: 'Badge'
    },
    {
      link: '/components/divider',
      name: 'Divider'
    },
    {
      link: '/components/spinner',
      name: 'Spinner'
    },
    {
      link: '/components/toggle',
      name: 'Toggle'
    },
    {
      link: '/components/linear-progress',
      name: 'Linear progress'
    },
    {
      link: '/components/gauge',
      name: 'Gauge'
    },
    {
      link: '/components/rating',
      name: 'Rating'
    },
    {
      link: '/components/slider',
      name: 'Slider'
    },
    {
      link: '/components/tooltip',
      name: 'Tooltip'
    },
  ]

  templateLinks = [
    {
      link: '/templates/faq',
      name: 'FAQ list'
    },
    {
      link: '/templates/dialog',
      name: 'Dialog'
    },
    {
      link: '/templates/signup-form',
      name: 'Signup form'
    },
    {
      link: '/templates/cards',
      name: 'Card'
    },
    {
      link: '/templates/lists',
      name: 'List'
    },

  ]

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    console.log('clo')
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme
    document.body.classList.toggle('dark')

    // if (this.darkTheme) {
    // } else {
    //   document.documentElement.setAttribute('data-theme', 'light');

    // }
  }


}
