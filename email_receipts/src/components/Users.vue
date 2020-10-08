<template>
    <div id="user" class="user main">
        <div class="header">
            <div class="title main">
                <span>申请单列表</span>
            </div>
        <!-- 查询区域 -->
            <div class="search">
                    <div class="search conditon">
                        申请单号：<input type="text" placeholder="单号">
                        申请人：<input type="text" placeholder="申请人">
                        票据类型：
                        <select class="recepitsType">
                            <option id="emailRe">电子收据</option>
                            <option id="manulRe">手工收据</option>
                        </select>
                        区域：
                        <select>
                            <option id="">成华区</option>
                            <option id="">郫都区</option>
                            <option id="">锦江区</option>
                            <option id="">崇州市</option>
                        </select>
                        申请时间：<input type="date">至<input type="date">
                    </div>
                <div class="right">
                    <router-link to="/add"><button  type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg"  >新增</button></router-link>
                    
                    <input type="button" class="btn btn-info" value="查询">
                    <input type="button" @click="expert2Excel()" class="btn btn-sm btn-outline-secondary" value="导出">
                 </div>
                 <!-- 新导入 -->
               
            </div>
        </div>
        <!-- 表格内容 -->
        <div class="msgTable">
            <Table :columns="comlumn1" :data="receipt" id="msgTable" >
                

                    <!-- <tr>
                        <td>
                            <router-link to="/add"><button  type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg"  >编辑</button></router-link>
                            <button class="btn btn-info" >查看</button>
                            <button class="btn btn-success" >流程跟踪</button>
                        </td>  
                    </tr> -->
            

            </Table>
        </div>


    </div>
</template>

<script>

import $ from 'jquery';
export default {
    name:"Users",
      //父向子传值
    props:["person"],
//      props:{
//          person:{type:Array, required=true },
//          users:{ type:String, required=true}...
//     }
    provide(){
        return{
             reloadAll:this.reloadAll
        }
    },
    data(){
        return{
            comlumn1:[
                {title:'流程类型',key:'progressType'},
                {title:'申请单号',key:'applyReceiptsId'},
                {title:'申请时间',key:'addTime'},
                {title:'申请人',key:'receiptsAddUserId'},
                {title:'申请事由',key:'applyFor'},
                {title:'票据类型',key:'receiptsType'},
                {title:'票据金额',key:'totalfee'},
                {title:'流程状态',key:'progressStatus'},
                {title:'当前环节',key:'status'},
                {title:'当前处理人',key:'emailReceiptsExaminerName'},
                 {
                        title: '操作',
                        slot: 'operation',
                        width: 150,
                        align: 'center'
                    }
            
            ],
            users: {
                "user1":"cheng",
              
            },
            receipt:[],
            isRouterAlive=true,
           
            
        }
    },
    created(){
        this.$http.get("http://192.168.99.83:8090/getRe")
        .then(function(response){
          this.receipt = response.body.result.content;
          console.log(this.receipt);
         
        })
      },
      methods:{
          show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                });
                console.log(index);
            },
            remove (index) {
                this.data6.splice(index, 1);
                console.log(index);
            },
            reloadAll(){
                this.isRouterAlive=false;
                this.$nextTick(() =>{
                    this.isRouterAlive=true;
                })
            }
      }
     
   
}
</script>
<style>
    @import "../static/allCss/bootstrap.css";
    @import "../static/allCss/public.css";


</style>
<style scope src="../static/allCss/user.css" ></style>