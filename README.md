
# Project Title

AI Trip Planner is a smart travel planning application built with React, Node.js, and MongoDB, integrating AI-powered trip generation for personalized itineraries. It features Google Authentication, React Routing, and a dynamic trip form for easy customization. Users can save trips to a database, view trip details, and access trip history. The app enhances user experience with Google Photos API for place images and an optimized UI. Finally, it is deployed for real-world accessibility, making travel planning seamless and efficient. 


## Clone

Clone project and Move to Directory

```bash
    git clone https://github.com/vermaadigit/AI-Trip-Planner.git

    cd AI-Trip-Planner
```
    
## Configuration

Create a `.env` file in the root folder of your project. Update it following the convention of the `.env.example` file. Here's an example :-

```bash
    
VITE_GOOGLE_PLACE_API_KEY = 
VITE_GOOGLE_GEMINI_AI_API_KEY = 
VITE_GOOGLE_AUTH_CLIENT_ID = 
VITE_FIREBASE_API_KEY = 
VITE_FIREBASE_AUTH_DOMAIN = 
VITE_FIREBASE_PROJECT_ID = 
VITE_FIREBASE_STORAGE_BUCKET = 
VITE_FIREBASE_MESSAGING_SENDER_ID = 
VITE_FIREBASE_APP_ID = 
VITE_FIREBASE_MEASUREMENT_ID = 


```

## Installation



```bash
    npm install

    npm run dev
```
## Technologies

- **Web-app**: ReactJS, ShadCN-UI, Tailwind-CSS
- **Database**: Firebase
- **API**: Gemini API , Google Place API
- **Authentication***: Google OAuth2
# Steps to Set Up Google Maps Platform API Key

To use the Google Maps API in your applications, follow the steps below to create and set up your API key.

### Step 1: Go to Google Cloud Console

1. Navigate to the [Google Cloud Console](https://console.cloud.google.com/).
2. If you don’t have a Google account, create one and sign in.

### Step 2: Create a New Project

1. In the Cloud Console, click on the **Select a project** dropdown at the top.
2. Click **New Project** to create a new project.
3. Give your project a name, select the organization (optional), and choose the billing account.
4. Click **Create**.

### Step 3: Google Maps Platform

1. Search Google Maps Platform in the Console search bar
<img width="1438" alt="Screenshot 2024-09-22 at 10 15 15 AM" src="https://github.com/user-attachments/assets/a5f93c1e-d7b6-4a5b-847b-868b1133643d">

2. If your account is not setup yet , finish your account setup
   <img width="930" alt="Screenshot 2024-09-22 at 10 02 59 AM" src="https://github.com/user-attachments/assets/c8ee7aa3-7610-4836-86f6-c28e8604c2b9">

3.After Completeing account setup , select the "Keys and Credentails" Section.
4.Then select the Create Credentials option , under which you can select the "API Key Option"
<img width="1440" alt="Screenshot 2024-09-22 at 10 05 36 AM" src="https://github.com/user-attachments/assets/9e897c91-3282-4e28-8fdf-d920d6c4bc15">

5. You will receive a API Key , add the key to the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in the .env
   <img width="660" alt="Screenshot 2024-09-22 at 10 19 33 AM" src="https://github.com/user-attachments/assets/adcb5a49-892e-43a1-b318-56b296280611">

### Step 4: Changes required to make it work on localhost

1. Although the documentation mentions that without restriction , the API key will work everywhere, that is not the case for http requests.
2. Add a restriction and mention your localhost along with your port for it to start working on local , and save and continue
   <img width="694" alt="Screenshot 2024-09-22 at 10 06 44 AM" src="https://github.com/user-attachments/assets/3acfdf47-4b1d-480f-8172-0fbfa1c39f02">
