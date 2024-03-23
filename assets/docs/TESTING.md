Do u know HANS? - TESTING

![Do u know HANS? Website shown on different devices](assets/docs/images/test/amiresponsive.png)

You can view the page [here](https://andreasawenlof.github.io/do-u-know-hans/)
---

## CONTENTS

- [You can view the page here](#you-can-view-the-page-here)
- [CONTENTS](#contents)
- [AUTOMATED TESTING](#automated-testing)
  - [ W3C Validator](#w3c-validator)
  - [Lighthouse](#lighthouse)
    - [Desktop Results](#desktop-results)
    - [Mobile Results](#mobile-results)
    - [Testing Results of the Media Section on both mobile and desktop are affected by third party cookies and due to the lack of access to the server the http header cannot be set/changed. Therefor the Results cannot be increased.](#testing-results-of-the-media-section-on-both-mobile-and-desktop-are-affected-by-third-party-cookies-and-due-to-the-lack-of-access-to-the-server-the-http-header-cannot-be-setchanged-therefor-the-results-cannot-be-increased)
- [MANUAL TESTING](#manual-testing)
  - [Tested:](#tested)
    - [All tests passed](#all-tests-passed)
  - [Testing User Stories](#testing-user-stories)
    - [Visitors Goals](#visitors-goals)
  - [Full Testing](#full-testing)
- [FIXED AFTER USER FEEDBACK/EXPERIENCE](#fixed-after-user-feedbackexperience)
- [BUGS](#bugs)
- [BUGS (not fixed)](#bugs-not-fixed)

---

## AUTOMATED TESTING


###  W3C Validator
[WC3](https://validator.w3.org/) was used to validate all HTML and CSS.
- [index.html](assets/docs/images/test/w3c-index.png) - passed
- [name.html](assets/docs/images/test/w3c-name.png) - passed - one stray input i think it's because i use an empty input and it's triggered through Javascript.
- [quiz.html](assets/docs/images/test/w3c-quiz.png) - passed - audio.src is empty but it's being triggered through javascript.
- [score.html](assets/docs/images/test/w3c-score.png) - passed
- [404.html](assets/docs/images/test/w3c-404.png) - passed
- [style.css] 



### Lighthouse

Lighthouse
I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

#### Desktop Results
![Test Home Desktop]()
![Test Name Desktop](assets/docs/images/lighthouse-name-desktop.png)
![Test Quiz Desktop](assets/docs/images/lighthouse-quiz-desktop.png)
![Test Score Desktop](assets/docs/images/lighthouse-score-desktop.png)
![Test 404 Error Desktop](assets/docs/images/lighthouse-404-desktop.png)
![Test 500 Error Desktop](assets/docs/images/lighthouse-500-desktop.png)

#### Mobile Results
![Test Home Mobile](assets/docs/images/lighthouse-home-mobile.png)
![Test Name Mobile](assets/docs/images/lighthouse-name-mobile.png)
![Test Quiz Mobile](assets/docs/images/lighthouse-quiz-mobile.png)
![Test 404 Error Mobile](assets/docs/images/lighthouse-404-mobile.png)
![Test 500 Error Mobile](assets/docs/images/lighthouse-500-mobile.png)

#### Testing Results of the Media Section on both mobile and desktop are affected by third party cookies and due to the lack of access to the server the http header cannot be set/changed. Therefor the Results cannot be increased.

## MANUAL TESTING
### Tested:
- All buttons work
- Audio plays when you click on music button
- 
- Choice works to click on at quiz
- Choice also make the correct answer button light green background and wrong red.
- Choice also makes you go to the next question and audio loaded up connected with the question.
- That all links worked
- That input field works, and store names in local storage.
- Submit button is disabled when no information is in the input field, and is enabled when you start typing in the input field
- That score gets stored in local storage and increments even if hidden under the duration of quiz
- That score and name are stored and being retrieved and used on score page
- That 404.html and 500.html works
- That the site and all pages are responsive on all kinds of sizes of devices and screens

#### All tests passed

### Testing User Stories

#### Visitors Goals
| Goals | How are they achieved? |
| :--- | :--- |
|  |  |  |
| I want to know how to play the game | By providing instructions even at the home page the instructions cannot be missed |
| I want to be able to input my name | There is a name field where you can input your name and it gets stored in local storage |
| I want to see my score | The scores are stored in local storage and incremented depending if you're correct or incorrect and in after the quiz you get to know your score |
| I want to know if I'm correct or incorrect when going to the next question | Choice button that's correct will light green and incorrect buttons will light red. |

### Full Testing
Full testing was performed on the following devices:

- Desktop: 
  - PC Windows 11 Internet Explorer

- Laptop:
  - Macbook Air M2 13,6"
- Mobile Devices:
  - iPhone X

Tested the site using the following browsers:
- Google Chrome (All devices)
- Safari (All Devices)
- Firefox (All devices)
- Microsoft Edge (Desktop)

- Had friends and family testing the site and reported very few issues (all the issues got fixed as you can see in the bug/fix section below). There are a few bugs i encountered that i've documented below.


## FIXED AFTER USER FEEDBACK/EXPERIENCE
- Fixed so user know if they're incorrect or correct.
- Added hover only for finer-point devices meaning if you have a stylus you still get the hover but not if you use for example your fingers to control the touch pad.

## BUGS
| Bug | Fix |
| :--- | :--- |
| Got an error where it tried to pick a question when it was out of questions | Solved that by copying the original array so i could use that array to pick from, when the array is empty, the quiz is done |
| Hover got stuck when using touch-devices | Added media queries that defined the distinction between coarse point (fingers etc) and finer points (mouse pointers, pens and so on) |
| Quiz crashed after 3 questions | Missed to set a proper number range on my random method |
| Submit was possible without any entry in name field | Fixed it by have a :disabled:not:hover on submit-button. Disabled the button on loading and enabled it through an event-listener. |
| When setting up the disabled submit button if removed information needed to press another key for button to be disabled | As the trigger i used keydown, changed it to keyup and it fixed it |
| Didn't want all the buttons to light in green and red just the one i pick | Solved it by adding a function with 2 paramenters instead of one and and if else statement where both conditions (my choice && correctAnswer) had to be correct |
| Hover effect showed when picking a choice on bigger screens needed the to remove mouse pointer to see if one was correct or incorrect | solved it by adding :not(.className) in CSS on the hover-class |
| Music button didn't show when it was pressed | Added an active and focus pseudo in css | 

## BUGS (not fixed)
  Bug  |
| :--- |
| When play button is activated and an answer has been chosen you you can press on the play button again and it will unpause |
| When picking a choice and the color indicating if user is correct or incorrect, you can press many times on the choice button and questions will be picked in succession. This didn't happen before I added the correct and incorrect color, because I use a timeoutDelay, not sure how to fix it, but it's something I'm aware of and something I'm working on |

No unsolved bugs except the above mentioned Lighthouse Result.