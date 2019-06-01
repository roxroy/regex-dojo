# Regex Dojo

Web application to provide a fun environment to master regular expression syntax and usage.

## User Story

1. User can signup and have their progress saved / or you may target frontend only and save user progress to local storage
1. User can “practice” to learn the concepts in a level
1. User can “test” to complete a level and move to the next
1. User can “fight” and compete against an AI opponent, matched to challenge at the user’s approximate level
1. User rises in level as they complete sections
1. User gains badges as they complete sections
1. Cheat Sheet is available for reviewing concepts
1. Implement profile allowing the user to outfit their avatar with items they earn via practicing, testing, and fighting.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Things you need to install to run the app:

- Node
- MongoDB

### Installing

Get the repository

```
git clone https://github.com/roxroy/regex-dojo.git
cd regex-dojo
npm install
```

Make a copy of `env.example` as `.env`
```
cp env.example .env
```
Update the corresponding keys and credentials.

In a new terminal, go to the project folder, create a data folder and start mongo
```
mkdir data
mongod --dbpath=./data
```

In a new terminal, go to the project folder (folder with server.js) and run the following:
```
npm run start
```

Access the app through the browser, http://localhost:3000.

## Deployment

Release build is optimized for deployment to Heroku and MLab. Don't forget to set environment variables on Heroku from .env.

## Built With

* [MongoDB](https://www.mongodb.com/) - NoSQL database
* [Express.js](https://expressjs.com/) - Web application framework
* [Node.js](https://nodejs.org/en/) - Platform for network applications

## Contributing

Please open any issues that you encounter on [the GitHub repo issue page](https://github.com/roxroy/camper-stockcharts/issues).

## Authors

* **Roxroy** - [roxroy](https://github.com/roxroy)


## Acknowledgments

* Hat tip to anyone who's code was used
* [Readme template used](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
