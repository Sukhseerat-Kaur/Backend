const fs = require("fs");

const [cmd, todo] = process.argv.slice(2);

const createTodoList = (todo = "") => {
  fs.writeFileSync("./todoList", todo);
};

const addTodo = (todo) => {
  if (fs.existsSync("./todoList")) {
    fs.appendFileSync("./todoList", `\n${todo}`);
  } else createTodoList(todo);
};

const getTodoList = () => {
  const todoList = fs.readFileSync("./todoList", "utf-8");
  console.log(todoList);
};

const clearList = () => {
  fs.unlinkSync("./todoList");
};

const wrongCmd = () => {
  console.log(`${cmd} is no a valid action. Please enter only one of the following commands.
1.create-todo-list {arg, if no arg then an empty list gets created}
2. add-todo {arg}
3. get-list {arg}
4. clear-list`);
};

const todoApp = () => {
  if (cmd === "create-todo-list") createTodoList(todo);
  else if (cmd === "add-todo") addTodo(todo);
  else if (cmd === "get-list") getTodoList();
  else if (cmd === "clear-list") clearList();
  else wrongCmd();
};

todoApp();
