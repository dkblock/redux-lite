import React from "react";
import useSelector from "./redux-lite/hooks/useSelector";
import useDispatch from "./redux-lite/hooks/useDispatch";
import createAction from "./redux-lite/createAction";

const act = createAction("act", (count) => {
  return count;
});

const App = () => {
  const data = useSelector(state => state.counter);
  console.log(act(10));
  return (
      <div>{data}</div>
  );
};

export default App;
