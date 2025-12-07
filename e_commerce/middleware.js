// middleware.js
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// ALL PUBLIC ROUTES — NO LOGIN REQUIRED
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/animals',                 // ← ADDED
  '/toys',                    // ← ADDED
  '/about',                   // ← optional (add if you have)
  '/product-details/(.*)',    // ← product pages
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect(); // Only protects /checkout, /cart, etc.
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run middleware on these
    '/',
    '/(api|trpc)(.*)',
  ],
};