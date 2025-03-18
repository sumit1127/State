import Complex_State from "./States/Complex_State";
import Counter from "./States/Counter";
import Add from "./States/Add";
import StateWithObject from "./States/StateWithObject";
// import AddItems from "./States/AddItems";

const App = () => {
  return (
    <div>
      <Counter />
      <Complex_State />
      <Add />
      {/* <AddItems /> */}
      <StateWithObject />
    </div>
  );
};

export default App;
