import React from "react";
import "./Categories.css"; // Import custom CSS file for GridBox
import img1 from '../../Images/brand-01.png'
import img2 from '../../Images/brand-02.png'
import img3 from '../../Images/brand-03.png'
import img4 from '../../Images/brand-04.png'
import img5 from '../../Images/brand-05.png'
import img6 from '../../Images/brand-06.png'
import img7 from '../../Images/brand-07.png'
import img8 from '../../Images/brand-08.png'
const Categories = () => {
  return (
    <div className="box">
      <div className="grid">
       
        <div className="cell">
          <div className="text"><h5>Cameras</h5>
           <p>10 Item</p></div>
          <img src={img1} alt="brand1" />
        </div>
        <div className="cell">
          <div className="text"><h5>Cameras</h5>
           <p>10 Item</p></div>
          <img src={img2}alt="category2" />
        </div>
        <div className="cell">
          <div className="text"><h5>Cameras</h5>
           <p>10 Item</p></div>
          <img src={img3}alt="category3" />
        </div>
        <div className="cell">
          <div className="text"><h5>Cameras</h5>
           <p>10 Item</p></div>
          <img src={img4}alt="category4" />
        </div>
        <div className="cell">
          <div className="text"><h5>Cameras</h5>
           <p>10 Item</p></div>
          <img src={img5}alt="category5" />
        </div>
        <div className="cell">
          <div className="text"><h5>Cameras</h5>
           <p>10 Item</p></div>
          <img src={img6}alt="category6" />
        </div>
        <div className="cell">
          <div className="text"><h5>Cameras</h5>
           <p>10 Item</p></div>
          <img src={img7}alt="category7" />
        </div>
        <div className="cell">
          <div className="text"><h5>Cameras</h5>
           <p>10 Item</p></div>
          <img src={img8}alt="category8" />
        </div>
        
        {/* Repeat the cell structure for the remaining cells */}
      </div>
    </div>
  );
};

export default Categories
