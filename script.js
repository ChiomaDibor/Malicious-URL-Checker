const maliciousDomains = [
    "malware.com",
    "phishing.net",
    "badsite.org",
    "evil-login.com",
    "fakebank.xyz"
];


const urlInput = document.getElementById("urlInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");


checkButton.addEventListener("click", checkURL);


function checkURL() {

    const input = urlInput.value.trim();

    result.textContent = "";
    result.className = "";


    if (input === "") {

        result.textContent = "Please enter a URL.";
        result.className = "error";

        return;
    }


    let hostname;


    try {

        const formattedURL = input.startsWith("http")
            ? input
            : "https://" + input;

        hostname = new URL(formattedURL).hostname;

        hostname = hostname.replace(/^www\./, "");

    } catch (error) {

        result.textContent = "Invalid URL format.";
        result.className = "error";

        return;
    }


    if (maliciousDomains.includes(hostname)) {

        result.textContent = "⚠ Malicious";
        result.className = "malicious";

    } else {

        result.textContent = "✅ Safe";
        result.className = "safe";

    }
}