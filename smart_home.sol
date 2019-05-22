
pragma solidity ^0.4.17;
contract Smart_home{
    string public living_room_Air_conditioner_S;
    string public living_room_Air_conditioner_T;
    string public living_room_TV;
    string public living_room_light;
    string public living_room_history;
    
    string public kitchen_light;
    string public kitchen_Microwave_Oven;
    string public kitchen_Rice_cooker;
    string public kitchen_Lampblack_machine;
    string public kitchen_history;
    
    string public room1_light;
    string public room1_Bedside_lamp;
    string public room1_TV;
    string public room1_Air_conditioner_S;
    string public room1_Air_conditioner_T;
    string public room1_history;
    
    string public room2_light;
    string public room2_Bedside_lamp;
    string public room2_TV;
    string public room2_Air_conditioner_S;
    string public room2_Air_conditioner_T;
    string public room2_history;
    
    string public restroom_light;
    string public restroom_Heater;
    string public restroom_Heating;
    string public restroom_history;

    // start history

    function get_living_room_history() view public returns (string) {
        return living_room_history;
    }

    function set_living_room_history(string memory rhs1) public {
        living_room_history = rhs1;
    }

    function get_kitchen_history() view public returns (string) {
        return kitchen_history;
    }

    function set_kitchen_history(string memory rhs2) public {
        kitchen_history = rhs2;
    }

    function get_room1_history() view public returns (string) {
        return room1_history;
    }

    function set_room1_history(string memory rhs3) public {
        room1_history = rhs3;
    }

    function get_room2_history() view public returns (string) {
        return room2_history;
    }

    function set_room2_history(string memory rhs4) public {
        room2_history = rhs4;
    }

    function get_restroom_history() view public returns (string) {
        return restroom_history;
    }

    function set_restroom_history(string memory rhs5) public {
        restroom_history = rhs5;
    }

    // end history

    //living_room_Air_conditioner
    function setMessageLivingRoomAirConditioner_S(string memory newliving_room_Air_conditioner_S)public{
        living_room_Air_conditioner_S=newliving_room_Air_conditioner_S;
    }
    
     function getMessageLivingRoomAirConditioner_S() view public returns (string){
         return living_room_Air_conditioner_S;
     }
     
     
    function setMessageLivingRoomAirConditioner_T(string memory newliving_room_Air_conditioner_T)public{
        living_room_Air_conditioner_T=newliving_room_Air_conditioner_T;
    }
    
     function getMessageLivingRoomAirConditioner_T() view public returns (string){
         return living_room_Air_conditioner_T;
     }
    //living_room_TV
    function setMessageLivingRoomTV(string memory newliving_room_TV)public{
        living_room_TV=newliving_room_TV;
    }   
    function getMessageLivingRoomTV()public view returns(string){
        return living_room_TV;
    }
    //living_room_light
    function setMessageliving_room_light(string memory newliving_room_light)public{
        living_room_light=newliving_room_light;
    }
    function getMessageliving_room_light()public view returns(string){
        return living_room_light;
    }
    
    //kitchen;
    //kitchen_light;
    function setMessagekitchen_light(string newkitchen_light)public{
        kitchen_light=newkitchen_light;
    }
    function getMessagekitchen_light()public view returns(string){
        return kitchen_light;
    }
    //kitchen_Microwave_Oven
    function setMessagekitchen_Microwave_Oven(string newkitchen_Microwave_Oven)public{
        kitchen_Microwave_Oven=newkitchen_Microwave_Oven;
    }
    function getMessagekitchen_Microwave_Oven()public view returns(string){
        return kitchen_Microwave_Oven;
    }
    //kitchen_Rice_cooker
    function setMessagekitchen_Rice_cooker(string newkitchen_Rice_cooker)public{
        kitchen_Rice_cooker=newkitchen_Rice_cooker;
    }
    function getMessagekitchen_Rice_cooker()public view returns(string){
        return kitchen_Rice_cooker;
    }
    //kitchen_Lampblack_machine
    function setMessagekitchen_Lampblack_machine(string newkitchen_Lampblack_machine)public{
        kitchen_Lampblack_machine=newkitchen_Lampblack_machine;
    }
    function getMessagekitchen_Lampblack_machine()public view returns(string){
        return kitchen_Lampblack_machine;
    }
    
    //room1
    //room1_Air_conditioner;
   function setMessageroom1AirConditioner_S(string newroom1_Air_conditioner_S)public{
        room1_Air_conditioner_S=newroom1_Air_conditioner_S;
    }
    function getMessageroom1_Air_conditioner_S() view public returns (string){
        return room1_Air_conditioner_S;
     }
    
   function setMessageroom1AirConditioner_T(string newroom1_Air_conditioner_T)public{
        room1_Air_conditioner_T=newroom1_Air_conditioner_T;
    }
    function getMessageroom1_Air_conditioner_T() view public returns (string){
        return room1_Air_conditioner_T;
     }
    //room1_ligth
    function setMessageroom1_ligth(string newroom1_light)public{
        room1_light=newroom1_light;
    }
    function getMessageroom1_light()public view returns(string){
        return room1_light;
    }
    //room1_Bedside_lamp
    function setMessageroom1_Bedside_lamp(string newroom1_Bedside_lamp)public{
        room1_Bedside_lamp=newroom1_Bedside_lamp;
    }
    function getMessageroom1_Bedside_lamp()public view returns(string){
        return room1_Bedside_lamp;
    }
    //room1_TV
    function setMessageroom1_TV(string newroom1_TV)public{
        room1_TV=newroom1_TV;
    }
    function getMessageroom1_TV()public view returns(string){
        return room1_TV;
    }
     //room2
    //room2_Air_conditioner;
   function setMessageroom2AirConditioner_S(string newroom2_Air_conditioner_S)public{
        room2_Air_conditioner_S=newroom2_Air_conditioner_S;
    }
    function getMessageroom2_Air_conditioner_S() view public returns (string){
        return room2_Air_conditioner_S;
     }
     
     
   function setMessageroom2AirConditioner_T(string newroom2_Air_conditioner_T)public{
        room2_Air_conditioner_T=newroom2_Air_conditioner_T;
    }
    function getMessageroom2_Air_conditioner_T() view public returns (string){
        return room2_Air_conditioner_T;
     }
    //room2_light
    function setMessageroom2_light(string newroom2_light)public{
        room2_light=newroom2_light;
    }
    function getMessageroom2_light()public view returns(string){
        return room2_light;
    }
    //room2_Bedside_lamp
    function setMessageroom2_Bedside_lamp(string newroom2_Bedside_lamp)public{
        room2_Bedside_lamp=newroom2_Bedside_lamp;
    }
    function getMessageroom2_Bedside_lamp()public view returns(string){
        return room2_Bedside_lamp;
    }
    //room2_TV
    function setMessageroom2_TV(string newroom2_TV)public{
        room2_TV=newroom2_TV;
    }
    function getMessageroom2_TV()public view returns(string){
        return room2_TV;
    }
    //restroom_Heating
    /*string public restroom_light;
    string public restroom_Heater;
    string public restroom_Heating;*/
    //restroom_light
    function setMessagerestroom_light(string newrestroom_light)public{
        restroom_light=newrestroom_light;
    }
    function getMessagerestroom_light()public view returns(string){
        return restroom_light;
    }
    //restroom_Heater
    function setMessagerestroom_Heater(string newrestroom_Heater)public{
        restroom_Heater=newrestroom_Heater;
    }
    function getMessagerestroom_Heater()public view returns(string){
        return restroom_Heater;
    }
    //restroom_Heating
    function setMessagerestroom_Heating(string newrestroom_Heating)public{
        restroom_Heating=newrestroom_Heating;
    }
    function getMessagerestroom_Heating()public view returns(string){
        return restroom_Heating;
    }
}
