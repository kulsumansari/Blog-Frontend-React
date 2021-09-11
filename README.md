# BloGet

* [BloGet Live Link](https://613cb5aafe74627aeeeb9051--loving-wiles-76f4cd.netlify.app/).

* [Server Live Link](https://backend-server-blog.herokuapp.com/)


BloGet fetches the Blogs from server and renders them. Navigating betwwn Blogs is made possible with react routing. 

## Set-up Project

To Setup this project locally follow below mentioned steps:

#### Installation and Run

 1. Installation
 
   - Clone the Repository
   
   ```
    git remote add origin https://github.com/kulsumansari/Blog-Frontend-React.git
  ```
  - navigate to the root folder and run the following commands to install node modules.
   
  ```
  npm install
  ```
 
   
  2. Run the Project
  
  ```
  npm run start
  ```
    

# Routes in the Application

  *  ``` / ```
  
     / route in the applications shows the list of all blogs fetched from server \
     
  *  ``` /blogId ```

     /blogId route is renders the blog of specified blogId
    
 # Folder Structure
 
 ```bash
src
├── App.js
├── data  
│   └── data.js
├── Components
│   └── BlogComponent
│         └── BlogComponent.jsx
│         └── BlogContainer.jsx
│         └── RelatedLinks.jsx    
│         └── BlogComponent.module.css 
│   └── BlogTile
│         └── BlogTile.jsx    
│         └── BlogTile.module.css 
│   └── Logo
│         └── Logo.jsx    
│         └── Logo.module.css 
│   └── NavBar
│         └── BlogTile.jsx    
│         └── BlogTile.module.css 
│   └── Footer
│         └── Footer.jsx    
│         └── Footer.module.css 
├── pages
│   └── Blogs
│   └── Blog
└── AppRouter
     └── AppRouter.js
  
```

# Resources

[React Component & Props](https://reactjs.org/docs/components-and-props.html)

[React Routing](https://reactrouter.com/web/guides/quick-start)

[React Hooks](https://reactjs.org/docs/hooks-overview.html)

[React Router API](https://reactrouter.com/web/api/)


