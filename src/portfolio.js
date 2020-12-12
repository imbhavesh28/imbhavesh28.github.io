
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Bhavesh Mali",
  title: "Hola!, I'm Bhavesh",
  subTitle: emoji("A Full Stack Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: require("./Resume.pdf")
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/imbhavesh28",
  linkedin: "https://www.linkedin.com/in/imbhavesh28/",
  mail: "hello@bhaveshmali.me",
  gitlab: "https://gitlab.com/imbhavesh28",
  facebook: "https://www.facebook.com/imbhavesh28",
  medium: "https://medium.com/@imbhavesh28",
  stackoverflow: "https://stackoverflow.com/users/9283785/bhavesh-mali",
  instagram: "https://www.instagram.com/imbhavesh28/",
  twitter: "https://twitter.com/imbhavesh28/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I Do?",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK!",
  skills: [
    emoji("⚡ I am a Full Stack Web Developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do. I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn all that I can about development."),
    emoji("⚡ I am always keen to get involved at all stages of a project or application lifecycle."),emoji("⚡ Integration of third party services such as Firebase/AWS/Digital Ocean.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Lovely Professional University",
      logo: require("./assets/images/LPU.png"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "August 2017 - May 2022",
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
       // "mlsa",
      //"dsclead"
      //]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "95%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Structures & Algorithm",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DSC - LPU Lead",
      company: "Google Developers",
      companylogo: require("./assets/images/dsc.png"),
      date: "Aug 2020 – Present",
      desc: "r.",
      descBullets: [
        "Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome."
      ]
    },
    {
      role: "Microsoft Learn Student Ambassador - Beta",
      company: "Microsoft",
      companylogo: require("./assets/images/mlsa.png"),
      date: "Aug 2020 – Present",
      desc: "The Microsoft Learn Student Ambassadors is a worldwide recognizable program to sponsor students majoring in disciplines related to technology. The MSP program enhances students' employability by offering training in skills not usually taught in academia, including knowledge of Microsoft technologies."
    },
    {
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      companylogo: require("./assets/images/gssoc.png"),
      date: "Feb 2020 – Jun 2020",
      desc: "Girlscript Summer Of Code is a 3-month long open source project under Girlscript India. In this Summer Of Code, all the registered participants would get an exquisite opportunity to interact with the mentors and the Organizing Team from 18th February 2020 to 29th February 2020."
    },
    {
      role: "Community Manager",
      company: "TechGig",
      companylogo: require("./assets/images/techgig.jpeg"),
      date: "Nov 2020 – Present",
      desc: "Techgig is India's Largest online Tech Community, where you can learn, update your skills, compete with fellow techies and get your dream job."
    },
    {
      role: "Alphaa AI Fellowship",
      company: "Alphaa AI",
      companylogo: require("./assets/images/alphaai.jpeg"),
      date: "Nov 2020 – Present",
      desc: "Alphaa is world's first and only NLP driven analytics platform · Talk to any BI Tools · Talk to any Enterprise Apps · Database Warehouse · Cloud Package."
    },
    {
      role: "MLCC Study Jams Facilitator",
      company: "Google India",
      companylogo: require("./assets/images/Google.png"),
      date: "Juns 2018 – Jun 2019",
      desc: "MLCC is Google’s flagship machine learning course, initially created for Google engineers. This course was taken up by more than 18,000 Googlers, and was recently made publicly available.  MLCC provides exercises, interactive visualizations, and instructional videos that anyone can use to learn and practice ML concepts. "
    },
    {
      role: "Campus Ambassador",
      company: "HackerEarth",
      companylogo: require("./assets/images/hackerearth.png"),
      date: "Sep 2019 – Oct 2019",
      desc: "The HackerEarth Campus Ambassador Program is a platform for students who are passionate about programming to start and run an active programming club in their college."
    },
    {
      role: "Grand Finalist - 2019",
      company: "Smart India Hackathon",
      companylogo: require("./assets/images/SIH.jpg"),
      date: "Jan 2019 – Mar 2020",
      desc: "Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving. "
    },
    {
      role: "Mentor | Web Development",
      company: "Angular Girls",
      companylogo: require("./assets/images/Angular.png"),
      date: "Jan 2019 – Mar 2020",
      desc: "We provide free Angular workshops for women. Check our website for upcoming workshops - physical and online!"
    },
    {
      role: "Linkedin (Profile building)& java Mentor",
      company: "GirlScript Foundation",
      companylogo: require("./assets/images/girlscript.png"),
      date: "Jan 2019 – Mar 2020",
      desc: "GirlScript is the fastest growing tech-community in India. It is a non-profit project brought to you by GirlScript Foundation to help beginners in technology."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "imbhavesh28", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Smart India Hackathon - 2019",
      subtitle: "🏆 Grand Finalist of Smart India Hackathon 2019 - Software Edition. My team Cyber Punkgot selected for World's biggest software and hardware competition, 'Smart India Hackathon 2019'. Out of 1 Lakh+ technical students, 3000+ technical institutions, 200+ organizations from across India, we made their way to the Grand Finale, which held in Karnataka.",
      image: require("./assets/images/SIH.jpg"),
      footerLink: [
        { name: "Certification", url: require("./assets/images/Certificates/SIH-2019.jpg")},
        { name: "Award Letter", url: require("./assets/images/Certificates/SIH-2019.jpg")},
      ]
    },
    {
      title: "30 Days of Google Cloud Facilitator",
      subtitle: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in cloud and get hands-on practice on Google Cloud Platform - the tool that powers apps like Google Search, Gmail and YouTube.",
      image: require("./assets/images/Gcloud.png"),
      footerLink: [
        { name: "Certification", url: require("./assets/images/Certificates/GCloud.pdf")},
        { name: "Award Letter", url: require("./assets/images/Certificates/GCloud.pdf")}
      ]
    },

    {
      title: "Microsoft Learn Student Ambassador - Beta",
      subtitle: "The Microsoft Learn Student Ambassadors is a worldwide recognizable program to sponsor students majoring in disciplines related to technology. The MSP program enhances students' employability by offering training in skills not usually taught in academia, including knowledge of Microsoft technologies.",
      image: require("./assets/images/mlsa.png"),
      footerLink: [
        { name: "Certification", url: require("./assets/images/Certificates/MLSA.png")},
        { name: "Award Letter", url: require("./assets/images/Certificates/MLSA.png")}
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://link.medium.com/OLGtspBXPbb ",
      title: "Which mathematics topics should I learn to improve my algorithms skills and get started with competitive programming?",
      description: "Here is the basic math you need to get started with competitive programming :"
    }
  ]
};

const speechSection = {

  title: emoji("TALKS"),
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  speechCards: [
    {
      title: "Q&A Session On 30 Days of Google Cloud program",
      subtitle: "India",
      image: require("./assets/images/talks/Q-A.jpg"),
      footerLink: [
        { name: "Slides", url: require("./assets/images/talks/Q-A.jpg")},
        { name: "Event", url: require("./assets/images/talks/Q-A.jpg")}
      ]
    },
    {
      title: "Introduction to Google Cloud Platform IEEE Govt. Engineering College, Ajmer",
      subtitle: "India",
      image: require("./assets/images/talks/ieee.jpg"),
      footerLink: [
        { name: "Slides", url: require("./assets/images/talks/ieee.jpg")},
        { name: "Event", url: require("./assets/images/talks/ieee.jpg")}
      ]
    },
    {
      title: "Education Outreach Batch 2nd/Java Programming Mentor at GirlScript Foundation",
      subtitle: "India",
      image: require("./assets/images/talks/java.jpg"),
      footerLink: [
        { name: "Slides", url: require("./assets/images/talks/java.jpg")},
        { name: "Event", url: require("./assets/images/talks/java.jpg")}
      ]
    },
    {
      title: "Education Outreach Batch - 2nd/Online Profile Building Mentor at GirlScript Foundation",
      subtitle: "India",
      image: require("./assets/images/talks/LinkedIn.jpg"),
      footerLink: [
        { name: "Slides", url: require("./assets/images/talks/LinkedIn.jpg")},
        { name: "Event", url: require("./assets/images/talks/LinkedIn.jpg")}
      ]
    },
    {
      title: "Introduction to Google Cloud Platform (GCP) at Scaler Academy, Bengaluru",
      subtitle: "India",
      image: require("./assets/images/talks/scaler.jpg"),
      footerLink: [
        { name: "Slides", url: require("./assets/images/talks/scaler.jpg")},
        { name: "Event", url: require("./assets/images/talks/scaler.jpg")}
      ]
    },
  ]
};

//Social

const socialSection = {

  title: emoji("Photos"),
  subtitle: "I LOVE TO SHARE MY PHOTOS 😅.",

  socialCards: [
    {
      image: require("./assets/images/social/lead.jpg"),
    },
    {
      image: require("./assets/images/social/team.jpg"),
    },
    {
      image: require("./assets/images/social/gcp.jpg"),
    },
    {
      image: require("./assets/images/social/ng.jpg"),
    },
    {
      image: require("./assets/images/social/sih-gf.jpg"),
    },
    {
      image: require("./assets/images/social/sih_team.jpg"),
    },
    {
      image: require("./assets/images/social/sih-team.jpg"),
    },
    {
      image: require("./assets/images/social/bm-alexa.jpg"),
    },
    {
      image: require("./assets/images/social/iitb.jpg"),
    },
    {
      image: require("./assets/images/social/iitr.jpg"),
    },
    {
      image: require("./assets/images/social/sih_.jpg"),
    },
    {
      image: require("./assets/images/social/ms.jpg"),
    },
    {
      image: require("./assets/images/social/sih_team-.jpg"),
    },
    {
      image: require("./assets/images/social/Adobe.jpg"),
    },
    {
      image: require("./assets/images/social/google.jpg"),
    },
    {
      image: require("./assets/images/social/gcloud.jpg"),
    },
    {
      image: require("./assets/images/social/gbg.jpg"),
    },
    {
      image: require("./assets/images/social/ms-g.jpg"),
    },
    {
      image: require("./assets/images/social/msg.jpg"),
    },
    {
      image: require("./assets/images/social/ms_edu.jpg"),
    },
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Q&A Session On 30 Days of Google Cloud program",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-78148 84914",
  email_address: "malibhavesh1998@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "imbhavesh28" //Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, achievementSection, blogSection, speechSection, socialSection, talkSection, contactInfo , twitterDetails};
