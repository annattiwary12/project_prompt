🧠 Project Prompt
Project Prompt is a full-stack AI-powered platform that enables users to discover, create, and share useful AI prompts. Built with Next.js 13, MongoDB, and Tailwind CSS, the app features modern authentication, a clean UI, and prompt management functionality.

✨ Features
🌐 Google OAuth Authentication

📝 Create, update, and delete AI prompts

🔍 Discover prompts from the community

🔄 Seamless UI with responsive design

⚡ Server-side rendering and dynamic routes using Next.js 13 app router

🛠️ Tech Stack
Framework: Next.js 13

Database: MongoDB (via Mongoose)

Authentication: NextAuth (Google provider)

Styling: Tailwind CSS

Deployment: Vercel
-------------------------------------------------------------------
🚀 Getting Started
bash
Copy code
git clone https://github.com/annattiwary12/project_prompt.git
cd project_prompt
npm install
npm run dev


-----------
📁 Folder Structure
/app         - Routing and pages
/components - Reusable UI components
/models      - Mongoose schemas
/utils       - Database config and helpers
----------------------------------------------------------
🔐 Environment Variables
Create a .env file with:

env
Copy code
MONGODB_URI=your_mongo_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
-----------------------------------------------------------------------------------------------
📸 Screenshots
(Add screenshots of homepage, prompt card, or create page )

