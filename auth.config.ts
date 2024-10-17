import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { getUserById } from "./data/user";

export default {
  providers: [GitHub, Google],
  callbacks: {
    async jwt({ token }) {
      // Add access_token to the token right after signin
      if (!token.sub) return token;

      // Fetch user from database
      const existingUser = await getUserById(token.sub);
      // If user exists, add it to the token
      if (!existingUser) return token;

      // extend the token with the user data
      token.id = existingUser.id;
      token.role = existingUser.roles;
      token.username = existingUser.username;
      token.verified = existingUser.verified;

      return token;
    },

    async session({ token, session }) {
      // Add property to session, like an access_token from a provider.
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      // Add role to session
      if (token.role && session.user) {
        session.user.role = token.role;
      }

      // Add username to session
      if (token.username && session.user) {
        session.user.username = token.username;
      }

      // Add verified to session
      if (token.verified && session.user) {
        session.user.verified = token.verified === false;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;
