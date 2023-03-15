import React from "react";
import ReactDOM from "react-dom";
import RemoteApp from "remote/RemoteApp";

import "./index.css";

const App = () => (
  <section>
    <article>
      <div className="container">
        <div>Name: host</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
      </div>
    </article>
    <article>
      <RemoteApp />
    </article>
  </section>
);
ReactDOM.render(<App />, document.getElementById("app"));
