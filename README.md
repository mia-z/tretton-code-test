# <p align="center"> Tretton37 Frontend Code Assignment
<sub>Author: Ryan Cockram

---

## Design and package motivation

This assignment consists of a web-app displaying the members of Tretton37, which can be filtered by name via a text-input or using checkboxes with office locations. The list can be sorted according to alphabetic order of either the names of the people or the cities - these sorting and filtering options can be combined. 

The app is made using __Vite__, __SvelteKit__ and __TailwindCSS (with SCSS)__, and hosted on __Vercel__. While an app this small can not fully take advantage of the tools Sveltekit offers, I still opted to use it so I could showcase the server loading and ISR capabilities since a lot of images are being loaded. 

Using Svelte is a person choice, as I could've more than easily replicated this using React/NextJS, I just enjoy using Svelte much more; it's a lot simpler to use and has far less boilerplate than react, but more importantly how side-effects are managed with Svelte is much more elegant than React's useEffect hook.

I like to combine Tailwind with Svelte as it alllows you to build a base site very quickly and still add somewhat complex stylings without having to manage extra css files(the 'prettiness' of the amount utility classes that are crammed in can look confusing or overwhelming, but to me is much more preferable to css files). Once you have base styling and a theme set, it can all be easily migrated using the same utility classes and Tailwind's @apply so you can lighten any repetition that may be used. I also add DaisyUI to my Tailwind setup, but mostly for the extra colour pallettes and form styling it offers.

For the testing suite I usually opt for vitest as it's really fast and integrates nicely into the Vite config.

---
## Stories Chosen

- __Functionality__
- - Sort by name and office
- - Filter by name and office

I had specifically chosen these two so I could show some basic array manipulation using modern standards, as well as how state can be easily managed using Svelte built-in tooling. To track changes to the list of users I used a Svelte store which is given the values of users during preload, then on mount the list is copied to an aux array which would be used for side-effects. Then using basic binds on the form elements, the list of users can update by being evaluted in a reactive statement!

- - Available on a free public url

For this I chose Vercel as they offer a really neat package for free, as well as a lot of backend operations for frameworks like SvelteKit such as ISR and SRR (which the app _should_ be using so it isn't fetching the data on every load). I used to use Heroku but they dropped their free tier (rip). Vercel also has really smooth integration into Git with deploys straight from branch pushes with minimal configuration (and rollbacks, staging, etc)

- __Design/Accessibility__
- - Responsive design

Making websites with responsive designs is much easier today since there is so much tooling you can use. Tailwind has a lot of built in utility classes for handling different screen sizes and breakpoints that corrospond with many common mobile phone and tablet viewports. With these, I can make the app incredibly responsive and look nice at almost any width - though getting the images to look nice on _every_ breakpoint was an almost impossible task without implementing a more complex ruleset (or without having different image sizes tailored for different screen sizes). I'm able to make the amount of columns change if the screen is too narrow, like on mobile phones, or have more columns for larger desktop displays, as well as adapting the text sizes so they're not too big or too small. 

- - Use Modern CSS throughout the application 

Though I didn't utilize many css variables themselves, they are used under the hood in the libraries and styling I used. I opted to use the SCSS postprocessor because I prefer the nested view of CSS rather than vanilla. I also created a ciuple of custom rules using Tailwind's @apply utlity function - this could be used a lot more, ofcourse, but I didn't feel it was neccessary in this case.

I used a mixture of grid and flex throughout. Flex is used where the elements tended to be more dynamic and unpredictable in nature, whereas I would use grid where the layout needed to be more static, for example when aligning the third-party site icons on the UserCards (Twitter, GitHub, Stack Overflow and LinkedIn).

- __Testing/QA__
- - Use Typescript

Typescript is my go-to when making web applications. C# was the first OO programming language I properly learned so I was already used to static/strict typing from the get go. It just makes the developing experience much more streamlined when you know what is allowed to go where - and also helps vastly with errors in Javascript which tend to be notoriously vague.

- - Integration tests of components

Vitest has more used in a couple of function test cases to check whether the name and location has renderred correctly in the UserCard component. I prefer to use Vitest for these smaller projects since it's small, fast and concise. On a bigger project with more components I may have opted for a more advanced testing suite like Cypress to allow for more surgical UI tests or events and elements.

---

Running locally can be done by running `yarn && yarn dev` in the root of the project.

A live version of the app can also be found [Here](https://1337.miaz.dev)