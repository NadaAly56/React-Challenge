import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
function App() {
  return <Container />;
}
function Container() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillsContainer />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="nada.jpg" alt="Nada Ahmed" />;
}
function Intro() {
  return (
    <div className="intro">
      <h1>Nada Ahmed</h1>
      <p>
        {" "}
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}
function SkillsContainer() {
  return (
    <div className="skill-list">
      <Skill skill="Node.js" icon="💪" bgColor="blue" />
      <Skill skill="Javascript" icon="💪" bgColor="cyan" />
      <Skill skill="css" icon="💪" bgColor="yellow" />
      <Skill skill="HTML" icon="💪" bgColor="pink" />
      <Skill skill="Git and GitHub" icon="💪" bgColor="violet" />
      <Skill skill="React" icon="💪" bgColor="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.skill}</span>
      <span>{props.icon}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
