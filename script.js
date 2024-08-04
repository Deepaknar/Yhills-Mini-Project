document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim(); // Get and trim the input

  if (taskText === "") {
    alert("Please Enter a Task"); // Alert if input is empty
    return; // Exit the function if input is not valid
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li"); // Create a new list item
  const taskSpan = document.createElement("span"); // Create a span for the task text
  taskSpan.textContent = taskText; // Set the span's text to the input
  li.appendChild(taskSpan); // Add the span to the list item

  // Create Edit Button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => editTask(li, taskSpan));
  li.appendChild(editButton); // Add edit button to the list item

  // Create Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deleteTask(li));
  li.appendChild(deleteButton); 

  taskList.appendChild(li); 
  taskInput.value = ""; 
}

function editTask(li, taskSpan) {
  const taskText = taskSpan.textContent; 
  const input = document.createElement("input"); 
  input.type = "text";
  input.value = taskText; 

  const saveButton = document.createElement("button"); 
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", () => {
    const newText = input.value.trim(); 
    if (newText !== "") {
      taskSpan.textContent = newText; 
      li.replaceChild(taskSpan, input); 
      li.replaceChild(editButton, saveButton); 
    }
  });

  const editButton = li.querySelector("button:first-of-type"); 
  li.replaceChild(input, taskSpan); 
  li.replaceChild(saveButton, editButton); 
}

function deleteTask(li) {
  li.remove(); 
}