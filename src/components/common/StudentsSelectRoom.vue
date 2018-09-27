<template>
  <div>
    <a @click="value5 = true" v-on:click="changeClassRoom" class="classroom-text-warp change-classroom-wrap">点击更换其他教室</a>
    <Drawer
      title="更换互动教室"
      v-model="value5"
      width="50"
      :mask-closable="false"
      class="select-room-drawer-warp">

      <div slot="header" class="clear">
        <Button class="select-room-submit-button" type="primary" shape="circle" @click="value5 = false" v-on:click="submitClassRoom">确认(6/6)</Button>
      </div>

      <Form :model="formData">
        <Row :gutter="32">
          <Col span="12">
            <span class="global-text-warp">互动教室</span>
          </Col>
        </Row>
        <Row :gutter="32" class="room-text-wrap">
          <Col span="12">
            <span>互动中</span>
          </Col>
          <br>
          <Col class="room-show-text-wrap" span="8" v-for="selected in selectedRoom">
            <Button type="default" shape="circle">
              <Icon type="ios-checkmark-circle" color="green" size="18" />
              <span class="room-show-text-wrap">{{selected.name}}</span>
            </Button>
          </Col>

        </Row>
        <br>
        <Row :gutter="32" class="room-text-wrap">
          <Col span="12">
            <span>其他教室</span>
          </Col>
          <br>
          <Col class="room-show-text-wrap" span="8" v-for="(classRoomItem, index) in classRoom.classRoomList.items" :key="index">
            <Button type="primary" shape="circle">
              <span class="global-text-warp" v-on:click="selectStuRoom(classRoomItem.address, classRoomItem.id)">{{classRoomItem.address}}</span>
            </Button>
          </Col>

        </Row>

      </Form>


    </Drawer>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      name: "StudentsSelectRoom",
      data () {
        return {
          value5: false,
          formData: {
            name: '',
            url: '',
            owner: '',
            type: '',
            approver: '',
            date: '',
            desc: ''
          },
          selectedRoom: [], // 选择的学生设备列表
          QueryParams: {}, // 查询参数
          deviceListFormBean: {}
        }
      },
      computed: {
        ...mapState(['classRoom'])
      },
      methods: {
        changeClassRoom () {
          this.$store.dispatch('fetchClassRoomList', this.QueryParams)
            .then((res) => {
              console.log('fetchClassRoomList', res)
            })
        },
        selectStuRoom (name, id) {
          let flag = false;
          if (this.selectedRoom.length === 0) {
            if (this.selectedRoom.length < 1) {
              this.selectedRoom.push({'name': name, 'id': id})
            }
          } else {
            for (let i = 0; i < this.selectedRoom.length; i++) {
              if (id === this.selectedRoom[i].id) {
                flag = true;
              }
            }
            if (!flag) {
              // 1. 判断重复的
              if (this.selectedRoom.length < 1) {
                this.selectedRoom.push({'name': name, 'id': id})
              }
            }
          }
        },
        submitClassRoom () {
          console.log(1111)
          // const lists = []
          // // 拉取学生教室的流
          // for (let index in this.selectedRoom) {
          //   if (this.selectedRoom[index]) {
          //     lists.push(parseInt(this.selectedRoom[index].id))
          //   }
          // }
          // this.deviceListFormBean.deviceIds = lists
          // this.deviceListFormBean.courseId = this.$route.query.courseId
          // this.$store.dispatch('pullClassRoom', this.deviceListFormBean)
          //   .then((res) => {
          //     const data = res.data.items
          //     console.log('success', data)
          //   }).catch((error) => {
          //   const data = error.response.data
          //   console.log('error', data)
          // })

        }
      }
    }
</script>

<style scoped>

  .ivu-menu-dark {
    background: #051548;
  }

  .demo-drawer-footer{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
  }


  .select-room-drawer-warp{
    width: 600px;
    /*height: calc(100% - 55px);*/
    overflow: auto;
    padding-bottom: 0px;
    position: static;
  }

  .select-room-drawer-warp .ivu-drawer-content {
    height: 94%;
    position: absolute;
    top: 95px;
    background-color: #0e0525;
  }


  .select-room-drawer-warp .ivu-drawer-header {
    line-height: 2;
  }
  .select-room-drawer-warp .ivu-drawer-close {
    width: 100px;
    height: 100px;
    left: 0;
  }

  .select-room-drawer-warp .ivu-drawer-close .ivu-icon-ios-close {
    z-index: 1;
    font-size: 100px;
    position: absolute;
    right: 1px;
    top: 2px;
    overflow: hidden;
    cursor: pointer;
  }

  .room-text-wrap {
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    top: 80px;
  }

  .room-show-text-wrap {
    color: #2d8cf0;
    font-size: 30px;
    font-weight: 400;
    margin-top: 20px;
    left: 30px;
  }

  .select-room-submit-button {
    float: right;
  }

  .select-room-drawer-warp .ivu-tag .ivu-tag-green .ivu-tag-dot .ivu-tag-checked {
    color: #2d8cf0;
  }

  .change-classroom-wrap {
    float: right;
    margin-right: 40px;
    margin-top: 30px;
  }

  .classroom-text-warp {
    color: #1195f7;
    font-size: 35px;
    font-weight: 400;
  }

</style>
