<template>
  <div class="add">
      <div class="header">
          <h1>收据新增页面</h1>
      </div>
     <div class="addmain" >
       
       
            票据类型:
                    <Select :model.sync="model1" @change="getType($event)" v-model="typeActive"   style="width:200px">
                         <Option v-for="(item,index) in typeList" :value="item.value" :key="index">{{ item.label }}</Option>
                    </Select>
                   
            缴费类型:<select>
                        <option>预交费</option>
                        <option>后缴费</option>
                    </select>
            票据形式:<select class="recepitsType">
                        <option value="1">电子收据</option>
                        <option value="2">发票</option>
                    </select><br>
                  
                    <ul class="view">
                        <li>
                              预览票据: <Button type="primary" @click="seeModel()">预览票据</Button>
                                <Modal
                                    v-model="modal1"
                                    title="票据预览"
                                    @on-ok="ok"
                                    @on-cancel="cancel" width="800px">
                                  <div class="receipts">
                                    <h3>电子收款收据</h3>
                                    <ul class="">
                                        <li><span>今收到:</span></li>
                                        <li><ol>
                                                <li>xxx项目费用 1654元</li>
                                                <li>xxx项目费用 1654元</li>
                                                <li>xxx项目费用 1654元</li>
                                            </ol>
                                        </li>

                                        <li><span>备注:</span>大客户</li>

                                        <li><span>金额:万 仟 佰 拾 元 角 分</span></li>

                                        <li><span>收款单位:</span> ￥3333元</li>
                                        <li>复核人：<span>李某</span> 收款人：<span>王某</span></li>
                                        <li>购房手机<span>1346546852323</span> 购方邮箱<span>1545465@189.com</span></li>


                                    </ul>
                                  </div>
                                </Modal>
                                 <Modal
                                    v-model="modal2"
                                    title="票据预览"
                                    @on-ok="ok"
                                    @on-cancel="cancel" width="800px">
                                   <div class="receipts">
                                        <h3>增值税普通发票</h3>
                                            <table border="1px black solid" class="totalModel">
                                                <tbody>
                                                    
                                                    <tr>
                                                        <td>购方名称</td>
                                                        <td>1</td>
                                                        <td>发票代码</td>
                                                        <td>2</td>
                                                    </tr>
                                                       <tr>
                                                        <td>购方税号</td>
                                                        <td>3</td>
                                                        <td>发票号码</td>
                                                        <td>44</td>
                                                    </tr>
                                                       <tr>
                                                        <td>购方开户行及账号</td>
                                                        <td>5</td>
                                                        <td>开票日期</td>
                                                        <td>6</td>
                                                    </tr>
                                                       <tr>
                                                        <td>购方地址及电话</td>
                                                        <td>7</td>
                                                        <td colspan="2"></td>
                                                       
                                                    </tr>
                                                       <tr> 
                                                        <td colspan="4">
                                                            <table class="itemList" border="1px black solid">
                                                                <thead>
                                                                    <tr>
                                                                        <th>商品名称</th>
                                                                        <th>规格型号</th>
                                                                        <th>计量单位</th>
                                                                        <th>数量</th>
                                                                        <th>单价（不含税）</th>
                                                                        <th>金额（不含税）</th>
                                                                        <th>税率</th>
                                                                        <th>税额</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>2</td>
                                                                        <td>3</td>
                                                                        <td>4</td>
                                                                        <td>5</td>
                                                                        <td>6</td>
                                                                        <td>7</td>
                                                                        <td>8</td>                                                                      
                                                                    </tr>
                                                                     
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4" >
                                                            价税合计（大写） 小写
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>消方名称</td>
                                                        <td>中国电信</td>
                                                        <td rowspan="4" colspan="2">备注信息：</td>
                                                    </tr>
                                                    <tr>
                                                        <td>消方税号</td>
                                                        <td>51349021300040X</td>

                                                    </tr>
                                                     <tr>
                                                        <td>销方开户行及账号</td>
                                                        <td>2320632109100030000</td>

                                                    </tr>
                                                     <tr>
                                                        <td>销方地址及电话</td>
                                                        <td>会东县会东镇金叶街66号</td>

                                                    </tr>
                                                    <tr>
                                                        <td>收款人：</td>
                                                        <td>复核人：</td>
                                                        <td>开票人：</td>
                                                        <td>销售方：（章）</td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                   </div>
                                </Modal>
                        </li>
                        <li class="daoru"> 导入文件：<div class="upload-csv">
                                            <a href="javascript:;" class="csv-btn" v-show="!againUpload && !loadingCSV">
                                                <input id="uploadCsv" ref="inputer" type="file" @change="importExcel($event)"/>
                                                +导入
                                            </a>
                                            <p style="margin-top: 18px;" v-show="loadingCSV"><em class="num-loading"></em></p>
                                            <span style="display: inline-block;margin-top: 20px" v-show="againUpload">
                                                <em class="font_family icon-csv csv-pic"></em>{{ CSVname }} <!--表格的图标-->
                                                <em class="font_family icon-finish g-c-41f g-ml-5" style="vertical-align: middle;"></em><!--表格完成的图标-->
                                            </span>
                                            
                                            </div>
                        </li>
                        <li>下载模板：<button>下载票据模板</button></li>                 
                    </ul>
                                     
                    <W
                    
            申请事由:<textarea class="applyfor" placeholder="请输入申请事由"></textarea>
            总金额:  <input type="text" placeholder="总金额" readonly/>

        
     <div class="buttom">
        <Button @click="findHello()">保存</Button>
    </div>   
     </div>
         
  </div>
</template>

<script>
import $ from 'jquery';


export default {
  name: 'Add',
  data () {
    return {
       typeList:[
           {value:"emailReceipts",label:"电子收据"},
           {value:"manulReceipts",label:"手工发票"}

       ],
       modal1: false,
       modal2: false,
       model1: '',
       typeActive: "1",
       againUpload:false,
        loadingCSV:false,
        CSVname:'',
    }
  },
  methods:{
       seeModel(){
           var select = document.getElementsByClassName("recepitsType")[0];
           var index = select.selectedIndex;
           var options = select.options;
            var type = options[index].value;
            console.log(index);
            if(index ==0){
                this.modal1=true;
            }
            if(index ==1){
                this.modal2 =true;
            }
            
          },
          ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            },
            getType:function(event){
                this.typeActive = event.target.value;
                console.log(this.typeActive);
            },
             importExcel(event) {
            let _this = this;
            // 通过DOM取文件数据
            let files = event.currentTarget.files[0];
            var rABS = false; //是否将文件读取为二进制字符串
            var f = files;
            if (files.length == 0) return;
            let fileType = files.name.substr(files.name.lastIndexOf(".")).toUpperCase();
            let fileSize = files.size / 1024 / 1024 < 10;
            if (fileType != ".XLS" && fileType != ".XLSX") {
                this.$message.error('上传文件必须是xls、xlsx格式!');
                return;
            }
            if(!fileSize){
                this.$message.error('单次提交的csv文件不可大于10M，请将文件拆分多个分次提交!');
                return;
            }
            this.loadingCSV = true
            var reader = new FileReader();
            FileReader.prototype.readAsBinaryString = function(f) {
                var binary = "";
                var rABS = false; //是否将文件读取为二进制字符串
                var wb; //读取完成的数据
                var outdata;
                var reader = new FileReader();
                reader.onload = function(e) {
                var bytes = new Uint8Array(reader.result);
                var length = bytes.byteLength;
                for(var i = 0; i < length; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                var XLSX = require('xlsx');
                if(rABS) {
                    wb = XLSX.read(btoa(fixdata(binary)), { //手动转化
                    type: 'base64'
                    });
                } else {
                    wb = XLSX.read(binary, {
                    type: 'binary'
                    });
                }
                outdata = XLSX.utils.sheet_to_csv(wb.Sheets[wb.SheetNames[0]]);//outdata就是读取excel内容之后输出的东西
                console.log(wb.Sheets.Sheet1) /*读取表格内容*/
                _this.CSVname = files.name
                // _this.$message.success('上传成功！');
                _this.loadingCSV = false /*loading 文件太大可用*/
                _this.againUpload = true
                }
                reader.readAsArrayBuffer(f);
            }
            if(rABS) {
                reader.readAsArrayBuffer(f);
            } else {
                reader.readAsBinaryString(f);
            }
            },
            findHello(){
                this.$router.push({
				name: 'hello',
			});
            }
  },
  components:{
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../static/allCss/add.css">
</style>
<style src='../static/allCss/bootstrap.css'>

</style>