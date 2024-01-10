import NextAuth from "next-auth";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({}),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
