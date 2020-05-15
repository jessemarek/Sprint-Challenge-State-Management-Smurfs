1. What problem does the context API help solve?

    **

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    **

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    *Application State is state that the entire application may need to know about. Component State is state that lives inside a specific component and only that component or its children knows about it. Application state should be used if multiple components need to have access to that state throughout the application. Component state should be used if only component needs to have access to it. Forms are examples of components that would use Component State to handle the form data. Data for what user is logged in is an example of something that might be handled as Application State if multiple components need access to the state of what user is logged in.*

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    **

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    *Redux is my favorite advanced state managment system. I like how the state is handled in a single store and how the data flows in a single path. I also like the way actions and reducers work. Even though there is more setup involved I think it is worth it for large applications since it makes state management easier to follow.*
