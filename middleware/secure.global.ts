import { defineNuxtRouteMiddleware, navigateTo } from "#app";

export default defineNuxtRouteMiddleware(async (to) => {
  if (process.server) return;

  if (to.path === "/logout") {
    useAccount().logoutUser();
    return navigateTo("/");
  }
});
