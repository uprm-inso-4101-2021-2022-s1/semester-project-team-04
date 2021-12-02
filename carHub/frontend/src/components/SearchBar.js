import React from 'react';
import './SearchBar.css';
import { ReactSearchAutocomplete } from '../../node_modules/react-search-autocomplete';

function SearchBar() {
  const items = [
    {
      id: 0,
      name: 'Abarth',
    },
    {
      id: 1,
      name: 'Acura',
    },
    {
      id: 2,
      name: 'Alfa Romeo',
    },
    {
      id: 3,
      name: 'Aston Martin',
    },
    {
      id: 4,
      name: 'Audi',
    },
    {
      id: 5,
      name: 'Bentley',
    },
    {
      id: 6,
      name: 'BMW',
    },
    {
      id: 7,
      name: 'Buick',
    },
    {
      id: 8,
      name: 'Cadillac',
    },
    {
      id: 9,
      name: 'Chevrolet',
    },
    {
      id: 10,
      name: 'Chrysler',
    },
    {
      id: 11,
      name: 'Citroen',
    },
    {
      id: 12,
      name: 'Dacia',
    },
    {
      id: 13,
      name: 'Dodge',
    },
    {
      id: 14,
      name: 'Ferrari',
    },
    {
      id: 15,
      name: 'Fiat',
    },
    {
      id: 16,
      name: 'Ford',
    },
    {
      id: 17,
      name: 'GMC',
    },
    {
      id: 18,
      name: 'Honda',
    },
    {
      id: 20,
      name: 'Hummer',
    },
    {
      id: 21,
      name: 'Hyundai',
    },
    {
      id: 22,
      name: 'Infiniti',
    },
    {
      id: 23,
      name: 'Isuzu',
    },
    {
      id: 24,
      name: 'Jaguar',
    },
    {
      id: 25,
      name: 'Jeep',
    },
    {
      id: 26,
      name: 'Kia',
    },
    {
      id: 27,
      name: 'Lamborghini',
    },
    {
      id: 28,
      name: 'Lancia',
    },
    {
      id: 29,
      name: 'Land Rover',
    },
    {
      id: 30,
      name: 'Lexus',
    },
    {
      id: 31,
      name: 'Lincoln',
    },
    {
      id: 32,
      name: 'Lotus',
    },
    {
      id: 33,
      name: 'Maserati',
    },
    {
      id: 34,
      name: 'Mazda',
    },
    {
      id: 35,
      name: 'Mercedes-Benz',
    },
    {
      id: 36,
      name: 'Mercury',
    },
    {
      id: 37,
      name: 'Mini',
    },
    {
      id: 38,
      name: 'Mitsubishi',
    },
    {
      id: 39,
      name: 'Nissan',
    },
    {
      id: 40,
      name: 'Opel',
    },
    {
      id: 41,
      name: 'Peugeot',
    },
    {
      id: 42,
      name: 'Pontiac',
    },
    {
      id: 43,
      name: 'Ram',
    },
    {
      id: 44,
      name: 'Renault',
    },
    {
      id: 45,
      name: 'Saab',
    },
    {
      id: 46,
      name: 'Saturn',
    },
    {
      id: 47,
      name: 'Scion',
    },
    {
      id: 48,
      name: 'Seat',
    },
    {
      id: 49,
      name: 'Skoda',
    },
    {
      id: 50,
      name: 'Smart',
    },
    {
      id: 51,
      name: 'SsangYong',
    },
    {
      id: 52,
      name: 'Subaru',
    },
    {
      id: 53,
      name: 'Suzuki',
    },
    {
      id: 54,
      name: 'Tesla',
    },
    {
      id: 55,
      name: 'Toyota',
    },
    {
      id: 56,
      name: 'Volkswagen',
    },
    {
      id: 57,
      name: 'Volvo',
    },
    {
      id: 58,
      name: 'Wiesmann',
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = result => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = item => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  return (
    <div className='SearchBar'>
      <div style={{ width: '100%' }}>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          placeholder={'Search by Vin Number'}
        />
      </div>
    </div>
  );
}

export default SearchBar;
