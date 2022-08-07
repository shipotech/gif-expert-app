import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  // Create a hook
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {

    // Don't add categories if they already exists
    if ( categories.includes(newCategory) ) {
      return;
    }

    // Getting this from AddCategory component
    setCategories([newCategory]);
  }

  return (
    <>
      {/* Title */ }
      <h1>GifExpertApp</h1>

      {/* Input */ }
      <AddCategory
        onAddCategory={ event => onAddCategory(event) }
      />

      {/* Gif Lists */ }
      {
        categories.map(category => (
          <GifGrid
            key={ category }
            category={ category }
          />
        ))
      }
    </>
  );
}