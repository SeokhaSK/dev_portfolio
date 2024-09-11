/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Seokha Kang",
  title: "Hi all, I'm Seokha",
  subTitle: emoji(
    "I am a student studying computer science.\
    I am pursuing a Combined Bachelor+Master program at University of California, Riverside.\
    Throughout my studies, I have been focusing on software development, databases, and machine learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kangseokha",
  linkedin: "https://www.linkedin.com/in/seokha-kang/",
  gmail: "Seokha.S.K@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER EXPLORING VARIOUS TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop interactive Front-end / Back-end systems for web and mobile applications using Flutter, React, and ExpressJS"
    ),
    emoji(
      "⚡ Create and manage databases using MongoDB and PostgreSQL for efficient data handling"
    ),
    emoji(
      "⚡  Implement AI-powered features through OpenAI API for enhanced content generation"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "flutter",
      fontAwesomeClassname: "fa-brands fa-flutter"
    },
    {
      skillName: "dart",
      fontAwesomeClassname: "fa-brands fa-dart-lang"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fa-brands fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Californica, Riverside",
      logo: require("./assets/images/UCR_Logo_2.jpg"),
      subHeader: "Bachelor & Master of Science in Computer Science",
      duration: "September 2021 - Present",
      gpa: "GPA: (BS)3.62, (MS)3.66",
      desc: "Expected Graduation: December 2025"
    },
    {
      schoolName: "Santa Monica College",
      logo: require("./assets/images/Santa_Monica_College_Logo.png"),
      subHeader: "Computer Science and Mathematics Focus",
      duration: "February 2019 - June 2021",
      gpa: "GPA: 4.0/4.0",
      desc: "Completed courses in Math, data structures, C++ Programming, Java Programming"
      // descBullets: [
      //   "Mathematics: Calculus I, II, III, Linear Algebra",
      //   "Data Structures: Data Structures with C++, with Java",
      //   "Programming: C++ Programming, Advanced Java"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Researcher",
      company: "German Car Data Analysis",
      companylogo: require("./assets/images/dataAnalysisLogo.jpeg"),
      date: "July 2023 – Oct 2023",
      descBullets: [
        "Conducted comprehensive data cleaning and analysis on German ride-sharing data using Excel to identify trends in car preferences among Uber drivers in Germany.",
        "Cleaned car model names and matched names on other datasets(German Car Sales Data, Car Specifications Data ,and German Uber Drivers Dataset) using look-up tables.",
        "Appended vehicle specifications and sales figures for each Uber driver to enhance data comprehensiveness"
      ]
    },
    {
      role: "Participant",
      company: "Google Software Program Sprint",
      companylogo: require("./assets/images/google.png"),
      date: "May 2022 – Aug 2022",
      descBullets: [
        "Collaborated with a team of peers to design and implement a website leveraging various Google Cloud Platform APls, including App Engine and Datastore.",
        "Learned about client-server communication and the usage of libraries for web dev through weekly- walkthrough.",
        "Participated in a weekly code review for a portfolio website and a team project from a Google software engineer."
      ]
    },
    {
      role: "President",
      company: "Computer Science Club",
      companylogo: require("./assets/images/SMC_Logo.png"),
      date: "Nov 2019 – Jun 2021",
      descBullets: [
        "Founded a Korean-based algorithm studying club in Santa Monica College.",
        "Coordinated programming exercise assignments to individual cohorts and moderated for completion.",
        "Conferred with professors regarding optimal data structure/algorithm design"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "My Projects On and Off campus",
  projects: [
    {
      image: require("./assets/images/randomGenPic.jpg"),
      projectName: "Random Things Generator",
      projectDesc:
        "Developed an AI-based generator using OpenAI’s ChatGPT API to create diverse descriptions of random subjects for creative ideation. \n Built and integrated a CRUD system in MongoDB for efficient management of content generation, retrieval, and updates. Additionally, implemented a query system to communicate with the ChatGPT server, sending selected options for content generation.",
      footerLink: [
        {
          name: "Visit Github",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/arduinoTetris.jpg"),
      projectName: "Arduino Tetris",
      projectDesc:
        "Embedded System Hardware Build using Arduino Mega, LED Matrix, SNES controller, EEPROM, and LCD Screen. \n Developed and rendered a Tetris game on the LED Matrix, integrated SNES controller support for block manipulation, and utilized EEPROM to store the user’s last played stage, retaining progress after power-off",
      footerLink: [
        {
          name: "Visit Github",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/UCRList.png"),
      projectName: "UCR Craiglist",
      projectDesc:
        "Developed a website for UCR students to trade used goods, featuring a search bar to help users find items. Implemented email verification using NodeMailer to restrict access to @ucr.edu accounts and performed unit testing with Jest to ensure functionality of key features in User.ts.",
      footerLink: [
        {
          name: "Visit Github",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/campusEvents.png"),
      projectName: "Events over College Campuses",
      projectDesc:
        "Developed a website using Google Cloud Platform (GCP) that displays a map and directory of events/study groups happening on college campuses. Created a servlet to handle POST requests for event information and stored events in Datastore. Implemented a page to display individual events with an embedded map, utilizing the Google Maps library to show event locations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sps-project-362203.appspot.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Wanna say hi to me? My Inbox is open for all.",
  number: "+1 213-221-5177",
  email_address: "Seokha.S.K@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
