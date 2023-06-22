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
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Movies</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </nav>
        {/*principal content*/}
        <section className="content">
        {/*Movies goes here*/}
            <List listState={listState} setListState = {setListState}/>
        </section>
        
        {/*side bar*/}
        <aside className="side">
            <Search/>
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
