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
              
<div class="card" style="width: 18rem;">
    <img src={item.fields.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{item.fields.title}</h5>
<p class="card-text">
                      {item.fields.contents}
  </p>
    <a href="#" class="btn btn-primary">More</a>

                  </div>
</div>
      
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
