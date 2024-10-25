// pages/rec.jsx

import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

const Rec = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'recipe' })
      .then((response) => setRecipes(response.items))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center rounded-lg mb-5">
        {recipes.map((item) => (
          <div key={item.sys.id} md={4}>
            <div className="mb-4">
              <div className="card  mx-auto" style={{ width: 'fluid' }}>
                <img 
                  src={item.fields.image?.fields?.file?.url} 
                  className="card-img-top" 
                  alt={item.fields.title || "Recipe Image"} 
                />
                <div className="card-body">
                  <h5 className="card-title">{item.fields.title}</h5>
                  <p className="card-text">{item.fields.contents}</p>
                  <a href="#" className="btn btn-primary">More</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rec;
