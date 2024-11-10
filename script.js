document.addEventListener("DOMContentLoaded", function () {
    var toggleSkillsButton = document.getElementById('toggleSkills');
    var skillsSection = document.getElementById('skills');
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById('resumeForm');
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        generateResume();
    });
});
function generateResume() {
    var _a;
    var profileImageInput = document.getElementById('profileImage');
    var profileImage = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var name = document.getElementById('name').value;
    var profession = document.getElementById('profession').value;
    var overview = document.getElementById('overview').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var contact = document.getElementById('contact').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var projects = document.getElementById('projects').value;
    var certifications = document.getElementById('certifications').value;
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        var resumeTemplate = "\n            <html>\n            <head>\n                <style>\n                    body {\n                        font-family: Arial, sans-serif;\n                        margin: 20px;\n                    }\n                    .resume {\n                        width: 80%;\n                        margin: 0 auto;\n                        border: 2px solid #333;\n                        padding: 20px;\n                        border-radius: 10px;\n                    }\n                    h1, h2 {\n                        color: #FF6A00;\n                    }\n                    img {\n                        width: 150px;\n                        height: 150px;\n                        border-radius: 50%;\n                        display: block;\n                        margin: 0 auto;\n                    }\n                    .section {\n                        margin-bottom: 20px;\n                    }\n                    [contenteditable=\"true\"] {\n                        border: 1px dashed #ccc;\n                        padding: 5px;\n                    }\n\n                    /* Styles for printing or download */\n                    @media print {\n                        [contenteditable=\"true\"] {\n                            border: none; /* Remove dashed border */\n                            outline: none; /* Remove outline from editable areas */\n                        }\n                        .download-btn {\n                            display: none; /* Hide download button on print */\n                        }\n                    }\n\n                    .download-btn {\n                        display: block;\n                        width: 150px;\n                        padding: 10px;\n                        margin: 20px auto;\n                        text-align: center;\n                        background-color: #FF6A00;\n                        color: #fff;\n                        border: none;\n                        border-radius: 5px;\n                        cursor: pointer;\n                    }\n\n                    .download-btn:hover {\n                        background-color: #FF4500;\n                    }\n                </style>\n            </head>\n            <body>\n                <div class=\"resume\">\n                    <section class=\"section\" contenteditable=\"true\">\n                        <img src=\"".concat((_a = e.target) === null || _a === void 0 ? void 0 : _a.result, "\" alt=\"Profile Picture\" />\n                        <h1>").concat(name, "</h1>\n                        <h2>").concat(profession, "</h2>\n                    </section>\n                    <section class=\"section\" contenteditable=\"true\">\n                        <h2>Career Overview</h2>\n                        <p>").concat(overview, "</p>\n                    </section>\n                    <section class=\"section\" contenteditable=\"true\">\n                        <h2>Education</h2>\n                        <p>").concat(education, "</p>\n                    </section>\n                    <section class=\"section\" contenteditable=\"true\">\n                        <h2>Experience</h2>\n                        <p>").concat(experience, "</p>\n                    </section>\n                    <section class=\"section\" contenteditable=\"true\">\n                        <h2>Skills</h2>\n                        <p>").concat(skills, "</p>\n                    </section>\n                    <section class=\"section\" contenteditable=\"true\">\n                        <h2>Contact Info</h2>\n                        <p>").concat(contact, "</p>\n                        <p>LinkedIn: <a href=\"").concat(linkedin, "\">").concat(linkedin, "</a></p>\n                        <p>GitHub: <a href=\"").concat(github, "\">").concat(github, "</a></p>\n                    </section>\n                    <section class=\"section\" contenteditable=\"true\">\n                        <h2>Projects</h2>\n                        <p>").concat(projects, "</p>\n                    </section>\n                    <section class=\"section\" contenteditable=\"true\">\n                        <h2>Certifications</h2>\n                        <p>").concat(certifications, "</p>\n                    </section>\n                </div>\n                <button class=\"download-btn\" onclick=\"window.print()\">Download Resume</button>\n            </body>\n            </html>\n        ");
        var newWindow = window.open();
        newWindow === null || newWindow === void 0 ? void 0 : newWindow.document.write(resumeTemplate);
        newWindow === null || newWindow === void 0 ? void 0 : newWindow.document.close();
    };
    if (profileImage) {
        reader.readAsDataURL(profileImage);
    }
}
