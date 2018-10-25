# Lead Lifecycle Designer
### by Matt Williamson

## Overview
This webapp is designed to track leads for a service-oriented business. When a lead is entered, the app will automatically add upcoming "events". These events will be automatic emails, automatic text messages, and reminders to call the lead. The emails will be eventually handled by Send Grid while the text messages will be eventually handled by Twillio. 

Right now, the MVP is to have a user be able to login, serve a basic list of leads in a responsive table, be able to create a new lead and save to the database, and to have the webpage be responsive. 

This app was completed in two weeks with about two weeks of learning React/Redux. 

## How to Use
- The client and the server are hosted on Heroku. 
- The client is hosted at https://mathew-lead-lifecycle-client.herokuapp.com/
- To login, you can either create a new user or use the following login: 
- Username: demoaccount
- Password: demopassword

## Technology Stack
### Front End - Web
- React
- Redux
- Redux Forms
- HTML
- CSS
- Enzyme
- Jest
### Back End - Web & Mobile
- Node
- Express
- Mongoose
- MongoDB
- Mocha
- Chai

## Known Bugs
- Issues here

## Post MVP Stretch Goals
- Be able to Edit Leads
- Be able to View Leads
- Be able to sort Lead Dashboard by any field and possibly even filter
- Be able to add new, edit, and delete existing Upcoming Scheduled Events
- Be able to schedule future emails via Send Grid

## Further Future Plans
- Schedule a future email to send via SendGrid.com
- Schedule a set of future emails to send via sendgrid.com, using a timeline that the user defines
- Schedule a text to send via undefined SMS-based system
- Schedule a set of texts to send. Do this using a timeline that the user defines


A link to a deployed version
Screenshots of your app
A description of your tech stack
A brief description of where each of the key parts of the project live in your codebase