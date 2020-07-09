## using cookie
1. npm install ngx-cookie-service --save
1. 모듈에 추가
    ```shell script
    import { CookieService } from 'ngx-cookie-service';
    ```
1. 모듈 제공자에 CookieService을 (를) 추가하십시오.  
    ```angularjs
    providers: [ CookieService ]
    ```
1. 생성자에 삽입하십시오.
    ```angularjs
   constructor(private cookieService: CookieService)
    ```
1. 사용
    - 특정 쿠키를 얻으려면 cookie.get(nameOfCookie)
    - 새 쿠키를 추가하려면 cookie.set(nameOfCookie,cookieValue)
1. json 사용
    - cookie.set("basket-data", JSON.stringify(data()))
    - JSON.parse(cookie.get("basket-data"))


## 배포
ng deploy --base-href=https://yoonn.github.io/birthday/

## webcam
npm install --save ngx-webcam
npmjs.com/package/ngx-webcam

--save는 package.json에 자동 포함되게 하는 기능이었지만 요즘은 그냥 install해도 자동 추가됨

## youtube player > 실패
npm install @angular/youtube-player
youtube ifram bug

## audio play
npm i ngx-audio-player
