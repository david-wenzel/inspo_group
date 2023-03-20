
# inspo.Group: A Collaborative Mood Board Web App

![Example Image](https://64.media.tumblr.com/c7e6e1223007e837d067692242e72074/098b06a47ed3e2f5-dc/s500x750/3e94bc6cee76e765a62f5e4a0e742caca72e9a8a.png)

inspo.Group is a full-stack web application built using Ruby on Rails and React, designed to help teams and individuals create and share mood boards for inspiration. With a user-friendly interface, the app allows users to create boards and add posts, providing a seamless collaboration experience.

## Features

- User authentication and authorization for secure access
- Intuitive board and post creation and management
- Real-time collaboration and sharing of mood boards with team members
- Post managment including post editing




## Installation

###Prerequisits 
Ensure you have the following software installed on your system:
- Ruby (version 2.7.0 or higher)
- Rails (version 6.0.0 or higher)
- Node.js (version 14.0.0 or higher)


- Clone the repository to your local machine

- Navigate to the project directory

- Install the required Ruby gems

```bash
    bundle install
```
    
- Install the required JavaScript packages:

```bash
    npm install
```

- Create the database, run migrations, and seed the data:
```bash
    rails db:create db:migrate db:seed
```

- Start the Rails server:
```bash
    rails server
```
- In another terminal, navigate to the client directory and start the React development server:
```bash
    npm start
```
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Lessons Learned

Throughout the development of the inspo.Group project, I gained valuable insights and lessons in various aspects of web application development. Building this project deepened my understanding of the useContext hook in React, which allowed for efficient state management and simplified the process of sharing data among components. Additionally, I learned how to implement user authentication using the session hash in Ruby on Rails, ensuring secure access to resources and providing a seamless user experience. Lastly, I discovered the importance of properly structuring nested routes, which led to more organized and maintainable code while improving the overall application architecture. These lessons not only enhanced my technical skills but also contributed to my growth as a developer by reinforcing the significance of best practices in full-stack web development.

