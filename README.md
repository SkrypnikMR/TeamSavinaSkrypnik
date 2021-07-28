# TeamSavinaSkrypnik

# README - HTTP Requests #

### Requests for registration ###

- URL: http://35.176.167.155:8089/registration/reg;
- requestType: POST;
- bodyType: raw/json;
- requestBody:

        String login (not null, min = 1, max = 25, latin symbols and numbers);    
        String password (not null, min = 6, max = 25 latin symbols and numbers without spaces);

- Valid request/response example:

        request:  
        { "login" :   "Mike", "password" : "qwerty1234"}

        response:  
        Status: 201 CREATED;     
        body: "";

- Invalid requests/response example:

1) Login pattern mismatch

        request     
        { "login" :  "qwerР“ty123", "password" : "qwerrty"  }

        response    
        Status: 400 Bad request;    
        body : "Only Latin characters and numbers, from 1 to 25 characters";

2) Null login

        request     
        { "login" :  null, "password" : "qwerty"  }

        response    
        Status: 400 Bad request;    
        body : "Field may not be absent";

3) Not unique login

    - first step

            request:  
            { "login" :   "Mike", "password" : "qwerty1234"}

            response:   
            Status: 201 CREATED;   
            body: Registered;

    - second step

            request:  
            { "login" :   "Mike", "password" : "qwerty1234"}

            response:   
            Status: 400 Bad Request;   
            body: User Mike already exists;


4) Password pattern mismatch

        request     
        { "login" :  "qwerty123", "password" : "qwe"  }

        response    
        Status: 400 Bad request;    
        body : "Only Latin characters and numbers, no spaces, more than 6 characters";

5) Null password

        request     
        { "login" :  "trolan", "password" : null  }

        response    
        Status: 400 Bad request;    
        body : "Field may not be absent";
6) Login max symbols

        request     
        { "login" :  "trolan12345678901234567891", "password" : "123456"  }

        response    
        Status: 400 Bad request;    
        body : "Login max symbols is 25";

6) Password min symbols

        request     
        { "login" :  "trolan", "password" : "1234"  }

        response    
        Status: 400 Bad request;    
        body : "Password max symbols is 25 (min = 6)";

7) Password max symbols

        request     
        { "login" :  "trolan", "password" : "12345687123456789123456789012"  }

        response    
        Status: 400 Bad request;    
        body : "Password max symbols is 25 (min = 6)";

### Requests for authorization ###

- URL: http://35.176.167.155:8089/authorization/auth;
- requestType: POST;
- bodyType: raw/json;
- requestBody:

        String login (not null, min = 1, max = 25, latin symbols and numbers);    
        String password (not null, min = 6, latin symbols and numbers without spaces);

- Valid request/response example:

        request:  
        { "login" :   "Mike", "password" : "qwerty1234"}

        response:  
        Status: 200 OK;     
        body: {Json Web Token};

- Invalid requests/response example:

1) User is not registered

        request     
        { "login" :  "trolan123", "password" : "qwerrty"  }

        response    
        Status: 401 Unauthorized;    
        body : "User trolan123 was not found";

2) Null login

        request     
        { "login" :  null, "password" : "qwerty"  }

        response    
        Status: 400 Bad request;    
        body : "Field may not be absent";
3) Null password

        request     
        { "login" :  "trolan", "password" : null  }

        response    
        Status: 400 Bad request;    
        body : "Field may not be absent";

4) Incorrect credentials

        request     
        { "login" :  "trolan", "password" : "1234F456"  }

        response    
        Status: 401 Unauthorized;    
        body : "Incorrect credentials";

### Requests for statistic ###
#### Search by uuid:
- URL: http://35.176.167.155:8089/statistic/search-by-uuid;
- requestType: POST;
- bodyType: raw/json;
- requestBody:

        String uuid (not null);    

- Valid request/response example:

        request:
          body:
  	    { "uuid" : "738c403f-d37d-445b-871d-ea02eaf78b56" }
          headers:
  	    Authorization : {Json Web Token};

        response:  
        Status: 200 OK;     
        body:
        {
    	    "uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
    	    "startTime": 123456,
    	    "finishTime": 1234567,
    	    "creatorLogin": "tr0lan",
    	    "secondUserLogin": "vuradoZ",
    	    "winnerLogin": null,
    	    "draw": true,
    	    "gameType": "Checkers",
    	    "listSteps": [
            {
            	"stepTime": 123456,
            	"login": "vuradoZ",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vpravo"
        	},
        	{
            	"stepTime": 1234567,
            	"login": "tr0lan",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vlevo"
        	},
        	{
            	"stepTime": 1234568,
            	"login": "vuradoZ",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vverh"
        	},
        	{
            	"stepTime": 1234569,
            	"login": "tr0lan",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vniz"
        	}
    	    ]
        } 

- Invalid requests/response example:

1) Absent uuid

        request:     
        { "uuid" : null } or { "id" : "738c403f-d37d-445b-871d-ea02eaf78b56" }
        headers:
    	    Authorization : {Json Web Token};        
    
        response:    
        Status: 400 Bad request;    
        body : "Uuid cannot be absent";
2) Game result was not found

        request:     
        { "uuid" : "738c403f-d37d-446b-873d-ea01eaf78b56" }
        headers:
    	    Authorization : {Json Web Token};        

        response    
        Status: 400 Bad request;    
        body : "Game result 738c403f-d37d-446b-873d-ea01eaf78b56 was not found";

3) Absent header Authorization

        request:     
        { "uuid" : "738c403f-d37d-446b-873d-ea01eaf78b56" }
        headers:
    	    Authorization : null/illigal token/empty header;
        
        response:    
        Status: 401 Unauthorize;    
        body : "";

#### Search by username:
- URL: http://35.176.167.155:8089/statistic/search-by-username;
- requestType: POST;
- bodyType: raw/json;
- requestBody:

        String usermane (not blank);    

- Valid request/response example:

        request:
          body:
  	    { "username" : "tr0lan" }
          headers:
  	    Authorization : {Json Web Token};

        response:  
        Status: 200 OK;     
        body:
        {
    	    "uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
    	    "startTime": 123456,
    	    "finishTime": 1234567,
    	    "creatorLogin": "tr0lan",
    	    "secondUserLogin": "vuradoZ",
    	    "winnerLogin": null,
    	    "draw": true,
    	    "gameType": "Checkers",
    	    "listSteps": [
            {
            	"stepTime": 123456,
            	"login": "vuradoZ",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vpravo"
        	},
        	{
            	"stepTime": 1234567,
            	"login": "tr0lan",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vlevo"
        	},
        	{
            	"stepTime": 1234568,
            	"login": "vuradoZ",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vverh"
        	},
        	{
            	"stepTime": 1234569,
            	"login": "tr0lan",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vniz"
        	}
    	    ]
        } 

- Invalid requests/response example:
1) Absent username

       request:     
       { "username" : null } or { "username" : "     " }

       response:    
       Status: 400 Bad request;    
       body : "Username cannot be absent";

2) Game result was not found bt login

        request:     
        { "username" : "trilan" }
        headers:
    	    Authorization : {Json Web Token};        

        response:    
        Status: 400 Bad request;    
        body : "Incorrect login trilan";

3) Absent header Authorization

        request:     
        { "username" : "tr0lan" }
        headers:
    	    Authorization : null/illigal token/empty header;
        
        response:    
        Status: 401 Unauthorize;    
        body : ""

#### Search by time period:
- URL: http://35.176.167.155:8089/statistic/search-by-time-period;
- requestType: POST;
- bodyType: raw/json;
- requestBody:

        long(number - time in milliseconds) timeFrom (not null);    
        long(number - time in milliseconds) timeUntil (not null);    

- Valid request/response example:

        request:
          body:
  	    { "timeFrom" : "123456", "timeUntil" : "1234567" }
          headers:
  	    Authorization : {Json Web Token} (you will get jwt after authorization);

        response:  
        Status: 200 OK;     
        body:
        {
    	    "uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
    	    "startTime": 123456,
    	    "finishTime": 1234567,
    	    "creatorLogin": "tr0lan",
    	    "secondUserLogin": "vuradoZ",
    	    "winnerLogin": null,
    	    "draw": true,
    	    "gameType": "Checkers",
    	    "listSteps": [
            {
            	"stepTime": 123456,
            	"login": "vuradoZ",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vpravo"
        	},
        	{
            	"stepTime": 1234567,
            	"login": "tr0lan",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vlevo"
        	},
        	{
            	"stepTime": 1234568,
            	"login": "vuradoZ",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vverh"
        	},
        	{
            	"stepTime": 1234569,
            	"login": "tr0lan",
            	"uuidGame": "738c403f-d37d-445b-871d-ea02eaf78b56",
            	"step": "vniz"
        	}
    	    ]
        } 

- Invalid requests/response example:

1) Absent timeUntil/timeFrom

        request:     
        { "timeFrom" : "123456", "timeUntil" : null } 

        response:    
        Status: 400 Bad request;    
        body : "Time until/from cannot be absent";

2) Absent header Authorization

        request:     
        { "username" : "tr0lan" }
        headers:
    	    Authorization : null/illigal token/empty header;
        
        response:    
        Status: 401 Unauthorize;    
        body : "";

# README - Websocket Requests #

      WebSocket connection url - ws://35.176.167.155:8089/game-menu
      Note: before connect you have to authorize user and get Json Web Token,
      then you have to set it in to the connection request header in format:
      Authorization: "Bearer " + token

- Topics to subscribe to get the answer

1) /topic/rooms - if message was sent on this topic, all clients will get message
2) /user/topic/errors - if message was sent on this topic, only you will get error message
3) /user/topic/game/ - if message was sent on this topic, only you will get possible steps message
4) /topic/game/${uuid} - topic with game (uuid - id of the game)
5) /topic/bot/${uuid} - topic with bot steps

### Message Mappings ###

(before mapping put application destination - "/radioactive". Example - "/radioactive/create-room" )

 -     1)/create-room  (validation: already existing room, not empty, not null creatorLogin and gameType)
       valid: {"creatorLogin":"trolan", "gameType":"Checkers", "id":null}
       answer: all existing rooms:
       [{"creatorLogin":"ufora","gameType":"Checkers","id":"a1b56ce2-bce1-44eb-b6c1-eee5ff112f2c"},
       {"creatorLogin":"jeid","gameType":"Checkers","id":"eecf167b-26d8-4715-a16f-3f0fa3da28dc"},
       {"creatorLogin":"vurado","gameType":"Checkers","id":"2e1498cc-d0e7-4e75-b72d-15bc8e5817fd"},
       {"creatorLogin":"trolan","gameType":"Checkers","id":"0a90c4f2-2227-47a7-8041-fcacbe2f7d44"}]       
       invalid: {"creatorLogin":null, "gameType":"Checkers", "id":null}
       answer: {"headers":{"Content-Type":["application/json"]},"body":"Creator can not be absent!","statusCode":"BAD_REQUEST",
       "statusCodeValue":400}

-
      2)/update-room (empty request)
      valid: {}
      answer: all existing rooms:
      [{"creatorLogin":"ufora","gameType":"Checkers","id":"a1b56ce2-bce1-44eb-b6c1-eee5ff112f2c"},
      {"creatorLogin":"jeid","gameType":"Checkers","id":"eecf167b-26d8-4715-a16f-3f0fa3da28dc"},
      {"creatorLogin":"vurado","gameType":"Checkers","id":"2e1498cc-d0e7-4e75-b72d-15bc8e5817fd"},
      {"creatorLogin":"trolan","gameType":"Checkers","id":"0a90c4f2-2227-47a7-8041-fcacbe2f7d44"}]

-
      3)/delete-room (validation: don`t existing room, empty or blank login, incorrect uuid signature or null uuid)
      valid: {"guestLogin":"radioactive","id":" 63ab1b83-9231-43f2-9dd6-95cfc3aa8830"}
      answer: all existing rooms:
      [{"creatorLogin":"ufora","gameType":"Checkers","id":"a1b56ce2-bce1-44eb-b6c1-eee5ff112f2c"},
      {"creatorLogin":"jeid","gameType":"Checkers","id":"eecf167b-26d8-4715-a16f-3f0fa3da28dc"},
      {"creatorLogin":"vurado","gameType":"Checkers","id":"2e1498cc-d0e7-4e75-b72d-15bc8e5817fd"},
      {"creatorLogin":"trolan","gameType":"Checkers","id":"0a90c4f2-2227-47a7-8041-fcacbe2f7d44"}]

      invalid: {"creatorLogin":"jeid","id":"trolan"}
      answer: {"headers":{"Content-Type":["application/json"]},"body":"Invalid UUID string: asdasd","statusCode":"BAD_REQUEST",
      "statusCodeValue":400}
      

- After joining room game will automatically start
      4)/join-room (validation: don`t existing room, empty or blank login, incorrect uuid signature or null uuid)
      valid: {"guestLogin":"Vurado","id":"3e9961bb-518b-48b3-907e-19d63310e9ec"}
      answer: {"gameType":"Checkers","creatorLogin":"RadioActive","guestLogin":"Vurado","id":"3e9961bb-518b-48b3-907e-19d63310e9ec"
      ,"winner":null,"stepDtoList":null,"gameField":null}
      invalid: {"guestLogin":"radioactive","id":""}
      answer: -{"headers":{"Content-Type":["application/json"]},"body":"Game id can not be absent!","statusCode":"BAD_REQUEST",
      "statusCodeValue":400}
-
      Available game types : Checkers, Tic-tac-toe
      This request will give you list of the possible steps for checker or empty fields on tic-tac-toe
      4)/get-possible-steps (validation: don`t existing game, empty or blank login, incorrect uuid signature or null uuid)
      valid: {"gameType":"Checkers","stepDto":{"login":"trolan","step":"21","time":1625474000864,"id":"e3a0e943-5489-40d0-8536-858ba0fa6473"}} headers: uuid : {uuid}
      answer:  "[{"startIndex":21,"witchCheckersBit":null,"stepIndex":28,"value":0},{"startIndex":21,"witchCheckersBit":null,"stepIndex":30,"value":0}]"
  
      invalid: {"gameType":"Checkers","stepDto":{"login":"trolan","step":"21","time":1625474112319,"id":"e3a0e943-5489-40d0-858ba0fa6473"}}
      answer:   {"headers":{"Content-Type":["application/json"]},"body":"Invalid UUID string: e3a0e943-5489-40d0-858ba0fa6473","statusCode":"BAD_REQUEST","statusCodeValue":400}

-

      5)/do-step (validation: don`t existing game, empty or blank login, incorrect uuid signature or null uuid)
      valid: {"gameType":"Checkers", "stepDto" : {login: "Vurado", step: "17_26", "time":"514651511651561", "id":"3e9961bb-518b-48b3-907e-19d63310e9ec"}} headers: uuid : {uuid}
      If step is valid both users will get this step back
      answer: {"field", {object that reperesents field of currentGame} "stepDto" : {"login":"trolan","step":"17_26","time":1625473827079,"id":"e3a0e943-5489-40d0-8536-858ba0fa6473"}}

      invalid: {"gameType":"Checkers","stepDto":{"login":"trolan","step":"35_17","time":1625473832479,"id":"e3a0e943-5489-40d0-8536-858ba0fa6473"}}
      answer:   {"headers":{"Content-Type":["application/json"]},"body":"NOT YOU TURN trolan","statusCode":"BAD_REQUEST","statusCodeValue":400}

      if game is ended or draw occured you will get {"winner":"trolan"}

-
      6)/get-bot-step (validation: don`t existing game, incorrect uuid signature or null uuid)
      valid: {"id":"e3a0e943-5489-40d0-8536-858ba0fa6473","gameType":"Checkers"} headers: uuid : {uuid}
      answer:  42_35

      invalid: {"id":"e3a0e943-59-40d0-8536-858ba0fa6473","gameType":"Checkers"} headers: uuid : {uuid}
      answer:  {"headers":{"Content-Type":["application/json"]},"body":"Game with e3a0e943-5489-40d-8536-858ba0fa6473 not found","statusCode":"BAD_REQUEST","statusCodeValue":400}
  
-
      7)/get-step-order (validation: don`t existing game, incorrect uuid signature or null uuid)
      valid: {"gameType": "Checkers"} headers: uuid : {uuid}
      answer: {"stepOrderLogin":"trolan"}

      invalid: {"gameType": "Hz4221"} headers: uuid : {uuid}
      answer:   {"headers":{"Content-Type":["application/json"]},"body":"Game type Hz4221 does not exists","statusCode":"BAD_REQUEST","statusCodeValue":400}

      7)/leave-the-game (validation: don`t existing game, dont have enough permissions)
      guestLogin - it is login of player who wants to end the game. No matter guest or creator
      valid: {"guestLogin": "trolan", "id":"e3a0e943-5489-40d0-8536-858ba0fa6473"} headers: uuid : {uuid}
      answer: game e3a0e943-5489-40d0-8536-858ba0fa6473 closed by trolan

      invalid: {"gameType": "Hz4221"} headers: uuid : {uuid}
      answer:   {"headers":{"Content-Type":["application/json"]},"body":"Game type Hz4221 does not exists","statusCode":"BAD_REQUEST","statusCodeValue":400}
      
      
