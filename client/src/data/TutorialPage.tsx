/*import React from 'react';
import { courseData } from './course';

const TutorialPage: React.FC = () => {
  return (
    <div>
      <h1>Tutorial Page</h1>
      {courseData.map((course, index) => (
        <div key={index}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <img src={course.image} alt={course.title} />
          <a href={course.link} target="_blank" rel="noopener noreferrer">
            <button>{course.btnName}</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default TutorialPage;
*/
import React from 'react';

const TutorialPage: React.FC = () => {
  return (
    <div>
      <h1>Tutorial Page</h1>
      {/* tutorial content here */}
    </div>
  );
};

export default TutorialPage;