
1. ``` npm install ```

2. ``` nohup ganache-cli &! ```

3. 启动服务器 ``` node app.js ```

4. 配置地址和token
   
   PUT /eth

   请求体
   ``` json
   {
       "url": "http://localhost:8545",
       "token": "token" /*智能合约的地址*/
   }    
   ```

5. 获取数据
   GET /livingRoom

   相应体
   ``` json
    {
        "code": "0",
        "msg": "",
        "info": {
            "airConditioner": {
                "on": false,
                "temperature": "33"
            },
            "tv": {
                "on": true
            },
            "light": {
                "on": false
            }
        }
    }
   ```

6. 修改数据

   PUT /livingRoom

   请求体

   ``` json
    {
        "airConditioner": {
            "on": false,
            "temperature": "33"
        },
        "tv": {
            "on": true
        },
        "light": {
            "on": false
        }
    }
   ```