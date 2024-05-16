# Drag and Drop Containers

This project demonstrates a drag-and-drop functionality using HTML, CSS, and vanilla JavaScript. The application contains three containers named To-Do, Working, and Done, each containing draggable items. 

## Method Used to Solve the Problem

### HTML
- Created a simple structure with three containers.
- Each container has a unique ID and class.
- Each container has a header with a specific color and multiple draggable items.

### CSS
- Styled the containers and items for a clean, scrollable layout.
- Set specific colors for the headers of each container.
- Added visual feedback for dragging and dropping actions.

### JavaScript
- Utilized event listeners for `dragstart`, `dragend`, `dragover`, `dragenter`, `dragleave`, and `drop` to manage the drag-and-drop functionality.
- `dragstart` and `dragend`: Manage the appearance of the dragged item.
- `dragover` and `dragenter`: Allow items to be dropped into the containers.
- `dragleave` and `drop`: Handle the visual feedback and append the dragged item to the new container.
