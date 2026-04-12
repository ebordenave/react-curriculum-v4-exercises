//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const studentName = 'Eddie';
  const studentAge = 40;
  const studentHobbiesList = [
    'video games',
    'board games',
    'playing table top card games',
    'reading',
    'biking',
  ];
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi! My name is {studentName} and I am {studentAge} years old.
      </p>
      <ul>
        {studentHobbiesList.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
