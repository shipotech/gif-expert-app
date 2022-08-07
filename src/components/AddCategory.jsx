import { useState } from 'react';

export const AddCategory = ( { onAddCategory } ) => {

  const [ inputValue, setInputValue ] = useState( 'One Punch' );

  const onInputChange = ( { target } ) => {
    // Set event value
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();

    // Validate input value length
    if ( inputValue.trim().length <= 1 ) return false;

    // Set previous categories + new input value
    // setCategories(( categories ) => [ ...categories, inputValue ]);
    onAddCategory( inputValue.trim() );

    // Clear input value
    setInputValue( '' );
  }

  return (
    <form onSubmit={ ( event ) => onSubmit( event ) }>
      <input
        type="text"
        placeholder="Search Gifs"
        // onChange={ (event) => onInputChange(event) }
        onChange={ onInputChange }
      />
    </form>
  )
}