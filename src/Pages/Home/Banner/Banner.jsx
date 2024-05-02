import img1 from '../../../../public/assets/images/banner/1.jpg'
import img2 from '../../../../public/assets/images/banner/2.jpg'
import img3 from '../../../../public/assets/images/banner/3.jpg'
import img4 from '../../../../public/assets/images/banner/4.jpg'
import img5 from '../../../../public/assets/images/banner/5.jpg'
import img6 from '../../../../public/assets/images/banner/6.jpg'






const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg mt-4 h-[100vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full   " />
    <div className='absolute space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)] text-red-700  w-full h-full font-bold items-center justify-center   '>
      <div className='h-full w-full text-center md:text-left md:w-1/2 mx-6 flex flex-col justify-center'>
      <h1 className='text-3xl text-white lg:text-6xl leading-snug my-3'>Affordable Price For Car Servicing</h1>
        <p className='text-xl my-2 text-white lg:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='space-x-4 my-10'>
        <button className="btn bgOrange text-white ">Contact</button>
        <button className="btn btn-outline btn-secondary ">Latest service</button>

      </div>
        </div>
    </div>
   
    <div className="absolute flex justify-end  transform gap-4 -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle bgOrange">❮</a> 
      <a href="#slide6" className="btn btn-circle bgOrange">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full   " />
    <div className='absolute space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)] text-red-700  w-full h-full font-bold items-center justify-center   '>
      <div className='h-full w-full text-center md:text-left md:w-1/2 mx-6 flex flex-col justify-center'>
      <h1 className='text-3xl text-white lg:text-6xl leading-snug my-3'>Affordable Price For Car Servicing</h1>
        <p className='text-xl my-2 text-white lg:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='space-x-4 my-10'>
        <button className="btn bgOrange text-white ">Contact</button>
        <button className="btn btn-outline btn-secondary ">Latest service</button>

      </div>
        </div>
    </div>
   
    <div className="absolute flex justify-end  transform gap-4 -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle bgOrange">❮</a> 
      <a href="#slide1" className="btn btn-circle bgOrange">❯</a>
    </div>
  </div>  

  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full   " />
    <div className='absolute space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)] text-red-700  w-full h-full font-bold items-center justify-center   '>
      <div className='h-full w-full text-center md:text-left md:w-1/2 mx-6 flex flex-col justify-center'>
      <h1 className='text-3xl text-white lg:text-6xl leading-snug my-3'>Affordable Price For Car Servicing</h1>
        <p className='text-xl my-2 text-white lg:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='space-x-4 my-10'>
        <button className="btn bgOrange text-white ">Contact</button>
        <button className="btn btn-outline btn-secondary ">Latest service</button>

      </div>
        </div>
    </div>
   
    <div className="absolute flex justify-end  transform gap-4 -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle bgOrange">❮</a> 
      <a href="#slide2" className="btn btn-circle bgOrange">❯</a>
    </div>
  </div>  

  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full   " />
    <div className='absolute space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)] text-red-700  w-full h-full font-bold items-center justify-center   '>
      <div className='h-full w-full text-center md:text-left md:w-1/2 mx-6 flex flex-col justify-center'>
      <h1 className='text-3xl text-white lg:text-6xl leading-snug my-3'>Affordable Price For Car Servicing</h1>
        <p className='text-xl my-2 text-white lg:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='space-x-4 my-10'>
        <button className="btn bgOrange text-white ">Contact</button>
        <button className="btn btn-outline btn-secondary ">Latest service</button>

      </div>
        </div>
    </div>
   
    <div className="absolute flex justify-end  transform gap-4 -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide5" className="btn btn-circle bgOrange">❮</a> 
      <a href="#slide3" className="btn btn-circle bgOrange">❯</a>
    </div>
  </div> 

  <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} className="w-full   " />
    <div className='absolute space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)] text-red-700  w-full h-full font-bold items-center justify-center   '>
      <div className='h-full w-full text-center md:text-left md:w-1/2 mx-6 flex flex-col justify-center'>
      <h1 className='text-3xl text-white lg:text-6xl leading-snug my-3'>Affordable Price For Car Servicing</h1>
        <p className='text-xl my-2 text-white lg:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='space-x-4 my-10'>
        <button className="btn bgOrange text-white ">Contact</button>
        <button className="btn btn-outline btn-secondary ">Latest service</button>

      </div>
        </div>
    </div>
   
    <div className="absolute flex justify-end  transform gap-4 -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide6" className="btn btn-circle bgOrange">❮</a> 
      <a href="#slide4" className="btn btn-circle bgOrange">❯</a>
    </div>
  </div> 

  <div id="slide6" className="carousel-item relative w-full">
    <img src={img6} className="w-full   " />
    <div className='absolute space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)] text-red-700  w-full h-full font-bold items-center justify-center   '>
      <div className='h-full w-full text-center md:text-left md:w-1/2 mx-6 flex flex-col justify-center'>
      <h1 className='text-3xl text-white lg:text-6xl leading-snug my-3'>Affordable Price For Car Servicing</h1>
        <p className='text-xl my-2 text-white lg:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='space-x-4 my-10'>
        <button className="btn bgOrange text-white ">Contact</button>
        <button className="btn btn-outline btn-secondary ">Latest service</button>

      </div>
        </div>
    </div>
   
    <div className="absolute flex justify-end  transform gap-4 -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle bgOrange">❮</a> 
      <a href="#slide5" className="btn btn-circle bgOrange">❯</a>
    </div>
  </div> 
</div>
    );
};

export default Banner;