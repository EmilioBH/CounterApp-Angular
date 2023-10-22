# CounterApp Documentation

This README provides an overview of the CounterApp we've developed following the instructions provided in the technical exercise.

## Exercise Steps

### Step 1: Display a Counter

In the main component, we have implemented a counter that starts at 0.

### Step 2: Create the /up and /down Pages

We've created two components for the /up and /down pages and configured the routes in the routing file (app-routing.module.ts) to load their respective components. Additionally, we've added buttons on these pages to increase or decrease the counter based on the current page.

### Step 3: Implement the Counter

In the main component, we've implemented the logic to increase or decrease the counter based on the current page. The page background changes when the counter reaches 10 or -10. We've also implemented logic to update X2 the increase/decrease buttons every 30 actions.

### Step 5: Add the /reset Page

We've created a new component for the /reset page. On this page, we've added a button that resets the counter to zero.

### Step 6: Navigation Between Pages

We've added navigation links or buttons in the /up and /down components to enable navigation between the /up, /down, and /reset pages.

### Step 7: Counter Persistence

We've used browser's local storage (localStorage) to ensure the counter retains its value even after changing or refreshing the page.

### Step 8: Testing and Documentation

We've conducted functional and navigation testing to ensure the application meets all requirements. We've also documented the code and explained our design decisions.

## How to Run

To run the application, follow these steps:

1. Clone this repository to your local machine.

2. Open a terminal in the root folder of the application.

3. Execute the following command to install dependencies:
   ```
   npm install
   ```

4. Run the application on a local server with the following command:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200/` to interact with the application.

## Technologies Used

- Angular 2+
- HTML
- CSS
- TypeScript
- LocalStorage for data persistence

## Usage Examples

Here are some examples of how to interact with the application:

- Navigate between the /up, /down, and /reset pages using navigation links or buttons.
- Click the buttons on the /up and /down pages to increase or decrease the counter.
- Observe how the page background changes color when the counter reaches 10 or -10.
- On the /reset page, click the button to reset the counter to zero.

Enjoy exploring the application!

## License

This project is distributed under the MIT License. Please refer to the LICENSE.md file for more information.