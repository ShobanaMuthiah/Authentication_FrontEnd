import React from 'react';

const Courses = () => {
    const course= [
          {
            "name": "Introduction to Python Programming",
            "description": "Basics of Python syntax and semantics, variables, data types, control structures, functions, and basic data structures (lists, dictionaries, tuples).",
            "image_url": "https://via.placeholder.com/300x150?text=Python+Course"
          },
          {
            "name": "Web Development with HTML, CSS, and JavaScript",
            "description": "HTML structure, CSS styling, JavaScript interactivity, dynamic content, and responsive design with frameworks like Bootstrap.",
            "image_url": "https://via.placeholder.com/300x150?text=Web+Development+Course"
          },
          {
            "name": "Data Structures and Algorithms",
            "description": "Fundamental data structures (arrays, linked lists, stacks, queues, trees, graphs), algorithm design, sorting, searching, and complexity analysis.",
            "image_url": "https://via.placeholder.com/300x150?text=Data+Structures+Course"
          },
          {
            "name": "Full-Stack Web Development with MERN",
            "description": "Building RESTful APIs with Node.js and Express, managing data with MongoDB, developing front-end applications with React, and integrating front-end and back-end.",
            "image_url": "https://via.placeholder.com/300x150?text=MERN+Stack+Course"
          },
          {
            "name": "Machine Learning and AI with Python",
            "description": "Introduction to machine learning concepts, supervised and unsupervised learning, popular libraries (Scikit-Learn, TensorFlow, Keras), and building/evaluating models.",
            "image_url": "https://via.placeholder.com/300x150?text=Machine+Learning+Course"
          },
          {
            "name": "DevOps and CI/CD",
            "description": "Principles of DevOps, automation tools (Jenkins, Docker, Kubernetes), setting up CI/CD pipelines, and monitoring/logging.",
            "image_url": "https://via.placeholder.com/300x150?text=DevOps+Course"
          },
          {
            "name": "Mobile App Development with Flutter",
            "description": "Introduction to Flutter framework, Dart programming language, building user interfaces with Flutter widgets, and state management/navigation.",
            "image_url": "https://via.placeholder.com/300x150?text=Flutter+Course"
          },
          {
            "name": "Cybersecurity Fundamentals",
            "description": "Basics of cybersecurity, common threats/vulnerabilities, cryptography, encryption, and network security/firewalls.",
            "image_url": "https://via.placeholder.com/300x150?text=Cybersecurity+Course"
          },
          {
            "name": "Cloud Computing with AWS",
            "description": "Introduction to cloud computing, AWS services (EC2, S3, RDS, Lambda), deploying/managing applications on AWS, and best practices for security and cost management.",
            "image_url": "https://via.placeholder.com/300x150?text=AWS+Course"
          },
          {
            "name": "Game Development with Unity",
            "description": "Introduction to Unity, game development concepts, C# scripting for game logic, physics/animations, and building/deploying games on different platforms.",
            "image_url": "https://via.placeholder.com/300x150?text=Unity+Course"
          }
        ]
      
      
      
      
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
  {course.map((ele,ind)=>{
    return(
<div className="col" key={ind}>
    <div className="card h-100">
      <img src={ele.image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{ele.name}</h5>
        <p className="card-text">{ele.description}</p>
      </div>
    </div>
  </div>

    )
  })}
</div>

        </div>
    );
};

export default Courses;