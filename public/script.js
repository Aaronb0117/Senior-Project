// Array of quiz objects
const quizzes = [
    {
        // quiz 1 questions
        questions: [
            {
                question: "What is cybersecurity primarily concerned with?",
                options: ["Creating digital content", "Enhancing system performance", "Protecting systems and networks from attacks", " Marketing digital products"],
                correctAnswer: "Protecting systems and networks from attacks"
            },
            {
                question: "Which of the following best describes the role of cybersecurity?",
                options: ["To entertain users on the internet", "To protect devices, users, and businesses from digital threats", "To provide social media services", "To sell security software"],
                correctAnswer: "To protect devices, users, and businesses from digital threats"
            },
            {
                question: " What is the purpose of Cisco's website in the text?",
                options: ["To sell Cisco products", "To provide a definition or further explanation of cybersecurity", "To download cybersecurity tools", "To sign up for cybersecurity courses"],
                correctAnswer: "To provide a definition or further explanation of cybersecurity"
            },
            {
                question: "Which term is used interchangeably with 'Internet Safety'?",
                options: ["Cyber Protection", "Online Safety", "Digital guarding", "Internet security"],
                correctAnswer: "Online Safety"
            },
            {
                question: "What is the main focus of Internet Safety?",
                options: ["Promoting new technologies", "Awareness of potential online threats", "Selling antivirus software", "Teaching programming skills"],
                correctAnswer: "Awareness of potential online threats "
            },
            {
                question: "How do cybersecurity and internet safety work together?",
                options: ["By competing with each other", "By covering different aspects of digital life", "By providing a dual-layer protection system", "By working independently"],
                correctAnswer: "By providing a dual-layer protection system"
            },
            {
                question: "What is emphasized about the importance of both cybersecurity and internet safety?",
                options: ["They guarantee absolute safety online", "They provide better overall protection when combined", "They are mandated by law", "They replace each other"],
                correctAnswer: "They provide better overall protection when combined"
            },
            {
                question: "What will the program teach?",
                options: ["How to program in multiple languages", "The history of the internet", "Types of digital attacks and protection methods", "How to create a website"],
                correctAnswer: "Types of digital attacks and protection methods"
            },
            {
                question: "Which component does cybersecurity particularly focus on?",
                options: ["The information inside of an organization", "External marketing strategies", "Graphic design", "Hardware manufacturing"],
                correctAnswer: "The information inside of an organization"
            },
            {
                question: "What is the primary benefit of learning about both cybersecurity and internet safety?",
                options: ["Increasing business sales", "Enhanced personal entertainment", "Improved protection against online threats", "Learning about new technologies"],
                correctAnswer: "Improved protection against online threats"
            }
        ]
    },
    {
        // quiz 2 questions
        questions: [
            {
                question: "What is the primary focus of this module?",
                options: ["Understanding digital devices", "Learning about bullying tactics", "Exploring cyberbullying and its prevention", "Discussing social media platforms"],
                correctAnswer: "Exploring cyberbullying and its prevention"
            },
            {
                question: "What is bullying characterized by?",
                options: ["Random actions with no intention", "Causing happiness and wellbeing", "Repeated actions causing distress", "Single occurrences of conflict"],
                correctAnswer: "Repeated actions causing distress"
            },
            {
                question: "Where can cyberbullying occur?",
                options: ["Only through emails", "Exclusively on social media", "On digital devices", "In physical environments"],
                correctAnswer: "On digital devices"
            },
            {
                question: "What is one example of cyberbullying tactics?",
                options: ["Sending supportive messages", "Posting compliments on social media", "Making threats", "Offering help to the victim"],
                correctAnswer: "Making threats"
            },
            {
                question: "How can someone protect themselves from cyberbullying?",
                options: ["By retaliating against the bully", "By blocking cyberbullying attempts", "By engaging in online arguments", "By encouraging cyberbullying behavior"],
                correctAnswer: "By blocking cyberbullying attempts"
            },
            {
                question: "What action is NOT suggested as a way to protect against cyberbullying?",
                options: ["Ignoring the cyberbullying attempts", "Blocking the person bullying", "Remaining off social media platforms", "Responding with insults"],
                correctAnswer: "Responding with insults"
            },
            {
                question: "Where can someone seek help if they are experiencing cyberbullying?",
                options: ["Crisis Text Line", "Social media platforms", "Email providers", "Online forums"],
                correctAnswer: "Crisis Text Line"
            },
            {
                question: "What assurance does the text provide to those seeking help for cyberbullying?",
                options: ["They will be exposed publicly", "They will remain anonymous", "They will receive financial compensation", "They will be banned from social media platforms"],
                correctAnswer: "They will remain anonymous"
            },
            {
                question: "What is the overall tone of the text regarding bullying in the program?",
                options: ["Encouraging participation in bullying", "Strict intolerance towards bullying", "Promotion of bullying behaviors", "Indifference towards bullying incidents"],
                correctAnswer: "Strict intolerance towards bullying"
            },
            {
                question: "What is the importance of understanding bullying?",
                options: ["To become a better bully", "To recognize the breakdown of cyberbullying", "To avoid digital devices", "To isolate oneself from society"],
                correctAnswer: "To recognize the breakdown of cyberbullying"
            }
        ]
    },
    {
        // quiz 3 questions
        questions: [
            {
                question: "What is the main topic for this module?",
                options: ["Cybersecurity measures", "Digital authentication methods", "Password Security", "Internet browsing safety"],
                correctAnswer: "Password security"
            },
            {
                question: "What is a password?",
                options: ["A string of numbers", "A line of characters for accessing user information", "A biometric identifier", "A form of encryption"],
                correctAnswer: "A line of characters for accessing user information"
            },
            {
                question: "What is emphasized about passwords in terms of security?",
                options: ["They should be easy to remember", "They should contain personal information", "They should be unique passwords", "They should be shared with others"],
                correctAnswer: "They should be unique passwords"
            },
            {
                question: "What is another term used for a password?",
                options: ["Access code", "Paraphrase/Passcode", "Authentication key", "Identification marker"],
                correctAnswer: "Paraphrase/Passcode"
            },
            {
                question: "What is one common practice for maintaining password security?",
                options: ["Keeping the same password indefinitely", "Using only lowercase letters", "Changing passwords regularly", "Sharing passwords with friends"],
                correctAnswer: "Changing passwords regularly"
            },
            {
                question: "What does the CIA stand for in the context of password security?",
                options: ["Central Information Access", "Confidentiality, Integrity, and Availability", "Cybersecurity Intelligence Agency", "Common Identification Authentication"],
                correctAnswer: "Confidentiality, Integrity, and Availability"
            },
            {
                question: "What is NOT suggested as a common way of ensuring password security?",
                options: ["Changing passwords regularly", "Using the same password for all accounts", "Using combinations of characters", "Safely storing passwords"],
                correctAnswer: "Using the same password for all accounts"
            },
            {
                question: "What does the text emphasize about the significance of password security?",
                options: ["They are irrelevant to Internet safety", "They are necessary for accessing government databases", "They contribute to a safer Internet environment", "They are only applicable to corporate networks"],
                correctAnswer: "They contribute to a safer Internet environment"
            },
            {
                question: "Where can someone learn more about password security?",
                options: ["PCMAG and Cisco", "CIA and FBI", "TechTarget and PCMAG", "Cisco and TechTarget"],
                correctAnswer: "PCMAG and Cisco"
            },
            {
                question: "What is the primary objective of password security?",
                options: ["To restrict access to unauthorized users", "To share sensitive information", "To enhance online entertainment", "To bypass authentication processes"],
                correctAnswer: "To restrict access to unauthorized users"
            }
        ]
    },
    {
        // quiz 4 questions
        questions: [
            {
                question: "What is the most common type of cyber attack?",
                options: ["Malware injection", "Denial of Service (DoS)", "Phishing", "Data breach"],
                correctAnswer: "Phishing"
            },
            {
                question: "How many spam emails does the phishing attack push daily?",
                options: ["1.2 billion", "2.6 billion", "3.4 billion", "4.8 billion"],
                correctAnswer: "3.4 billion"
            },
            {
                question: "What is phishing?",
                options: ["Legitimate data-gathering process", "Legal way of accessing sensitive information", "Illegal process of gaining sensitive information", "Secure communication protocol"],
                correctAnswer: "Illegal process of gaining sensitive information"
            },
            {
                question: "What does PII stand for?",
                options: ["Public Information Identifier", "Personally Intangible Information", "Personal Intelligence Indicator", "Personally Identifiable Information"],
                correctAnswer: "Personally Identifiable Information"
            },
            {
                question: "What is one-way phishing scams can occur?",
                options: ["Spearfishing", "Sword phishing", "Axe phishing", "Text phishing"],
                correctAnswer: "Text phishing"
            },
            {
                question: "Which of the following is NOT mentioned as a way to protect against phishing scams?",
                options: ["Using security software", "Setting automatic updates", "C", "Using multi-factor authentication"],
                correctAnswer: "Ignoring suspicious emails"
            },
            {
                question: "What is the purpose of multi-factor authentication?",
                options: ["To complicate the login process", "To reduce security measures", "To simplify the login process", "To add an extra layer of security"],
                correctAnswer: "To add an extra layer of security"
            },
            {
                question: "Which security software options are mentioned in the text?",
                options: ["McAfee and Norton", "Kaspersky and AVG", "Bitdefender and Avast", "Malwarebytes and ESET"],
                correctAnswer: "McAfee and Norton"
            },
            {
                question: "What is the primary objective of using security software?",
                options: ["To increase device speed", "To enhance user experience", "To protect against unauthorized access", "To monitor online activities"],
                correctAnswer: "To protect against unauthorized access"
            },
            {
                question: "Which phishing technique is based on the weaknesses in a company’s IT department?",
                options: ["Trap Phishing", "Email Phishing", "Spear Phishing", "Angler Phishing"],
                correctAnswer: "Trap Phishing"
            },
        ]
    },
    {
        // Quiz 5 questions
        questions: [
            {
                question: "What is the main focus of today's discussion?",
                options: ["Technology advancements, Social media and networking, Online gaming platforms, Cybersecurity threats"],
                correctAnswer: "Social media and networking"
            },
            {
                question: "What does social networking primarily focus on?",
                options: ["Business Creation, Connection formation and maintenance, Social media safety,Personal information sharing"],
                correctAnswer: "Connection formation and maintenance"
            },

            {
                question: "What distinguishes social media from social networking?",
                options: [" The number of users, The type of content shared,The purpose of the platform,The geographical location of users"],
                correctAnswer: "The purpose of the platform"
            },

            {
                question: "Where can someone find more information about the difference between social media and social networking?",
                options: ["RAINN,UAB,WaywardKind,Organization of Social Media Safety"],
                correctAnswer: "WaywardKind"
            },
           
            {
                question: "What is emphasized as crucial when posting updates on social media?",
                options: ["Expressing personal opinions,Following trending topics,Practicing social media safety,Increasing follower count"],
                correctAnswer: "Practicing social media safety"
            },
            {
                question: "What is one simple tip mentioned for practicing social media safety?",
                options: ["Sharing personal information openly,Using social media on public Wi-Fi, Making accounts private, Checking in frequently at locations"],
                correctAnswer: "Making accounts private"
            },
            {
                "question": "What is the significance of learning how to report, block, or filter media shown on social media?",
                "options": [ "To increase social media engagement", "To ensure accurate information sharing", "To prevent cyberbullying and harassment","To promote online anonymity"],
                "correctAnswer": "To prevent cyberbullying and harassment"
            },
            {
                "question": "What is the purpose of watching out for suspicious messages on social media?",
                "options": ["To identify potential cyber threats", "To increase online interactions", "To enhance user experience", "To boost social media presence"],
                "correctAnswer": "To identify potential cyber threats"
            },

            {
                "question": "What is the recommended action regarding clicking on posts on social media platforms?",
                "options": ["Clicking without hesitation", "Consulting with friends before clicking", "Looking before clicking", "Avoiding clicking altogether"],
                "correctAnswer": "Looking before clicking"
              },

            {
                "question": "What distinguishes social media from social networking, as discussed in the text?",
                "options": [
                  "The number of users",
                  "The type of content shared",
                  "The purpose of the platform",
                  "The geographical location of users"
                ],
                "correctAnswer": "The purpose of the platform"
            },          
        ]
    },
    {
        // Quiz 6 questions
        questions: [
            {
                "question": "What is malware commonly referred to as?",
                "options": ["Security software", "Malicious software", "Antivirus protection", "System optimization tool"],
                "correctAnswer": "Malicious software"
              },
              {
                "question": "What is the primary intent of malware?",
                "options": ["Enhancing computer performance", "Protecting data", "Causing harm", "Providing entertainment"],
                "correctAnswer": "Causing harm"
              },
              {
                "question": "What are some common purposes of using malware?",
                "options": ["Enhancing network speed", "Protecting computer systems", "Gaining knowledge and financial gain", "Improving data security"],
                "correctAnswer": "Gaining knowledge and financial gain"
              },
              {
                "question": "How many types of malware are mentioned?",
                "options": ["Three", "Five", "Seven", "Ten"],
                "correctAnswer": "Seven"
              },
              {
                "question": "Which type of malware is the focus of the module?",
                "options": ["Worms", "Viruses", "Adware", "Ransomware"],
                "correctAnswer": "Viruses"
              },
              {
                "question": "What is a computer virus?",
                "options": ["A type of malware that attaches itself to a program or file", "A harmless software application", "A computer repair tool", "An internet browser extension"],
                "correctAnswer": "A type of malware that attaches itself to a program or file"
              },
              {
                "question": "How does a computer virus spread?",
                "options": ["By infecting hardware components", "By making copies of itself", "By encrypting files", "By creating backups"],
                "correctAnswer": "By making copies of itself"
              },
              {
                "question": "What is a common way to protect against computer viruses?",
                "options": ["Using outdated antivirus software", "Avoiding regular virus scans", "Installing antivirus software from third-party vendors", "Ignoring Internet safety practices"],
                "correctAnswer": "Installing antivirus software from third-party vendors"
              },
              {
                "question": "What is one recommended action to protect against viruses?",
                "options": ["Manually deleting infected files", "Storing data only on physical drives", "Regularly backing up data", "Disabling antivirus software"],
                "correctAnswer": "Regularly backing up data"
              },
              {
                "question": "What cautionary advice is given regarding selecting antivirus software from third-party vendors?",
                "options": ["Trust any vendor for antivirus software", "Avoid researching third-party vendors", "Research third-party vendors thoroughly", "Install multiple antivirus software from different vendors"],
                "correctAnswer": "Research third-party vendors thoroughly"
              }
        ]
    },
    {
        // Quiz 7 questions
        questions: [
            {
              "question": "What is the primary function of a browser?",
              "options": ["Sending emails", "Playing games", "Finding and displaying content from the World Wide Web", "Editing documents"],
              "correctAnswer": "Finding and displaying content from the World Wide Web"
            },
            {
              "question": "What is the World Wide Web?",
              "options": ["A collection of computer hardware", "A network of physical servers", "A collection of different websites globally", "A software application"],
              "correctAnswer": "A collection of different websites globally"
            },
            {
              "question": "What is a web browser?",
              "options": ["A type of website", "A collection of servers", "A software or application used to search and find websites", "A type of computer hardware"],
              "correctAnswer": "A software or application used to search and find websites"
            },
            {
              "question": "Which of the following are examples of web browsers?",
              "options": ["Apple and Samsung", "Google, Microsoft Edge, and Mozilla Firefox", "Facebook and Twitter", "Lenovo and McAfee"],
              "correctAnswer": "Google, Microsoft Edge, and Mozilla Firefox"
            },
            {
              "question": "What is a safe browser?",
              "options": ["A browser with extra security measures to prevent unauthorized third-party activity", "A browser that allows access to restricted websites", "A browser that prioritizes speed over security", "A browser with built-in ad blockers"],
              "correctAnswer": "A browser with extra security measures to prevent unauthorized third-party activity"
            },
            {
              "question": "What is an example of third-party activity mentioned in the text?",
              "options": ["Sending emails", "Playing online games", "Storing cookies", "Writing documents"],
              "correctAnswer": "Storing cookies"
            },
            {
              "question": "What is the purpose of safe browsing mode?",
              "options": ["To provide access to restricted websites", "To improve browsing speed", "To enhance user experience", "To provide security from unsafe sites and applications"],
              "correctAnswer": "To provide security from unsafe sites and applications"
            },
            {
              "question": "What are some safe browsing habits recommended?",
              "options": ["Clicking on all ads", "Ignoring software updates", "Reporting cyber crimes", "Following random links"],
              "correctAnswer": "Reporting cyber crimes"
            },
            {
              "question": "What is the significance of keeping software up-to-date?",
              "options": ["It improves computer performance", "It prevents unauthorized access", "It reduces the need for antivirus software", "It allows access to restricted websites"],
              "correctAnswer": "It prevents unauthorized access"
            },
            {
              "question": "Where can someone find more information about safe browsing habits?",
              "options": ["Lenovo", "McAfee", "Wayne State University", "Google"],
              "correctAnswer": "Wayne State University"
            }
          ]
          
    },
    {
        // Quiz 8 questions
        questions: [
            {
                question: "What is the primary topic of this module?",
                options: ["Cyber hygiene", "Online gaming security", "Video game revenue", "Social engineering"],
                correctAnswer: "Online gaming security"
            },
            
             {
                question: "What is a video game?",
                options: ["An outdoor activity involving physical exertion", "An electronic game interacted with using an input device", "A traditional board game played with cards or dice", "A type of puzzle"],
                correctAnswer: "An electronic game interacted with using an input device"
            },
             {
                question: "What is suggested as critical to understanding due to the rise in video game popularity?",
                options: ["The history of video games", "The importance of physical exercise", "The risks associated with gaming", "The benefits of gaming"],
                correctAnswer: "The risks associated with gaming"
            },
             {
                question: "What are some possible technological risks?",
                options: ["Cyber hygiene and social engineering", "Malware, affected gamer servers, and insecure game coding", "Online safety practices and checking privacy settings", "Virtual mugging and identity theft"],
                correctAnswer: "Malware, affected gamer servers, and insecure game coding"
            },
             {
                question: "What does gaming security specifically focus on?",
                options: ["Protecting physical game consoles", "Protecting users while online gaming", "Monitoring gaming revenue", "Enhancing the gaming experience"],
                correctAnswer: "Protecting users while online gaming"
            },
             {
                question: "What are some recommended practices for online gaming security?",
                options: ["Choosing a safe username and practicing physical exercise", "Checking privacy settings and practicing Internet safety", "Playing games offline and avoiding cyber hygiene", "Ignoring social risks and technological risks"],
                correctAnswer: "Checking privacy settings and practicing Internet safety"
            },
             {
                question: "What is the significance of cyber hygiene with gaming security?",
                options: ["It enhances gaming revenue", "It prevents technological risks", "It improves social interactions", "It boosts physical fitness"],
                correctAnswer: "It prevents technological risks"
            },
             {
                question: "What is one potential social risk with online gaming?",
                options: ["Malware", "Social engineering", "Insecure game coding", "Affected gamer servers"],
                correctAnswer: "Social engineering"
            },
             {
                question: "Where can someone find more information about gaming security?",
                options: ["Collins", "Twinkl", "CISA", "PWC"],
                correctAnswer: "CISA"
            },
             {
                question: "What is the primary purpose of choosing a safe username?",
                options: ["To increase online visibility", "To enhance the gaming experience", "To protect personal identity", "To attract more followers"],
                correctAnswer: "To protect personal identity"
            },
            
            // Add more Quiz 8 questions here...
        ]
    },
    {
        // Quiz 9 questions
        questions: [
            {
                question: "What does Wi-Fi stand for?",
                options: ["Wireless Network", "Wireless Fidelity", "Wireless Internet", "Wireless Connection"],
                correctAnswer: "Wireless Fidelity"
            },
            
            {
                question: "What is the purpose of a Local Area Network (LAN)?",
                options: ["Connecting devices globally", "Connecting devices in a limited area", "Connecting devices wirelessly", "Connecting devices to the Internet"],
                correctAnswer: "Connecting devices in a limited area"
            },
            
            {
                question: "What technology does Wi-Fi use to connect devices to the Internet?",
                options: ["Bluetooth", "Ethernet", "Wireless networking", "Fiber optics"],
                correctAnswer: "Wireless networking"
            },
            
            {
                question: "Which standard must the Wi-Fi process follow?",
                options: ["IEEE 802.11", "IEEE 802.22", "IEEE 802.3", "IEEE 802.15"],
                correctAnswer: "IEEE 802.11"
            },
            
            {
                question: " What do wireless access points allow?",
                options: ["Connecting to a wireless network", "Connecting to a cellular network", "Connecting to a satellite network", "Connecting to a wired network"],
                correctAnswer: "Connecting to a wireless network"
            },

            {
                question: "What is the definition of Wi-Fi security?",
                options: ["", "B", "C", "D"],
                correctAnswer: "C"
            },

            {
                question: "What is question 9",
                options: ["A", "B", "C", "D"],
                correctAnswer: "C"
            },

            {
                question: "What is question 9",
                options: ["A", "B", "C", "D"],
                correctAnswer: "C"
            },

            {
                question: "What is question 9",
                options: ["A", "B", "C", "D"],
                correctAnswer: "C"
            },

            {
                question: "What is question 9",
                options: ["A", "B", "C", "D"],
                correctAnswer: "C"
            },
            // Add more Quiz 9 questions here...
        ]
    },
    {
        // Quiz 10 questions
        questions: [
            {
                question: "What is Cyber Hygiene?",
                options: ["Cleaning electronic devices with disinfectants", "The practice of maintaining system health and improving online security", "A method of preventing physical health issues", "A comparison between digital and personal hygiene"],
                correctAnswer: "The practice of maintaining system health and improving online security"
            },

            {
                question: "What are some common issues associated with poor cyber hygiene?",
                options: ["Data encryption and secure networks", "Data loss, security breaches, and out-of-date software", "Regular updates and software installations", "Cloud storage management and network firewalls"],
                correctAnswer: "Data loss, security breaches, and out-of-date software"
            },

            {
                question: "When does data loss occur?",
                options: ["When using outdated hardware", "When regularly backing up data", "When hard drives or online cloud storage are not being backed up", "When using secure passwords"],
                correctAnswer: "When hard drives or online cloud storage are not being backed up"
            },
            
            {
                question: "What occurs when a user ignores regular updates?",
                options: ["Improved device performance", "Enhanced security measures", "Out-of-date software and old security software", "Increased productivity"],
                correctAnswer: "Out-of-date software and old security software"
            },

            {
                question: "What is the purpose of creating a cyber hygiene checklist?",
                options: ["To document the device's IT resources", "To manage new software installations", "To enhance cybersecurity practices", "All of the above"],
                correctAnswer: "All of the above"
            },

            {
                question: "What are some tips included in the cyber hygiene checklist?",
                options: ["Using disinfectants on electronic devices", "Ignoring software updates", "Implementing a password manager and managing new installs", "Keeping hardware outdated"],
                correctAnswer: "Implementing a password manager and managing new installs"
            },

            {
                question: "Where can someone find more information about cyber hygiene strategies?", 
                options: ["Lenovo and HP", "DigitalGuardian, USA, and Splunk", "McDonald's and Starbucks", "Walmart and Target"],
                correctAnswer: "DigitalGuardian, USA, and Splunk"
            },

            {
                question: "What is the significance of using a network firewall in cyber hygiene?",
                options: ["It improves device performance", "It prevents unauthorized access to the network", "It enhances the visual appeal of the device", "It increases data storage capacity"],
                correctAnswer: "It prevents unauthorized access to the network"
            },

            {
                question: "What does the completion of the last in-depth explanation prompt the reader to do?", 
                options: ["Take a break", "Continue learning about cyber hygiene", "Take a quiz and a final assessment", "Seek more information from various sources"],
                correctAnswer: "Take a quiz and a final assessment"
            },

            {
                question: "What is the overall goal of cyber hygiene?",
                options: ["To increase data loss", "To enhance system health and improve online security", "To avoid software updates", "To ignore cybersecurity practices"],
                correctAnswer: "To enhance system health and improve online security"
            },
        ]
    },
    {
        // Final Assessment questions
        questions: [
            {
                question: "What is question Final Assesment",
                options: ["A", "B", "C", "D"],
                correctAnswer: "A"
            },
            // Add more Final Assessment questions here...
        ]
    },
];

// Shuffle function to randomize the order of options
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Function to generate the quiz based on quizIndex
function generateQuiz(quizIndex) {
    const quizContainer = document.getElementById("quiz-container");

    // Check if quizContainer exists
    if (quizContainer) {
        const selectedQuiz = quizzes[quizIndex];

        // Clear previous quiz questions
        quizContainer.innerHTML = '';

        selectedQuiz.questions.forEach((q, index) => {
            // Shuffle the order of options
            const shuffledOptions = shuffle([...q.options]);

            // Create a question div
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
            questionDiv.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                ${shuffledOptions.map(option => `<label><input type="radio" name="q${index}" value="${option}">${option}</label>`).join('')}
            `;

            // Append the question div to the quiz container
            quizContainer.appendChild(questionDiv);
        });

        // Set the data-quiz-index attribute
        quizContainer.dataset.quizIndex = quizIndex;
    } else {
        console.error("Quiz container not found");
    }
}


function gradeQuiz() {
    const resultContainer = document.getElementById("result");
    const userAnswers = [];
    
    // Determine the current quiz index dynamically
    const currentQuizIndex = document.getElementById("quiz-container").dataset.quizIndex;
  
    // Collect user's answers
    const currentQuiz = quizzes[currentQuizIndex];
    currentQuiz.questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        userAnswers.push(selectedOption ? selectedOption.value : null);
    });

    // Calculate the score
    const score = userAnswers.reduce((acc, answer, index) => {
        return answer === currentQuiz.questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    // Calculate the percentage
    const percentage = (score / currentQuiz.questions.length) * 100;

    // Display the score as a percentage
    resultContainer.textContent = `Your score: ${percentage.toFixed(2)}%`;

    // Send data to the server
    fetch('/saveQuiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            quizNumber: parseInt(currentQuizIndex) + 1, // Add 1 to match the index-based quiz numbering
            quizScore: percentage,
        }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// Array of button IDs to hide
const buttonsToHide = [
    "module2Btn", "module3Btn", "module4Btn","module5Btn", "module6Btn",
    "module7Btn", "module8Btn","module9Btn", "module10Btn", "finalAssessmentBtn", 
    "certBtn"
    ];

// Loop through the array and hide each button
buttonsToHide.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.style.display = "none";
    }
}); 

document.addEventListener("DOMContentLoaded", function() {
    // Fetch the quiz scores for the logged-in user from the database
    fetch('/quizScores', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(quizScores => {

        console.log('quizScores:', quizScores);

        // Get the reference to each module button
        const module2Btn = document.getElementById("module2Btn");
        const module3Btn = document.getElementById("module3Btn");
        const module4Btn = document.getElementById("module4Btn");
        const module5Btn = document.getElementById("module5Btn");
        const module6Btn = document.getElementById("module6Btn");
        const module7Btn = document.getElementById("module7Btn");
        const module8Btn = document.getElementById("module8Btn");
        const module9Btn = document.getElementById("module9Btn");
        const module10Btn = document.getElementById("module10Btn");
        const finalAssessmentBtn = document.getElementById("finalAssessmentBtn");
        const certBtn = document.getElementById("certBtn");

        // Check the quiz scores and show/hide buttons accordingly
        if (quizScores.quiz1 >= 80) {
            module2Btn.style.display = "inline-block"; // Show module 2 button
        }
        if (quizScores.quiz2 >= 80) {
            module3Btn.style.display = "inline-block"; // Show module 3 button
        }
        if (quizScores.quiz3 >= 80) {
            module4Btn.style.display = "inline-block"; // Show module 4 button
        }
        if (quizScores.quiz4 >= 80) {
            module5Btn.style.display = "inline-block"; // Show module 5 button
        }
        if (quizScores.quiz5 >= 80) {
            module6Btn.style.display = "inline-block"; // Show module 6 button
        }
        if (quizScores.quiz6 >= 80) {
            module7Btn.style.display = "inline-block"; // Show module 7 button
        }
        if (quizScores.quiz7 >= 80) {
            module8Btn.style.display = "inline-block"; // Show module 8 button
        }
        if (quizScores.quiz8 >= 80) {
            module9Btn.style.display = "inline-block"; // Show module 9 button
        }
        if (quizScores.quiz9 >= 80) {
            module10Btn.style.display = "inline-block"; // Show module 10 button
        }
        if (quizScores.quiz10 >= 80) {
            finalAssessmentBtn.style.display = "inline-block"; // Show module final assessment button
        }
        if (quizScores.quiz11 == 100) {
            certBtn.style.display = "inline-block"; // Show certification button
        }
    })
    .catch(error => {
        console.error('Error fetching quiz scores:', error);
    });
});
