# JWT Authentication with RTK Query

Follow these steps to set up JWT authentication with RTK Query.

1. Set up a Redux store with an empty central API slice definition. (`src/store`)
2. Create a separate auth slice that uses RTK Query to handle register and login mutations. The slice stores the received JWT in state (and optionally, session storage). (`features/auth`)
3. Create a component that allows users to register or login (`<AuthForm>`). This component uses the mutations defined earlier.
4. Use the truthiness of `token` in state to conditionally render different views.
   1. `layout/Navbar` contains an example of using `token` and also removing `token` to log out.

This repo also contains an example of how to use React Router and `<Outlet>`.
