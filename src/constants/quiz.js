const quizzes = {
    Python: [
        {
            id: 1,
            question: "What is the correct syntax to output 'Hello World' in Python?",
            options: ["echo 'Hello World'", "print('Hello World')", "console.log('Hello World')", "printf('Hello World')"],
            correctAnswer: "print('Hello World')",
        },
        {
            id: 2,
            question: "How do you start a comment in Python?",
            options: ["#", "//", "/*", "@"],
            correctAnswer: "#",
        },
        {
            id: 3,
            question: "Which of the following is not a valid Python data type?",
            options: ["list", "dictionary", "tuple", "array"],
            correctAnswer: "array",
        },
        {
            id: 4,
            question: "What is the output of: `len(['Python', 'is', 'fun'])`?",
            options: ["3", "2", "1", "Error"],
            correctAnswer: "3",
        },
        {
            id: 5,
            question: "What is the output of: `3 * 'Python'`?",
            options: ["PythonPythonPython", "Error", "3Python", "Python3"],
            correctAnswer: "PythonPythonPython",
        },
        {
            id: 6,
            question: "Which keyword is used for function definition in Python?",
            options: ["function", "def", "define", "func"],
            correctAnswer: "def",
        },
        {
            id: 7,
            question: "Which operator is used to calculate power in Python?",
            options: ["^", "**", "pow", "^^"],
            correctAnswer: "**",
        },
        {
            id: 8,
            question: "What is the correct file extension for Python files?",
            options: [".py", ".python", ".pyth", ".pt"],
            correctAnswer: ".py",
        },
        {
            id: 9,
            question: "Which of the following is a mutable data type in Python?",
            options: ["tuple", "string", "list", "integer"],
            correctAnswer: "list",
        },
        {
            id: 10,
            question: "What is the output of: `type(10.0)`?",
            options: ["int", "float", "double", "None"],
            correctAnswer: "float",
        },
        {
            id: 11,
            question: "How can you initialize a dictionary in Python?",
            options: [
                "dict = {}",
                "dict = []",
                "dict = ()",
                "dict = ''",
            ],
            correctAnswer: "dict = {}",
        },
        {
            id: 12,
            question: "Which function is used to get user input in Python?",
            options: ["input()", "read()", "scanf()", "cin"],
            correctAnswer: "input()",
        },
        {
            id: 13,
            question: "Which keyword is used to check if an element exists in a list?",
            options: ["in", "is", "exists", "for"],
            correctAnswer: "in",
        },
        {
            id: 14,
            question: "How do you declare a variable in Python?",
            options: ["var x = 10", "x = 10", "int x = 10", "declare x = 10"],
            correctAnswer: "x = 10",
        },
        {
            id: 15,
            question: "Which method is used to remove whitespace from the start and end of a string?",
            options: ["trim()", "strip()", "clean()", "remove()"],
            correctAnswer: "strip()",
        },
        {
            id: 16,
            question: "How do you create a set in Python?",
            options: ["set = {}", "set = []", "set = ()", "set = set()"],
            correctAnswer: "set = set()",
        },
        {
            id: 17,
            question: "What is the output of: `5 // 2`?",
            options: ["2", "2.5", "3", "None"],
            correctAnswer: "2",
        },
        {
            id: 18,
            question: "Which of the following methods can be used to add an item to a list?",
            options: ["add()", "insert()", "append()", "push()"],
            correctAnswer: "append()",
        },
        {
            id: 19,
            question: "Which Python library is used for data analysis?",
            options: ["numpy", "pandas", "scipy", "matplotlib"],
            correctAnswer: "pandas",
        },
        {
            id: 20,
            question: "Which keyword is used to create a class in Python?",
            options: ["class", "Class", "cls", "object"],
            correctAnswer: "class",
        },
        {
            id: 21,
            question: "What is the output of: `print(2 ** 3)`?",
            options: ["6", "8", "9", "Error"],
            correctAnswer: "8",
        },
        {
            id: 22,
            question: "Which of the following is a Python package for machine learning?",
            options: ["TensorFlow", "pandas", "matplotlib", "requests"],
            correctAnswer: "TensorFlow",
        },
        {
            id: 23,
            question: "How do you start a for loop in Python?",
            options: [
                "for i = 0; i < 10; i++:",
                "for i in range(10):",
                "for (i : range(10))",
                "foreach i in range(10):",
            ],
            correctAnswer: "for i in range(10):",
        },
        {
            id: 24,
            question: "Which of the following statements is true about Python?",
            options: [
                "Python is a statically-typed language",
                "Python uses indentation to define code blocks",
                "Python is case-insensitive",
                "Python doesn't support OOP",
            ],
            correctAnswer: "Python uses indentation to define code blocks",
        },
        {
            id: 25,
            question: "Which of these is not a Python keyword?",
            options: ["lambda", "map", "pass", "yield"],
            correctAnswer: "map",
        },
        {
            id: 26,
            question: "Which of the following is used to create a virtual environment in Python?",
            options: ["venv", "virtualenv", "both", "none"],
            correctAnswer: "both",
        },
        {
            id: 27,
            question: "What does PEP stand for in Python?",
            options: [
                "Python Efficiency Program",
                "Python Enhancement Proposal",
                "Programming Efficiency Proposal",
                "Python Extension Program",
            ],
            correctAnswer: "Python Enhancement Proposal",
        },
        {
            id: 28,
            question: "Which method is used to open a file in Python?",
            options: ["read()", "open()", "file()", "access()"],
            correctAnswer: "open()",
        },
        {
            id: 29,
            question: "What is the output of: `print(type({}))`?",
            options: ["list", "dict", "set", "tuple"],
            correctAnswer: "dict",
        },
        {
            id: 30,
            question: "Which Python library is used for scientific computing?",
            options: ["numpy", "pandas", "scipy", "seaborn"],
            correctAnswer: "numpy",
        },
    ],
    JavaScript: [
        {
            id: 1,
            question: "Which of the following is the correct way to declare a variable in JavaScript?",
            options: ["let x = 10;", "var x = 10;", "const x = 10;", "All of the above"],
            correctAnswer: "All of the above",
        },
        {
            id: 2,
            question: "What is the output of `typeof null`?",
            options: ["null", "object", "undefined", "boolean"],
            correctAnswer: "object",
        },
        {
            id: 3,
            question: "Which method is used to convert a JSON string into a JavaScript object?",
            options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.toObject()"],
            correctAnswer: "JSON.parse()",
        },
        {
            id: 4,
            question: "Which keyword is used to define a constant in JavaScript?",
            options: ["const", "var", "let", "constant"],
            correctAnswer: "const",
        },
        {
            id: 5,
            question: "What is the output of `console.log(2 + '2')`?",
            options: ["4", "'22'", "NaN", "Error"],
            correctAnswer: "'22'",
        },
        {
            id: 6,
            question: "Which method is used to add an element at the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            correctAnswer: "push()",
        },
        {
            id: 7,
            question: "What is the purpose of the `isNaN()` function?",
            options: ["Checks if a value is a number", "Checks if a value is NaN", "Checks if a value is finite", "None of the above"],
            correctAnswer: "Checks if a value is NaN",
        },
        {
            id: 8,
            question: "Which of the following is NOT a valid JavaScript data type?",
            options: ["String", "Number", "Boolean", "Character"],
            correctAnswer: "Character",
        },
        {
            id: 9,
            question: "What is the output of `console.log(typeof [])`?",
            options: ["object", "array", "list", "undefined"],
            correctAnswer: "object",
        },
        {
            id: 10,
            question: "Which of the following is a falsy value in JavaScript?",
            options: ["false", "0", "''", "All of the above"],
            correctAnswer: "All of the above",
        },
        {
            id: 11,
            question: "What does `==` compare in JavaScript?",
            options: ["Only value", "Only type", "Value and type", "None of the above"],
            correctAnswer: "Only value",
        },
        {
            id: 12,
            question: "How can you add a single-line comment in JavaScript?",
            options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
            correctAnswer: "// comment",
        },
        {
            id: 13,
            question: "Which object method is used to access the length of a string?",
            options: [".length", ".size()", ".count()", ".charCount()"],
            correctAnswer: ".length",
        },
        {
            id: 14,
            question: "Which of the following loops is guaranteed to execute at least once?",
            options: ["for loop", "while loop", "do-while loop", "None of the above"],
            correctAnswer: "do-while loop",
        },
        {
            id: 15,
            question: "What is the output of `console.log([] + [])`?",
            options: ["[]", "undefined", "''", "Error"],
            correctAnswer: "''",
        },
        {
            id: 16,
            question: "How can you declare an asynchronous function in JavaScript?",
            options: ["async function", "function async", "asynchronous function", "async()"],
            correctAnswer: "async function",
        },
        {
            id: 17,
            question: "What does the `map()` method do?",
            options: [
                "Iterates through an array and returns a new array",
                "Filters elements of an array",
                "Adds an element to an array",
                "Deletes an element from an array",
            ],
            correctAnswer: "Iterates through an array and returns a new array",
        },
        {
            id: 18,
            question: "Which of the following is a JavaScript framework?",
            options: ["React", "Django", "Flask", "Spring"],
            correctAnswer: "React",
        },
        {
            id: 19,
            question: "Which keyword is used to handle errors in JavaScript?",
            options: ["try", "catch", "finally", "All of the above"],
            correctAnswer: "All of the above",
        },
        {
            id: 20,
            question: "What is the result of `2 === '2'`?",
            options: ["true", "false", "undefined", "NaN"],
            correctAnswer: "false",
        },
        {
            id: 21,
            question: "Which method is used to sort an array in JavaScript?",
            options: ["order()", "arrange()", "sort()", "filter()"],
            correctAnswer: "sort()",
        },
        {
            id: 22,
            question: "What is the purpose of the `this` keyword in JavaScript?",
            options: [
                "Refers to the current function",
                "Refers to the global object",
                "Refers to the object it belongs to",
                "None of the above",
            ],
            correctAnswer: "Refers to the object it belongs to",
        },
        {
            id: 23,
            question: "What is the purpose of the `setTimeout()` function?",
            options: [
                "Executes a function repeatedly",
                "Executes a function after a specified delay",
                "Stops a function execution",
                "None of the above",
            ],
            correctAnswer: "Executes a function after a specified delay",
        },
        {
            id: 24,
            question: "How do you declare an arrow function in JavaScript?",
            options: ["function() => {}", "() => {}", "=> {}", "arrow() => {}"],
            correctAnswer: "() => {}",
        },
        {
            id: 25,
            question: "What will `console.log(0.1 + 0.2 === 0.3)` return?",
            options: ["true", "false", "undefined", "NaN"],
            correctAnswer: "false",
        },
        {
            id: 26,
            question: "Which operator is used to check if a property exists in an object?",
            options: ["in", "of", "exists", "has"],
            correctAnswer: "in",
        },
        {
            id: 27,
            question: "What is the default behavior of the `split()` method?",
            options: [
                "Splits a string into an array based on spaces",
                "Splits a string into an array based on a specified delimiter",
                "Replaces a character in a string",
                "Joins elements of an array into a string",
            ],
            correctAnswer: "Splits a string into an array based on a specified delimiter",
        },
        {
            id: 28,
            question: "Which event is triggered when an element is clicked?",
            options: ["onclick", "onhover", "onpress", "onselect"],
            correctAnswer: "onclick",
        },
        {
            id: 29,
            question: "Which of these is not a JavaScript framework or library?",
            options: ["Angular", "React", "Vue", "Laravel"],
            correctAnswer: "Laravel",
        },
        {
            id: 30,
            question: "What will the following code output? `console.log(typeof NaN)`",
            options: ["number", "NaN", "undefined", "object"],
            correctAnswer: "number",
        },
    ],
    Java: [
        {
            id: 1,
            question: "What is the default value of a boolean variable in Java?",
            options: ["true", "false", "0", "null"],
            correctAnswer: "false",
        },
        {
            id: 2,
            question: "Which keyword is used to inherit a class in Java?",
            options: ["implements", "extends", "inherits", "None of the above"],
            correctAnswer: "extends",
        },
        {
            id: 3,
            question: "What is the size of an `int` in Java?",
            options: ["8 bits", "16 bits", "32 bits", "64 bits"],
            correctAnswer: "32 bits",
        },
        {
            id: 4,
            question: "Which method is the entry point of a Java program?",
            options: ["start()", "main()", "run()", "init()"],
            correctAnswer: "main()",
        },
        {
            id: 5,
            question: "Which of these is not a primitive data type in Java?",
            options: ["int", "float", "String", "double"],
            correctAnswer: "String",
        },
        {
            id: 6,
            question: "What is the purpose of the `final` keyword in Java?",
            options: [
                "To declare a variable that cannot be modified",
                "To prevent method overriding",
                "To prevent class inheritance",
                "All of the above",
            ],
            correctAnswer: "All of the above",
        },
        {
            id: 7,
            question: "What is the output of `System.out.println(10/0);`?",
            options: ["0", "Infinity", "ArithmeticException", "Compilation error"],
            correctAnswer: "ArithmeticException",
        },
        {
            id: 8,
            question: "Which package is imported by default in every Java program?",
            options: ["java.util", "java.io", "java.lang", "None of the above"],
            correctAnswer: "java.lang",
        },
        {
            id: 9,
            question: "What is the use of the `this` keyword in Java?",
            options: [
                "Refers to the current object",
                "Refers to the parent class",
                "Refers to the global object",
                "None of the above",
            ],
            correctAnswer: "Refers to the current object",
        },
        {
            id: 10,
            question: "Which access modifier allows visibility only within the same package?",
            options: ["public", "protected", "private", "default"],
            correctAnswer: "default",
        },
        {
            id: 11,
            question: "What is the output of `System.out.println('A' + 'B');`?",
            options: ["AB", "65B", "131", "Compilation error"],
            correctAnswer: "131",
        },
        {
            id: 12,
            question: "Which of the following is used to handle exceptions in Java?",
            options: ["try-catch", "if-else", "for loop", "switch-case"],
            correctAnswer: "try-catch",
        },
        {
            id: 13,
            question: "Which class is used to read input from the console in Java?",
            options: ["InputReader", "Scanner", "BufferedReader", "Console"],
            correctAnswer: "Scanner",
        },
        {
            id: 14,
            question: "Which method in Java is used to start a thread?",
            options: ["run()", "execute()", "start()", "init()"],
            correctAnswer: "start()",
        },
        {
            id: 15,
            question: "What is the parent class of all classes in Java?",
            options: ["Object", "Class", "Main", "Parent"],
            correctAnswer: "Object",
        },
        {
            id: 16,
            question: "What is the output of `System.out.println(10 >> 1);`?",
            options: ["5", "10", "20", "1"],
            correctAnswer: "5",
        },
        {
            id: 17,
            question: "Which of these is not a valid loop in Java?",
            options: ["for", "foreach", "while", "do-while"],
            correctAnswer: "foreach",
        },
        {
            id: 18,
            question: "Which keyword is used to create an interface in Java?",
            options: ["interface", "class", "implements", "None of the above"],
            correctAnswer: "interface",
        },
        {
            id: 19,
            question: "What is the purpose of the `super` keyword in Java?",
            options: [
                "Refers to the superclass of the current object",
                "Refers to the current object",
                "Refers to the child class",
                "None of the above",
            ],
            correctAnswer: "Refers to the superclass of the current object",
        },
        {
            id: 20,
            question: "What will `System.out.println(10 == 10.0);` output?",
            options: ["true", "false", "Compilation error", "Runtime error"],
            correctAnswer: "true",
        },
        {
            id: 21,
            question: "What is the output of `Math.min(5, -1);`?",
            options: ["5", "-1", "0", "Compilation error"],
            correctAnswer: "-1",
        },
        {
            id: 22,
            question: "What is the default value of an `int` variable in Java?",
            options: ["0", "-1", "null", "undefined"],
            correctAnswer: "0",
        },
        {
            id: 23,
            question: "Which of the following is used to create an instance of a class?",
            options: ["constructor", "object", "method", "None of the above"],
            correctAnswer: "constructor",
        },
        {
            id: 24,
            question: "Which keyword is used to break out of a loop in Java?",
            options: ["exit", "stop", "break", "continue"],
            correctAnswer: "break",
        },
        {
            id: 25,
            question: "Which of the following is not a reserved keyword in Java?",
            options: ["native", "goto", "const", "include"],
            correctAnswer: "include",
        },
        {
            id: 26,
            question: "What is the size of a `long` data type in Java?",
            options: ["32 bits", "64 bits", "128 bits", "Variable"],
            correctAnswer: "64 bits",
        },
        {
            id: 27,
            question: "What is the purpose of the `finally` block in Java?",
            options: [
                "Executes only if an exception is thrown",
                "Executes only if no exception is thrown",
                "Executes always after try-catch",
                "None of the above",
            ],
            correctAnswer: "Executes always after try-catch",
        },
        {
            id: 28,
            question: "What is an abstract class in Java?",
            options: [
                "A class that cannot be instantiated",
                "A class with all methods abstract",
                "A class that implements interfaces",
                "None of the above",
            ],
            correctAnswer: "A class that cannot be instantiated",
        },
        {
            id: 29,
            question: "What is the output of `System.out.println(3 * 2 + \"3\");`?",
            options: ["9", "63", "123", "None of the above"],
            correctAnswer: "63",
        },
        {
            id: 30,
            question: "Which of these is a checked exception in Java?",
            options: ["IOException", "ArithmeticException", "NullPointerException", "IndexOutOfBoundsException"],
            correctAnswer: "IOException",
        },
    ],
    Dart: [
        {
            id: 1,
            question: "What type of programming language is Dart?",
            options: ["Functional", "Object-Oriented", "Procedural", "None of the above"],
            correctAnswer: "Object-Oriented",
        },
        {
            id: 2,
            question: "Which company developed Dart?",
            options: ["Microsoft", "Apple", "Google", "Facebook"],
            correctAnswer: "Google",
        },
        {
            id: 3,
            question: "What is the default value of an uninitialized variable in Dart?",
            options: ["0", "null", "undefined", "No default value"],
            correctAnswer: "null",
        },
        {
            id: 4,
            question: "Which keyword is used to define a constant variable in Dart?",
            options: ["const", "final", "static", "immutable"],
            correctAnswer: "const",
        },
        {
            id: 5,
            question: "What does the `async` keyword signify in Dart?",
            options: [
                "The function runs synchronously",
                "The function returns a Future",
                "The function is private",
                "None of the above",
            ],
            correctAnswer: "The function returns a Future",
        },
        {
            id: 6,
            question: "Which of the following is used to define a list in Dart?",
            options: ["{}", "[]", "()", "<>"],
            correctAnswer: "[]",
        },
        {
            id: 7,
            question: "Which of these is a valid way to define a map in Dart?",
            options: [
                "{ 'key': 'value' }",
                "[ 'key', 'value' ]",
                "Map('key', 'value')",
                "None of the above",
            ],
            correctAnswer: "{ 'key': 'value' }",
        },
        {
            id: 8,
            question: "What is the use of the `late` keyword in Dart?",
            options: [
                "To define a nullable variable",
                "To define a variable that will be initialized later",
                "To define a static variable",
                "None of the above",
            ],
            correctAnswer: "To define a variable that will be initialized later",
        },
        {
            id: 9,
            question: "Which of the following is not a built-in data type in Dart?",
            options: ["int", "double", "String", "char"],
            correctAnswer: "char",
        },
        {
            id: 10,
            question: "What is the syntax for string interpolation in Dart?",
            options: ["'Hello, \$name'", "\"Hello, $name\"", "Both A and B", "None of the above"],
            correctAnswer: "Both A and B",
        },
        {
            id: 11,
            question: "What is the equivalent of null safety in Dart?",
            options: [
                "Ensuring variables are never null",
                "A compiler feature to handle null values",
                "Both A and B",
                "None of the above",
            ],
            correctAnswer: "Both A and B",
        },
        {
            id: 12,
            question: "Which method is used to print output in Dart?",
            options: ["echo()", "print()", "System.out.println()", "log()"],
            correctAnswer: "print()",
        },
        {
            id: 13,
            question: "Which symbol is used to indicate optional positional parameters in Dart?",
            options: ["{}", "[]", "()", "<>"],
            correctAnswer: "[]",
        },
        {
            id: 14,
            question: "What is the return type of the `main()` function in Dart?",
            options: ["int", "void", "Future<void>", "Both B and C"],
            correctAnswer: "Both B and C",
        },
        {
            id: 15,
            question: "How do you declare a nullable variable in Dart?",
            options: [
                "int number = null;",
                "int? number;",
                "nullable int number;",
                "None of the above",
            ],
            correctAnswer: "int? number;",
        },
        {
            id: 16,
            question: "What is a `Future` in Dart?",
            options: [
                "A class representing a value that will be available later",
                "A keyword for asynchronous programming",
                "A syntax for defining variables",
                "None of the above",
            ],
            correctAnswer: "A class representing a value that will be available later",
        },
        {
            id: 17,
            question: "What is the use of the `spread operator (...)` in Dart?",
            options: [
                "To combine lists",
                "To copy maps",
                "To iterate through lists",
                "None of the above",
            ],
            correctAnswer: "To combine lists",
        },
        {
            id: 18,
            question: "What is the output of `print('Dart'.length);`?",
            options: ["4", "5", "0", "Runtime Error"],
            correctAnswer: "4",
        },
        {
            id: 19,
            question: "Which function is used to parse a string to an integer in Dart?",
            options: ["int.parse()", "toInt()", "parseInt()", "None of the above"],
            correctAnswer: "int.parse()",
        },
        {
            id: 20,
            question: "What is the `List.generate()` method used for?",
            options: [
                "To create a new list with fixed length",
                "To generate a list based on a function",
                "To sort a list",
                "None of the above",
            ],
            correctAnswer: "To generate a list based on a function",
        },
        {
            id: 21,
            question: "Which of these is a valid way to define a class in Dart?",
            options: [
                "class MyClass { }",
                "new class MyClass { }",
                "define class MyClass { }",
                "All of the above",
            ],
            correctAnswer: "class MyClass { }",
        },
        {
            id: 22,
            question: "Which of these is a valid way to handle errors in Dart?",
            options: ["try-catch", "if-else", "switch-case", "while loop"],
            correctAnswer: "try-catch",
        },
        {
            id: 23,
            question: "What is the `@required` annotation used for in Dart?",
            options: [
                "To mark a parameter as required",
                "To specify a default value",
                "To declare a nullable variable",
                "None of the above",
            ],
            correctAnswer: "To mark a parameter as required",
        },
        {
            id: 24,
            question: "What does the `??` operator do in Dart?",
            options: [
                "Performs null-aware assignment",
                "Returns the value on the left if not null; otherwise, the value on the right",
                "Checks type compatibility",
                "None of the above",
            ],
            correctAnswer: "Returns the value on the left if not null; otherwise, the value on the right",
        },
        {
            id: 25,
            question: "What is the use of `async*` in Dart?",
            options: [
                "Defines a generator that produces an asynchronous sequence of values",
                "Marks a function as asynchronous",
                "Creates a future",
                "None of the above",
            ],
            correctAnswer: "Defines a generator that produces an asynchronous sequence of values",
        },
        {
            id: 26,
            question: "Which keyword is used to create a mixin in Dart?",
            options: ["extends", "implements", "mixin", "with"],
            correctAnswer: "mixin",
        },
        {
            id: 27,
            question: "What is the difference between `const` and `final` in Dart?",
            options: [
                "`const` variables are compile-time constants, while `final` variables can only be set once",
                "`final` variables are mutable, `const` variables are not",
                "Both mean the same",
                "None of the above",
            ],
            correctAnswer: "`const` variables are compile-time constants, while `final` variables can only be set once",
        },
        {
            id: 28,
            question: "What is the `main()` function's purpose in Dart?",
            options: [
                "It is the entry point of a Dart application",
                "It declares global variables",
                "It is used to initialize libraries",
                "None of the above",
            ],
            correctAnswer: "It is the entry point of a Dart application",
        },
        {
            id: 29,
            question: "Which collection is ordered and indexed in Dart?",
            options: ["List", "Set", "Map", "Queue"],
            correctAnswer: "List",
        },
        {
            id: 30,
            question: "Which operator is used for type checking in Dart?",
            options: ["==", "is", "as", "instanceof"],
            correctAnswer: "is",
        },
    ],
    Godot: [
        {
            id: 1,
            question: "What programming language is natively used in Godot?",
            options: ["Python", "C#", "GDScript", "JavaScript"],
            correctAnswer: "GDScript",
        },
        {
            id: 2,
            question: "Which type of node is required to create a 2D game in Godot?",
            options: ["Node", "Control", "Spatial", "Node2D"],
            correctAnswer: "Node2D",
        },
        {
            id: 3,
            question: "What is the root node of every scene in Godot?",
            options: ["Node", "SceneRoot", "RootNode", "NodeTree"],
            correctAnswer: "Node",
        },
        {
            id: 4,
            question: "How do you attach a script to a node in Godot?",
            options: [
                "Right-click the node and select 'Attach Script'",
                "Drag and drop the script onto the node",
                "Select the node and click the 'Attach Script' button",
                "Both A and C",
            ],
            correctAnswer: "Both A and C",
        },
        {
            id: 5,
            question: "What is the purpose of the `_ready()` function in GDScript?",
            options: [
                "To initialize the node when the game starts",
                "To replace the main loop of the game",
                "To perform cleanup tasks",
                "None of the above",
            ],
            correctAnswer: "To initialize the node when the game starts",
        },
        {
            id: 6,
            question: "What is the default physics engine in Godot?",
            options: ["Bullet", "Havok", "Godot Physics", "Unity Physics"],
            correctAnswer: "Godot Physics",
        },
        {
            id: 7,
            question: "Which type of node is used to detect collisions in Godot?",
            options: ["StaticBody", "CollisionShape", "KinematicBody", "Area2D"],
            correctAnswer: "CollisionShape",
        },
        {
            id: 8,
            question: "What is the function of `yield()` in GDScript?",
            options: [
                "Pause the script until a signal is emitted or a condition is met",
                "Terminate the script",
                "Loop indefinitely",
                "None of the above",
            ],
            correctAnswer: "Pause the script until a signal is emitted or a condition is met",
        },
        {
            id: 9,
            question: "What is the use of the `export` keyword in GDScript?",
            options: [
                "To make a variable editable in the editor",
                "To create a global variable",
                "To optimize the code",
                "None of the above",
            ],
            correctAnswer: "To make a variable editable in the editor",
        },
        {
            id: 10,
            question: "Which node is best suited for creating a UI button in Godot?",
            options: ["Control", "Button", "Label", "Panel"],
            correctAnswer: "Button",
        },
        {
            id: 11,
            question: "Which node is used for playing audio in Godot?",
            options: ["AudioStreamPlayer", "SoundNode", "AudioPlayer", "AudioManager"],
            correctAnswer: "AudioStreamPlayer",
        },
        {
            id: 12,
            question: "What is the main difference between `StaticBody` and `KinematicBody`?",
            options: [
                "StaticBody is immovable; KinematicBody is manually controlled by the user",
                "StaticBody uses physics; KinematicBody does not",
                "KinematicBody has collision detection; StaticBody does not",
                "None of the above",
            ],
            correctAnswer: "StaticBody is immovable; KinematicBody is manually controlled by the user",
        },
        {
            id: 13,
            question: "What file format is used to save scenes in Godot?",
            options: [".gd", ".tscn", ".scene", ".godot"],
            correctAnswer: ".tscn",
        },
        {
            id: 14,
            question: "What is the purpose of signals in Godot?",
            options: [
                "To handle user input",
                "To allow nodes to communicate with each other",
                "To create animations",
                "None of the above",
            ],
            correctAnswer: "To allow nodes to communicate with each other",
        },
        {
            id: 15,
            question: "Which of the following is not a built-in resource in Godot?",
            options: ["Texture", "Script", "Node", "Animation"],
            correctAnswer: "Node",
        },
        {
            id: 16,
            question: "Which node is best suited for creating a 3D game in Godot?",
            options: ["Node", "Control", "Spatial", "Node2D"],
            correctAnswer: "Spatial",
        },
        {
            id: 17,
            question: "What is the Godot AnimationPlayer node used for?",
            options: [
                "Playing 2D animations",
                "Managing animations for a node",
                "Managing UI transitions",
                "None of the above",
            ],
            correctAnswer: "Managing animations for a node",
        },
        {
            id: 18,
            question: "What is the `.gd` file extension used for?",
            options: ["Scene files", "Script files", "Texture files", "Animation files"],
            correctAnswer: "Script files",
        },
        {
            id: 19,
            question: "Which node is used for creating a camera in Godot?",
            options: ["Camera", "Viewport", "Camera2D", "CameraNode"],
            correctAnswer: "Camera2D",
        },
        {
            id: 20,
            question: "What is the use of `process()` function in GDScript?",
            options: [
                "Runs once when the scene loads",
                "Executes every frame",
                "Handles user input",
                "None of the above",
            ],
            correctAnswer: "Executes every frame",
        },
        {
            id: 21,
            question: "How can you change the position of a node in Godot?",
            options: ["Using the transform property", "Using the position property", "Both A and B", "None of the above"],
            correctAnswer: "Both A and B",
        },
        {
            id: 22,
            question: "What does the `match` keyword do in GDScript?",
            options: [
                "It is used for pattern matching",
                "It matches nodes by name",
                "It is an alias for switch-case",
                "Both A and C",
            ],
            correctAnswer: "Both A and C",
        },
        {
            id: 23,
            question: "What is the use of an `instanced scene` in Godot?",
            options: [
                "To reuse existing scenes",
                "To group nodes",
                "To save memory",
                "All of the above",
            ],
            correctAnswer: "To reuse existing scenes",
        },
        {
            id: 24,
            question: "What is the output of `print(typeof(42))` in GDScript?",
            options: ["int", "float", "number", "42"],
            correctAnswer: "int",
        },
        {
            id: 25,
            question: "Which node is used for particles in Godot?",
            options: ["Particles", "ParticleEmitter", "CPUParticles", "GPUEmitter"],
            correctAnswer: "CPUParticles",
        },
        {
            id: 26,
            question: "What does the `extends` keyword do in GDScript?",
            options: [
                "Specifies the parent class of a script",
                "Extends the functionality of a node",
                "Defines inheritance for a node",
                "All of the above",
            ],
            correctAnswer: "All of the above",
        },
        {
            id: 27,
            question: "What is the function of the `viewport` node in Godot?",
            options: [
                "To display UI elements",
                "To manage rendering",
                "To handle 3D transformations",
                "None of the above",
            ],
            correctAnswer: "To manage rendering",
        },
        {
            id: 28,
            question: "Which file format is used for Godot project settings?",
            options: [".cfg", "project.godot", "settings.json", "None of the above"],
            correctAnswer: "project.godot",
        },
        {
            id: 29,
            question: "What does the `queue_free()` function do in Godot?",
            options: [
                "Deletes a node immediately",
                "Queues a node for deletion after the frame ends",
                "Deletes all child nodes",
                "None of the above",
            ],
            correctAnswer: "Queues a node for deletion after the frame ends",
        },
        {
            id: 30,
            question: "Which of these is true about Godot?",
            options: [
                "It is open source",
                "It supports 2D and 3D game development",
                "It uses a node-based architecture",
                "All of the above",
            ],
            correctAnswer: "All of the above",
        },
    ],
    CSS: [
        {
            id: 1,
            question: "What does CSS stand for?",
            options: [
                "Cascading Style Sheets",
                "Creative Style Sheets",
                "Computer Style Sheets",
                "Colorful Style Sheets",
            ],
            correctAnswer: "Cascading Style Sheets",
        },
        {
            id: 2,
            question: "Which HTML tag is used to link an external CSS file?",
            options: ["<style>", "<css>", "<link>", "<stylesheet>"],
            correctAnswer: "<link>",
        },
        {
            id: 3,
            question: "Which property is used to change the text color in CSS?",
            options: ["text-color", "color", "font-color", "background-color"],
            correctAnswer: "color",
        },
        {
            id: 4,
            question: "What is the correct syntax for a CSS class selector?",
            options: [".classname", "#classname", "classname", "@classname"],
            correctAnswer: ".classname",
        },
        {
            id: 5,
            question: "Which property is used to set the background color of an element?",
            options: ["background", "bgcolor", "background-color", "color"],
            correctAnswer: "background-color",
        },
        {
            id: 6,
            question: "What is the default value of the `position` property in CSS?",
            options: ["relative", "absolute", "static", "fixed"],
            correctAnswer: "static",
        },
        {
            id: 7,
            question: "Which CSS property is used to control the spacing between lines of text?",
            options: ["line-spacing", "line-height", "text-spacing", "letter-spacing"],
            correctAnswer: "line-height",
        },
        {
            id: 8,
            question: "What is the difference between `em` and `rem` units in CSS?",
            options: [
                "`em` is relative to its parent, while `rem` is relative to the root element.",
                "`em` is relative to the root element, while `rem` is relative to its parent.",
                "Both are fixed units.",
                "Both are always relative to the viewport.",
            ],
            correctAnswer: "`em` is relative to its parent, while `rem` is relative to the root element.",
        },
        {
            id: 9,
            question: "Which of the following is used to apply styles to multiple selectors?",
            options: [
                "Separate them with a space",
                "Separate them with a comma",
                "Separate them with a semicolon",
                "Use the `and` keyword",
            ],
            correctAnswer: "Separate them with a comma",
        },
        {
            id: 10,
            question: "Which property is used to make text bold in CSS?",
            options: ["font-style", "font-weight", "text-bold", "font-bold"],
            correctAnswer: "font-weight",
        },
        {
            id: 11,
            question: "How can you add a shadow to a box in CSS?",
            options: [
                "box-shadow",
                "shadow",
                "box-shadow-color",
                "shadow-color",
            ],
            correctAnswer: "box-shadow",
        },
        {
            id: 12,
            question: "Which CSS property is used to change the font of an element?",
            options: ["font-family", "font-style", "font", "font-weight"],
            correctAnswer: "font-family",
        },
        {
            id: 13,
            question: "What does the `z-index` property do?",
            options: [
                "Sets the stacking order of elements.",
                "Controls the visibility of elements.",
                "Specifies the zoom level.",
                "None of the above.",
            ],
            correctAnswer: "Sets the stacking order of elements.",
        },
        {
            id: 14,
            question: "Which property is used to make an element disappear without affecting layout?",
            options: ["display: none;", "visibility: hidden;", "opacity: 0;", "z-index: -1;"],
            correctAnswer: "visibility: hidden;",
        },
        {
            id: 15,
            question: "Which value of the `position` property will position the element relative to its nearest positioned ancestor?",
            options: ["absolute", "fixed", "relative", "static"],
            correctAnswer: "absolute",
        },
        {
            id: 16,
            question: "How do you apply a linear gradient as a background in CSS?",
            options: [
                "background: gradient(linear);",
                "background: linear-gradient();",
                "background: linear-gradient-to-top();",
                "background-gradient();",
            ],
            correctAnswer: "background: linear-gradient();",
        },
        {
            id: 17,
            question: "Which property controls the space between an element's border and content?",
            options: ["margin", "padding", "border-spacing", "spacing"],
            correctAnswer: "padding",
        },
        {
            id: 18,
            question: "Which pseudo-class is used to style an element when it is hovered over?",
            options: [":hover", ":active", ":focus", ":link"],
            correctAnswer: ":hover",
        },
        {
            id: 19,
            question: "How can you make a list appear horizontally in CSS?",
            options: [
                "Set `display: inline;` for list items.",
                "Set `float: left;` for list items.",
                "Use `flexbox` on the parent container.",
                "All of the above.",
            ],
            correctAnswer: "All of the above.",
        },
        {
            id: 20,
            question: "Which property is used to align items in a flex container along the main axis?",
            options: ["align-items", "justify-content", "flex-align", "main-align"],
            correctAnswer: "justify-content",
        },
        {
            id: 21,
            question: "Which value of the `overflow` property hides content that overflows the element's box?",
            options: ["hidden", "scroll", "visible", "auto"],
            correctAnswer: "hidden",
        },
        {
            id: 22,
            question: "What is the purpose of media queries in CSS?",
            options: [
                "To apply different styles based on screen size or device.",
                "To include external stylesheets.",
                "To optimize images.",
                "To debug CSS.",
            ],
            correctAnswer: "To apply different styles based on screen size or device.",
        },
        {
            id: 23,
            question: "Which of these is the correct syntax for a CSS animation?",
            options: [
                "@keyframes anim { ... }",
                "animation: anim { ... }",
                "keyframe anim { ... }",
                "None of the above",
            ],
            correctAnswer: "@keyframes anim { ... }",
        },
        {
            id: 24,
            question: "How can you create rounded corners for a box?",
            options: [
                "Use the `border-radius` property.",
                "Use the `corner-radius` property.",
                "Use the `radius` property.",
                "None of the above.",
            ],
            correctAnswer: "Use the `border-radius` property.",
        },
        {
            id: 25,
            question: "Which property is used to set the width of an element's border?",
            options: ["border-width", "border-style", "border", "border-size"],
            correctAnswer: "border-width",
        },
        {
            id: 26,
            question: "What is the initial value of the `flex-grow` property?",
            options: ["0", "1", "auto", "none"],
            correctAnswer: "0",
        },
        {
            id: 27,
            question: "How do you set an image as a background in CSS?",
            options: [
                "background-image: url('image.jpg');",
                "background: url('image.jpg');",
                "Both A and B",
                "None of the above",
            ],
            correctAnswer: "Both A and B",
        },
        {
            id: 28,
            question: "Which property is used to specify the space between letters?",
            options: ["letter-spacing", "text-spacing", "font-spacing", "character-spacing"],
            correctAnswer: "letter-spacing",
        },
        {
            id: 29,
            question: "Which CSS unit is relative to the width of the viewport?",
            options: ["vw", "vh", "em", "rem"],
            correctAnswer: "vw",
        },
        {
            id: 30,
            question: "Which of the following will center a block element horizontally?",
            options: [
                "margin: auto;",
                "text-align: center;",
                "align-items: center;",
                "display: flex;",
            ],
            correctAnswer: "margin: auto;",
        },
    ],
    C: [
        {
            id: 1,
            question: "What is the correct syntax to print 'Hello, World!' in C?",
            options: [
                "System.out.println('Hello, World!');",
                "printf('Hello, World!');",
                "cout << 'Hello, World!';",
                "print('Hello, World!');"
            ],
            correctAnswer: "printf('Hello, World!');",
        },
        {
            id: 2,
            question: "Which data type is used to store whole numbers in C?",
            options: ["int", "float", "char", "double"],
            correctAnswer: "int",
        },
        {
            id: 3,
            question: "Which library function is used to read input from the user?",
            options: ["scanf()", "printf()", "getchar()", "gets()"],
            correctAnswer: "scanf()",
        },
        {
            id: 4,
            question: "Which of the following is not a valid C data type?",
            options: ["int", "boolean", "char", "double"],
            correctAnswer: "boolean",
        },
        {
            id: 5,
            question: "What is the purpose of the `return` statement in a C program?",
            options: [
                "To print output",
                "To end a loop",
                "To exit a function and return a value",
                "To declare variables",
            ],
            correctAnswer: "To exit a function and return a value",
        },
        {
            id: 6,
            question: "Which of these is the correct way to declare an array in C?",
            options: [
                "int arr[10];",
                "int arr = [10];",
                "array<int> arr(10);",
                "int[10] arr;",
            ],
            correctAnswer: "int arr[10];",
        },
        {
            id: 7,
            question: "What does the `sizeof` operator do in C?",
            options: [
                "It calculates the length of a string",
                "It returns the size of a data type or variable in bytes",
                "It allocates memory dynamically",
                "None of the above",
            ],
            correctAnswer: "It returns the size of a data type or variable in bytes",
        },
        {
            id: 8,
            question: "Which of these is a valid comment syntax in C?",
            options: [
                "// This is a comment",
                "/* This is a comment */",
                "# This is a comment",
                "Both A and B",
            ],
            correctAnswer: "Both A and B",
        },
        {
            id: 9,
            question: "What is the purpose of a header file in C?",
            options: [
                "To define the main() function",
                "To include standard library functions",
                "To store user input",
                "None of the above",
            ],
            correctAnswer: "To include standard library functions",
        },
        {
            id: 10,
            question: "Which of the following is used to declare a pointer in C?",
            options: ["int *ptr;", "int ptr*;", "pointer<int> ptr;", "None of the above"],
            correctAnswer: "int *ptr;",
        },
        {
            id: 11,
            question: "What is the value of `x` after the following code executes?\n\nint x = 5;\nx += 3;",
            options: ["5", "3", "8", "None of the above"],
            correctAnswer: "8",
        },
        {
            id: 12,
            question: "Which keyword is used to define a constant in C?",
            options: ["constant", "final", "const", "static"],
            correctAnswer: "const",
        },
        {
            id: 13,
            question: "Which of the following is used to allocate memory dynamically in C?",
            options: ["malloc()", "alloc()", "new()", "None of the above"],
            correctAnswer: "malloc()",
        },
        {
            id: 14,
            question: "What is the output of the following code?\n\nprintf('%d', 5 > 3);",
            options: ["3", "5", "1", "0"],
            correctAnswer: "1",
        },
        {
            id: 15,
            question: "What is the default return type of the `main` function in C?",
            options: ["int", "void", "char", "float"],
            correctAnswer: "int",
        },
        {
            id: 16,
            question: "Which loop is guaranteed to execute at least once?",
            options: ["for", "while", "do-while", "None of the above"],
            correctAnswer: "do-while",
        },
        {
            id: 17,
            question: "What does `break` do in a loop?",
            options: [
                "Skips the current iteration",
                "Exits the loop immediately",
                "Stops the program",
                "None of the above",
            ],
            correctAnswer: "Exits the loop immediately",
        },
        {
            id: 18,
            question: "Which function is used to find the length of a string in C?",
            options: ["strlen()", "strlength()", "size()", "None of the above"],
            correctAnswer: "strlen()",
        },
        {
            id: 19,
            question: "What does `printf('%c', 65);` output?",
            options: ["65", "A", "Error", "None of the above"],
            correctAnswer: "A",
        },
        {
            id: 20,
            question: "What is the correct way to declare a function in C?",
            options: [
                "void func() {}",
                "function func() {}",
                "def func():",
                "None of the above",
            ],
            correctAnswer: "void func() {}",
        },
        {
            id: 21,
            question: "What is the output of the following code?\n\nint x = 3;\nprintf('%d', ++x);",
            options: ["3", "4", "2", "None of the above"],
            correctAnswer: "4",
        },
        {
            id: 22,
            question: "Which of these operators is used to access members of a structure?",
            options: [".", "->", "&", "*"],
            correctAnswer: ".",
        },
        {
            id: 23,
            question: "What is the purpose of `#define` in C?",
            options: [
                "To declare variables",
                "To define constants and macros",
                "To include libraries",
                "None of the above",
            ],
            correctAnswer: "To define constants and macros",
        },
        {
            id: 24,
            question: "Which of the following is not a storage class in C?",
            options: ["auto", "static", "public", "extern"],
            correctAnswer: "public",
        },
        {
            id: 25,
            question: "What is the correct syntax for a multi-dimensional array?",
            options: [
                "int arr[][];",
                "int arr[3][4];",
                "int arr[3,4];",
                "None of the above",
            ],
            correctAnswer: "int arr[3][4];",
        },
        {
            id: 26,
            question: "Which of the following converts a string to an integer?",
            options: ["atoi()", "itostr()", "int()", "None of the above"],
            correctAnswer: "atoi()",
        },
        {
            id: 27,
            question: "What is the output of `printf('%d', sizeof(char));`?",
            options: ["2", "1", "4", "None of the above"],
            correctAnswer: "1",
        },
        {
            id: 28,
            question: "Which of these keywords is used for conditional compilation?",
            options: ["#if", "#ifdef", "#endif", "All of the above"],
            correctAnswer: "All of the above",
        },
        {
            id: 29,
            question: "What does the `fopen()` function do?",
            options: [
                "Closes a file",
                "Opens a file",
                "Reads from a file",
                "Writes to a file",
            ],
            correctAnswer: "Opens a file",
        },
        {
            id: 30,
            question: "Which of these functions is used to deallocate memory in C?",
            options: ["free()", "delete()", "dispose()", "None of the above"],
            correctAnswer: "free()",
        },
    ],
    Cpp: [
        {
            "id": 1,
            "question": "What is the correct way to include a standard header file in C++?",
            "options": [
                "#include \"iostream\"",
                "#include <iostream>",
                "#include iostream",
                "#include :iostream:"
            ],
            "correctAnswer": "#include <iostream>"
        },
        {
            "id": 2,
            "question": "Which of the following is a correct C++ identifier?",
            "options": [
                "123abc",
                "_variable1",
                "class",
                "none-of-these"
            ],
            "correctAnswer": "_variable1"
        },
        {
            "id": 3,
            "question": "Which of the following is used for comments in C++?",
            "options": [
                "// This is a comment",
                "/* This is a comment */",
                "Both of the above",
                "None of the above"
            ],
            "correctAnswer": "Both of the above"
        },
        {
            "id": 4,
            "question": "What is the output of the following code?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hello, World!\";\n    return 0;\n}",
            "options": [
                "Hello, World!",
                "hello, world!",
                "Compile-time error",
                "Run-time error"
            ],
            "correctAnswer": "Hello, World!"
        },
        {
            "id": 5,
            "question": "Which of the following correctly declares an integer pointer?",
            "options": [
                "int ptr;",
                "int *ptr;",
                "ptr int*;",
                "pointer int ptr;"
            ],
            "correctAnswer": "int *ptr;"
        },
        {
            "id": 6,
            "question": "Which keyword is used to define a constant in C++?",
            "options": [
                "const",
                "constant",
                "#define",
                "Both const and #define"
            ],
            "correctAnswer": "Both const and #define"
        },
        {
            "id": 7,
            "question": "Which of the following is not a basic data type in C++?",
            "options": [
                "int",
                "float",
                "string",
                "char"
            ],
            "correctAnswer": "string"
        },
        {
            "id": 8,
            "question": "What is the size of a double in most 64-bit compilers?",
            "options": [
                "2 bytes",
                "4 bytes",
                "8 bytes",
                "16 bytes"
            ],
            "correctAnswer": "8 bytes"
        },
        {
            "id": 9,
            "question": "Which operator is used to allocate memory dynamically in C++?",
            "options": [
                "malloc",
                "new",
                "allocate",
                "calloc"
            ],
            "correctAnswer": "new"
        },
        {
            "id": 10,
            "question": "What does the following code do?\n\nint *ptr = new int[10];",
            "options": [
                "Creates a pointer to an integer",
                "Allocates memory for 10 integers dynamically",
                "Creates an array of 10 integers on the stack",
                "None of the above"
            ],
            "correctAnswer": "Allocates memory for 10 integers dynamically"
        },
        {
            "id": 11,
            "question": "Which header file is required for using std::vector?",
            "options": [
                "#include <vector>",
                "#include <array>",
                "#include <list>",
                "#include <map>"
            ],
            "correctAnswer": "#include <vector>"
        },
        {
            "id": 12,
            "question": "What does the keyword 'this' represent in C++?",
            "options": [
                "The current class",
                "The current object",
                "The current function",
                "None of the above"
            ],
            "correctAnswer": "The current object"
        },
        {
            "id": 13,
            "question": "What is a virtual function in C++?",
            "options": [
                "A function with no return type",
                "A function declared in the base class and overridden in the derived class",
                "A function that does not have a definition",
                "None of the above"
            ],
            "correctAnswer": "A function declared in the base class and overridden in the derived class"
        },
        {
            "id": 14,
            "question": "Which of the following is not a type of inheritance in C++?",
            "options": [
                "Single",
                "Multiple",
                "Hierarchical",
                "Parallel"
            ],
            "correctAnswer": "Parallel"
        },
        {
            "id": 15,
            "question": "What is the default access specifier for members of a class in C++?",
            "options": [
                "public",
                "protected",
                "private",
                "none"
            ],
            "correctAnswer": "private"
        },
        {
            "id": 16,
            "question": "What is the output of the following code?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10, y = 5;\n    cout << x / y;\n    return 0;\n}",
            "options": [
                "2",
                "2.0",
                "Compile-time error",
                "None of the above"
            ],
            "correctAnswer": "2"
        },
        {
            "id": 17,
            "question": "What is the use of the 'inline' keyword in C++?",
            "options": [
                "To define a function without a return type",
                "To improve performance by replacing function calls with function code",
                "To declare a function inside a class",
                "None of the above"
            ],
            "correctAnswer": "To improve performance by replacing function calls with function code"
        },
        {
            "id": 18,
            "question": "Which of the following is not a C++ access specifier?",
            "options": [
                "public",
                "private",
                "protected",
                "internal"
            ],
            "correctAnswer": "internal"
        },
        {
            "id": 19,
            "question": "What is a destructor in C++?",
            "options": [
                "A function called at the end of a program",
                "A function that initializes an object",
                "A function that destroys an object and releases resources",
                "None of the above"
            ],
            "correctAnswer": "A function that destroys an object and releases resources"
        },
        {
            "id": 20,
            "question": "Which keyword is used to handle exceptions in C++?",
            "options": [
                "try",
                "catch",
                "throw",
                "All of the above"
            ],
            "correctAnswer": "All of the above"
        },
        {
            "id": 21,
            "question": "What does STL stand for in C++?",
            "options": [
                "Standard Template Library",
                "Simple Template Library",
                "Standard Testing Library",
                "None of the above"
            ],
            "correctAnswer": "Standard Template Library"
        },
        {
            "id": 22,
            "question": "What is the use of the 'namespace' keyword in C++?",
            "options": [
                "To declare a block of code",
                "To group functions, classes, and objects",
                "To define a class",
                "None of the above"
            ],
            "correctAnswer": "To group functions, classes, and objects"
        },
        {
            "id": 23,
            "question": "Which of the following is used to define a class template in C++?",
            "options": [
                "template<class T>",
                "class template<T>",
                "template<T> class",
                "class T<template>"
            ],
            "correctAnswer": "template<class T>"
        },
        {
            "id": 24,
            "question": "What is the purpose of the 'friend' keyword in C++?",
            "options": [
                "To allow a function or class to access private/protected members of another class",
                "To make a class visible to another class",
                "To define a global variable",
                "None of the above"
            ],
            "correctAnswer": "To allow a function or class to access private/protected members of another class"
        },
        {
            "id": 25,
            "question": "What is the output of the following code?\n\n#include <iostream>\nusing namespace std;\nclass Test {\npublic:\n    Test() { cout << \"Constructor called\"; }\n};\nint main() {\n    Test t;\n    return 0;\n}",
            "options": [
                "Constructor called",
                "Compile-time error",
                "Runtime error",
                "Nothing"
            ],
            "correctAnswer": "Constructor called"
        },
        {
            "id": 26,
            "question": "Which operator cannot be overloaded in C++?",
            "options": [
                "++",
                "*",
                ".",
                "[]"
            ],
            "correctAnswer": "."
        },
        {
            "id": 27,
            "question": "What is the default value of a local variable in C++?",
            "options": [
                "0",
                "Null",
                "Undefined",
                "Depends on the data type"
            ],
            "correctAnswer": "Undefined"
        },
        {
            "id": 28,
            "question": "Which of the following is the correct syntax for a do-while loop in C++?",
            "options": [
                "do { ... } while(condition);",
                "while { ... } do(condition);",
                "do(condition) { ... };",
                "None of the above"
            ],
            "correctAnswer": "do { ... } while(condition);"
        },
        {
            "id": 29,
            "question": "What is the main purpose of a copy constructor in C++?",
            "options": [
                "To initialize a class object from another object of the same class",
                "To copy an object to another class",
                "To free memory",
                "None of the above"
            ],
            "correctAnswer": "To initialize a class object from another object of the same class"
        },
    ],
    Go: [
        {
            "id": 1,
            "question": "Which of the following is the correct way to import a package in Go?",
            "options": [
                "import 'fmt'",
                "import fmt",
                "import \"fmt\"",
                "import fmt()"
            ],
            "correctAnswer": "import \"fmt\""
        },
        {
            "id": 2,
            "question": "What is the zero value of an int variable in Go?",
            "options": [
                "0",
                "null",
                "undefined",
                "empty"
            ],
            "correctAnswer": "0"
        },
        {
            "id": 3,
            "question": "How do you declare a variable in Go?",
            "options": [
                "var x int = 10",
                "x := 10",
                "var x = 10",
                "All of the above"
            ],
            "correctAnswer": "All of the above"
        },
        {
            "id": 4,
            "question": "Which of the following is used to define a function in Go?",
            "options": [
                "func functionName()",
                "function functionName()",
                "def functionName()",
                "void functionName()"
            ],
            "correctAnswer": "func functionName()"
        },
        {
            "id": 5,
            "question": "What is the keyword used to declare a constant in Go?",
            "options": [
                "constant",
                "const",
                "var",
                "immutable"
            ],
            "correctAnswer": "const"
        },
        {
            "id": 6,
            "question": "Which of the following is used to declare a global variable in Go?",
            "options": [
                "var x = 10",
                "global x = 10",
                "x := 10",
                "None of the above"
            ],
            "correctAnswer": "var x = 10"
        },
        {
            "id": 7,
            "question": "What is the result of this Go expression: `3/2`?",
            "options": [
                "1",
                "1.5",
                "2",
                "0"
            ],
            "correctAnswer": "1"
        },
        {
            "id": 8,
            "question": "Which Go keyword is used to define a method on a type?",
            "options": [
                "method",
                "func",
                "define",
                "type"
            ],
            "correctAnswer": "func"
        },
        {
            "id": 9,
            "question": "What is the difference between a slice and an array in Go?",
            "options": [
                "A slice is a dynamically sized array",
                "An array is a reference type",
                "Slices cannot be resized",
                "An array is more memory efficient"
            ],
            "correctAnswer": "A slice is a dynamically sized array"
        },
        {
            "id": 10,
            "question": "How do you create a map in Go?",
            "options": [
                "map := {}",
                "map := make(map[string]int)",
                "map = []",
                "map := map[]"
            ],
            "correctAnswer": "map := make(map[string]int)"
        },
        {
            "id": 11,
            "question": "What is the correct syntax to start a Go program?",
            "options": [
                "func main() {}",
                "main() {}",
                "int main() {}",
                "func start() {}"
            ],
            "correctAnswer": "func main() {}"
        },
        {
            "id": 12,
            "question": "Which of the following is the proper way to initialize a pointer in Go?",
            "options": [
                "var ptr *int = new(int)",
                "var ptr int* = new(int)",
                "var ptr = &int",
                "ptr := new(int)"
            ],
            "correctAnswer": "var ptr *int = new(int)"
        },
        {
            "id": 13,
            "question": "What is the default value of a boolean variable in Go?",
            "options": [
                "true",
                "false",
                "0",
                "nil"
            ],
            "correctAnswer": "false"
        },
        {
            "id": 14,
            "question": "How do you declare a Go struct?",
            "options": [
                "type Person struct { name string; age int }",
                "struct Person { name string; age int }",
                "type Person = { name string; age int }",
                "None of the above"
            ],
            "correctAnswer": "type Person struct { name string; age int }"
        },
        {
            "id": 15,
            "question": "What is the purpose of the `defer` keyword in Go?",
            "options": [
                "To delay the execution of a function until the surrounding function completes",
                "To immediately terminate the function",
                "To execute a function in parallel",
                "To define a variable scope"
            ],
            "correctAnswer": "To delay the execution of a function until the surrounding function completes"
        },
        {
            "id": 16,
            "question": "What does the `len()` function do in Go?",
            "options": [
                "Returns the length of a string",
                "Returns the length of a slice or array",
                "Returns the length of a map",
                "All of the above"
            ],
            "correctAnswer": "All of the above"
        },
        {
            "id": 17,
            "question": "Which statement is used to handle errors in Go?",
            "options": [
                "throw",
                "panic",
                "try",
                "error"
            ],
            "correctAnswer": "panic"
        },
        {
            "id": 18,
            "question": "How do you declare a channel in Go?",
            "options": [
                "ch := make(chan int)",
                "ch := new(chan int)",
                "var ch chan int",
                "ch = channel int"
            ],
            "correctAnswer": "ch := make(chan int)"
        },
        {
            "id": 19,
            "question": "Which of the following is the correct way to handle multiple return values in Go?",
            "options": [
                "result := func()",
                "result := func() value1, value2",
                "value1, value2 := func()",
                "return value1, value2"
            ],
            "correctAnswer": "value1, value2 := func()"
        },
        {
            "id": 20,
            "question": "How do you convert a type in Go?",
            "options": [
                "type(string) value",
                "value to string",
                "string(value)",
                "convert(value)"
            ],
            "correctAnswer": "string(value)"
        },
        {
            "id": 21,
            "question": "Which of the following is the correct way to start a Goroutine in Go?",
            "options": [
                "go funcName()",
                "goroutine funcName()",
                "async funcName()",
                "thread funcName()"
            ],
            "correctAnswer": "go funcName()"
        },
        {
            "id": 22,
            "question": "What does the `select` statement do in Go?",
            "options": [
                "It waits on multiple channel operations",
                "It is used for error handling",
                "It is used for conditional branching",
                "None of the above"
            ],
            "correctAnswer": "It waits on multiple channel operations"
        },
        {
            "id": 23,
            "question": "What is a Go interface?",
            "options": [
                "A collection of methods with no implementations",
                "A type that holds data",
                "A type that is used for error handling",
                "None of the above"
            ],
            "correctAnswer": "A collection of methods with no implementations"
        },
        {
            "id": 24,
            "question": "Which Go keyword is used to terminate a function early?",
            "options": [
                "break",
                "continue",
                "return",
                "exit"
            ],
            "correctAnswer": "return"
        },
        {
            "id": 25,
            "question": "What is the purpose of the `go run` command in Go?",
            "options": [
                "It compiles and runs a Go program in one step",
                "It compiles the program only",
                "It runs the program without compiling",
                "None of the above"
            ],
            "correctAnswer": "It compiles and runs a Go program in one step"
        }
    ]
}

export default  quizzes;