const fs = require("fs");

const [cmd, todo] = process.argv.slice(2);

const createTodoList = (todo) => {
  fs.writeFileSync("./todoList", todo);
};

const addTodo = (todo) => {
  if (fs.existsSync("./todoList")) {
    fs.appendFileSync();
  }
};

if (cmd === "create") createTodoList(todo);
