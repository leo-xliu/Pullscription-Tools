This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App Set-Up

First, begin by cloning the repository locally using:

### `git clone https://github.com/leo-xliu/Pullscription-Tools.git`

Clones the repository under 'Pullscription-Tools'.

After it is done installing, run:

### `cd Pullscription-Tools`

Once in the project directory, run:

### `npm install`

This installs all necessary packages to run the app. 

When ready to access the app:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Then in order to connect to the database, open another shell window:

### `cd Pullscription-Tools`
### `cd server`

This will direct you to the server directory which you will then run: 

### `node app.js`

Connects the database in the development mode.

Now the app should be fully functional with the database. 
Note: any changes made to the server directory source code while running the app will not be reflected unless 'node app.js' is restarted. 

## Pullscription-Tools App Features

This app is specifically targeted at employees and not customers. This means that it does not manage the customer account database which would require a seperate app for. For this reason we have used a mock database for the customers that cannot be changed. 

#### Home Page

The home page consists of a header that contains our app logo which can be clicked on to return you to the home page at any point and location. It also includes a login button on the top right corner that will also display if you are signed in or not by indicating under 'Hello' with either 'Sign in' or 'User'. Once signed in, the login button will have a drop down when hovered over that allows the user to access 'settings' and also logout. 

Moving down, we have the navigation bar which consists of many features that will direct you to other pages which will be discussed later on. These features are only accessible if you are logged in otherwise clicking them will prompt you to the login page. The 'Admin' feature will also only show up if the admin is logged in. 

Lastly, the body of this page contains a carousel of comics that can be scrolled through using the sliders on both sides. 

#### Login

The login page contains a single form that allows the user to sign in using their username and password. 

There are two types of users: the admin and the employees. 
The admin account information is stored separately from the employees and will also have the additional admin feature in the home page. There is only one admin account and it can be accessed with the following information:

username: **psadmin**\
password: **admin1**

The admin will have the ability to create and remove employee accounts using the 'Admin' feature on the home page. 
A sample employee account that can be access has the following information:

username: **psemploy**\
password: **employ1**

Once logged in, you will be redirected to the home page. 

**Accessible Pages After Logging In**

#### 'Pull Comics' 

The pull comics page brings the user to to a database of customer profiles from which they can then select from to choose whose comics to pull. Once selected, they are prompted with a list of comics the customer has requests. Then the user can select any of the comics and choose the quanity they will pull for the customer. 

#### 'Inventory' 

The inventory page contains a database of all the comics avaliable as well as how many copies there are. There is a search bar that allows the user to search for specific comic books through their **title**. Each page contains 16 or less comic books and there is a pagination feature allowing the user to move through the list of comics. Each comic panel contains the comics cover, title, publisher, and amount of copies available. Each comic cover can also be clicked on which will take you to another page that gives more details about the comic. 

#### 'Fan Profiles' 

Fan profiles contains the database of customers and once the user selects a customer, they can see the comics the store has pulled for them (set aside) as well as the fullfilled comics (purchased). Under pulled comics, the user has the option to complete or cancel the set aside comic depending on what the customer chooses to do. 

#### 'Check-In' 

Unfortunately this page's functionality has not been implemented completely so it is just a dummy page with a basic structure built with CSS.

#### 'Admin' 

The Admin page is only accessible if logged in as the admin. This feature gives the user the ability to create employee accounts that will be uploaded to a database that stores this information. It also offers the feature for the user to remove employee accounts from the database.
Note: the admin account is separate from the database so their account cannot be deleted. 

#### 'Settings'

The settings page allows the user to change their password. Unfortunately, we did not have enough time to connect this portion to the database and implement the feature. However, the page has been fully built with HTML and CSS.