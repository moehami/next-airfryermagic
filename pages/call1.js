const contentful = require('contentful')

const client = contentful.createClient({
  space: '9z46zrgh5qec',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'KzOIik4H_2cON-AliK4ROe8txuHoDWelHPVKsnWDXNM'
})
export default function Page() {
  return ( 
  
client.getEntry('011oZBbAf2Xms9L4UnaCdq')
  .then((entry) => console.log(entry))
  .catch(console.error)
)
}
