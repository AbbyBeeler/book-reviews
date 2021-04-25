// @flow
import * as React from 'react';

import Navbar from 'components/common/Navbar';
import RecommendationBubble from 'components/Homepage/RecommendationBubble';
import reviews from 'data/reviews';

const BOOK = reviews[0];

export default function Homepage(): React.Node {
  const [quoteView, setQuoteView] = React.useState<boolean>(true);

  const renderView = () => {
    if (quoteView) {
      return BOOK.quotes[0];
    }
    return <RecommendationBubble book={BOOK} />;
  };

  return (
    <div className="homepage">
      <Navbar />
      <header>{BOOK.title}</header>
      {renderView()}
    </div>
  );
}
