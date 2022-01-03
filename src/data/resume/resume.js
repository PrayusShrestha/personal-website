const json = {
    "personal": {
        "email": "prayuss@yahoo.com", 
        "phone_number": "(780) 974-9364", 
        "linkedin_url": "http://linkedin.com/in/prayus-shrestha/", 
        "github_url": "https://github.com/PrayusShrestha", 
        "about": "My name is Prayus Shrestha, and I'm an aspiring software engineer pursuing a Bachelor of Science " +
                "in Computer Science at UBC. My interests and background lie in full-stack development and entrepreneurship, " +
                "though I am currently learning more about robotics and applied ML/NLP to expand my skillset. Most of my past " +
                "internship and extracurricular experiences have been in web development using a variety of " +
                "languages, technologies, and databases. Outside of the world of tech, I'm a chess and card game " +
                "player, snowboarder, and football fan (go Packers!)."
    },
    "education": {
        "institution": "University of British Columbia", 
        "link": "http://cs.ubc.ca", 
        "start": "Sept. 2019", 
        "end": "May 2023 (Expected)", 
        "degree": "Bachelor of Science", 
        "major": "Computer Science & Statistics", 
        "minor": "Economics",
        "relevant_coursework": [
            "Systemic Program Design", 
            "Models of Computation", 
            "Software Construction (Object-Orientated Design)", 
            "Data Structures & Algorithms", 
            "Computer Systems", 
            "Algorithm Design & Analysis", 
            "Data Science", 
            "Multivariable Calculus",
            "Applied Economics"
        ]
    },
    "experiences": [
        {
            "type": "Work Experience", 
            "company": "University of British Columbia", 
            "logo": "ubc.png",
            "link": "http://ubc.ca",
            "title": "Undergraduate Teaching Assistant", 
            "start": "Sept. 2021", 
            "end": "", 
            "location": "Vancouver, BC, Canada",
            "bullets": [
                "Taught concepts such as data wrangling, classification, regression, clustering, and statistical inference using R",
                "Held weekly office hours, led tutorials, and graded assignments and exams for 360 students"
            ]
        }, 
        {
            "type": "Additional Experience", 
            "company": "UBC Systopia Lab", 
            "logo": "systopia.png",
            "link": "http://systopia.cs.ubc.ca/",
            "title": "Software Developer & Research Assistant", 
            "start": "Sept. 2021", 
            "end": "", 
            "location": "Vancouver, BC, Canada",
            "bullets": [
                "Research conducted with a Ph.D. candidate and 3 undergraduate students to help with doctoral dissertation",
                "Developed features for web app that leverages NLP to help perform qualitative analysis on 600k+ documents, using React.js and Python alongside a Celery and RabbitMQ distributed task queue"
            ]
        }, 
        {
            "type": "Work Experience", 
            "company": "MealMe", 
            "logo": "mealme.png",
            "link": "http://mealme.ai/",
            "title": "Software Engineering Intern", 
            "start": "May. 2021", 
            "end": "Jun. 2021", 
            "location": "San Francisco, SF, USA",
            "bullets": [
                "Saved $55,000+ annually by proposing and building a new alert system for server crashes and bookkeeping",
                "Scraped network traffic on 10+ food delivery services using Python to give users real-time order tracking",
                "Integrated 3 restaurant and grocery delivery service APIs to add free and fast delivery sections to the MealMe app",
                "Developed Flask microservices with a Firebase database for in-app chat, internal tools, dashboards, and call, SMS, and email automation"
            ]
        },  
        {
            "type": "Additional Experience", 
            "company": "UBC Open Robotics", 
            "title": "Software Developer", 
            "logo": "open_robotics.png",
            "link": "http://www.ubcopenrobotics.ca",
            "start": "Mar. 2021", 
            "end": "", 
            "location": "Vancouver, BC, Canada",
            "bullets": [
                "Created a C++ library to convert MIDI music files into instructions for a piano-playing robot",
                "Achieved 94% code coverage through Google Test unit tests and added GitHub Actions for CI"
            ]
        },    
        {
            "type": "Additional Experience", 
            "company": "FantasyBot", 
            "title": "Founding Engineer", 
            "logo": "fantasybot.jpeg",
            "link": "https://www.justaskfelix.com",
            "start": "Apr. 2020", 
            "end": "May 2021", 
            "location": "Remote",
            "bullets": [
                "Led development of an SMS-based chat-bot, obtaining 250+ users within 4 months of release",
                "Built a Node.js API to handle user registrations, interface MongoDB documents, and integrate Twilio services"
            ]
        },   
        {
            "type": "Work Experience", 
            "company": "iStall", 
            "title": "Software Engineer Intern", 
            "logo": "istall.png",
            "link": "http://istall.ca/",
            "start": "Mar. 2020", 
            "end": "Apr. 2021", 
            "location": "Edmonton, AB, Canada",
            "bullets": [
                "Developed a voice response system and an automated SMS system with PHP, reducing related costs by 80%",
                "Created a full-stack administration interface using PHP and MySQL for account verification",
                "Gathered client requirements and wrote PostgreSQL queries in creation of data reports and dashboards"
            ]
        },   
        {
            "type": "Work Experience", 
            "company": "The Roving ChessNuts", 
            "title": "Software Engineer Intern", 
            "link": "http://rovingchessnuts.com/",
            "logo": "roving_chessnuts.png",
            "start": "Mar. 2020", 
            "end": "Apr. 2021", 
            "location": "Edmonton, AB, Canada",
            "bullets": [
                "Developed a voice response system and an automated SMS system with PHP, reducing related costs by 80%",
                "Created a full-stack administration interface using PHP and MySQL for account verification",
                "Gathered client requirements and wrote PostgreSQL queries in creation of data reports and dashboards"
            ]
        }
         
    ], 
    "projects": [
        {
            "name": "Name & Shame", 
            "github_url": "https://github.com/PrayusShrestha/name-and-shame", 
            "description": "Developed a dockerized web-application in Node.js with a MongoDB database, and React.js in the frontend that allows users to search and post on what companies have unethical practices", 
            "start": "Sept. 2021", 
            "end": "Sept. 2021", 
            "tech_stack": ["Node.js", "React.js", "MongoDB", "Docker"]
        },
        {
            "name": "Coin Counter", 
            "github_url": "https://github.com/PrayusShrestha/CoinCounter", 
            "description": "Utilized the OpenCV library to create a Java application where users upload an image of coins and are returned the total value and breakdown of the coins", 
            "start": "Jan. 2021", 
            "end": "Jan. 2021", 
            "tech_stack": ["Java", "JavaFX", "OpenCV"]
        }, 
        {
            "name": "NBA All-Star Classifier", 
            "github_url": "https://github.com/PrayusShrestha/DSCI100", 
            "description": "Created an R classification model using the KNN classification algorithm to predict All-Stars based on player statistics", 
            "start": "Oct. 2020", 
            "end": "Dec. 2020", 
            "tech_stack": ["R", "Tidymodels"]
        }, 
        
    ]
};

export default json;