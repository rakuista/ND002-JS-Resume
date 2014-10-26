var work = {
    "jobs" : [
        {
            "employer" : "Intuit",
            "title" : "Communications Manager",
            "location" : "Mountain View, CA",
            "dates" : "2013-Present",
            "description" : "Internal product marketing for platform APIs and services."
        },
        {
            "employer" : "TheIcebreak",
            "title" : "Editorial Director, UI Designer",
            "location" : "Mountain View, CA",
            "dates" : "2011-2012",
            "description" : "Set editorial vision and brand voice for social networking site and mobile app for couples. Created articles and infographics to engage the site\'s 20,000+ users through social media and the blogosphere. Led the majority of front-end web development; coded several homepage redesigns and functional features. Designed UI and features targeted to engage the user community and increase site and app usage. Successfully introduced process and workflow improvements in a fast-paced development environment."
        },
        {
            "employer" : "YouTube",
            "title" : "Lead UX Writer, Technical Writer",
            "location" : "San Bruno, CA",
            "dates" : "2006-2011",
            "description" : "Wrote and/or edited UX copy for most new features on YouTube, with views scaling up to 3 billion daily. Led front-end localization efforts, launching 10 different language versions in under three months. Created the localization process and best practices wiki, used in scaling to over 40 languages in three years and directly contributing to a five-fold reduction in localization engineering hours. Managed all content creation for YouTube\'s initial Help Center, reducing customer support email volume from 15K to 1K daily. Pre-acquisition hire."
        },
        {
            "employer" : "PayPal",
            "title" : "Content Architect , Manager, Product Content",
            "location" : "San Jose, CA",
            "dates" : "2003-2006",
            "description" : "Directly managed content teams (up to seven total staff) across multiple product verticals, including International, PayPal China and Merchant Services. Quintupled the size of the content team (to 25 total staff) in under one year through aggressive hiring and training. Collectively saved over $120,000 in development costs by creating a working group to troubleshoot the content development process. Created the API manual for the patented Merchant-Initiated Online Payments feature; also wrote and edited instructional and user interface copy."
        }
    ]
}

var projects = {
    "projs" : [
        {
            "title" : "Refuge Restrooms",
            "dates" : "2013",
            "description" : "Hackathon project from Lesbians Who Code conference. I contributed a little Ruby code and designed PDFs of restroom signs.",
            "images" : ["images/rr-001.png","images/rr-002.png"]
        },
        {
            "title" : "imgix Documentation",
            "dates" : "2013",
            "description" : "Wrote documentation for signup process and v1 of API.",
            "images" : ["images/iix-001.png","images/iix-002.png"]
        }
    ]
}

var bio = {
    "name" : "Carol Gunby",
    "role" : "Web Developer",
    "welcomeMessage" : "Looking for a front end dev with lots of UX experience? Look no further.",
    "contacts" : {
        "mobile" : "408-464-7147",
        "email" : "rakuista@gmail.com",
        "github": "rakuista",
        "twitter" : "@rakuista",
        "location" : "San Jose, CA"
    },
    "skills" : ["HTML", "CSS", "JavaScript/jQuery", "Adobe Creative Suite", "Git/Perforce/SVN", "WordPress"],
    "image" : "images/headshot.jpg"
}

var education = {
    "schools" : [
        {
            "name" : "UC Berkeley Extension",
            "location" : "Berkeley, CA",
            "degree" : "Professional Certificate, Copyediting",
            "majors" : ["n/a"],
            "dates" : "2011-2012"
        },
        {
            "name" : "Pacifica Graduate Institute",
            "location" : "Carpinteria, CA",
            "degree" : "MA, magna cum laude)",
            "majors" : ["Engaged Humanities"],
            "dates" : "2008–2010"
        }
   ],
    "onlineCourses" : [
        {
            "onlineCourse" : [
                {
                    "title" : "UX Design Immersive",
                    "school" : "General Assembly",
                    "dates" : "2013",
                    "url" : "http://generalassemb.ly"
                }
            ]
        }
    ]
}

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);
    }
}
work.display();

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%",bio.image);
    var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").prepend(formattedName,formattedRole);
    $("#topContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);
    $("#header").append(formattedWelcome,formattedPic);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}
bio.display();





function locationizer(work) {
    var locations = [];
    for (var job in work.jobs) {
        locations.push(work.jobs[job].location);
    }
    return locations;
}

$("#main").append(internationalizeButton);
function inName(name) {
    var nameArray = name.split(" ");
    nameArray[1] = nameArray[1].toUpperCase();
    nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();

    finalName = nameArray.join(" ");

    // Don't delete this line!
    return finalName;

}

projects.display = function() {
    for (proj in projects.projs) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projs[proj].title);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projs[proj].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projs[proj].description);
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projs[proj].image);
        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription,formattedImage);
    }
}
projects.display();


$("#mapDiv").append(googleMap);
