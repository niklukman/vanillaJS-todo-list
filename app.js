const addTask = document.querySelector('.add');

let val;

val = addTask;

const addEvent = (e) => {
  console.log(e.value);
  e.preventDefault();
}

addTask.addEventListener('click', addEvent);



console.log(val);