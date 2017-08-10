# Social Tables Front End Apprentice Challenge

## Instructions

### Installation

#### General
1. Download all files into its own folder
1. Using terminal, navigate to appropriate folder
1. Run `npm install` in project's root directory to install all dependencies

#### Ruby/SCSS
1. Install Ruby with `sudo apt-get install ruby-full` or by downloading and running executable for Windows.
1. Run `sudo gem install sass` (no `sudo` for Windows).
1. Navigate to project folder and run `sass --watch public/scss:public/styles`. 

### Running the application

1. After installation, run `npm start` in project's root directory
1. If browser tab/window does not open, open browser and navigate to `localhost:3000` (preferentially Chrome or Firefox)

## Questions/Answers

1. What aspect of your submission are you most proud of, and why?

I'm most proud of integrations made to the Canvas component.  I hit some integration hurdles and overcoming these hurdles was a very satisfying experience.  Regardless, there was a feature I wish I had time to correct/improve (see next question).

1. What would you work on if you had more time?

Given more time, I would address the resizing problem which currently results in a Canvas bug causes user interactions with the canvas result in undesirable results such as incorrect (to the user) placement of drawing, and stretching.  This is due to the fact that Canvas is set to a fixed sized and is not resized upon window resize.  The more difficult portion of the solution is to correct cursor location such that interactions are placed at the appropriate location.

Otherwise, I would proceed with features of utmost importance to the project.

1. Of all the resources (blog posts, tutorials, videos, mentors etc.) you referenced, what was most helpful for you?

I bought a book called React Design Patterns and Best Practices by Michele Bertoli of Facebook.  I felt that it served a great deal in knowing when to use and not use certain things, specifically stateful and stateless components.  There was also a section on high-order components which I am certain will be of value to me in the future but I did not use in this application.


## Notes

1. Brush size is limited to 2048 pixels.  This decision was due to the fact that at a really large number, it causes the application to become very unresponsive.  At 2048, the brush size is big enough to cover the entire canvas.
1. As noted in the Q/A section, resizing the window will cause the canvas to stretch which will result in unintended work upon interaction.  To fix this, either reload at the screen size or resize the window to its original size.
1. Only png, jpeg, jpg, and gif files can be uploaded.
1. Original radio buttons were changed to stateful buttons.
