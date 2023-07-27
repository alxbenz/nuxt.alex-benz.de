export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    beforeMount: (el, binding) => {
      el.clickOutsideEvent = (event: MouseEvent) => {
        if (!(el == event.target || el.contains(event.target))) {
          console.log('click outside', binding.value)
          binding.value();
        }
      };
      document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: el => {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
  })
})
