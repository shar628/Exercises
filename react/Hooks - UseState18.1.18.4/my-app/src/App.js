import './App.css';
// import ExText from './exercises/Ex.18.1';
// import Ex from './exercises/Ex.18.1.v2';1
// import Ex18_1v2 from './exercises/ex18.1v2';
import Ex18_2 from './exercises/ex18.2';

function App() {
  // const text = 'You wrote a few components with Hooks. Maybe even a small app. You’re mostly satisfied. You’re comfortable with the API and picked up a few tricks along the way. You even made some custom Hooks to extract repetitive logic (300 lines gone!) and showed it off to your colleagues. “Great job”, they said.'
  return (
    <div className="App">
      {/* <ExText /> */}
      {/* <Ex18_1v2 text={text} textLength={30} /> */}
      <Ex18_2 />
    </div>
  );
}

export default App;
