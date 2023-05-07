import React from 'react'
import img2 from '../images/img2.jpg';
export default function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner h-100">
            <div className="carousel-item active">
            <img src={img2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=1024x1024&w=is&k=20&c=96MkVCuqUWOcMZ7vO5nG41rPufiSWlayTac_nsxXUTw=" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.jpg?b=1&s=170667a&w=0&k=20&c=EXreVl3ug6ng9updrHKAFagrNctbOCIPDpaziJ6rVXg=" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}
