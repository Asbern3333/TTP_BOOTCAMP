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