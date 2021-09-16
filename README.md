# BloGet

* [BloGet Live Link](https://loving-wiles-76f4cd.netlify.app).

* [Server Live Link](https://backend-server-blog.herokuapp.com/)

## Introduction

BloGet fetches the Blogs from server and renders them when the application Loads. Navigating between Blogs is made possible with react routing. 

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
   
     **Components In**``` / ```**route**
     
     1.Loading Componets
    
     2.Blog's List
     
     3.Error Component
     
     
     **1.Loading Componets**
     ![](https://kulsumansari.github.io/webpage-data/bloget-image/Loading.png)
     
     **2.Blog's List**
     ![](https://kulsumansari.github.io/webpage-data/bloget-image/Homepage.png)
     
     **3.Error Component**
     ![](https://kulsumansari.github.io/webpage-data/bloget-image/no-data.png)
     
     
  *  ``` /blogId ```

     /blogId route is renders the blog of specified blogId
     ![](https://kulsumansari.github.io/webpage-data/bloget-image/Blog-blogId.png)

    
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
│         └── companyImage.png 
│   └── NavBar
│         └── BlogTile.jsx    
│         └── BlogTile.module.css 
│   └── Footer
│         └── Footer.jsx    
│         └── Footer.module.css 
│   └── Modal
│         └── Modal.jsx    
│         └── Modal.module.css 
├── pages
│   └── HomePage
│   └── Blog
└── AppRouter
     └── AppRouter.js
  
```

# Resources

[React Component & Props](https://reactjs.org/docs/components-and-props.html)

[React Routing](https://reactrouter.com/web/guides/quick-start)

[React Hooks](https://reactjs.org/docs/hooks-overview.html)

[React Router API](https://reactrouter.com/web/api/)


