import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  const reloadAllItems = () => {
    setPeople(data);
  };

  //Ai componenti è possibile anche passare delle funzioni:
  const removeItem = (id) => {
    //Filtro lo state: o con un'assegnazione di valore allo state oppure con un return funzionale.
    setPeople((oldValue) => {
      return oldValue.filter((value) => value.id !== id);
    });
  };

  return (
    <section>
      <div className="container">
        <h2 style={{ color: "var(--bg-blue)" }}>Prossimi Incontri</h2>
        <div className="people-list">
          <List data={people} removeItem={removeItem} />
        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={reloadAllItems}>
            Reload
          </button>
          <button className="btn btn-delete" onClick={() => setPeople([])}>
            Delete All
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
