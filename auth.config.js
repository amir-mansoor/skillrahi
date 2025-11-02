// auth.config.js

export const authConfig = {
  callbacks: {
    async authorized({ request, auth }) {
      const publicPaths = ["/", "/learn", "/projects", "/api/public"];

      const { pathname } = request.nextUrl;

      const isPublic = publicPaths.some((p) => pathname.startsWith(p));

      if (isPublic) return true;

      // for all other pages user must be logged in
      return !!auth?.user;
    },
  },
};
