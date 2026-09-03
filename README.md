# Malicious URL Checker

## Project Description

Malicious URL Checker is a simple web-based security tool built with HTML, CSS, and JavaScript. It checks a user-entered URL against a hardcoded list of known malicious domains and displays whether the domain is classified as malicious or not found on the blocklist.

The project demonstrates frontend development, DOM manipulation, JavaScript arrays, conditional logic, and client-side URL processing.

## Features

* URL input field
* Check URL button
* Hardcoded malicious-domain list
* URL/domain extraction
* Malicious URL detection
* Safe URL result
* Invalid input handling
* Client-side processing

## Setup / Installation

No installation or external dependencies are required.

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a modern web browser.

## How to Run / Use

1. Open `index.html`.
2. Enter a URL into the input field.
3. Click **Check URL**.
4. The application checks the domain against the hardcoded malicious-domain list.
5. The page displays:

   * `⚠ Malicious` if the domain is found in the list.
   * `✅ Safe` if the domain is not found in the list.

## Example

### Malicious URL

```text
malware.com
```

Result:

```text
⚠ Malicious
```

### Safe / Not Blocklisted URL

```text
google.com
```

Result:

```text
✅ Safe
```

## Dependencies

None.

This project uses pure HTML, CSS, and JavaScript and does not require external libraries or packages.

## Project Structure

```text
Malicious-URL-Checker/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── screenshot.png
```

## Limitations

This project uses a small hardcoded blocklist for demonstration purposes. A `Safe` result only means that the domain was not found in the local malicious-domain list. It does not guarantee that the URL is actually safe.

A production implementation could integrate a threat intelligence or URL reputation API for real-time analysis.
