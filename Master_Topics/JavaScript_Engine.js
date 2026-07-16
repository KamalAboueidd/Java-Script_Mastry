 // JavaScript Engine
 // v8 engine ==> who tell the compuetr what must do based on user code or application code

//  ===========================================
//    # - JS not  AOT Compilation - Ahead Of Time and not depend on Pure Interpretation
    // # js is JUST-IN-TIME COMPILATION 
//  ===========================================

 // 1 )  parse && Abstract syntax tree (AST)
  
//  The engine reads your source code and parses it into an Abstract Syntax Tree (AST)—a deeply nested tree structure that represents the grammar of your code.

//    2. The Interpreter (The Ignition Stage)
// The engine's interpreter takes the AST and quickly compiles it into bytecode.

// The Benefit: The code starts running almost immediately.

// The Catch: Bytecode is still not as fast as native machine code.

// 3. Profiling (The Monitor)
// While the interpreter is running the bytecode, a "(special thread)" called the Profiler monitors the code.
//  It keeps track of how many times certain functions or blocks of code are executed:

// Warm code: Code that runs a few times.

// Hot code: Code that runs a lot (like a function inside a for loop).   ==> passing to JIt to made a optmizing and fast version 

// 4. The JIT Compiler (The Optimizer)
// When the profiler spots "hot code," it hands it over to the JIT compiler.
// The compiler takes that bytecode and compiles it directly into highly optimized native machine code (binary) that your computer’s CPU can execute directly at hardware speed.




 //  interpreter ==> slow , simple ==> execute line by line , and convert the code to machine code .
 
 
 // compiler ==> fast , complex ==> first translate all code to machine languages and then start 

  // JIT (Just In Time ) ==> collects adv of interpriter and compiler  and use them (js use this machinism)
  // JIT (Just-In-Time Compilation) is a compilation process in which code is 
  // translated from an intermediate representation or a higher-level language (e.g., JavaScript or Java bytecode) 
  // into machine code at runtime, rather than prior to execution. This approach combines the benefits of both interpretation and ahead-of-time (AOT) compilation.