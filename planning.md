## Planning Stage

### Functionality

- ✅ see the list
- ✅ add a new item
- delete from the list

### What the user will see

Structure:

- App - class
- List - function
- TaskAdder (child of List) - class
- Header - function - this adds title

App:

- class
- state - in the state add one task
- render - what we want to see - pass props - other files we link to through the tag `<List />`.
- initial state which holds the data for all the to-dos

List (child of App):

- show current to-dos that have already been added
- function which maps through the array and creates the jsx for list element
- pass props through for the TaskAdder

TaskAdder (child of list):

- class
- state - object which is empty
- render - form with inputs - rendering the interactivity
- functions handleSubmit and handleChange

Header (child of App):

- header function

Extra Features:

- Urgency rating red/bring to top etc
