# Altruistiq hiring assessment
Welcome to Altruistiq! Thank you very much for being here. 🙏

For this assessment we will be using 4 things:
1. The code in the repo
2. Your laptop to run the code
2. Your IDE which you will screenshare
3. https://webwhiteboard.com/ for architecturing & brainstorming

This repo will help you kick-start your live coding session. The following has been set up (check package.json for full details) but you're free to use any package you may seem fit:

- express
- mocha
- babel
- axios
- lodash

Hot reloading is enabled and tests rerun when code changes.

### Setup
Clone this repo, then
```
npm i
npm run init
```

### Run it
Code automatically reloads upon code changes. You will need to refresh your browser if you use it.

```
npm start
```

### Run tests
To run test (code and tests are being watched so automatically reruns).
```
npm test
```

# Tasks
Please read through all the tasks to understand the full scope of this assessment.

## Task 1 - Architecture data model
Given the dataset in `/lib`, sketch out the data model and its relations.
Can you write the SQL queries to create these tables?

## Task 2 - List all emission categories API
Write an API to query emissions for a single company. It returns the following response:

```json

{
  "totalEmission": 10000,
  "perCategory": {
    "Transportation": {
      "id": 1,
      "emission": 1000,
      "percentageOfTotal": 10,
    },
    "Electricity": {
      "id": 2,
      "emission": 9000,
      "percentageOfTotal": 90,
    },  
  }
}
```

## Task 3 - Get an emission category API
Write an API that returns a single emission category for a single company, e.q. query by companyId and activityCategoryId.

```json
{
  "emission": 5000,
  "percentageOfTotal": 8,
}
```

## Task 4 - Write tests
Write a couple of tests to make sure your API works as expected.

## Task 5 - Secure your APIs
Secure the API endpoints however you see fit.

## Task 6 - Scaling
Make your API response under 1 second. Keep in mind that your API can be triggered multiple times per second.

## Task 7 - Deploy
Architecture the deploy of your API to AWS.