import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "/models/user"; // update path if needed
import { connectToDB } from "/utils/database"; // update path if needed

if (process.env.NODE_ENV === "development") {
  console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  });
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      await connectToDB(); // ✅ Add this!

      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser?._id.toString(); // optional chaining for safety
      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDB();

        const userExists = await User.findOne({
          email: profile.email,
        });

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name
              ? profile.name.toLowerCase().replace(/\s+/g, "_")
              : `user_${Date.now()}`,
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.error("SignIn Error:", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
