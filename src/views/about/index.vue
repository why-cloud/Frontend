 <template>
       
  <div class="mod-demo-echarts">
       <figure>
            <img src="../../../static/img/head-view/1.png" width="100%" height="90px">
        </figure>
    <el-row :gutter="20">
      <el-col :span="20">
        <el-card>
            <div id="J_chartScatterBox" class="chart-box">
          <el-table
      :data="tableData"
      style="width: 80%">
      <el-table-column
        prop="date"
        
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        
        width="180">
      </el-table-column>
      <!-- <el-table-column
        prop="address"
        label="地址">
      </el-table-column> -->
    </el-table>
    </div>
        </el-card>
      </el-col> 
    </el-row>

    
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '社名',
            name: 'OO会社',
            
          }, {
            date: '代表者',
            name: 'OOO',
          }, {
            date: '創立年月日',
            name: 'oooo-oo-oo',
          }, {
            date: '事業内容',
            name: ' oooo',
          }
          , {
            date: '所在地',
            name: 'oooooooo',
          }]
        }
      }
    }
  </script>
  <style lang="scss">
  .mod-demo-echarts {
    > .el-alert {
      margin-bottom: 100px;
      margin:0 auto
    }
    .el-card__body {
      width: 100%;
    }
    > .el-row {
      margin-top: 100px;
      margin-bottom: 100px;
      .el-col {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .chart-box {
      width: 800px;
      margin:0 auto
    }
  }
</style>

