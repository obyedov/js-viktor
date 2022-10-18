import './App.css';

const student = {
  id:1,
  name: "John",
  age: 25,
  language: "Italian",
}

const studentGirlfriends = [
  {
    studentId: 1,
    name: "Anna",
    age: 20,
    language: "russian",
  },
  {
    studentId: 2,
    name: "Sara",
    age: 19,
    language: "italian",
  }
]

console.log(studentGirlfriends.find(a => a.studentId === student.id).age)

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
