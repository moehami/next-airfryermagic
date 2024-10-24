// pages/index.js
import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: '9z46zrgh5qec',
  accessToken: 'KzOIik4H_2cON-AliK4ROe8txuHoDWelHPVKsnWDXNM'
});

const Rec = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'recipe' })
      .then((response) => setRecipes(response.items));
  }, []);

  return (
      <div>
      {recipes.map((item) => (
        <div key={item.sys.id}>
          <h2>{item.fields.title}</h2>
          <p>{item.fields.description}</p>
          {/* You can add more fields here */}
        </div>
  );
};

export default Rec;


