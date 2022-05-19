# Calculator

Basic calculator that can multiply/divide/add/subtract, support decimals, and works with the keypad. Created as part of The Odin Project's Full-Stack Javascript course.

Viewable at https://xiejon.github.io/Calculator/

## Objectives 

1.  Create a working calculator that can chain operators. 

## Motivation 

- Use newly acquired knowledge in DOM manipulation, objects, booleans, and arrays to create a functional app.

## Overview of App

1. User enters a number or a selection of numbers. Ensure user cannot select decimal button more than once. 
2. One of the operator buttons is pressed.
3. User enters another number. 
4. If the operator button is pressed again, the previous two numbers are operated on. The result is then displayed.
5. Repeat steps 1-4 until all numbers are entered. Then, the user can click the '=' button to calculate and display the final result. 

## Challenges

1. Operators
    - I struggled figuring out how to chain together operations. I ended up using an array to store number entries and then wrote a function to operate on the last two numbers once an operator was clicked.

2. Display Overflow
    - I had to account for numbers that exceeded the container. My solution was to limit the user entry length to 13 digits. 

3. UI Design
    - I made this project before I learned about CSS grid. It took me a while to position buttons and to translate my sketch of the calculator design into actual code. 

## Areas for Improvement
- In hindsight, after working on other projects, I see how inefficient my code is. A lot of repetition could be reduced with functions and modules. This would also improve the general organization of the code. I also see how important it is to name functions well, as it is also not immediately clear what each function does. 
- Add support for more complex operations, i.e. logarithms, exponents, etc.
