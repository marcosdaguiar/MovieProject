import { Search } from "./components/Search";
import { Create } from "./components/Create";
import { List } from "./components/List";
import { useState } from "react";


function App() {
    const [listState, setListState]= useState([]);

  return (
    <div className="layout">
        {/*header*/}
        <header className="header">

            <h1>My M</h1>
            <div className="logo">
                <div className="play"></div>        
            </div>
            <h1>vies</h1>
        </header>
        
        {/*navigation bar*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Marcos Aguiar Favorite Movie List</a></li>

            </ul>
        </nav>
        {/*principal content*/}
        
        <section className="content">
        {/*Movies goes here*/}

            <List listState={listState} setListState = {setListState}/>
        </section>
        
        {/*side bar*/}
        <aside className="side">
            <Search listState={listState} setListState = {setListState}/>
            <Create setListState={setListState}/>
        </aside>
        {/*footer*/}
        <footer className="footer">
            &copy; Marcos A. Movie Project
        </footer>

    </div>
  );
}

export default App;
