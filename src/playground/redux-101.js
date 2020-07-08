import React from "react";
import { createStore} from "redux";

const store = createStore((state = { count: 0 }) => {
    return state;
});

console.log(store.getState());

const Redux101 = () => (
    <div>
        Hello
    </div>
);

export default Redux101