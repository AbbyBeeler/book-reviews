// @flow

import type { Book } from 'models/Book';

const reviews: $ReadOnlyArray<Book> = [
  {
    author: 'Yaa Gyasi',
    photoLink: 'TODO',
    title: 'Homegoing',

    awards: ['AJBookClub'],
    blurb: 'This is a blurb',
    rating: 5,
    reviews: {},
    reviewDate: new Date('7/26/2019'),
    quotes: [
      'We believe the one who has power. He is the one who gets to write the story. So when you study history, you must ask yourself, Whose story am I missing? Whose voice was suppressed so that this voice could come forth? Once you have figured that out, you must find that story too. From there you get a clearer, yet still imperfect, picture.',
    ],
  },
];

export default reviews;
