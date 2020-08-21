const moviename=['멀홀랜드 드라이브', '트리 오브 라이프', '이터널 선샤인', '25시', '다크 나이트',
 '노예 12년','노인을 위한 나라는 없다','매드 맥스: 분노의 도로','그랜드 부다페스트 호텔','해무'];
const alpha = 'ABCDEFGHIJK';


// 영상 추천 알고리즘 1 : 평점이 가장 높은 영화
function Recommand1(stand,ratings){



}
// 영상 추천 알고리즘 2 : 유사한 사용자 골라서 그 사용자가 좋게 본 영화 추천 
function Recommand2(stand,ratings){
    let highest = 0 ;
    let highestindex = '';
    for(var i = 0 ; i < 10 ; i++){
        var total_A = 0;
        var total_B = 0;
        var total_AB = 0;
        for(var j = 0 ; j < moviename.length ; j++){
            var A = ratings[stand][moviename[j]];
            var B = ratings[alpha[i]][moviename[j]];
            if((A == undefined) || (B == undefined)){
                continue;
            }else{
                total_A += Math.pow(ratings[stand][moviename[j]],2);
                total_B += Math.pow(ratings[alpha[i]][moviename[j]],2);
                total_AB += ratings[stand][moviename[j]]*ratings[alpha[i]][moviename[j]];
            }
        }
        console.log(stand + " 와 " +alpha[i] + ' 의 유사도는 ' + total_AB/(Math.sqrt(total_A)*Math.sqrt(total_B)));
        if((highest < total_AB/(Math.sqrt(total_A)*Math.sqrt(total_B))) && stand != alpha[i]){
            highest = total_AB/(Math.sqrt(total_A)*Math.sqrt(total_B));
            highestindex = alpha[i];
        }
    }
    // cosin 유사도
    console.log(highestindex+' 와 제일 유사합니다.');
    let recommandlist = [];


    // 점수 조건을 주어서 해당 점수 이상만 추천.
    for(var j = 0 ; j < moviename.length ; j++){
        if((ratings[stand][moviename[j]] == undefined ) && (ratings[highestindex][moviename[j]] != undefined)){
            recommandlist.push(moviename[j] + ' : ' + ratings[highestindex][moviename[j]]);
        }
    }

    console.log('추천 리스트');
    recommandlist.forEach(val=>{
        console.log(val);
    });

    
     

}

let ratings = {};
for(var i = 0; i < 10;i++){
    let movies = [];
    for(var j = 0; j < moviename.length ; j++){
        ratings[alpha[i]] = {};
        if(Math.floor(Math.random()*6)>2){
            movies[moviename[j]] = Math.floor(Math.random()*6);
        }
    }
    ratings[alpha[i]] = movies;
}

// A 가 기준

console.log(ratings);
//Recommand1('A',ratings);
Recommand2('A',ratings);