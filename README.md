# Gatherly - Your Ultimate Event Companion
Gatherly is a web-based event
reminder platform that helps users discover, organize, and attend events
seamlessly. Whether you\'re an avid eventgoer or an event organizer,
Gatherly simplifies the process by offering personalized event
reminders, ticket booking, and event management tools all in one place.

Features
-	Personalized event reminders
-	Discover events by category (Music, Photography, Gaming, etc.)
-	Seamless ticket booking integration
-	Event management for organizers
-	Event promotion tools for wider reach

Installation
1. Clone the repository:
   git clone 
2.	Navigate to the project directory:
cd gatherly
2.	Install dependencies:
npm install
3.	Start the local development server:
npm start


Database Schema
Name of the Database: ballerina

Tables:
1.	users
Column Names:
id – (int-datatype)
name, email, password, cpassword – (varchar)

3.	organizers
Column Names:
id – (int-datatype)
event_name, event_description, date, event_category, ticket, organizer_name, email  – ( varchar)


Usage
1.	Register or log in to your Gatherly account.
2.	Browse through upcoming events tailored to your preferences.
3.	Set reminders for the events you are interested in.
4.	Add new events as an organizer and manage them effortlessly.

Technologies Used

•	Frontend: HTML, CSS, JavaScript, React.js

•	Backend: Ballerina

•	Database: Mysql

•	APIs: Event API

•	Tools: Git, Figma (for UI design)



Contributing
Contributions are welcome! To contribute:
1.	Fork the repository.
2.	Create a new branch (git checkout -b feature-branch).
3.	Make your changes.
4.	Commit your changes (git commit -m "Add new feature").
5.	Push to the branch (git push origin feature-branch).
6.	Create a pull request.


License

This project is licensed under the MIT License - see the LICENSE.md file for details.
