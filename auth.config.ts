import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
  providers: [GitHub, Google],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
        token.verified = user.verified;
      }

      return token;
    },

    async session({ token, session }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.username = token.username;
      session.user.verified = token.verified;

      return session;
    },
  },
} satisfies NextAuthConfig;
