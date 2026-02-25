Personal Assignment 1 Report Template
1. Project Overview
Project Name: Finish (Run Tracker)

What does your calculator do?
This calculator helps runners easily determine their running efficiency. It calculates pace (min/km), speed (km/h), and estimated calories burned using distance, time, and body weight.

2. Inputs
List and explanation of all inputs I used.

Input Name	Unit	What it represents is my list and explanation of all inputs I used.
Distance	km	How far the user ran
Hours	            h	Hours part of the running time
Minutes         min       Minutes part of the running time
Weight           kg         Body weight of the user


Explain in words:
I chose these inputs because they are the basic things you need to calculate running pace and calories. Distance and time give the pace and speed, and weight is needed to estimate calories; the more you weigh, the more energy you use.

3. Process (Calculation Logic)
Formula or Calculation Used:


Total minutes = hours × 60 + minutes
Pace (min/km) = total minutes / distance
Speed (km/h) = distance / (total minutes / 60)
Calories (kcal) = weight × distance × 1.036 (a general factor for running) https://www.best-running-tips.com/calories-burned-calculator.html#gsc.tab=0	


Steps:

Get the numbers the user typed into the input fields.
Convert hours to minutes and add them to the minutes field.
Check if all necessary values are filled (distance, time, weight). If not, show an alert.
Calculate pace, speed, and calories using the formulas.
Store the results in variables and display them on the page.
4. Conditional Logic (if / else)
Explain how my program interprets the result.

Example:

If pace < 5 min/km → Fast
If pace 5 – 9 min/km → Normal
If pace > 9 min/km → Slow

Explain why I chose these ranges:
I chose these ranges based on the Compendium of Physical Activities, which classifies running intensity by speed and pace, and also based on my own experience.  https://pacompendium.com/running/	

5. Output
What does my program show to the user?

Calculated pace in minutes per kilometer 
Calculated speed in kilometers per hour
Estimated calories burned (rounded to whole number)
A picture and background color that change based on the pace


6. Edge Cases / Unusual Inputs
What happens if:
User enters zero?
If the user enters 0 for distance or weight, the first check if (!distance || !weight) catches it because 0 is considered empty. The alert "Please enter distance, time and weight!" appears. If the user enters 0 for hours and minutes (totalMinutes = 0), the same alert appears because totalMinutes === 0 is checked
User enters negative number?
If the user enters a negative number like -5, the second check if (distance <= 0 || totalMinutes <= 0 || weight <= 0) catches it. The alert "Values must be greater than 0!" appears. The calculation stops
User leaves input empty?
If distance or weight is empty, parseFloat gives nothing, so !distance or !weight becomes true → first alert appears. If hours or minutes are empty, they become 0 because of || 0. So totalMinutes becomes 0 → first alert appears (same as entering zero time)

7. Optional Features (If You Added Any)

Calculate button with hover animation
Reset button to clear all fields and restore default background
Calculator-card transparency


8. How to Run the Project


Download or clone repository
Open index.html in browser
Enter your distance (km), time (hours and minutes), and weight (kg)
Click calculate button


9. AI Usage (If Used)
Did you use AI tools?
Yes

What you asked AI for:
I told the AI that writing separate elements felt messy and inconvenient. I asked for tags that could group elements together and requested a simple explanation because I am just starting out
I asked how to connect and display the Montserrat font specifically in my HTML
I asked how to link three separate files (HTML, CSS, and JS) so they function together as a single project
I asked for the template to create a reset button that looks like a link and remains hidden until the calculate button is pressed
I asked how to create a modern semi-transparent effect for my calculator-card
I asked for a way to change the entire page background color based on the running results (pace)
I asked how to add spacing between my time input fields (hours and minutes) because they were stuck together in the UI
I asked for different animation options for the calculate button to make it feel more interactive
I noticed the background color changed too fast, so I asked how to make the color transitions smooth(6)
I asked how to trigger an error message if a user enters a value below zero in the numeric input fields when clicking calculate
I asked for the difference between href and rel attributes and why they are necessary
I asked how to round the corners of my calculator-card
I asked for a clear explanation of what const means in javascript
What you modified yourself:
The AI introduced me to div class and div id. I manually structured my code using these, creating my own naming system for my containers like calculator-card and time-inputs
Following the Google Fonts instructions, I personally selected the font weights and integrated the link into my head section.
While duplicating and organizing my files(HTML, CSS, and JS), I learned how to manually update file paths and names in the links to ensure the project didn't break.
After learning how to hide/show the reset link, I figured out on my own how to apply that same logic to the status images 
I took the transparency template and manually adjusted the rgba and blur values to get the exact look I wanted for my specific background
I didn't just change colors, I expanded the logic to include different images that match the mood of the pace (fast/normal/slow)
I adjusted margins manually to make the layout look symmetrical and professional
I picked a hover effect from the options provided and adjusted 
I applied the transition property to the body tag and experimented with different second values to find the perfect smoothness
I customized the alert messages and the if conditions to check not just for empty fields, but specifically for negative numbers
I manually applied the correct rel and href attributes to Google font link
 I used border-radius and tested different pixel values until the card matched my visual vision
 I chose to use const for all my element selectors (like calculateBtn) 
What you fully understand now:
Working with this project and using AI as a tool has helped me start understanding how a website is built. I'm beginning to see the big picture of how HTML structure, css design, and javascript logic connect to make a page work. I now have a basic idea of what classes and ids are for, how to link google fonts, and how javascript can grab elements to change their style or text
10. Reflection
What did you learn from this assignment?

From this assignment, I learned that programming isn’t just about writing code, but a continuous cycle of testing, making mistakes, and finding ways to fix them. While I now understand the basic connection between HTML, css, and javascript, I realize I’m still at the beginning of my journey and need much more practice to feel truly confident!!! I can't explain every technical detail yet, but my perspective has expanded, and I now see how individual elements work together to create a functional interface. The good thing is that I can continue to practice and learn step by step, no matter whether I use AI, YouTube or different websites.
