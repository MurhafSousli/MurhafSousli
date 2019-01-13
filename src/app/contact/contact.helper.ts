import { MapTypeStyle } from '@agm/core';

export const validationMessages = {
  name: {
    required: 'Name is required.',
    minlength: 'Name must be at least 4 characters long.',
    maxlength: 'Name cannot be more than 24 characters long.'
  },
  email: {
    required: 'Email is required.',
    email: 'Email must be valid'
  },
  message: {
    required: 'Message is required.'
  }
};

export const mapStyle: MapTypeStyle[] = [
  {
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        weight: 1
      }
    ]
  },
  {
    elementType: 'geometry',
    stylers: [
      {
        weight: 1
      }
    ]
  },
  {
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#f4f4f4'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    stylers: [
      {
        color: '#cacaca'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#9d9d9d'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#555555'
      }
    ]
  }
];
