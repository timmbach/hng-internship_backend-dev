# hng_internship

## Stage two REST API Project

This repository contains a REST API project built with Node.js and Express.js. It provides endpoints for getting all existing persons, creating new persons, editing persons and deleting persons.

### Table of Contents

[- Prerequisites](#prerequisites)
[- Installation](#installation)
[- Usage](#usage)
[- API Endpoints](#api-endpoints)
[- Testing](#testing)

## Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js installed
npm or yarn installed
MongoDB installed and running

## Installation

1. CLone the repository

```
git clone https://github.com/timmbach/hng_internship.git
cd hng_internship/stage_2
```

2. Install dependencies

```
npm install
```

## API Endpoints

Here is a list of available API endpoints and their descriptions:

- GET /api/ - Get all existing persons.
- GET /api/:name - Get specific person.
- POST /api/ - Add a new person.
- PUT /api/:name - Edit a specific person.
- DELETE /api/:name - Delete a specific person.
