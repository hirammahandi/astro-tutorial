/*
  @note
  With view transitions, some scripts may stop executing after page navigation, unlike with full browser refreshes. There are two events during client-side navigation that you can listen for and fire events when they occur: `astro:page-load` and `astro:after-swap`.
*/

document.addEventListener("astro:page-load", () => {
  document.querySelector(".hamburger")!.addEventListener("click", () => {
    document.querySelector(".nav-links")!.classList.toggle("expanded");
  });
});
