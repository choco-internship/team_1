<template>
  <nav class="navbar">
    <router-link class="navbar__link" to="/">
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2495 17.4994V12.9993C11.2495 12.8004 11.1704 12.6096 11.0298 12.469C10.8891 12.3283 10.6984 12.2493 10.4995 12.2493H7.49945C7.30054 12.2493 7.10977 12.3283 6.96912 12.469C6.82847 12.6096 6.74945 12.8004 6.74945 12.9993V17.4994C6.74945 17.6983 6.67045 17.889 6.52981 18.0297C6.38918 18.1703 6.19844 18.2494 5.99954 18.2494L1.50009 18.25C1.40159 18.25 1.30406 18.2306 1.21305 18.1929C1.12205 18.1552 1.03936 18.1 0.969703 18.0304C0.900049 17.9607 0.844796 17.878 0.807099 17.787C0.769402 17.696 0.75 17.5985 0.75 17.5V8.83183C0.75 8.72734 0.771834 8.624 0.814101 8.52844C0.856369 8.43288 0.918138 8.34721 0.995448 8.27691L8.49493 1.45803C8.63299 1.3325 8.81287 1.26295 8.99946 1.26294C9.18605 1.26293 9.36594 1.33248 9.504 1.45799L17.0045 8.27691C17.0818 8.3472 17.1436 8.43288 17.1859 8.52845C17.2282 8.62401 17.25 8.72736 17.25 8.83186V17.5C17.25 17.5985 17.2306 17.696 17.1929 17.787C17.1552 17.878 17.1 17.9607 17.0303 18.0304C16.9606 18.1 16.878 18.1552 16.7869 18.1929C16.6959 18.2306 16.5984 18.25 16.4999 18.25L11.9994 18.2494C11.8005 18.2494 11.6097 18.1703 11.4691 18.0297C11.3285 17.889 11.2494 17.6983 11.2495 17.4994V17.4994Z"
          stroke="#8F8F8F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Главная</router-link
    >
    <router-link class="navbar__link" to="/myorders">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 14.25H15"
          stroke="#AAAAAA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 11.25H15"
          stroke="#AAAAAA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.0002 3.75H18.75C18.9489 3.75 19.1397 3.82902 19.2803 3.96967C19.421 4.11032 19.5 4.30109 19.5 4.5V20.25C19.5 20.4489 19.421 20.6397 19.2803 20.7803C19.1397 20.921 18.9489 21 18.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V4.5C4.5 4.30109 4.57902 4.11032 4.71967 3.96967C4.86032 3.82902 5.05109 3.75 5.25 3.75H8.9998"
          stroke="#AAAAAA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.25 6.75V6C8.25 5.00544 8.64509 4.05161 9.34835 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9946 2.25 13.9484 2.64509 14.6517 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6V6.75H8.25Z"
          stroke="#AAAAAA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      Мои заказы</router-link
    >
    <router-link class="navbar__link" to="/rakhmet">
      <svg
        width="16"
        height="22"
        viewBox="0 0 16 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_803_475"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="15"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.5957 14.8611V0H0.904297L0.904297 14.8611H15.5957Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_803_475)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.96972 7.83711C5.16821 9.49183 6.56074 10.7738 8.24987 10.7738C10.0757 10.7738 11.5558 9.27695 11.5558 7.43049C11.5558 5.58375 10.0757 4.08659 8.24987 4.08659C6.75412 4.08659 5.49089 5.09213 5.08343 6.47154L1.09553 4.84166C1.32691 4.5302 1.69695 3.89118 1.90168 3.59243C2.19799 3.15926 2.39166 2.90823 2.89837 2.34263C3.07842 2.1413 3.27663 1.95747 3.48078 1.7807C3.81566 1.48421 4.21519 1.18319 4.7426 0.900536L4.74231 0.901666C5.78494 0.327312 6.97955 -0.000244141 8.24987 -0.000244141C12.3072 -0.000244141 15.5959 3.32643 15.5959 7.43049C15.5959 11.5343 12.3072 14.8609 8.24987 14.8609C4.19335 14.8609 0.904419 11.5343 0.904419 7.43049C0.904419 7.30257 0.907538 7.17578 0.91406 7.04984L4.96972 7.83711Z"
            fill="#EE3955"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.815564 12.0003V6.98145L4.99878 7.76201V15.1689C4.99878 16.3721 4.73456 18.0948 3.98564 19.303C2.31517 22.0001 0 22.0001 0 22.0001C0 22.0001 0.7316 21.208 0.815564 19.7958C0.92272 17.993 0.815564 12.0003 0.815564 12.0003Z"
          fill="#EE3955"
        />
      </svg>
      Rakhmet
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.navbar {
  background: #ffffff;
  box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 1;
  height: 56px;
}

.navbar__link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 25px;
  color: #8f8f8f;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-decoration: none;
}

.router-link-exact-active {
  color: #2997ff;
}
</style>
