

<1주차 2019.08.09>
================
  ### [리액트 네이티브 프로젝트 생성 후 'Hello world' 실행하기]
     npm install -g expo-cli
     expo init 프로젝트명
     cd 프로젝트명
     npm start # you can also use: expo start
    
   ### [에뮬레이터 실행]
     react-native run-ios
     react-native run-android
    
   ### [RN Basic]
   1. Use native components instead of web components
   2. uses basic React concepts : JSX, components, state, props
   3. [JSX] : embedding xml within javascripe, write markup language inside code
      eg) <View><Text>Hello world!</Text></View> 
   4. [component] : anything you see on the screen is Some sort of component
   5. [props] : most components can be customized when they are created with different parameters. These creation parameters                   are called props set by the parent and they are fixed throughout the lifetime of component
   6. [state] : for data is going to change
   7. control component : props and state
   8. [style] :  The style names and values usually match how CSS works on the web, except names are written using camel                        casing, e.g. backgroundColor rather than background-color

  ### [과제]
   Nomad Coder Kawaii Todo List Clone 하기(1~5강까지)
  
<2주차 2019.08.19>
================
  ### [Todo App 5강까지 코드 리뷰]
   [사용된 컴포넌트]
   1. ScrollView
   2. StatusBar
   3. StyleSheet  
   4. TextInput
   5. TouchableOpacity
    
  ### [JS function 문법]
  
  ### [if 문]
    A ? B : C ==> if A is true -> B, false -> C
    
  ### [git make local folder to remote repo]
    https://gist.github.com/alexpchin/102854243cd066f8b88e
    
  
  ### [과제]
   1. 디자인 패턴
   2. style sheet
   3. Nomad Coder Kawaii Todo List Clone 완성하기
   4. open api 이용한 네트워킹 연습
   5. AWS LAMDA 사용해서 서버리스 api 구현해보기
   
   
   

   
    
<3주차 2019.08.12>
===============
  ### [DESIGN PATTERN]
    https://github.com/ClintJang/sample-react-native-redux-architecture-patterns
  ### [KAWAII TODO LIST]
  ### [RN-NETWORK]
    //GET request 
    fetch('https://api.thecatapi.com/v1/images/search', {
        method: 'GET',
        headers: new Headers({
          'x-api-key' : 'dcca2e38-da5a-4c2d-b5fc-2d7c456b70f6'
        })
        //Request Type 
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
        //Success 
        
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
        
    })
    //If response is not in json then in error
    .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error(error);
    });
    }
  *Json parsing 모르겠음
  
  ### [STYLE SHEET]
  ### [AWS_LAMBDA]
    1. 람다함수 생성
    2. 람다함수 테스트
    3. API GATEWAY 설정
    4. 람다함수 연결
    5. API 테스트
    6. API 배포
    




<4주차 2019.08.12>
==============

<주방용앱 : pos 연동>
========
1. 로그인
2. 리스트뷰
3. push notification
4. 푸쉬오면 refresh 이고 땡겨서 refres
5. 메뉴 접수번호 상태 시간
6. 리스트마다 버튼(상품완료)
7. 현금수납, 취소, 상품완료
