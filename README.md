
### Design challenge
Thank you for your interest in Santa Cruz Bikes! This is a practical coding challenge that we use as part of the interview screening process. It's meant to reflect some practical challenges we encounter as we build new experiences for our customers. The requested tasks below should take you a couple of hours, but feel free to embellish your work to highlight your skills if you'd like. However, be sure to push commits to your code as you make progress -- we'll be looking at your timing as well as the finished product, and will use that commit history to get an idea of quickly you were able to progress through the tasks.
1. Create a new [mirror/copy](https://help.github.com/en/articles/duplicating-a-repository#mirroring-a-repository) of this repo on Github. **Make your repo private!** so that other candidates can't view your solutions.
2. Get the app running locally.
3. See the list of build kit options at the bottom? Apply a little bit of nicer styling there:
    - Add a background to every other item
    - Adjust the vertical spacing to be less crowded
4. Adjust the hero image width so that it scales correctly across device sizes. Eliminate any need for horizontal scrolling.
5. It would be nice if customers knew the build kits' price. It's in the data structure returned from the API. Add it to display alongside each kit's title in the build select menu.
6. Refactor the hero image into its own component that displays an image along with a call to action button (check out the Santa Cruz homepage for an idea what this would look like). The component should have an api like 
    ```
    <HeroImage 
        src={'// the image URL'}
        ctaButtonText={'See The Bikes'}
        ctaButtonURL={'https://www.santacruzbicycles.com/en-US/bikes'}
    />
    ```

## Running the app
### Install dependencies
- From in the santa-cruz-design-challenge directory, run `npm install`
- Start the app with `npm start`
- This should launch a server on http://localhost:3000 which you can view in your browser.
    - The page will automatically reload when you save changes in the project.

#### Tips
- 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
