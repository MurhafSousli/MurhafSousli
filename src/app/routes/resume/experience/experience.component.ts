import {Component} from '@angular/core';

@Component({
  selector: 'experience',
  template: require('./experience.html')
})

export class Experience{

  items = [];

  ngOnInit() {
    this.items = experiences;
  }

}

var experiences = [
  {
    company: 'Freelancing',
    address: 'Remote',
    jobTitle: 'WordPress theme developer',
    date: 'MAY 2014 - PRESENT',
    content: [
      'Communicating with clients remotely and face to face',
      'Creating custom theme design on demand',
      'Coding using backend technologies such as PHP to extend WordPress functionality'
    ]
  },
  {
    company: 'Skymar Investment',
    address: 'Maslak Uniq Istanbul',
    jobTitle: 'IT manager',
    date: 'APRIL 2016 - MAY 2016',
    content: [
      'Hired to set up the IT workflow for the company',
      'Setting up all computers OS, LAN and shared drive.',
      'Getting the website up and running',
      'Creating custom emails for employees',
      'Fixing employees IT related problems',
      'Communicating with 3rd party companies such as Hostgator and Envato Market'
    ]
  },
  {
    company: 'Lennox Clinic',
    address: 'Remote',
    jobTitle: 'Web developer',
    date: 'JANUARY 2016 - MARCH 2016',
    content: [
      'Hired for the front-end design, site maintenance & email marketing campaigns',
      'Ensure site usability, SEO, web standards (W3C) and browser compatibility',
      'Testing site functionality, identifying problems or bugs and fixing errors',
      'Coding using front-end technologies, such as CSS and HTML',
      'Using Photoshop to modify images to suits site’s design'
    ]
  }
]
