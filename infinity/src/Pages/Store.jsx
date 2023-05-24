import React, { useState ,useEffect} from 'react';
import BreadCrumbComp from '../Components/StoreSection/BreadCrumbComp';
import Meta from '../Components/Meta';
import '../Pages/Styles/Store.css';
import img1 from '../Images/gr.svg';
import img2 from '../Images/gr2.svg';
import img3 from '../Images/gr3.svg';
import img4 from '../Images/gr4.svg';
import StoreFirstColumn from '../Components/Storecomponents/StoreFirstColumn';
import ProductCard from '../Components/ProductCard';

const Store = () => {
  const [selectedGridIcon, setSelectedGridIcon] = useState('4x');
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setSelectedGridIcon('1x'); // Set initial state for mobile
      } else {
        setSelectedGridIcon('4x'); // Set initial state for desktop
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleGridIconClick = (gridIcon) => {
    setSelectedGridIcon(gridIcon);
  };

  const getGridClassName = () => {
    switch (selectedGridIcon) {
      case '1x':
        return 'grid-1x';
      case '2x':
        return 'grid-2x';
      case '3x':
        return 'grid-3x';
      default:
        return 'grid-4x';
    }
  };

  return (
    <>
      <Meta title='Our Store'/>
      <BreadCrumbComp title="Our Store" />
      <div className="component">
        <div className="container">
          <div className="column1">
            <StoreFirstColumn />
          </div>
          <div className="column2">
            <div className="filter-sort-grid">
              <div>
                <span style={{ fontWeight: '700' }}>Sort By:</span>
                <select name="" id="">
                  <option value="best-selling">Best Selling</option>
                  <option value="title-ascending">Alphabetically, A-Z</option>
                  <option value="title-descending">Alphabetically, Z-A</option>
                  <option value="price-ascending">Price, low to high</option>
                  <option value="price-descending">Price, high to low</option>
                  <option value="created-ascending">Date, old to new</option>
                  <option value="created-descending">Date, new to old</option>
                </select>
              </div>
              <div className="gridsetting">
                <p >21 Products</p>
                <div>
                  <img src={img1} alt="grid" onClick={() => handleGridIconClick('4x')} />
                  <img src={img2} alt="grid" onClick={() => handleGridIconClick('3x')} />
                  <img src={img3} alt="grid" onClick={() => handleGridIconClick('2x')} />
                  <img src={img4} alt="grid" onClick={() => handleGridIconClick('1x')} />
                </div>
              </div>
            </div>
            <div className={`product-grid ${getGridClassName()}`}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
