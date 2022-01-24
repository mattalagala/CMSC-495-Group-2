# PROJECT VAULT

Project Vault is a market for final projects or any projects that bootcamp students want to showcase. Users will be able to sign in individually or as a group and highlight various attributes (screenshots, descriptions, languages, functionality, etc) for their project. These projects will be available for employers to browse through and contact the groups if they so choose. 

## PROJECT VAULT SCREENSHOTS
##### 1) Home Page showing the idividual projects in a card layout.
<img src="https://github.com/mattalagala/FinalProject/blob/master/public/uploads/mattproject1.jpg" width="480" align="center"> 
 
##### 2a & 2b) Users can utilize search field and "Filter By Technology" to sort by the technologies used (Javascript, React etc.). * Future releases will have more search options. 
<img src="https://github.com/mattalagala/FinalProject/blob/master/public/uploads/mattproject2.jpg" width="480" align="center">

##### 2b) 
<img src="https://github.com/mattalagala/FinalProject/blob/master/public/uploads/mattproject3.jpg" width="480" align="center">

##### 3) The Add Project page allows registered users to input new projects to include "Project Information", "Project Images", "Team Info" and "Member Info".

<img src="https://github.com/mattalagala/FinalProject/blob/master/public/uploads/mattproject4.jpg" width="480" align="center">

##### 4) Registered users are allowed to create their own username and password or use the Google authentication to sign in and add a project. * Currently Google OAuth is disabled to allow users to demo the site before launch. 
<img src="https://github.com/mattalagala/FinalProject/blob/master/public/uploads/mattproject8.jpg" width="480" align="center">






## PROJECT VAULT USERS INPUT
Users will be required to provide the following information under "Add Project" to create a new project:

**Project Section**
* Project Name: 
* Project Description: 
* Project Social Information: *Ex: URL, Git Repo, Cohort*
* Project Screencaptures: *Ex: Image 1 is required, upload up to 8 images*
* Languages Utilized: *Select technologies used by clicking the checkboxes*

**Team Info**
* Team Name:
* Team Members:
* Team Member Social: *Ex: Git Repo, LinkedIn, Twiter, etc*

\**Future releases will incorporate additional members*\*

## SCOPE
Project Vault is a Node.js and Express web application, utilzing Passport.js (for authentication), Knex (for SQL interface), and PostgreSQL.

### WORKFLOW
1. User clicks the individual project card on the Home page.
2. A query is sent to the database to retrive the table information based on the primary key (the clicked card's UUID) and returned as a promise object.
3. The individual Project page, renders the promise object using Express' Handlebars templating engine. (Ultimately, the user decides which form field they will populate, so not all fields are populated.) Handlebars dynamically renders only the fields that are available.
4. Users requesting to "Add Project" are required to register for a username and password, they can also authenicate using their google accounts. Only authenicated sessions are allowed to then create a new project.
4. The uploaded pictures are received using Multer, a Node.js middleware, which handles multipart/form-data. The files are uploaded as objects to the site and a record is placed in the database.
5. Project Vault is a Nodejs app which is deployed on a DigitalOcean droplet, using NGINX for dynamic redirects from the droplets public IP to a TLD. The PostgreSQL database is also housed on the same droplet. 

## SUBSCRIBERS
1. Registered users will be able to "Add Projects" and update projects. 
2. All users will be able to browse the projects. 

## FUTURE RELEASES
1. In future releases Project Vault will be able to email subscribers (specifically employers) of future projects. 
2. Implement various filter methods.
3. Functionality to add additional members.
