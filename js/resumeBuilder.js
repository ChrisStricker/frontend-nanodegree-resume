var bio = {
		"name" : "Chris Stricker",
		"role" : "Web Developer",
		"contacts" : {
			"home" : "618-555-5555",
			"mobile" : "618-555-5555",
			"email" : "skaven13@sbcglobal.net",
			"twitter" : "@Skaven13",
			"github" : "https://github.com/ChrisStricker",
			"location" : "Swansea, Illinois"
		},
		"pictureUrl" : "https://avatars2.githubusercontent.com/u/11803019?v=3&s=460",
		"welcomeMsg" : "Our chief weapon is surprise!",
		"skills" : ["Java", "Perl", "HTML", "Tai Chi"],
		"display" : function() {
			$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role))
				.prepend(HTMLheaderName.replace("%data%",bio.name))
				.append(HTMLbioPic.replace("%data%",bio.pictureUrl));
			$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
			$("#topContacts").append(HTMLcontactGeneric.replace("%contact%", "home").replace("%data%",bio.contacts.home))
				.append(HTMLmobile.replace("%data%",bio.contacts.mobile))
				.append(HTMLemail.replace("%data%",bio.contacts.email))
				.append(HTMLtwitter.replace("%data%",bio.contacts.twitter))
				.append(HTMLgithub.replace("%data%",bio.contacts.github))
				.append(HTMLlocation.replace("%data%",bio.contacts.location));

			if (bio.skills.length > 0 ) {
				var arrayLength = bio.skills.length;
				$("#header").append(HTMLskillsStart);
				
				for (i = 0; i < arrayLength; i++) {
					$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
				}
			}			
		}
	};

var education = { 
		"schools" : [{
			"name" : "Southern Illinois University",
			"location" : "Edwardsville, IL",
			"degree" : "Bachelors",
			"majors" : ["Computer Science"],
			"minors" : ["Math", "Philosophy" ],
			"dates" : 1999
		} 
		
		 ],
		"online" : [{
			"course" : "Front End Web Developer",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "udacity.com"
		}],
		
		"display" : function() {
			for (var i = 0; i < education.schools.length; i++) {
				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(HTMLschoolName.replace("%data%", education.schools[i].name))
						.append(HTMLschoolDegree.replace("%data%", education.schools[i].degree))
						.append(HTMLschoolDates.replace("%data%", education.schools[i].dates))
						.append(HTMLschoolLocation.replace("%data%", education.schools[i].location))
						.append(HTMLschoolMajor.replace("%data%", education.schools[i].majors.join(", ")));
			}
			
			$('#education').append(HTMLonlineClasses);
			for (var i = 0; i < education.online.length; i++) {
				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(HTMLonlineTitle.replace("%data%", education.online[i].course))
						.append(HTMLonlineSchool.replace("%data%", education.online[i].school))
						.append(HTMLonlineDates.replace("%data%", education.online[i].dates))
						.append(HTMLonlineURL.replace("%data%", education.online[i].url));
			}			
			
		}

	};

var work = {
		"jobs" : [{
			"employer" : "AT&T",
			"title" : "Professional - Application Developer",
			"dates" : "May 2014 to Current Date",
			"location" : "Earth City, Missouri",
			"description" : ""
		},
		{
			"employer" : "AT&T",
			"title" : "Senior IT Analyst",
			"dates" : "January 2009 to May 2014",
			"location" : "Earth City, Missouri",
			"description" : ""
		},
		{
			"employer" : "AT&T",
			"title" : "Network Center Technician",
			"dates" : "June 2000 to December 2008",
			"location" : "Earth City, Missouri",
			"description" : ""
		}
		],
		"display" : function() {
			for (job in work.jobs) {
				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
					HTMLworkTitle.replace("%data%", work.jobs[job].title));
				$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
				$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
				$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));	
			}
		}
	};



var project = { 
		"projects": [{
			"title": "Portfolio",
			"dates": "2015",
			"description": "Portfolio website that provides links to the projects I am building in this course.",
			"images": [ ],
		},
		{
			"title": "Resume",
			"dates": "2015",
			"description": "Resume website that provides information on who I am and what I have done.",
			"images": [ ],
		}
		],
		"display" : function() {
			var arrayLength = project.projects.length;
			for (var i = 0; i < arrayLength; i++) {
				$('#projects').append(HTMLprojectStart);
				$('.project-entry:last').append(HTMLprojectTitle.replace("%data%", project.projects[i].title))
					.append(HTMLprojectDates.replace("%data%", project.projects[i].dates))
					.append(HTMLprojectDescription.replace("%data%", project.projects[i].description));
				
				var imgArrayLength = project.projects[i].images.length;
				for (var j = 0; j < imgArrayLength; j++) {
					$('.project-entry:last').append(HTMLprojectImage.replace("%data%", project.projects[i].images[j]));
				}
			}
		}
};

function inName(name) {
	var name = name.trim().split(" ");
	return name[0] + " " + name[1].toUpperCase();
}

function locationizer() {
    var location = [];
    for (var i = 0; i < work.jobs.length; i++) {
        location.push(work.jobs[i].location);
    }
    return location;
}

	$("#main").append(internationalizeButton);

	bio.display();
	education.display();
	work.display();
	project.display();

	$("#mapDiv").append(googleMap);
	initializeMap();

