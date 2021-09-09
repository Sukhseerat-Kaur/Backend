const fs = require("fs");

const [cmd, todo] = process.argv.slice(2);

const createTodoList = (todo = "") => {
  fs.writeFile("./todoList", todo, () => {
    console.log("Todo List Created");
  });
};

const addTodo = (todo) => {
  fs.exists("./todoList", (exists) => {
    if (exists) {
      fs.appendFile("./todoList", `\n${todo}`, () => {
        console.log("A new todo added");
      });
    } else createTodoList(todo);
  });
};

const getTodoList = () => {
  fs.readFile("./todoList", "utf-8", (err, todoList) => {
    if (err) console.log(err);
    console.log(todoList);
  });
};

const clearList = () => {
  fs.unlink("./todoList", () => {
    console.log("Deleted the todo list");
  });
};

const wrongCmd = () => {
  console.log(`${cmd} is no a valid action. Please enter only one of the following commands.
1. create-todo-list {arg, if no arg then an empty list gets created}
2. add-todo {arg}
3. get-list
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
