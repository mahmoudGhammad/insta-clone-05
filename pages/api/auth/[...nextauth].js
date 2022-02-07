import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "120027499124-pb85r34ukn6g2ph7t7360470hh7naq3q.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],

  pages:{
    signIn: "/auth/signin"
  }, 
  callbacks:{
    async session({session , token , user}){

      session.user.username=session.user.name
      .split("")
      .join("")
      .toLocaleLowerCase();

      session.user.uid = token.sub

      return session
    }
  }
})