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
      .then((response) => setRecipes(response.items));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center rounded-lg mb-5">
        {recipes.map((item) => (
          <div key={item.sys.id} md={4}>
            <div className="mb-4">
              
<div className="card" style="width: 18rem;">
    <img src={item.fields.image} className="card-img-top" alt="..." />
  <div classNameName="card-body">
    <h5 className="card-title">{item.fields.title}</h5>
<p className="card-text">
                      {item.fields.contents}
  </p>
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
