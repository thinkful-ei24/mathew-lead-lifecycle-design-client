# Lead Lifecycle Designer
### by Matt Williamson

## Overview
This web-based app is designed to track leads for a service-oriented business. When a lead is entered, the app will automatically add upcoming "events" to the lead. These events will be automated emails, automated text messages, and reminders to call the lead. The emails will be eventually handled by Send Grid while the text messages will be eventually handled by Twillio. 

This app was completed in two weeks with about two weeks of learning React/Redux. 

## How to Use
- The client is hosted at https://mathew-lead-lifecycle-client.netlify.com
- To login, you can either create a new user or use the following login: 
- _Username: **demoaccount**_
- _Password: **demopassword**_

## Engineering Highlights
- Designed responsively for both mobile and desktop devices
- Includes a fully responsive data table
- Persistent login / authentication using JWTs
- Data persistence using a RESTful backend (check it out [here](https://github.com/thinkful-ei24/mathew-lead-lifecycle-design-server)).

## Technology Stack
### Front End
- HTML/CSS/Javascript
- Front end using React
- State Management using Redux and Redux Forms
- Enzyme and Jest for testing
- Hosting with Heroku
- Travis CI for Continuous Integration
- Git/Github for version control
### Back End
- NodeJS for runtime environment
- Express for the HTTP server layer
- PassportJS and JWT for user authentication
- Mongoose/MongoDB for databases
- Mocha and Chai for testing
- Hosting with Heroku
- Travis CI for Continuous Integration
- Git/Github for version control
- [The Backend Repo can be found here.](https://github.com/thinkful-ei24/mathew-lead-lifecycle-design-server)


## Future Plans
- Be able to Edit Leads
- Be able to View Leads
- Be able to sort Lead Dashboard by any field and possibly even filter
- Be able to add new, edit, and delete existing Upcoming Scheduled Events
- Be able to schedule future emails via Send Grid
- Schedule a future email to send via SendGrid.com
- Schedule a set of future emails to send via sendgrid.com, using a timeline that the user defines
- Schedule a text to send via undefined SMS-based system
- Schedule a set of texts to send. Do this using a timeline that the user defines

## Screenshots
![Login Screen of Lead Lifecycle Design App](https://raw.githubusercontent.com/thinkful-ei24/mathew-lead-lifecycle-design-client/master/screenshots/LoginScreen.png "Login Screen of Lead Lifecycle Design App")
![Sign Up Screen of Lead Lifecycle Design App](https://raw.githubusercontent.com/thinkful-ei24/mathew-lead-lifecycle-design-client/master/screenshots/SignUpForm.png "Sign Up Screen of Lead Lifecycle Design App")
![Dashboard Screen of Lead Lifecycle Design App](https://raw.githubusercontent.com/thinkful-ei24/mathew-lead-lifecycle-design-client/master/screenshots/Dashboard.png "Dashboard Screen of Lead Lifecycle Design App")
![Dashboard With Help Modal Screen of Lead Lifecycle Design App](https://raw.githubusercontent.com/thinkful-ei24/mathew-lead-lifecycle-design-client/master/screenshots/DashboardWithHelpModal.png "Dashboard With Help Modal Screen of Lead Lifecycle Design App")
![Create Lead Screen of Lead Lifecycle Design App](https://raw.githubusercontent.com/thinkful-ei24/mathew-lead-lifecycle-design-client/master/screenshots/CreateLead.png "Create Lead Screen of Lead Lifecycle Design App")
![Create Lead With Help Modal Screen of Lead Lifecycle Design App](https://raw.githubusercontent.com/thinkful-ei24/mathew-lead-lifecycle-design-client/master/screenshots/CreateLeadWithHelpModal.png "Create Lead With Help Modal Screen of Lead Lifecycle Design App")