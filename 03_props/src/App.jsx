import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Aman" age={25} img='https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png' />
      <Card user="sharthak" age={20} img='https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000'/>
    </div>
  );
};

export default App;
