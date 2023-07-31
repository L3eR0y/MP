<template lang="pug">
.navigation-bar.navigation-bar__wrapper
  .logo-container
    img.logo(src="../../assets/images/connect.svg" alt="My Happy SVG")
    .label VUE2-HOST {{ authenticated }}
  .user-avatar
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17.5" cy="17.5" r="17.5" fill="#DE0A26"/>
      <g clip-path="url(#clip0_52_27073)">
        <path d="M17.5002 17.5001C20.0778 17.5001 22.1668 15.3239 22.1668 12.6389C22.1668 9.95394 20.0778 7.77783 17.5002 7.77783C14.9226 7.77783 12.8335 9.95394 12.8335 12.6389C12.8335 15.3239 14.9226 17.5001 17.5002 17.5001ZM20.7668 18.7153H20.158C19.3486 19.1027 18.4481 19.323 17.5002 19.323C16.5522 19.323 15.6554 19.1027 14.8424 18.7153H14.2335C11.5283 18.7153 9.3335 21.0016 9.3335 23.8195V25.3994C9.3335 26.4058 10.1174 27.2223 11.0835 27.2223H23.9168C24.883 27.2223 25.6668 26.4058 25.6668 25.3994V23.8195C25.6668 21.0016 23.472 18.7153 20.7668 18.7153Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_52_27073">
          <rect width="16.3333" height="19.4444" fill="white" transform="translate(9.3335 7.77783)"/>
        </clipPath>
      </defs>
    </svg>
</template>
  
<script lang="ts">
export default {
  name: 'NavigationBar',
  data() {
    return {}
  },
  created() {
    console.log('Store: ', this.$store)
  },
  computed: {
    authenticated() {
      return this.$store.getters['auth/authenticated']
    }
  }
}
</script>
  
<style scoped lang="scss">
  .navigation-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3.5rem;
    
    &__wrapper {
      box-shadow: 0 .125rem 1rem 0 rgba(0,0,0,.05);
      padding-left: 1.5rem;
      padding-right: 1.5rem;

      .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        & .logo {
          height: 32px;
          width: 32px;
        }

        & .label {
          color: #2f3c43;
          font-size: 24px;
          font-weight: bold;
          padding-left: 10px;
        }
      }

      .user-avatar {
        height: 32px;
        width: 32px;
        border-radius: 50%;
      }
    }
  }
</style>