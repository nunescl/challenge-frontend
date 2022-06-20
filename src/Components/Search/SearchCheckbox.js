import React from 'react';
import Input from '../Forms/Input';
import styles from './SearchCheckbox.module.css';

const SearchCheckbox = ({ categories, handleCheckboxSearch }) => {
  return (
    <div className={`${styles.wrapper} animeLeft`}>
      {(categories === null || categories.length === 0) && (
        <>
          <Input type="checkbox" name="Sobremesa" key="1" />
          <Input type="checkbox" name="Bebidas" key="2" />
          <Input type="checkbox" name="Prato Completo" key="3" />
          <Input type="checkbox" name="Promoções" key="4" />
        </>
      )}
      {categories &&
        categories.map((category) => (
          <Input
            placeholder={category.name}
            type="checkbox"
            name={category.name}
            key={category.id}
            onChange={handleCheckboxSearch}
          />
        ))}
    </div>
  );
};

export default SearchCheckbox;