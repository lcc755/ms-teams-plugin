# Tabs

Tabs are Teams-aware webpages embedded in Microsoft Teams. A channel/group tab delivers content to channels and group chats, and are a great way to create collaborative spaces around dedicated web-based content.

## Prerequisites
-  [NodeJS](https://nodejs.org/en/)

-  [M365 developer account](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/prepare-your-o365-tenant) or access to a Teams account with the appropriate permissions to install an app.

## Build and Run

In the project directory, execute:

`npm install`

`npm start`


## Deploying to Teams for Testing

** NOTE: First time debug step
On the first time running and debugging your app you need allow the localhost certificate.  After starting debugging when Chrome is launched and you have installed your app it will fail to load.

- Open a new tab `in the same browser window that was opened`
- Navigate to `https://localhost:3000/tab`
- Click the `Advanced` button
- Select the `Continue to localhost`

** NOTE: Debugging
Ensure you have the Debugger for Chrome/Edge extension installed for Visual Studio Code from the marketplace.


### Setting up Ngrok:

 1. Install: https://ngrok.com/download
 2. Run ngrok.exe 
 3. Run: 
    
    `ngrok http 3000 --host-header=localhost:3000`

 4. Grab the ngrok forwarding address from the output

 More Info: https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/debug

 **Note: for this part to work correctly, ensure ssl is disabled for the app (try `git config http.sslVerify false` in a git project)


 ### Adding the app to Teams for testing:

 1. Open App Studio in the Teams app 
    If you don't have App Studio in Teams, search for it on the Apps page and click "Add"
 2. Select "Create a new app"
 3. Fill in necessary information. 
    Generate App ID and use the ngrok URL for the website URL 
    Update the branding images with included icons (or whatever you wish to use). 
 4. Under "Capabilities", select "Tabs" and add a personal tab  
    Give the tab a title, ID, and use the ngrok URL
    Click "Save"
 5. Go to "Test and distribute" under "Finish". Here you can install your app to test
    Issues installing app? Download instead, then head to the Apps page and click "Upload a custom app". Not sure why install doesn't always work, but uploading usually does. Check out more info here: https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/deploy-and-publish/apps-upload


## Publishing to App Catalog

Once you're happy with the application, you must add the react tab page to your website, as it needs a permanent address. Then, replace the ngrok URLs in the Manifest file with the new URL and increase the version number by editing the application. You can then publish the app to your organization so everyone can access.

More info: https://docs.microsoft.com/en-us/MicrosoftTeams/manage-apps?toc=%2Fmicrosoftteams%2Fplatform%2Ftoc.json&bc=%2FMicrosoftTeams%2Fbreadcrumb%2Ftoc.json