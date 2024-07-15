import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers:{GET , POST}, signIn, signOut, auth } = NextAuth({
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const res = await fetch('https://testcodex.com/elevr/public/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credentials),
                });
                const userResponse = await res.json();

                if (!res.ok || !userResponse.response.data) {
                    return userResponse.error;
                }
                const user = userResponse.response.data.user;
                console.log(user);

                if (res.ok && user) {
                    return user;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            return user.id && user.status === 1;
        },
        async session({ session, token }) {
            if (token && token.user) {
                session.user = token.user;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/login"
    }
});
