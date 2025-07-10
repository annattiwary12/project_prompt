# 🚀 Project Prompt

Project Prompt is a full-stack AI-powered platform where users can create, discover, and share prompts for AI models.  
Built with Next.js 13, MongoDB, and Tailwind CSS, it features Google OAuth authentication, dynamic routing, and full CRUD for prompts.

────────────────────────────────────────────────────────────────────

✨ FEATURES
───────────
🔐 Google OAuth Authentication with NextAuth.js  
📝 Create, update, and delete AI prompts  
🔍 Browse and search community-submitted prompts  
📱 Responsive UI with Tailwind CSS  
⚡ Server-side rendering with Next.js 13 App Router  

────────────────────────────────────────────────────────────────────

📦 TECH STACK
──────────────
Frontend : Next.js 13, React, Tailwind CSS  
Backend  : MongoDB, Mongoose  
Auth     : Google OAuth + NextAuth.js  
Deploy   : Vercel (Recommended)

────────────────────────────────────────────────────────────────────

🛠 GETTING STARTED
────────────────────

# > Clone the repository
# $ git clone https://github.com/annattiwary12/project_prompt.git
# $ cd project_prompt

# > Install dependencies
$ npm install

 # > Setup environment variables
 # Create a .env file in the root folder and add:

# MONGODB_URI=your_mongodb_connection_string  
# GOOGLE_CLIENT_ID=your_google_oauth_client_id  
# GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret  
 # NEXTAUTH_URL=http://localhost:3000

> Run the development server
$ npm run dev

> Visit in your browser:
http://localhost:3000

────────────────────────────────────────────────────────────────────

📁 PROJECT STRUCTURE
─────────────────────
/app              → Next.js 13 App Router pages/routes  
/components       → Reusable React components  
/models           → Mongoose database schemas  
/utils            → DB connection & helpers  
.env              → Environment variable config  
tailwind.config.js → Tailwind CSS config  
next.config.js    → Next.js settings  
package.json      → Project scripts and dependencies  

────────────────────────────────────────────────────────────────────

📸 SCREENSHOTS
─────────────────

Homepage:      https://github.com/user-attachments/assets/316dcb67-7c4b-48ae-b71a-fce5c423c8a7  
Prompt Card:   https://github.com/user-attachments/assets/515cf5e3-9e12-4f84-a834-ab4faaf221a2

────────────────────────────────────────────────────────────────────

📃 LICENSE
────────────
This project is licensed under the MIT License.

────────────────────────────────────────────────────────────────────
