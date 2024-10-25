// pages/rec.jsx

import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
//import Layout from '../components/layout';

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
    <>
    <Layout/>
     <div className="container-fluid">
      <div className="row justify-content-center rounded-lg mb-5">
        {recipes.map((item) => (
          <div key={item.sys.id} md={4}>
            <div className="mb-4">
              <div className="card">
                <div className="mbr-section-head"> <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">{item.fields.title}</h4></div>
                 <div className="leading-relaxed text-lg text-gray-700 py-6">
                <p className="mbr-text mbr-fonts-style mb-3 display-7">{item.fields.contents}</p>
                    <a href="" className="btn item-btn btn-primary display-7">
                  More
                </a>
                {/* More fields if needed */}
                   </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
      
}
</>
    
  export default Rec



