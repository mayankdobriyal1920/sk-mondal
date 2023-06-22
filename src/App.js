import './assets/css/style.css';
import './assets/css/template-style.css';
import HeaderMainComponent from "./components/HeaderMainComponent";

function App() {
  return (
      <div className="App">
        <HeaderMainComponent/>
        <section id="about">ABOUT</section>
        <section id="projects">PROJECTS</section>
        <section id="blog">BLOG</section>
        <section id="contact">CONTACT ME</section>
      </div>
  );
}

export default App;
