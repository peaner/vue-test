<template>
  <Layout>
    <div slot="content">
      <div class="content-wrap">

        <div class="interactMode-title-top">
          <span class="global-text-warp">互动模式-学生教室间互动</span>
          <br/>
          <br/>
          <Button type="primary" v-on:click="backInteract" shape="circle">
            退出互动
          </Button>
        </div>

        <div class="classroom-center-wrap">

          <div class="interactMode-classroom-teacher-border">
            <div class="interactMode-classroom-teacher-warp">
              <div>
                <p class="global-text-warp classroom-address-content-wrap">教室地址1</p>
              </div>
              <div>
                <Icon class="classroom-text-warp classroom-voice-wrap" v-if="false" type="md-volume-up" size="18" />
                <Icon class="classroom-text-warp classroom-voice-wrap" v-if="true" type="md-volume-off" size="18" />
                <a class="classroom-text-warp classroom-voice-wrap">声音开启</a>
              </div>
              <div>
                <StudentsSelectRoom></StudentsSelectRoom>
              </div>
            </div>
          </div>

          <div class="interactMode-classroom-student-border">
            <div class="interactMode-classroom-student-warp">
              <div>
                <p class="global-text-warp classroom-address-content-wrap">教室地址2</p>
              </div>
              <div>
                <Icon class="classroom-text-warp classroom-voice-wrap" v-if="false" type="md-volume-up" size="18" />
                <Icon class="classroom-text-warp classroom-voice-wrap" v-if="true" type="md-volume-off" size="18" />
                <a class="classroom-text-warp classroom-voice-wrap">声音开启</a>
              </div>
              <div>
                <StudentsSelectRoom></StudentsSelectRoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import StudentsSelectRoom from "../../components/common/StudentsSelectRoom";
    export default {
      name: "InteractModeStudents",
      components: {
        StudentsSelectRoom,
        Layout
      },
      methods: {
        backInteract () {
          let courseId = this.$route.query.courseId
          this.$router.push({
            path: '/?courseId=' + courseId
          });
        }
      }
    }
</script>

<style scoped>

  .content-wrap{
    width: 1500px;
    /*height: 70vh;*/
    margin: 0 auto;
    background-color: #051548;
    /*#efecff;*/
  }

  .interactMode-title-top {
    margin-top: 40px;
    margin-left: -1500px;
  }

  .classroom-center-wrap {
    margin-top: 20%;
    background-color: #0e0525;
    height: 550px;
  }

  .interactMode-classroom-teacher-warp {
    width: 93%;
    height: 80%;
    margin-top: 20px;
    margin-left: 9px;
    margin-bottom: 9px;
    margin-left: 22px;
    float: left;
    border-style:solid;
    border-width:1px;
    border-color: #fff;
  }

  .interactMode-classroom-teacher-border {
    width: 45%;
    height: 50%;
    float: left;
    margin-top: 130px;
    margin-left: 30px;
    border-style:solid;
    border-width:1px;
    border-color: #fff;
  }

  .interactMode-classroom-student-warp {
    width: 93%;
    height: 80%;
    margin-top: 20px;
    margin-left: 9px;
    margin-bottom: 9px;
    margin-right: 22px;
    float: right;
    border-style:solid;
    border-width:1px;
    border-color: #fff;
  }

  .interactMode-classroom-student-border {
    width: 45%;
    height: 50%;
    float: right;
    margin-top: 130px;
    margin-right: 30px;
    border-style:solid;
    border-width:1px;
    border-color: #fff;
  }

  .classroom-address-content-wrap {
    margin-top: 40px;
  }

  .classroom-voice-wrap {
    float: left;
    margin-left: 40px;
    margin-top: 30px;
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
