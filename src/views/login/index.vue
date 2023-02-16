<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-icon ref="iconsx" id="eye"></ion-icon> -->
        <ion-icon role="img" class="md" id="arrowBackSharp">
          <div class="icon-inner">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292" class="ionicon-fill-none"></path></svg>
          </div>
        </ion-icon>
        <!-- <ion-icon onload="getIcons('mailOutline')"></ion-icon> -->
        <!-- <ion-icon :src="icon('mailOutline')"></ion-icon> -->
        <!-- <ion-icon id="icons" data="eye"></ion-icon> -->
        <ion-title>Log In</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container" style="position: relative;">
        <form>
          <ion-list>
            <ion-item>
              <ion-label position="stacked">Enter Email id / Mobile Number</ion-label>
              <ion-input fill="outline" type="email" required></ion-input>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-item>
              <ion-label position="stacked">Enter Password</ion-label>
              <ion-input fill="outline" type="password" required></ion-input>
              <!-- <ion-icon name="eye" slot="end"></ion-icon> -->
            </ion-item>
          </ion-list>
          <div class="space"></div>
          <ion-item>
            <ion-checkbox slot="start" expand="full"></ion-checkbox>
            <ion-label>
              <p style="font-size: 10px;">
                By Login in you agree to our Terms & Condition and <br> Privaticy Policy 
              </p>              
            </ion-label>
          </ion-item>
          <div class="space"></div>
          <ion-list>
            <ion-button type="submit" color="light" expand="full">Log In</ion-button>
          </ion-list>  
          <div class="space"></div>        
          <ion-list>
            <div style="text-align: center;">OR</div>
          </ion-list>
          <div class="space"></div>
          <ion-list>
            <ion-button color="danger" expand="full">Sign In with Google</ion-button>
          </ion-list>          
          <ion-list>
            <ion-button color="primary" expand="full">Sign In with Facebook</ion-button>
          </ion-list>  
          <div class="space"></div>
          <ion-list style="text-align: center;">
            <ion-label>New User?</ion-label>
            <ion-button router-link="/Register" class="btnLink">Sing Up</ion-button>  
          </ion-list>          
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { onMounted, ref } from "vue"
export default {
  setup() {
    const iconsx = ref(null)
    onMounted(() => {
      const id = iconsx.value.$el.id
      const icons = window.icons;
      // const icon = ":ios="+icons[id]+" :md="+icons[id];
      document.getElementById(id).setAttribute(":ios", icons[id]);
      document.getElementById(id).setAttribute(":md", icons[id]);
      // console.log(icon);
    });
    return {
      iconsx
    }
  }
};
// console.log(window.icons);

//  icon(name: any) {
//   // console.log(this.i[name]);
//   // return ":ios="+this.i[name]+" :md="+this.i[name];
//   return this.i[name];
//   window.icons
// }
// function getIcons(icon: any): string {
//     const icons = window.icons;
//     return ":ios="+icons[icon]+" :md="+icons[icon];
// }
// export default {

// };

</script>

<style scoped>
.btnLink {
  --background: rgb(255, 255, 255);
  --background-hover: rgb(255, 255, 255);
  --background-activated: rgb(255, 255, 255);
  --background-focused: rgb(255, 255, 255);
  --color: #000;
  --border-radius: 0;
  --border-color: rgb(255, 255, 255);
  --border-style: solid;
  --border-width: 1px;
  --box-shadow: rgb(255, 255, 255);
  --padding-top: -10px;
  --padding-bottom: 10px;
  text-decoration: underline !important;
}
.scroll-y {
    overflow-y: hidden !important;
}
.space {
  height: 25px;
}
#container {
  position: absolute;
  top: 45%;
  /* left: 10%; */
  /* margin: -25px 0 0 -25px; */
  margin: 15px 0 0 20px;
  transform: translateY(-50%);
  width: 90%;
}
#container a {
  text-decoration: none;
}
</style>
