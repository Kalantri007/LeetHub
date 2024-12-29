# LeetHub Chrome Extension

This project is a Chrome extension called LeetHub. It enables users to sync their LeetCode problem submissions with a selected GitHub repository. The extension fetches submission data from LeetCode and creates or updates files in the user's GitHub repository, allowing them to track their coding progress and share their solutions.

## Table of Contents

- [How it Works](#how-it-works)
- [Running LeetHub Locally](#running-leetHub-locally)
- [Get Started](#get-started)
- [Usage](#usage)

## How it Works

LeetHub utilizes the LeetCode API to fetch your submission data and the GitHub API to create a new file or update an existing one in your selected repository.

## Running LeetHub Locally

To run LeetHub locally, follow these steps:

1. Clone the repository to your local machine.
2. Open Google Chrome and navigate to the `chrome://extensions/` page.
3. Toggle on Developer mode in the top right corner.
4. Run `yarn build` in your project directory
5. Click on the "Load unpacked" button and select the `build` folder.
6. The LeetHub extension should now appear in your list of installed extensions.

## Get Started

To configure LeetHub, follow these steps:

1. Click on the extension icon in your Chrome toolbar.
2. In the popup window, Give Access via Github.
3. Login Via LeetCode (Optional and might be automatically skipped if already logged in)
4. Select the repository you want to sync your submissions to.
5. Start solving some problems

## Usage

To use LeetHub, follow these steps:

1. Solve a problem on LeetCode and submit your solution.
2. LeetHub will create a new file or update an existing one in your selected repository automatically.
3. Go and check the submission on your github repository
