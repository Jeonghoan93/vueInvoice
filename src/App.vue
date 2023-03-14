<template>
  <div>
    <!-- v-if directive is a conditional rendering directive in Vue.js, -->
    <div v-if="!mobile" class="app flex flex-column">
      <Navigation />
      <div class="app-content flex flex-column">
        <invoice-modal v-if="invoiceModal" />
        <router-view />
      </div>
    </div>
    <div v-else class="mobile-message flex flex-column">
      <h2>Sorry, this app is not supported on Mobile devices</h2>
      <p>To use this app, please use a computer or Tablet</p>
    </div>
  </div>
</template>

<script>
import InvoiceModal from "./components/InvoiceModal.vue";
import Navigation from "./components/Navigation.vue";
import { mapState } from "vuex";

export default {
  // In Vue.js, the data() property is used to define the initial state of a component's data.
  data() {
    return {
      //This case, the data() returns an object with one key-value pair: mobile: null, initial value of null.
      mobile: null,
    };
  },
  components: {
    Navigation,
    InvoiceModal,
  },
  created() {
    this.checkScreen();
    console.log(this.mobile);
    // add an event listener for the resize event on the window object in the created() hook.
    // We pass the checkScreen() method as the event handler. This way, whenever the window is resized,
    // the checkScreen() method will be called.
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      // if the windowWidth is less than or equal to "750px", the this.mobile property
      // is set to true and the method exits early using the return statement.
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      } else {
        this.mobile = false;
      }
    },
  },
  computed: {
    ...mapState(["invoiceModal"]),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.app {
  background-color: rgba(52, 53, 65);
  border-color: rgba(32, 33, 35, 0.5);
  min-height: 100vh;
  @media (min-width: 900px) {
    flex-direction: row !important;
  }
  .app-content {
    padding: 0 20px;
    flex: 1;
    position: relative;
  }
}
.mobile-message {
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #141625;
  color: #fff;

  h2 {
    margin: 30px;
    font-size: 13pt;
  }
  p {
    font-size: 9pt;
    margin: 20px;
    margin-top: 16px;
    opacity: 0.8;
  }
}
// animated invoice
.invoice-enter-active,
.invoice-leave-active {
  transition: 0.8s ease all;
}
.invoice-enter-from,
.invoice-leave-to {
  transform: translateX(-700px);
}
button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  color: #fff;
}
.dark-purple {
  background-color: #25293e;
}
.red {
  background-color: #ec5757;
}
.purple {
  background-color: #7c5dfa;
}
.green {
  background-color: #33d69f;
}
.orange {
  background-color: #ff8f00;
}
// utility classes
.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;
  @media (min-width: 900px) {
    padding-top: 72px;
  }
}
.nav-link {
  text-decoration: none;
  color: initial;
}
// Status Button Styling
.status-button {
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
  font-size: 12px;
  margin-right: 30px;
  align-items: center;
  padding: 8px 30px;
  border-radius: 10px;
}
.paid {
  &::before {
    background-color: #33d69f;
  }
  color: #33d69f;
  background-color: rgba(51, 214, 160, 0.1);
}
.pending {
  &::before {
    background-color: #ff8f00;
  }
  color: #ff8f00;
  background-color: rgba(255, 145, 0, 0.1);
}
.draft {
  &::before {
    background-color: #dfe3fa;
  }
  color: #dfe3fa;
  background-color: rgba(223, 227, 250, 0.1);
}
</style>
