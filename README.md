![GitHub last commit](https://img.shields.io/github/last-commit/Ryuku72/HomeworkW3?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Ryuku72/HomeworkW3?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/Ryuku72/HomeworkW3?style=for-the-badge)

## HomeWorkW3
Homework 3: Random Password Generator

## Aim // Introduction
This week we started our journey into JavaScript with the use of variables, functions, alerts and the basic tools needed to complete this weeks assignment; a Random Password Generator. This assignment aim was to utilize the leasson learnt in Week 3 including Google-Fu to find the best way to design and compile a full functioning web application.

### Key Concepts of Week 3
* Logic: How to computer processes a request
* Assigning a variable
* Functions ()
* If // else // if else
* Strings, Numbers, Booleans
* Console.log
* Random Numbers

## Table of Content // Web Accessibility
* [Building the Index page and CSS](#Index)
* [Building the Script // Logic](#Logic)
* [Additional References](#Ref)


<a name="Index"></a>

### Buidling the Index page
Most areas of the Index and CSS had already been covered in Week 1 and Week 2. Building on Week 2 I also used Bootstrap and fonts in the creation of the index.html page. CSS was simple as the focus was centered on the Javascript


<a name="Logic"></a>

### Buidling the Script // Logic
Javascript adds function to a website through the use of functions, cause and effect (if // if else), and different types of prompts. The logic going into this exercise was the following:
1. Build a prompt // alert // confirm sequence to ask the user a number of questions
2. Store the answers by the user into variables
3. Run those variables through random number generator
4. Target the html through GetElementById to add password result
5. Use Console.log and inspect to find where I made mistakes

<a name="Problems"></a>

### Buidling the Index page
Understanding the logic and writing the logic is two completely different things. Whilst understanding the logic may offer a guide, until you truly understand what are the required tools things can quickly become a mess and a huge amount of time can be spent running through your code trying to understand what you did wrong. Here are my following problems:

1. The prompt sequence initial did not work. When reaching the end of the sequence I was not able to continue. Obviously at this point it was nothing came after "(arrTypes === 0) return". It took me a while to understand that I made errors in my syntax. Once I had fixed this it was about making the random numbers. However, I got stumped fast because I didn't know how to check if the UserChoices (answers to the prompts) had worked. Eventually I gave up to this and started looking at examples floating around.

2. How would I tackle the random number logic. I had so many problems here and whilst I finally got there I just got fustrated with how I was tackling this. Originally I wanted to use an array of lower & upper class letter, symbols and numbers. No matter how many times I tried to use the "[Math.floor(Math.random() * ArrayName.length)]" I just failed to get things to work. In the end I found the "fromCharCode". I don't like that I had to take this shortcut and I kept coming back trying to prove that I could do it... but ultimately failed.

3. Attaching ElementbyID. I dont know why I kept getting this wrong. I was doubting what I was doing and trying at this point to mimic what I seen in online examples. I did finally get this to work but only a lot of effort.

4. I originally tried to use the 'for Loop' and failed. I forgot that I needed to set a CurrentPasswordLength to 0, add value to passWordText. It was a nightmare. 

5. Learning the value of return and console logs. Whilst I have deleted all my console.logs I really had to use it all the time. Still not happy that I was unable to figure how to use an array but I will figure it out oneday.

6. I was late. I tried my best to get this done on time but I couldn't. Regardless I can't leave a project umcomplete thus I submitted something then finally finished after the due date for peace of mind. 

<a name="Ref"></a>

##### Additional references
W3 Schools
Developer.mozilla.org
Getbootstrap.com
Stackoverflow.com
Resources provided in Slack

## Technology
* HyperText Markup Language
* Cascading Style Sheets
* Visual Studio Code ver 1.42.0
* GitHub
* Google Chrome ver 79.0.3945.130

## Source
Code was originally supplied in the WAUS-CRAW-FSF-PT-02-2020-U-C-MW / Week 3 / Day1 / Homework repository on GitLab (https://waustralia.bootcampcontent.com/the-university-of-western-australia/WAUS-CRAW-FSF-PT-02-2020-U-C-MW/tree/master/Week%203/Day%201/Homework)

## Contributor
Joshua K Bader

