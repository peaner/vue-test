<template>
  <div class="fluid container">
    <div>
      <label class="global-text-warp" hidden="true"><input hidden type="checkbox" v-model="editable">启动拖拽按钮</label>
    </div>

    <div class="room-top-warp">
      <draggable class="list-group" element="cell-group" v-model="studentClassRoom" :options="dragOptions" :component-data="getComponentData()" :move="onMove" @start="isDragging=true" @end="isDragging=false">
        <CellGroup v-for="classRoomItem in studentClassRoom" :key="classRoomItem.order">
          <cell class="list-group-item">
            <Icon type="md-move" slot="icon"/>
            <span class="global-text-warp" slot="label">{{classRoomItem.order}}</span>
            <span class="global-text-warp" slot="label">{{classRoomItem.name}}</span>
            <Button type="primary" shape="circle" slot="extra" v-on:click="changeVoiceStatus(classRoomItem.id, classRoomItem.mute)">
              <p>
                <Icon v-if="classRoomItem.mute === false" type="md-volume-up" />
                <Icon v-if="classRoomItem.mute === true" type="md-volume-off" />
                {{classRoomItem.voiceStatus}}</p>
            </Button>
          </cell>
          <br>
        </CellGroup>
      </draggable>
    </div>
  </div>

</template>

<script>
  import draggable from 'vuedraggable'
  import CellItem from "iview/src/components/cell/cell-item";

  export default {
    name: "ShowStudentRoom",
    components: {
      CellItem,
      draggable
    },
    data() {
      return {
        voiceStatus: '声音开启',
        studentClassRoom: [],
        deviceListFormBean: {},
        list2: [],
        editable: true,
        isDragging: false,
        delayedDragging: false
      };
    },
    created() {
      this.deviceListFormBean.deviceIds = null
      this.deviceListFormBean.courseId = this.$route.query.courseId

      this.$store.dispatch('fetchShowClassRoomList', this.deviceListFormBean)
        .then((res) => {
          const data = res.data
          console.log('fetchShowClassRoomList', data)
          this.studentClassRoom = data.map((data, index) => {
            if (data.mute === true) {
              this.voiceStatus = '开启声音'
            }
            if (data.mute === false) {
              this.voiceStatus = '关闭声音'
            }
            return {id: data.id, name: data.address, order: index + 1, voiceStatus: this.voiceStatus, mute: data.mute, fixed: false };
          })
        })
    },
    methods: {
      onMove({ relatedContext, draggedContext }) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (
          (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        );
      },
      inputChanged (value) {
        this.activeName = value
      },
      handleChange () {

      },
      getComponentData () {
        return {
          on: {
            change: this.handleChange,
            input: this.inputChanged
          },
          props: {
            value: this.activeName
          }
        }
      },
      changeVoiceStatus (deviceId, mute) {
        this.deviceListFormBean.deviceId = deviceId
        this.deviceListFormBean.voiceStatus = mute
        this.$store.dispatch('changeStudentDeviceVoice', this.deviceListFormBean)
          .then((res) => {
            const data = res.data
            this.studentClassRoom = data.map((data, index) => {
              if (data.mute === true) {
                this.voiceStatus = '开启声音'
              }
              if (data.mute === false) {
                this.voiceStatus = '关闭声音'
              }
              return {id: data.id, name: data.address, order: index + 1, voiceStatus: this.voiceStatus, mute: data.mute, fixed: false };
            })
          })
      },
      getShowStudentRoom () {
        this.deviceListFormBean.deviceIds = null
        this.deviceListFormBean.courseId = this.$route.query.courseId

        this.$store.dispatch('fetchShowClassRoomList', this.deviceListFormBean)
          .then((res) => {
            const data = res.data
            console.log('fetchShowClassRoomList', data)
            this.studentClassRoom = data.map((data, index) => {
              if (data.mute === true) {
                this.voiceStatus = '开启声音'
              }
              if (data.mute === false) {
                this.voiceStatus = '关闭声音'
              }
              return {id: data.id, name: data.address, order: index + 1, voiceStatus: this.voiceStatus, mute: data.mute, fixed: false };
            })
          })
      }
    },
    computed: {
      dragOptions() {
        return {
          animation: 0,
          group: "description",
          disabled: !this.editable,
          ghostClass: "ghost"
        };
      }
    },
    watch: {
      isDragging(newValue) {
        if (newValue) {
          this.delayedDragging = true;
          return;
        }
        this.$nextTick(() => {
          this.delayedDragging = false;
        });
      }
    }
  }
</script>

<style scoped>

  /*按钮*/
  .ivu-btn-primary {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
    border-width: 5px;
  }

  .ivu-cell {
    margin: 0px;
    line-height: normal;
    padding: 0.048611rem 0.111111rem;
    clear: both;
    color: #515a6e;
    font-size: 0.083333rem!important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background .2s ease-in-out;
  }

  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #051548;
  }
  .list-group {
    min-height: 18px;
  }
  .list-group-item {
    background: #192756;
    cursor: move;
    height: 80px;
    margin-left: 0px;
  }
  .list-group-item i {
    cursor: pointer;
  }

  .ivu-cell-item {
    height: 30px;
  }

  .ivu-icon-md-move:before {
    margin-left: -600px;
  }

  .ivu-cell[data-v-c76c0a96] {
    margin: 0;
    line-height: normal;
    padding: 0.048611rem 0.111111rem;
    clear: both;
    color: #515a6e;
    font-size: 0.083333rem!important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    -webkit-transition: background .2s ease-in-out;
    transition: background .2s ease-in-out;
  }

  .room-top-warp{
    margin-top: 20px;
  }

</style>
