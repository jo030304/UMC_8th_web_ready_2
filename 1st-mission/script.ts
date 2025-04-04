const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const doneList = document.getElementById('done-list') as HTMLUListElement;
// typescript와 interface와 type의 차이를 발표해주세요.
type Todo = {
  id: number;
  text: string;
};

let todos: Todo[] = []; // 완료되지 않은 할 일 항목 저장 배열
let doneTasks: Todo[] = []; // 완료된 할 일 항목 저장 배열

// 할 일 목록 렌더링 함수
const renderTasks = (): void => {
  todoList.innerHTML = '';
  doneList.innerHTML = '';
  // todos 배열안의 값들을 todo에 넣으면서 반복문 돌림
  todos.forEach((todo) => {
    const li = createTodoElement(todo, false);
    todoList.appendChild(li);
  });

  // foreach = c++에서의 for(int todo : doneTasks)랑 같음
  doneTasks.forEach((todo) => {
    const li = createTodoElement(todo, true);
    doneList.appendChild(li);
  });
};

// todoInput.value >> value = 값
// todoInput.value는 사용자 입력 텍스트
// trim() = 앞뒤 공백 제거
const getTodoText = (): string => {
  return todoInput.value.trim();
};

// 새로운 할 일 추가 함수
const addTodo = (text: string): void => {
  todos.push({ id: Date.now(), text });
  todoInput.value = '';
  renderTasks();
};

const completeTodo = (todo: Todo): void => {
  todos = todos.filter((t) => t.id !== todo.id);
  doneTasks.push(todo);
  renderTasks();
};

const deleteTodo = (todo: Todo): void => {
  doneTasks = doneTasks.filter((t) => t.id !== todo.id);
  renderTasks();
};

const createTodoElement = (todo: Todo, isDone: boolean): HTMLLIElement => {
  const li = document.createElement('li');
  li.classList.add('render-container__item');
  li.textContent = todo.text;

  const button = document.createElement('button');
  button.classList.add('render-container__item-button');

  if (isDone) {
    button.textContent = '삭제';
    button.style.backgroundColor = '#dc3545';
  } else {
    button.textContent = '완료';
    button.style.backgroundColor = '#28a745';
  }

  button.addEventListener('click', () => {
    if (isDone) {
      deleteTodo(todo);
    } else {
      completeTodo(todo);
    }
  });

  li.appendChild(button);
  return li;
};

todoForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const text = getTodoText();
  if (text) {
    addTodo(text);
  }
});

renderTasks();