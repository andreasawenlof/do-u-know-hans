Jelica Thorn Music - TESTING

![Do u know HANS? Website shown on different devices](assets/docs/images/amiresponsivefull.png)

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
    - [Returning Visitors Goals](#returning-visitors-goals)
  - [Full Testing](#full-testing)
- [FIXED AFTER USER FEEDBACK/EXPERIENCE](#fixed-after-user-feedbackexperience)
- [BUGS](#bugs)

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
![Test Index Desktop](docs/images/test/test-index-desk.png)
![Test Media Desktop](docs/images/test/test-media-desk.png)
![Test Contact Desktop](docs/images/test/test-contact-desk.png)
![Test 404 Error Desktop](docs/images/test/test-404-desk.png)

#### Mobile Results
![Test Index Mobile](docs/images/test/test-index-mob.png)
![Test Media Mobile](docs/images/test/test-media-mob.png)
![Test Contact Mobile](docs/images/test/test-contact-mob.png)
![Test 404 Error Mobile](docs/images/test/test-404-mob.png)

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
| `First Time Visitors` |
|  |  |  |
| I want to know how to play the game | By providing instructions even at the home page the instructions cannot be missed |
| I want to be able to input my name | There is a name field where you can input your name and it gets stored in local storage |
| I want to see my score | The scores are stored in local storage and incremented depending if you're correct or incorrect and in after the quiz you get to know your score |
| I want to know if I'm correct or incorrect when going to the next question | Choice button that's correct will light green and incorrect buttons will light red. |

#### Returning Visitors Goals

### Full Testing
Full testing was performed on the following devices:

- Laptop:
  - Macbook Air M2 13,6"
- Mobile Devices:
  - iPhone X

Tested the site using the following browsers:
- Google Chrome (All devices)
- Safari  (All Devices)
- Firefox (All devices)
- Microsoft Edge (Desktop)

- Had friends and family testing the site and reported very few issues (all those issues got fixed as you can see in the bug/fix section below).


## FIXED AFTER USER FEEDBACK/EXPERIENCE
- Fixed so user know if they're incorrect or correct.
- Added hover only for finer-point devices meaning if you have a stylus you still get the hover but not if you use for example your fingers to control the touchpad.

## BUGS
| Bug | Fix |
| :--- | :--- |
| Got an error where  | Removed "overflow" from style.css. |
| Viewing contact form on Firefox, placeholder was too aligned to the left | Increased the padding-left |
| Background scrolled with the content | Added background-attachment: fixed |
| Everything was transparent even the videos on media section | Instead of Opacity i added an alpha channel to the color and changed it from HEX to RGBA |

No unsolved bugs except the above mentioned Lighthouse Result.