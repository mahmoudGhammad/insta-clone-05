import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:CLIENTID.env.local,
      clientSecret: clientSecret.env.local,
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
