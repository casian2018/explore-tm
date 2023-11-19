import { defineNuxtRouteMiddleware, navigateTo } from "#app";

export default defineNuxtRouteMiddleware(async (to) => {
  if (process.server) return;
  console.log(to.path)

  if (to.path === "/logout") {
    useAccount().logoutUser();
    return navigateTo("/");
  }
  
  let secure = await useAccount().connected();
  console.log("secure", secure)
  
  if(!secure && to.path.startsWith("/") && to.path !== "/" && to.path !== "/stand"){
    return navigateTo("/");
  }
});
