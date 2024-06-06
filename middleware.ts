// // import { authMiddleware } from "@clerk/nextjs/server";
// import {redirectToSignIn} from "@clerk/nextjs";
// import { NextResponse } from "next/server";
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)','/']);

// export default clerkMiddleware({
//   // if(!isPublicRoute(request)) {
//   // auth().protect();
//   publicRoutes: ["/"],
//   async afterAuth(auth, req){
//     if(auth.userId && auth.isPublicRoute(req)){
//       let path = "/select-org";
//       if(auth.orgId){
//         path = `/organizatoin/${auth.orgId}`;
//       }
//       const orgSelection = new URL(path, req.url);
//       return NextResponse.redirect(orgSelection);
//     }
//     if(!auth.userId && !auth.isPublicRoute(req)){
//       return redirectToSignIn({returnBackUrl: req.url});
//     }
//     if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org"){
//       const orgSelection = new URL("/select-org, req.url");
//       return NextResponse.redirect(orgSelection);
//     }
//     return NextResponse.next();
//   }
// });
// // export default clerkMiddleware((auth, request) => {
// //   if(!isPublicRoute(request)) {
// //     auth().protect();
// //   }
// // });




// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  '/organization(.*)',
  '/board(.*)',
  '/select-org',
  '/api/cards(.*)'
])
// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)','/']);

export default clerkMiddleware((auth,req,event)=>{
  if(!auth().userId && isProtectedRoute(req)){
    return auth().redirectToSignIn({returnBackUrl:req.url})
  } 
  
  if(auth().userId && !isProtectedRoute(req)){
    let path : string = '/select-org'

    if( auth().orgId){
      path = `/organization/${auth().orgId}`
    }
    return NextResponse.redirect(new URL(path, req.url))
  }

  if(auth().userId && !auth().orgId && req.nextUrl.pathname !== "/select-org" ){
    return NextResponse.redirect(new URL('/select-org', req.url))
  }


});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};