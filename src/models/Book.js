// @flow

export const Awards = {
  AJBookClub: 'A & J Book Club',
  NYTimes: 'NY Times Bestseller',
  Pulitzer: 'Pulitzer Prize Winner',
};

type Award = $Keys<typeof Awards>;

type Review = {
  Abby?: string,
  Jasmin?: string,
};

export type Book = {
  author: string,
  // TODO: how to do this
  photoLink: string,
  title: string,

  awards: $ReadOnlyArray<Award>,
  blurb: string,
  rating: number,
  reviews: Review,
  // TODO: review date? read date?
  reviewDate: Date,
  quotes: $ReadOnlyArray<string>,

  // TODO: how to do tags/ categories?

  recommendedBy?: string,
};
