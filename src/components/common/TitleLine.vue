<template>
  <div>
    <Menu class="top-wrap" mode="horizontal" theme="dark" active-name="1">
      <div>
        <div class="layout-nav">
          <MenuItem name="change-show-classroom" class="show-classroom">
            <SelectRoom @selectRoomChange="selectRoomChange"></SelectRoom>
          </MenuItem>

          <MenuItem name="change-interact-mode" class="interact-mode">
            <interactMode></interactMode>
          </MenuItem>

          <ViewStatus></ViewStatus>
        </div>
      </div>
    </Menu>
  </div>
</template>

<script>
  import SelectRoom from "./SelectRoom";
  import InteractMode from "./InteractMode";
  import ViewStatus from "./ViewStatus";
  export default {
    name: "TitleLine",
    components: {ViewStatus, InteractMode, SelectRoom},
    data() {
      return {

      }
    },
    methods: {
      selectRoomChange (info) {
        if (info === true) {
          this.$emit('titleChange', true)
        }
      }
    }
  }
</script>

<style scoped>

  .ivu-menu-dark {
    background: #051548;
  }

  .top-wrap {
    margin-top: 60px;
  }

  .show-classroom {
    margin-left: 0px;
  }

  .interact-mode {
    margin-left: 15px;
  }


</style>
