# Todo

Netlify: 

info:
This app is a to-do app that is made with react and styled-components ...

Requirments:
- You should use Zustand for global state management. No prop-drilling.
- Your app should list all tasks - completed and uncompleted
- You should be able to mark an uncompleted task as complete (and change it back to uncompleted)
- You should be able to add and remove tasks
- Your app should show a count of the tasks. Either all tasks or all uncompleted tasks (or both)
- You should make your app look nice when there's no data. See empty states UX design for some ideas.
- Make your app responsive (it should look good on devices from 320px width up to at least 1600px)
- Your project should follow accessibility guidelines to ensure your website is usable by a diverse range of users:
- You should have a score of at least 95 in Lighthouse
- All images should have alt attributes and proper sizes
- All contrasts should be OK
- Follow the guidelines on how to write clean code

components:
the submit to-do bar - with text input and submit button
submitted to-dos card - with the text a checkbox and a delete button
empty state card: with encoraging messaged and a graphic figure
background graphic element

effects:
you should be able to click the checkbox and then the design on the specific card is changed
you should be able to delete to-dos
you should be able to untick the checkbox 

extra:
there will be a little confetti animation(lottie) when you have completed one task
when you have completed all tasks you should get a "good job, you are done" kidn of animation(lottie) that will last a couple of seconds and then show empty state

stretch goals:
add a timestamp to each card using moment.js (like in happy thoghts project)
do a filter to filter on completed and uncompleted tasks
