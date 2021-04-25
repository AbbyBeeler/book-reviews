// @flow
import * as React from 'react';

import type { Book } from 'models/Book';

type Props = {
  book: Book,
};

export default function RecommendationBubble({ book }: Props): React.Node {
  return book.blurb;
}
