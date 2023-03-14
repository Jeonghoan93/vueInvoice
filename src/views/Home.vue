<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are 4 total invoices.</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter by status</span>
          <img src="@assets/icon-arrow-down.svg" alt="" />
          <!-- v-show is a conditional rendering, visible of an element on a Boolean. If true, displayed. If false, hidden. -->
          <ul v-show="filterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <img src="@assets/icon-plus.svg" alt="" />
          </div>
          <span>Create Invoice</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      filterMenu: null,
    };
  },
  components: {},
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    // <div @click="toggleFilterMenu" class="filter flex">
    toggleFilterMenu() {
      // when user clicks on filter, is to toggle filterMenu data property between true and false.
      // When filterMenu is null in data(), Toggling it with the ! operator sets it to true the first time.
      // it toggles the value between true and false, useful for showing and hiding the filter menu based on user interaction.
      this.filterMenu = !this.filterMenu;
    },
    // <div @click="newInvoice" class="button flex">
    newInvoice() {
      this.TOGGLE_INVOICE();
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #fff;
  .header {
    margin-bottom: 65px;
    .left {
      h1 {
        font-size: 21pt;
        font-weight: 600;
      }
      span {
        font-size: 10pt;
        font-weight: 500;
        opacity: 0.8;
      }
    }
    .right {
      flex: 1;
    }
    .right {
      justify-content: flex-end;
      align-items: center;
      .button,
      .filter {
        align-items: center;
        span {
          font-size: 9pt;
          font-weight: 500;
        }
      }
      .filter {
        position: relative;
        margin-right: 40px;
        cursor: pointer;
        img {
          margin-left: 8px;
          width: 11px;
          height: 6px;
        }
        .filter-menu {
          border-radius: 10px;
          width: 120px;
          position: absolute;
          top: 25px;
          list-style: none;
          background-color: #434348;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          li {
            cursor: pointer;
            font-size: 9pt;
            font-weight: 400;
            padding: 10px 20px;
            &:hover {
              color: #1e2139;
              border-radius: 10px;
              background-color: #fff;
            }
          }
        }
      }
      .button {
        padding: 8px 16px;
        background-color: #0e7626;
        border-radius: 40px;
        .inner-button {
          margin-right: 6px;
          border-radius: 50%;
          padding: 6px;
          align-items: center;
          justify-content: center;
          img {
            width: 9px;
            height: 9px;
          }
        }
      }
    }
  }
  .empty {
    margin-top: 160px;
    align-items: center;
    img {
      width: 214px;
      height: 200px;
    }
    h3 {
      font-size: 20px;
      margin-top: 40px;
    }
    p {
      text-align: center;
      max-width: 224px;
      font-size: 12px;
      font-weight: 300;
      margin-top: 16px;
    }
  }
}
</style>
