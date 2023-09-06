# label with text

```
  <label for="first-name">Enter Your First Name: <input type ="text" id="first-name" /></label>
        <label for="last-name">Enter Your Last Name: <input type="text" id="last-name" /></label>
        <label for="email">Enter Your Email: <input type="email"id="email" /></label>
        <label for="new-password">Create a New Password: <input type="password" 
```

The border of the last fieldset element looks a little out of place. You can select the last element of a specific type using the last-of-type CSS pseudo-class, like this:

p:last-of-type { }