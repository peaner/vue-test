<template>
    <div>
      <MenuItem name="show-view" class="show-view">
        <a class="global-text-warp">当前视角：{{showView}}</a>
      </MenuItem>
      <MenuItem name="change-switch-view" class="switch-view">
        <Button type="primary" v-on:click="changeViewStatus" shape="circle">切换</Button>
      </MenuItem>
    </div>
</template>

<script>
    export default {
      name: "ViewStatus",
      data() {
        return {
          showView: '全局视角',
          deviceListFormBean: {}
        }
      },
      methods: {
        changeViewStatus () {
          const lists = [49,50,51]
          // 拉取学生教室的流
          for (let index in this.list) {
            if (this.list[index]) {
              lists.push(parseInt(this.list[index]))
            }
          }
          this.deviceListFormBean.deviceIds = lists
          this.deviceListFormBean.courseId = 83
          if (this.showView === '全局视角') {
            this.deviceListFormBean.viewStatus = 1
          } else {
            this.deviceListFormBean.viewStatus = 0
          }
          this.$store.dispatch('changeView', this.deviceListFormBean)
            .then((res) => {
              if (this.showView === '全局视角') {
                this.showView = '自己视角'
              } else {
                this.showView = '全局视角'
              }
            })
        }
      }
    }
</script>

<style scoped>

  .ivu-btn-primary {
    color: #fff;
    background-color: #051548;
    border-color: #2d8cf0;
    border-width: 2px;
  }

  .show-view {
    margin-left: 200px;
  }

  .switch-view {
    margin-left: 0px;
  }

</style>
