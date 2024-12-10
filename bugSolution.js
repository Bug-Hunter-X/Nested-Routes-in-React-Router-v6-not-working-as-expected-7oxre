```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <NestedRoutes/>
    </div>    );
}

function NestedRoutes(){
  let location = useLocation();
  console.log(location);
  return(
    <div>Nested Routes: {location.pathname}</div>
  );
}

function About() {
  return <div>About</div>;
}
export default App; 
```