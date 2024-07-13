import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: { strategy: "jwt" },
    providers: [
        Credentials({
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
                    // Return null if credentials are invalid
                    return null;
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
            // Check user status or other criteria here
            return user.id && user.status === 1;
        },
        async session({ session, token }) {
            if (token) {
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

})
