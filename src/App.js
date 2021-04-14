import './App.css';
import {Navigation} from './Components/Navigation/navigation';
import {Logo} from './Components/Logo/logo';
import {ImageLinkFrom} from './Components/ImageLinkFrom/imagelinkfrom';
import {FaceRecognition} from './Components/FaceRecognition/facerecognition';
import {SignIn} from './Components/SignIn/signin';
import {Register} from './Components/Register/register';
import {Rank} from './Components/Rank/rank';
import Particles from 'react-particles-js';
import { useState } from 'react';

const particlesOptions= {
  particles: {
    number:{
      value:100,
      density: {
        enable:true,
        value_area:800
      }
    }
  }
}

function App() {
  const [input,setInput] = useState('');
  const [user,setUser] = useState({});
  const [imageUrl,setImageUrl] = useState('');
  const [box,setBox] = useState({});
  const [route,setRoute] = useState('signin');

  const onInputChange = (event) =>{
    setInput(event.target.value);
  }
  const caculatorFaceLocation = (data) =>{
    console.log(123,data)
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage'); 
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }
  const displayFaceBox = (facebox) =>{
      setBox(facebox)
  }

  const onRouteChange = (routeValue) =>{
    setRoute(routeValue);
    setImageUrl('');
    setInput('');


}
const loadUser = (user) =>{
  setUser(user);
}

  const onButtonSubmit = () =>{
    setImageUrl(input);

    fetch('https://calm-chamber-72301.herokuapp.com/imageurl',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({input:input})
      })
      .then(response=>response.json())
      .then((response) => {
        displayFaceBox(caculatorFaceLocation(response));
      })
      .catch((err) => {
        console.log("Clarifai Error:", err);
      });

  fetch('https://calm-chamber-72301.herokuapp.com/image',{
    method:'put',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({id:user.id})
    })
     .then(response=>response.json()).then(dataUser => {
       setUser(dataUser)
})

  }

  return (
    <div className="App">
    <Particles className='particles'
              params={particlesOptions}
            />
      <Navigation onRouteChange={onRouteChange}
        routeState={route}
       />
      {route ==='signin' ? <SignIn onSubmit={onRouteChange} onLoadUser={loadUser} />: route ==='register' ? <Register onSubmit={onRouteChange} onLoadUser={loadUser}/> :
      <>
      <Logo /> 
      <Rank user={user}/>
      <ImageLinkFrom onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} /> 
      <FaceRecognition box={box} imageUrl={imageUrl} /></>} 
    </div>
  );
}

export default App;
