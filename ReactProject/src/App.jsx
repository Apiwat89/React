import Hello from "./assets/Hello";
import Contact from "./assets/Contact";
import Counter from "./assets/Counter";

function App() {

  const helloData = [
    {name: "Mike", surname: "Brow"},
    {name: "Tom", surname: "Heelo.."}
  ];

  return (
    <div>
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} surname={data.surname} />
      ))}

      <Contact email="apiwat@gmail.com" phone="064555" />
    </div>
  );
}

export default App
