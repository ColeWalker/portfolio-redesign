---
excerpt: In the mid 1900’s, the second high-level programming language was created by John McCarthy. It was called List Processor, or LISP for short. LISP itself is a relatively simple language, so it has been modified and added to over time. Modified versions of the language are referred to as “dialects”, and today the most well-known dialects are Clojure, Scheme, and CommonLISP. 
---
# Setting Up a CommonLISP Environment

In the mid 1900’s, the second high-level programming language was created by John McCarthy. It was called List Processor, or LISP for short. LISP itself is a relatively simple language, so it has been modified and added to over time. Modified versions of the language are referred to as “dialects”, and today the most well-known dialects are Clojure, Scheme, and CommonLISP. 



LISP is a language which has been frequently used for AI due to its simple syntax, fast debugging process, and the inclusion of macros, which are a way to modify the program’s code as it is running. 



This tutorial will be about learning CommonLISP specifically, though its syntax and concepts should be similar enough to other dialects that once one is learned, learning other forms of LISP should prove to be trivial.

# Installation

To be able to execute CommonLISP code, we need to have an interpreter or compiler. The most popular option for LISP writers is the emacs text editor and SLIME extension, but that particular combination is daunting to newcomers of the language, since they may have to learn an unfamiliar text editor in addition to a very unique programming language. 



For that reason, I recommend that newcomers install the Steel Bank Common LISP compiler, which is available on all major operating systems. To install this compiler, first go to the [Steel Bank Common LISP website](http://www.sbcl.org/), and then go to the download section. On this page you will see a table with different architecture and operating systems.



On this table, select the square that best represents your computer’s architecture and operating system, and click the link to download the installer file. 



The installer should take care of all of the configuration necessary to install the compiler on your computer, including adding the compiler to your operating system’s PATH.

Note: on Linux, installation is much simpler, by default, many distros include a repository which includes the compiler. 



To install, enter the following command:

```sudo apt-get install sbcl```



LISP is an interpreted language, so running quick snippets of code is simple. To do so, type ``sbcl`` into the command prompt to open the SBCL REPL (read eval print loop). It will run subsequent commands as LISP code, and print the evaluated values.



## Executing Code from a File in SBCL

CommonLISP code is saved with the .lisp extension. It can be run from the command line by using the following command:

```
sbcl --script <filepath>
``` 



**Example:**

```
sbcl --script helloworld.lisp
```     
will run the file helloworld.lisp in the working directory



# Basic Operations

LISP functions are called with what is called “prefix notation”. The operator goes first, then the operands follow. 



## Addition

The addition operator is the same as it is in most languages, `+`. It accepts any amount of numbers. The operator comes first because of prefix notation, and then the arguments follow.



**Examples:**

```cl
(+ 4 10)         returns 14

(+ 12 22 40)     returns 74

(+ 100 200.50)   returns 300.5
```

## Subtraction

Subtraction works similarly, with the `-` symbol. numbers are subtracted left to right.



**Examples:**

```
(- 22 7)    returns 15

(- 7 22)    returns -15

(- 7 22 5)  returns -20

(- 22 0.5)  returns 21.5

(- 22 1.0)  returns 21
```

## Multiplication

The multiplication operator uses the familiar `*`symbol. 



**Examples:**
```
(* 5 4)     returns 20

(* 5 5 5)   returns 125

(* 2 0.25)  returns 0.5

(* 2 -2.5)  returns -5
```


## Division

The division operator uses the `/` symbol. CommonLISP is unique in that dividing integers does not return a decimal, but a simplified fraction representing the arguments given. However, dividing floating point numbers will always result in a floating point number.



**Examples:**
```
(/ 4 2)    returns 2

(/ 4 10)   returns ⅖ 

(/ 4 -2)    returns -2

(/ 4.2 1.1)  returns 3.818181818181818

(/ 4.2 1)  returns 4.2
```


## Variables

setq is how LISP sets variables. Syntax is ```setq <variable name> <form> [<variable 2 name> <form 2>]....``` Types are dynamic and implicit. 

Example                     Variable / Value

```
(setq apple (+ 12 23))      apple / 35

(setq bonsai 12)            bonsai / 12

(setq name “Cole”)          name / “Cole”
```


# Conclusion

After reading this tutorial, you should have a very basic understanding of CommonLISP, and have it installed on your computer. In the next tutorial, we'll look at control structures, lists, and more!