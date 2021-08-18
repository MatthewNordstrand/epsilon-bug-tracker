# Epsilon Bug Tracker

Created by Matt Nordstrand.

## About

This app was created with React and is still currently in development.

The main focus of this app is to allow teams of people to create, update, and track issues related to bugs during the development of software. It uses Redux for the local state management.

Because the app is currently primarily for displaying on my profile until further work is done, I allow Guests to create issues and post comments to test the functionality without needing to authenticate with an account. In the future, I desire to add an admin page where certain accounts are given different privileges.

## Some Code Examples

[Issues Reducer](https://github.com/MatthewNordstrand/epsilon-bug-tracker/blob/main/src/redux/Issues.js) - The reducer is the part of Redux that takes your Action and updates the store. In this example, I have the reducer that will allow new issues to be created, and comments to be added to the created issues.

[View Issue Page](https://github.com/MatthewNordstrand/epsilon-bug-tracker/blob/main/src/components/ViewIssues/ViewIssuePage.js) This page will take the Issue ID from the address bar and get the issue data associated with it. It will also allow the user to update the state of the issue as well as leave a comment for other developers to see in the future.

[Open Issue Page](https://github.com/MatthewNordstrand/epsilon-bug-tracker/blob/main/src/components/OpenIssues/OpenIssuesPage.js) This is an example of a for that allows people to open issues in the system. Values submitted here are sent to the Redux Issues Reducer.

## What Does the Future Hold?

I would like to complete this software by making it a fully fleshed out service. It will also need the backend that is made with Node.js in the near future to be implemented. The Dashboard page needs some widgets for basic information and the Stats page needs to implement a chart API to show off stats and charts.