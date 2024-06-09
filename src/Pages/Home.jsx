import React from 'react';

const Home = () => {
    return (
        <div>
            <h1 className='title'>EduQuest</h1>

            <figure className="">
  <blockquote className="blockquote">
  <small className='text-secondary'>Empower Your Learning Journey--</small>
  </blockquote>
</figure>

<div className="card-center">
<div className="card w-75" >
  <div className="card-body">
            <h5 class="card-title">
            Welcome to EduQuest!! where your educational aspirations become reality.
            </h5>
    <p className="card-text">
   At EduQuest, we believe that education is the key to unlocking a world of opportunities. Our platform is designed to provide you with the tools and resources you need to excel in your academic and professional endeavors. Whether you're looking to enhance your skills, explore new subjects, or advance your career, EduQuest has something for everyone.
    </p>
  </div>
</div>
</div><br /><br />
            
        
        <div className="card-group">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title"> Our Mission</h5>
      <p className="card-text">At EduQuest, our mission is to democratize education by providing accessible, affordable, and high-quality learning experiences to learners around the world. We aim to empower individuals to achieve their personal and professional goals through continuous learning and skill development.</p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title"> EduQuest Community</h5>
      <p className="card-text">Join a global network of learners and educators. At EduQuest, we believe in the power of community. Connect with fellow learners, share your journey, participate in group discussions, and collaborate on projects. Our community is here to support you every step of the way.</p>
    </div>
  </div>
</div>
<br />
<div className="card-center">
<div className="card w-75" >
  <div className="card-body">
            <h5 class="card-title">
            Specialized Learning Tracks
            </h5>
    <p className="card-text">
    EduQuest offers curated learning tracks to help you achieve specific career goals. Each track is designed to provide comprehensive training and development in key areas
    </p>

    <div id="carouselExampleAutoplaying" className="carousel text-center slide card-center" data-bs-ride="carousel">
  <div className="carousel-inner w-75 " >
    <div className="carousel-item  active">
      <h5>Tech Innovator Track</h5>
      <p>Dive deep into software development, cybersecurity, and data science.</p>
    </div>
    <div className="carousel-item">
      <h5>Business Leader Track</h5>
      <p>Master business strategies, financial management, and leadership skills.</p>
    </div>
    <div className="carousel-item">
      <h5>Creative Professional Track</h5>
      <p>Enhance your skills in digital design, creative writing, and multimedia arts.</p>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon text-bg-dark" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon text-bg-dark" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>
</div>
</div>




        </div>
    );
};

export default Home;

