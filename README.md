# About the project

You need to create a program in which the list la is given as a parameter (all the data are valid and do not need to be checked).

The program must display the series of operations that allow sorting this list.
The program is composed of two lists of numbers named la and lb.
At the very beginning, lb is empty, and la must contain a certain number of positive or negative numbers.
The goal of the program is to sort la in ascending order (from smallest to largest).
To achieve this, you will only have access to the following operations:
sa: swaps the positions of the first two elements of la (nothing happens if there are not enough elements).
sb: swaps the positions of the first two elements of lb (nothing happens if there are not enough elements).
sc: sa and sb at the same time.
pa: takes the first element of lb and places it at the first position of la (nothing happens if lb is empty).
pb: takes the first element of la and places it at the first position of lb (nothing happens if la is empty).
ra: rotates la towards the beginning (the first element becomes the last).
rb: rotates lb towards the beginning (the first element becomes the last).
rr: ra and rb at the same time.
rra: rotates la towards the end (the last element becomes the first).
rrb: rotates lb towards the end (the last element becomes the first).
rrr: rra and rrb at the same time.
The operations must be displayed separated by a space, with no space at the beginning or end, and followed by a newline.
You can add bonuses such as displaying the state of la and lb after each step, or adding pretty colors or animations.
