#

1. ```npm install```

2. ```nohup ganache-cli --allowUnlimitedContractSize --gasLimit=0x1fffffffffffff &!```

3. ```node app.js```

4. 配置地址和token

   PUT /eth

   请求

   ``` json
   {
       "url": "http://localhost:8545",
       "token": "token" /*智能合约的地址*/
   }
   ```

5. 获取数据
   GET /livingRoom

   响应

    ``` json
    {
        "code": "0",
        "msg": "",
        "info": {
            "airConditioner": {
                "on": true,
                "temperature": "333"
            },
            "tv": {
                "on": true
            },
            "light": {
                "on": false
            },
            "history": [
                "电视已经关闭，关闭时间：18:35",
                "电灯已经打开，打开时间：18:40",
                "电视已经打开，打开时间：18:41",
                "空调已经打开， 设置温度摄氏度，打开时间：18:41",
                "空调温度已经改变，温度：232摄氏度，改变时间：18:41",
                "空调温度已经改变，温度：232摄氏度，改变时间：18:41"
            ]
        }
    }
   ```

6. 修改数据

   PUT /livingRoom

   请求

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
        },
        "history": [
            "电视已经关闭，关闭时间：18:35",
            "电灯已经打开，打开时间：18:40",
            "电视已经打开，打开时间：18:41",
            "空调已经打开， 设置温度摄氏度，打开时间：18:41",
            "空调温度已经改变，温度：232摄氏度，改变时间：18:41",
            "空调温度已经改变，温度：232摄氏度，改变时间：18:41"
        ]
    }
   ```