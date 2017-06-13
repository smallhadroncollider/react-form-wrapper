# React Form Wrapper

A really simple wrapper for forms in React for using with stateless components

## Usage

Wrap the form (e.g. in a Redux container):

```javascript
import { connect } from "react-redux";
import withForm from "withForm";

import { startGame } from "app/data/actions/game";
import Main from "app/components/start-game/Main";

// setup fields with default values
const fields = {
    serves: 5,
    firstTo: 21,
};

// withForm adds a getValues function as a prop
const mapDispatchToProps = (dispatch, { getValues }) => ({
    onStartGame: () => {
        const values = getValues();
        dispatch(startGame(values));
    },
});

const component = connect(null, mapDispatchToProps)(Main);

// wrap component with a form
export default withForm(component, fields);
```

In the stateless component:

```javascript
import React from "react";

// given field names will be passed in as props
export default ({ onStartGame, serves, firstTo }) => (
    <div>
        <h2>New Game</h2>

        <div className="form-group">
            <label>Change Server Every</label>

            // passes in an onChange and defaultValue prop
            <select { ...serves } className="form-control">
                <option value="2">2 serves</option>
                <option value="5">5 serves</option>
            </select>
        </div>

        <div className="form-group">
            <label>First to</label>

            // passes in an onChange and defaultValue prop
            <input { ...firstTo } className="form-control" />
        </div>

        <button onClick={ onStartGame } className="btn btn-primary">Start Game</button>
    </div>
);
```
