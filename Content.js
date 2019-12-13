import React, { useState, useEffect } from 'react';
import './App.css';
import ImageGallery from 'react-image-gallery';


function Content() {
  const [asdf, setAsdf] = useState({})
  async function getDoggoInfo() {
    // git doggo info
    const doggoInfo = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      //"https://spokanehumanesociety.org/index.php?p=actions/petPoint/animals/getAnimals&type=1",
      {
        //mode:"no-cors",
        // headers:{
        //   "Access-Control-Allow-Origin": "spokanehumanesociety.org",
        //   authority: "spokanehumanesociety.org",
        //   method: "GET",
        // }
      }
    ).then(async (data) => {
      return await data.json()
    })
    console.log(doggoInfo)
    //const doggoInfoJson = await doggoInfo.json()
    setAsdf(doggoInfo)
    // set the doggo info we just got to state 
  }
  useEffect(getDoggoInfo, [])
  const images = [
    {
      name: "Bella",
      age: "1-3y",
      weight: "50Lbs",
      breed: "pit",
      fixed: "yes",
      location: "Belleville, IL",
      original: 'https://g.petango.com/photos/659/cc892e8b-c765-4e64-920c-d625ca6dd4d1.jpg',
    },
    {
      name: "ocean",
      age: "2-4y",
      weight: "2Lbs",
      breed: "nasty",
      fixed: "no",
      location: "middle of no where",
      original: 'https://picsum.photos/id/1015/1000/600/',
    },
    {
      name: "forest",
      age: "3-5y",
      weight: "300Lbs",
      breed: "dead",
      fixed: "maybe?",
      location: "YEEEEEEEET",
      original: 'https://picsum.photos/id/1019/1000/600/',
    },
  ];
  const [name, setName] = useState("Bella")
  const [age, setAge] = useState("1-3y")
  const [weight, setWeight] = useState("50Lbs")
  const [breed, setBreed] = useState("pit")
  const [fixed, setFixed] = useState("yes")
  const [location, setLocation] = useState("Belleville, IL")

  const [currentDogIndex, setCurrentDogIndex] = useState(0)
  function onSlide(currentIndex) {
    setCurrentDogIndex(currentIndex)
    setName(images[currentIndex].name)
    setAge(images[currentIndex].age)
    setWeight(images[currentIndex].weight)
    setBreed(images[currentIndex].breed)
    setFixed(images[currentIndex].fixed)
    setLocation(images[currentIndex].location)
  }
  return (
    <div className="content">
      <div className="image-gallery-container">
        <div className="image-gallery">
          <span className="adopt-title">Adopt Today :D</span>
          <ImageGallery
            items={images}
            showIndex={true}
            onSlide={onSlide}
          />
        </div>
      </div>
      <div className="doggo-info">
        <span className="doggo-name">Name: {name}</span>
        <span className="doggo-age">Age: {age}</span>
        <span className="doggo-weight">Weight: {weight}</span>
        <span className="doggo-breed">Breed: {breed}</span>
        <span className="content-fixed">Fixed: {fixed}</span>
        <span className="content-location">Location: {location}</span>
      </div>
      <div className="content-">

      </div>
      <div className="right-column-shelters">
        <span className="right-column-title">Shelters</span>
        <p>Belleville</p>
        <p>Fairview</p>
        <p>O'Fallon</p>
        <p>Shiloh</p>
        <p>Collinsville</p>
        <span className="right-column-title">Orgs</span>
        <span>this is the content thats goin on the right :D </span>
      </div>
    </div>
  );
}

export default Content;