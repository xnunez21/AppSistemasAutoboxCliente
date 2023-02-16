<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-button router-link="/Login">
          <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
        </ion-button>   
        <ion-title>Reset Your Password</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form>
        <ion-item lines="full">
          <ion-label position="floating">Email</ion-label>
          <ion-input type="email" required></ion-input>
        </ion-item>
        <ion-row>
          <ion-col>
            <ion-button type="submit" color="danger" expand="block">Send</ion-button>
          </ion-col>
        </ion-row>
        <small>
          Please provide the username or email address that you used when you signed
          up for your Evernote account.
        </small>
      </form>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { logoIonic, arrowBackSharp } from 'ionicons/icons';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {},
    setup() {
      return {
        logoIonic, arrowBackSharp,        
      };
    },
});
</script>

<style scoped>
#container {
  position: absolute;
  top: 50%;
  left: 10%;
  margin: -25px 0 0 -25px;
  transform: translateY(-50%);
  width: 90%;
}
#container a {
  text-decoration: none;
}
</style>
