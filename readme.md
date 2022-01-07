# Reverse Geocoding
by Joel

## 용도
- 위도, 경도만 주어진 json 데이터에 주소를 추가해줍니다

## 주의사항
- 정확한 주소가 아닌 행정구역+우편번호로만 주소가 표기됩니다.
- accessToken이 유효한지 확인해 주세요
- array 형식의 데이터를 사용해 주세요

## 사용법
- npm install (http get 요청에 사용할 axios를 추가합니다)
- data.json에 array 형식의 데이터를 작성해 주세요
    - 메타월드 item.json을 사용하시면 feature의 value부분을 넣어주시면 됩니다
- node index.js (실행합니다)
- datanew.json에서 포매팅을 한 다음 사용하시면 됩니다 
#   a d d R e v G e o  
 