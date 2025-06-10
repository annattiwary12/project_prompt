# Project Prompt

Project Prompt is a full-stack AI-powered platform where users can create, share, and discover AI prompts. Built with Next.js 13, MongoDB, and Tailwind CSS, it offers a sleek UI, Google OAuth authentication, and prompt management features.

# Features
🌐 Google OAuth Authentication with NextAuth.js

📝 Create, update, and delete AI prompts

🔍 Browse and search community prompts

📱 Responsive design with Tailwind CSS

⚡ Server-side rendering and dynamic routing using Next.js 13 app router

 # Getting Started
Run these commands in your terminal:

bash
Copy code
# Clone the repository
git clone https://github.com/annattiwary12/project_prompt.git

# Navigate into the project folder
cd project_prompt

# Install dependencies
npm install

# Start the development server
npm run dev
Open http://localhost:3000 in your browser.

# Project Structure
# Folder/File	Description

/app	Next.js 13 app folder containing routes/pages

/components	Reusable React components

/models	Mongoose schemas defining database models

/utils	Utility functions, database connection logic

.env	Environment variables file

next.config.js	Next.js configuration

package.json	Project metadata and dependency list

tailwind.config.js	Tailwind CSS configuration

 # Environment Variables
Create a .env file in the root folder and add:

# env
Copy code
MONGODB_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_oauth_client_id

GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret

NEXTAUTH_URL=http://localhost:3000



# Screenshots
Add screenshots here to showcase your app’s UI (homepage, prompt cards, create/edit prompt page, etc.)
![image](https://github.com/user-attachments/assets/316dcb67-7c4b-48ae-b71a-fce5c423c8a7)

![image](https://github.com/user-attachments/assets/515cf5e3-9e12-4f84-a834-ab4faaf221a2)





# License
This project is licensed under the MIT License.
