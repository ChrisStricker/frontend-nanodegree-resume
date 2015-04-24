/*
var skills = ["programming", "tai chi"];
var bio = {
		"name" : HTMLheaderName.replace("%data%", "Chris Stricker"),
		"role" : HTMLheaderRole.replace("%data%", "Web Developer"),
		"contacts" : {
			"home" : HTMLcontactGeneric.replace("%contact%", "home").replace("%data%", "618-555-5555"),
			"mobile" : HTMLmobile.replace("%data%", "618-555-5555"),
			"email" : HTMLemail.replace("%data%", "skaven13@sbcglobal.net"),
			"twitter" : HTMLtwitter.replace("%data%", "@Skaven13"),
			"github" : HTMLgithub.replace("%data%", "https://github.com/ChrisStricker"),
			"location" : HTMLlocation.replace("%data%", "Swansea, Illinois")
		},
		"pictureUrl" : HTMLbioPic.replace("%data%", "https://avatars2.githubusercontent.com/u/11803019?v=3&s=460"),
		"welcomeMsg" : "Our chief weapon is surprise!",
		"skills" : skills
	};

$("#header").prepend(bio.role).prepend(bio.name).prepend(bio.pictureUrl);
$("#header").append(bio.welcomeMsg);
$('#topContacts').append(bio.contacts.home).append(bio.contacts.mobile).append(bio.contacts.email).append(bio.contacts.twitter).append(bio.contacts.github).append(bio.contacts.location);
$("#main").append(skills);
*/
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
		"skills" : ["programming", "tai chi"] 
	};

var education = { 
		"schools" : [{
			"name" : "Southern Illinois University",
			"location" : "Edwardsville, IL",
			"degreee" : "Bachelors",
			"majors" : ["Computer Science"],
			"minors" : ["Math", "Philosophy" ],
			"dates" : 1999
		} 
		
		 ],
		"online" : [{
			"course" : "Front End Web Developer",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : ""
		}]

	};

var work = {
		"jobs" : [{
			"employer" : "",
			"title" : "",
			"dates" : "",
			"description" : ""
		}
		]
	};

var project = { 
		"projects": [{
			"title": "",
			"dates": "",
			"description": "",
			"images": [ ],
		}
		]
};