# Calculator
In this project I made a simple portrait calculator which allows the user to add, subtract, multiply, and divide numbers. Additional features include a clear button, backspace, period, and brackets.

I had been really struggling to comprehend how to add event listeners in a quick and efficient way to multiple elements instead of creating an event listener for every single element. I began writing this program a while ago, but I lost interest as I was literally writing an event listener for every button.

Flash forward a couple weeks later and I finally found out how to apply event listeners to multiple elements using the .map() method. Once I figured that out this project was relatively easy.

Another hurdle I came across was figuring out how to actually calculate the calculation string. Initally, I figured I had to create a function for  all of the operators seperately (I didn't even know if this was possible). However, after some digging around I found the eval() method. The only problem was that the eval() method has some security issues, and even though this application is not meant for the public, I didn't want to use bad practices. So, after some more looking I found the new Function method.

I feel like I have broken through another threshold figuring how to add event listeners to multiple elements, and I am super keen to use this understanding on new projects.