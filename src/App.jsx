import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

 function App() {
  const foodItems = ['Panner','Ghee','Milk','vegetables','Fruits'];
  return (
    < >
    <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key ={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}


export default App;
