HostedLink:- https://resipe-search-application-rgkm.vercel.app/

***#Project Title: Recipe Finder Application**
  ***Project Objective:***
      a.The Recipe Finder Application serves as a versatile platform enabling users to search for recipes based on specific keywords. The primary goal of this assignment is to deliver a responsive, user-friendly         interface that facilitates searching, viewing, and saving recipes.
      b.You can opt to implement this application as either a web application using React JS or a mobile app using React Native.


***###Features***
**1.Recipe Search:**
      **Description:** On the homepage, provide a search bar allowing users to seek recipes by entering keywords, such as ingredients or dish names.
      **Implementation:** Employ a recipe API to fetch and exhibit a list of recipes based on the user's input.
      **Notes**: Ensure that the application dynamically retrieves recipes as users type, ensuring a seamless search experience. You can use APIs like Edamam or Spoonacular for this purpose.
      
**2.Recipe Details Page:**
      **Description:** Enable users to access comprehensive information about a selected recipe, including its title, ingredients, cooking instructions, and an image.
      **Implementation:** Display the recipe details on a distinct screen or page, ensuring a clear and user-friendly layout.
      
**3.Favorite Recipes:**
      **Description:** Allow users to save their preferred recipes for future reference from the recipe details page.
      **Implementation:** Provide users with an option to save recipes, storing this data in local storage or async storage.
      
**4.Error Handling:**
      **Description:** Implement effective handling of failed API requests or instances where no results are found.
      **Implementation:** Present user-friendly error messages and ensure that the application gracefully manages unexpected situations.
      
**5.Styling and User Interface (UI/UX):**
    **Description:** Apply an attractive and user-friendly design to the application.
    **Implementation:** Create a responsive and Visually appealing UI/UX suitable for both web and mobile versions.





***#Folders structure:-***
***Resipe-Finder-Application(Foody.....!)***
|__node_modules
|
|__Public
|
|__src-------|------------------|----------|-----------------|-------------------|---------|
|            |                  |          |                 |                   |         |
|        components           App.js     App.css        ContextApi.js        index.css  index.js
|            |____________________________   
|                  |              |
|                pages         styling
|                  |              |
|                  |              |_______________________________________________________________________________________________________________________________________
|                  |                  |                  |                     |                    |                  |                    |                |
|                  |          Error.module.css   Favorite.module.css    Home.module.css      Meat.module.css     Nav.module.css    Recipe.module.css   Trending.module.css
|                  |__________________________________________________________________________________
|                    |           |              |         |         |         |            |
|                  Error.jsx  Favorite.jsx  Home.jsx   Meat.jsx   Nav.jsx   Recipe.jsx  Trending.jsx
|
|
|__.gitignore
|
|__package-lock.json
|
|__package.json
|
|__README.md




