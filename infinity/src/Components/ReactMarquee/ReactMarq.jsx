import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../Images/brand-01.png'
import img2 from '../../Images/brand-02.png'
import img3 from '../../Images/brand-03.png'
import img4 from '../../Images/brand-04.png'
import img5 from '../../Images/brand-05.png'
import img6 from '../../Images/brand-06.png'
import img7 from '../../Images/brand-07.png'
import img8 from '../../Images/brand-08.png'
const ReactMarq= () => {
  return (
    <div style={{ width: '80%' ,margin:"auto"}}>
    <Marquee speed={50} pauseOnHover pauseDuration={0} autoFill className='marquee' >
      <img src={img1} alt="brand1"  style={{ width: '80px',marginRight:'20px' }}/>
      <img src={img2} alt="brand2"  style={{ width: '80px',marginRight:'20px' }}/>
      <img src={img3} alt="brand3" style={{ width: '80px',marginRight:'20px' }}/>
      <img src={img4} alt="brand4" style={{ width: '80px',marginRight:'20px' }}/>
      <img src={img5} alt="brand5"  style={{ width: '80px',marginRight:'20px' }}/>
      <img src={img6} alt="brand6" style={{ width: '80px',marginRight:'20px' }} />
      <img src={img7} alt="brand7"  style={{ width: '80px',marginRight:'20px' }}/>
      <img src={img8} alt="brand8" style={{ width: '80px',marginRight:'20px' }}/>

      {/* Add the remaining images */}
      {/* <img src="/path/to/image10.jpg" alt="Image 10" /> */}
    </Marquee></div>
  );
};

export default ReactMarq;
