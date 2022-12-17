# Examn Project 

This project was generated with Angular CLI version 15.0.1. BE for the project is made with MongoDB - Express

Project for Art App:

Information: The app works as a platform for submitting and rating art(via likes) created by users.

All users have acess to: • Home page - where they will see the top rated art on the platform • Login page - where they can log in if they have registered an account. • Register page - where they can register their profile • Note: All users can see Browse Page in the navigation bar if the user is not logged in it will be redirected to the login page

All Logged in users: • If user is logged in Nav bars change from Sign In/Sign Up to Username's Profile/Logout • User profile can be accessed by clicking on the button it will display the user profile as well as all the art submitted by this user. • Users now have acess to Browse Page and full list of every submitted art sorted by date. • Users can now like the submitted art including their own • If the User have submitted art he will see in the details of each box Edit and Delete button. On click Edit button will redirect the user to Edit form which will populete the box with the previous data. NOTE: user cannot change imageURL - this is to prevent submittions to gather lots of likes and after that being changed not reflecting the original likes. User can change Titles, Description and Cathegory • Delete - will delete the submittion

Functionality: Login, Register, Logout, Submit Art, Browse Art - sorted by Date Home page - art sorted by arts User profile page - displaying art submitted by current user Like post Edit and Delete functionality