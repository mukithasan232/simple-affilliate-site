import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Admin Access",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "admin" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // For demonstration, we use a single admin account
                // In production, this would query your user database
                if (credentials?.username === "admin" && credentials?.password === "admin123") {
                    return {
                        id: "1",
                        name: "Admin User",
                        email: "admin@affiliatepro.com",
                        role: "admin",
                        subscription: "pro"
                    };
                }
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: any, user: any }) {
            if (user) {
                token.role = user.role;
                token.subscription = user.subscription;
            }
            return token;
        },
        async session({ session, token }: { session: any, token: any }) {
            if (session.user) {
                session.user.role = token.role;
                session.user.subscription = token.subscription;
            }
            return session;
        }
    },
    pages: {
        signIn: "/admin", // Use current admin page as sign-in
    },
    secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-dev",
};
