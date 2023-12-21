import data from './data'
import { useState } from 'react';

const ChildComponent = ({ data, removeUser }) => (
  <div className='student-text'>
    {data.map(item => (
      <div className='student-subtext' key={item.id}>
        <h2>{item.name}</h2>
        <p><strong>Course: </strong>{item.course}</p>
        <p><strong>Age: </strong>{item.age}</p>
        <button onClick={() => removeUser(item.id)}>Remove</button>
      </div>
    ))}
  </div>
);

const ParentComponent = () => {
  const [studentData, setStudentData] = useState(data)

  const handleRemoveUser = (userId) => {
    const newData = studentData.filter(user => user.id !== userId);
    setStudentData(newData);
  };

  return(
    <div>
      <ChildComponent data={studentData} removeUser={handleRemoveUser} />
    </div>
  )
};

const App = () => (
  <div className="App">
    <h1>Students</h1>
    <ParentComponent />
  </div>
);

export default App