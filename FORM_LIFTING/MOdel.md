```js
 //ui/Modal.jsx
function Modal({ children, isVisible, hideModal }) {
  if (!isVisible) return null;
  return (
    <div onClick={hideModal} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-items-center items-center">
      <div onClick={e => e.stopPropagation()} className="max-w-xl w-144 mx-auto flex flex-col h-2/3">
        <button onClick={hideModal} className="text-white text-xl place-self-end">X</button>
        <div className="bg-white text-gray-800 p-8">{children}</div>
      </div>
    </div>
  );
}

export default Modal;```



```js
<Modal isVisible={isModalVisible} hideModal={() => setIsModalVisible(false)}>
  {/* form will go here */}
</Modal>
```

```js
<Modal
  isVisible={isModalVisible}
  hideModal={() => setIsModalVisible(false)}
>
  <form
    onSubmit={handleAddJobSubmit}
    className="selection:bg-blue-200 flex flex-col gap-2"
  >
    <h1>Add Job Posting</h1>
    <fieldset className="flex flex-col">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        className="bg-white border-4 focus:outline-none p-2"
      />
    </fieldset>
    <fieldset className="flex flex-col">
      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        id="company"
        className="bg-white border-4 focus:outline-none p-2"
      />
    </fieldset>
    <fieldset className="flex flex-col">
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        className="bg-white border-4 focus:outline-none p-2"
      />
    </fieldset>
    <fieldset className="flex flex-col">
      <label htmlFor="minSalary">Salary Range</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          name="minSalary"
          id="minSalary"
          className="bg-white border-4 focus:outline-none p-2"
        />{" "}
        -
        <input
          type="number"
          name="maxSalary"
          id="maxSalary"
          className="bg-white border-4 focus:outline-none p-2"
        />
      </div>
    </fieldset>
    <fieldset className="flex flex-col">
      <label htmlFor="postDate">postDate</label>
      <input
        type="date"
        name="postDate"
        id="postDate"
        className="bg-white border-4 focus:outline-none p-2"
      />
    </fieldset>
    <fieldset className="flex flex-col">
      <label htmlFor="jobPostURL">Original Job Post URL</label>
      <input
        type="text"
        name="jobPostURL"
        id="jobPostURL"
        className="bg-white border-4 focus:outline-none p-2"
      />
    </fieldset>
    <input
      className="mt-4 bg-blue-500 hover:bg-blue-600 transition cursor-pointer py-2 text-white"
      type="submit"
    />
  </form>
</Modal>
```

    ```
    {
    path: '*',
    element: <NoMatch />,
    },```