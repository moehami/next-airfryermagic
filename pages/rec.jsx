// pages/rec.jsx

import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import Layout from '../components/layout';

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
    <Layout>
    <div className="container-fluid">
      <div className="row justify-content-center rounded-lg mb-5">
        {recipes.map((item) => (
          <div key={item.sys.id} md={4}>
            <div className="mb-4">
              <div className="card shadow rounded mx-auto" style={{ width: '70%' }}>
                <img 
                  src={item.fields.image?.fields?.file?.url} 
                  className="card-img-top" 
                  alt={item.fields.title || "Recipe Image"} 
                />
                <div className="card-body">
                  <h2 className="item-title mbr-fonts-style mb-2 mt-0 display-5">{item.fields.title}</h2>
                  <p className="card-body text-lg-left">{item.fields.contents}</p>
                  <a href="#" className="btn btn-primary">More</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </Layout>  
  );
};

export default Rec;
