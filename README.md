# dyte-vit-2022-DinalAloy


A lot of our microservices are written in Node.js and making sure that the dependencies for these services are up to date can be a bit of a hassle. Your job is to build a CLI tool that will do a few things

Given a list of Github repositories, assuming all of them are node js projects with a package.json and package-lock.json in the root, and the name and version of a dependency, you want to give the current version of that dependency and tell if the version is greater than or equal to the version specified or not.


## About The Project

The aim of the projects is to create an CLI tool which when given input of github repositories and the dependency checks whether version of given dependency is higher or lower than version of the same dependency in the given github repositories.



### Built With

* Node.js


## Getting Started

First clone the repository. Then run the commands given below.

### Prerequisites

System should have node.js installed in it.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dyte-submissions/dyte-vit-2022-DinalAloy.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install the packages globally on your machine
    ```sh
   npm i -g
   ```
   
   

<!-- USAGE EXAMPLES -->
## Usage
1. To run the tool, run this command on CLI
   ```sh
   check input <filename> <dependency-name@version> 
   ```
2. Use this as an example
   ```sh
   check input input.csv axios@0.23.0 
   ```
Running this command will given back table as output which shows name of the github repo, link of the github repo and version of the dependency which we check and whether the version is satisfied or not.




## Contact

Dinal Alosyius Cutinha - dinalaloy33@gmail.com

Project Link: https://github.com/dyte-submissions/dyte-vit-2022-DinalAloy
