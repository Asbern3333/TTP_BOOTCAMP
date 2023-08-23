
[For Events](https://react.dev/learn/responding-to-events)
```JS
function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onSmash={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
```

to stop the propagation(clicking the button make it clicking the toolbar too)

```JSX
<div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
<button onClick={e => {
e.stopPropagation();
onClick();
}}>
</button>
<div>
```
Onscroll wroking without the propagation


`e.stopPropagation()` stops the event handlers attached to the tags above from firing.
`e.preventDefault()` prevents the default browser behavior for the few events that have it.

```diff
+You can handle events by passing a function as a prop to an element like <button>.

+Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.

+You can define an event handler function separately or inline.

+Event handlers are defined inside a component, so they can access props.

+You can declare an event handler in a parent and pass it as a prop to a child.

+You can define your own event handler props with application-specific names.

+Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.

+Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.

+Explicitly calling an event handler prop from a child handler is a good alternative to propagation.
```

[click here For more event handlers](https://react.dev/reference/react-dom/components/common#common-props)

Arrow function  const fun = () =>


**UseState**

import { useState } from 'react';
const [index, setIndex] = useState(0);
if you define two you must input 2 
 const [position, setPosition] = useState({x: 0,y: 0});

```bash
If your state variable is an object, remember that you can’t update only one field in it without explicitly copying the other fields. For example, you can’t do setPosition({ x: 100 })
```

Avoid redundant state 
```JSX
{
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
 setFullName(e.target.value + ' ' + lastName);//render
  setFullName(firstName + ' ' + e.target.value);//render
}
=>
{ const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;}
```
Dolving the issue by adding ID in the dublicate and  nessted

```diff
+ If two state variables always update together, consider merging them into one.

+Choose your state variables carefully to avoid creating “impossible” states.

+Structure your state in a way that reduces the chances that you’ll make a mistake updating it.

+Avoid redundant and duplicate state so that you don’t need to keep it in sync.

+Don’t put props into state unless you specifically want to prevent updates.

+For UI patterns like selection, keep ID or index in state instead of the object itself.

+If updating deeply nested state is complicated, try flattening it.

```

