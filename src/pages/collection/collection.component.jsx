import React, { useContext } from "react";
import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

import CollectionsContext from "../../contexts/collections/collections.context";

// useContext is a hook that allows to get vlue fromn the context, and store as a const inside teh component
const CollectionPage = ({ match }) => {
  // Method 2 - Context using useContext
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  // return the HTML element
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
