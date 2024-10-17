import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id?: User["id"];
      role?: User["role"];
      username?: User["username"];
      verified?: User["verified"];
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: (typeof User)["role"];
    username?: (typeof User)["username"];
    verified?: (typeof User)["verified"];
  }

  interface JWT {
    id?: string;
    role?: (typeof User)["role"];
    username?: (typeof User)["username"];
    verified?: (typeof User)["verified"];
  }
}
