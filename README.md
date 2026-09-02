Java-Script_Mastry
Oraily book Advanced Topics , based on Micro.ai interview (now You Know what is the level you want to be in the lang to be Mastry Javascript engineer )

|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  
  
  # 1 - Garbage Collector 

  ![Master)](GrabageCollector.png)

   # 2 - JavaScript is ProtoType based  
  ![Master](prototypes.png)
  ![Master](Js-Prototypes.webp)

  # 3 - How JS works in Engine
  - JavaScript is not an interpreted or compiled language, it is a mix of interpretation and compilation because of the Just-In-Time or JIT compiler it uses under the hood.
  -  Just-in-Time (JIT) compilers work by dynamically compiling JavaScript code at runtime to native machine code, allowing it to execute faster than interpreted code
  # Steps
  - 1 Parsing: As a new piece of code enters the JavaScript Engine, the first step is parsing the code into a data structure called the Abstract Syntax Tree (AST).
 
 - 2 Profiling: Now the JIT compiler identifies the parts of the code that are executed most frequently, which are the parts that should be optimized.

 - 3 Optimization: The JIT compiler then applies various optimization techniques to the frequently executed code, such as inlining functions, eliminating redundant code, and generating specialized machine code.
 
  - 4 Code generation: Once the optimization process is complete, the JIT compiler generates binary code that can be executed directly by a CPU.

 - 5 Execution: Finally, the optimized binary code is executed by a CPU quickly and efficiently.
  Press enter or click to view image in full size
 
  ![Master)](V8.png)
  ![Master)](javascript_enging.png)
  ![Master](Phases_Engine.png)


  # 4 - CallStack

  ![Master](callStack.png)
  ![Master](jsEngineAgain.png)


  # 5 - Single thread 
  ![Master](THREAD_queu_stack.png)

  # 5 - Execution context 

  ![Master](EXExecutionPhases.png)
  # 5.5 Execution order 
    
  ![Master](Executionorder.png)

  # 6 - lexical env 

  ![Master](lexical_env.png)

  # 7 - Hoisting 
  ![Master](Hoisting.jpg)

  # 8 - function invokation , ... rest parameters , arguments

  ![Master](args_rest.png)

  # 9 - Callback Functions
    -- sync callbacks
  ![Master](syncCallbacks.png)

   -- async callbacks  ===========> Leads to Callback Hell OR Pyramid of Doom، 
  ![Master](Asyncallbacks.png)


  # 10  - Data structre ==> SET , WEAKset in js 
  Weak set : only store the Objects 
  weak referances
  ![Master](Set_WeakSet.png)


  # 11  - Data structre ==> MAP , WEAKmap  in js 
  // WEAK MAp : the object key is "Object" 
  // if the object not refer to any outer variable the Gc Delete this obj
  ![Master](Map_WEAK.png)

  # 12 - Scope chain 
  
  ![Master](ScopeChain.png)
  ![Master](MonitorScopeFromConsole.png)

  # 13 - Deep Let - var - const 
  ![Master](lcv.png)

# 14 - Lexical - Dynamic - Legacy scope

  ![Master](lex.png)
  ![Master](Dynamic_Legacy.png)

  # 15 - Strict mode 
  ![Master](strict.png)

# 16 - call - apply - bind 

  ![Master](call_apply_bindpng.png)

  # 17 - primitive - non-primitive 

  ![Master](PrimitiveNon-pre.png)
  ![Master](passByrefValUE.png)

# 18 -  type coercion

  ![Master](typeCoercion.png)

  # 19 - HOF --- Higher Order Function 

  ![Master](HOF.png)

 # 20 - Closure (#important) in Interview 
   The function "traps" or "remembers" the variables that were in its surrounding environment (the place where it was originally created),
    even after that environment dies, finishes executing, and leaves the Call Stack
  ![Master](Closures1.png)
  ![Master](closer.png)

  # 21 - variable Lockup..
  /\ (summary):find the value of the variable based on the name 

  # 22 - destructring , rest argumants - spread operator
  
  ![Master](png11.png)


  # 23- E6 - Modules 
   import export 
   Export default 
   Named Export

  ![Master](E6modules.png)
  



   

    




 
  

  


