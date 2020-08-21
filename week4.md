# Relay09 하두리

---

## 참여자 :

J007 강용범, J031 김동인, J040 김석기, J049 김원호, J080 박슬우, J101 신동민

J113 양아림 J117 오지현, J143 이석현, J193 조준형, J200 지화영

[boostcamp-2020/relay_09](https://github.com/boostcamp-2020/relay_09)

평소보다 시간이 적어서 최대한 지금 당장 사용할 수 있는 것 위주로 찾았다.

## 프로젝트 분석

- 프론트 부분
    1. 맞춤 영상 페이지

- 백엔드 부분
    1. 채팅서버
    2. 자연어처리
    3. 비디오 리스트

## 추천 알고리즘

- 추천 알고리즘 : 대상자가 좋아할만한 무언가를 추천하는 알고리즘.

    → Contents Based Filtering : 사용자 혹은 아이템에 대한 프로필 데이터를 가지고 내가 좋아했던 아이템과 비슷한 유형의 아이템을 추천하거나 나와 비슷한 유형의 사람이 좋아하는 아이템을 추천

    → Collaborative Filtering : 내가 남긴 평점 데이터를 가지고 나와 취향이 비슷한 사람이 선호하는 아이템을 추천

    - 더보기

        나와 과거에 유사한 소비 패턴(사용 이력)을 가지고 있는 사용자가 소비한 새로운 아이템은 나의 관심사에도 맞을 것이다

        ![Relay09%20%E1%84%92%E1%85%A1%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5%20308cd55a7f55419d99b80376588d06d1/Untitled.png](Relay09%20%E1%84%92%E1%85%A1%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5%20308cd55a7f55419d99b80376588d06d1/Untitled.png)

        [출처] [https://medium.com/@cfpinela/recommender-systems-user-based-and-item-based-collaborative-filtering-5d5f375a127f](https://medium.com/@cfpinela/recommender-systems-user-based-and-item-based-collaborative-filtering-5d5f375a127f)

- 코사인 유사도

    ![Relay09%20%E1%84%92%E1%85%A1%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5%20308cd55a7f55419d99b80376588d06d1/Untitled%201.png](Relay09%20%E1%84%92%E1%85%A1%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5%20308cd55a7f55419d99b80376588d06d1/Untitled%201.png)

    - 두 벡터 간의 코사인 각도를 이용하여 구할 수 있는 두 벡터의 유사도.
    - 단어를 임베딩하여 수치화하였으면, 이러한 표현 방법에 대해서 코사인 유사도를 이용하여 문서의 유사도를 구하는 게 가능하다.
    - 두 벡터의 방향이 완전히 동일한 경우에는 1의 값을 가지며, 90°의 각을 이루면 0, 180°로 반대의 방향을 가지면 -1의 값을 갖게 됩니다.
    - 즉, 결국 코사인 유사도는 -1 이상 1 이하의 값을 가지며 값이 1에 가까울수록 유사도가 높다고 판단할 수 있습니다. 이를 직관적으로 이해하면 두 벡터가 가리키는 방향이 얼마나 유사한가를 의미합니다.
    - 1에 가까울 수록 배타적인 경향을 보이고, 0에 가까울 수록 서로 상관관계가 없다고 판단된다.
    - 예시 코드

        ```jsx
        A: [ '트리 오브 라이프': 1,'25시': 1,'다크 나이트': 5, '노예 12년': 4, '노인을 위한 나라는 없다': 0,'매드 맥스: 분노의 도로': 5,'그랜드 부다페스트 호텔': 1,'해무': 5],
        B: [ '25시': 5, '노인을 위한 나라는 없다': 4, '그랜드 부다페스트 호텔': 3, '해무': 4 ],
        ....
        J: [ '멀홀랜드 드라이브': 5, '트리 오브 라이프': 0, '25시': 2, '다크 나이트': 3, '해무': 4 ]
        ```

        ![Relay09%20%E1%84%92%E1%85%A1%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5%20308cd55a7f55419d99b80376588d06d1/recommand.jpg](Relay09%20%E1%84%92%E1%85%A1%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5%20308cd55a7f55419d99b80376588d06d1/recommand.jpg)

    - 캐글 영화 데이터 셋을 이용한 코사인 유사도 기반 영화 추천 시스템

        Kaggle에서 사용되었던 영화 데이터셋을 가지고 영화 추천 시스템을 만들어보겠습니다.

        TF-IDF와 코사인 유사도만으로 영화의 줄거리에 기반해서 영화를 추천하는 추천 시스템을 만들 수 있습니다.

        다운로드 링크 : [https://www.kaggle.com/rounakbanik/the-movies-dataset](https://www.kaggle.com/rounakbanik/the-movies-dataset)

        ```python
        import pandas as pd
        import numpy as np

        # Data에 예외 제거 
        data = pd.read_csv('movies_metadata.csv', error_bad_lines=False)
        #에러 라인은 무시

        print(data.columns)
        ```

        데이터 분류기준이 출력됨

        > Index(['adult', 'belongs_to_collection', 'budget', 'genres', 'homepage', 'id', 'imdb_id', 'original_language', 'original_title', 'overview', 'popularity', 'poster_path', 'production_companies', 'production_countries', 'release_date', 'revenue', 'runtime', 'spoken_languages', 'status', 'tagline', 'title', 'video', 'vote_average', 'vote_count'], dtype='object')

        줄거리가 비슷한 영화 추천 : overview 기준으로 추천

        ```python
        # 훈련 데이터의 양을 줄이고 학습을 진행하고 싶은 경우, 변경하여 재저장
        data = data[:3000]
        # data의 overview 열에 Null 값을 빈 값으로 대체(줄거리가 없는 것을 ' '로 설정하여 에러 방지)
        data['overview'] = data['overview'].fillna('')
        ```

        코사인 유사도 적용

        ```python
        from sklearn.feature_extraction.text import TfidfVectorizer

        #tf-idf를 사용
        tfidf = TfidfVectorizer(stop_words='english') #의미 없는 단어를 넣어서 해당 단어는 무시한다. 예) 의미없이 반복되는 단어
        tfidf_matrix = tfidf.fit_transform(data['overview'].apply(lambda tfidf_matrix: np.str(tfidf_matrix)))

        # overview에 대해서 tf-idf 수행
        print(f"데이터 수, 단어 수: {tfidf_matrix.shape}")

        # 코사인 유사도를 사용한 문서의 유사도

        from sklearn.metrics.pairwise import linear_kernel

        cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix) # 벡터의 내적 값 계산으로 코사인 유사도를 구함

        indices = pd.Series(data.index, index=data['title']).drop_duplicates()
        display(indices.head(50))
        print()

        idx = indices['Father of the Bride Part II']
        print(idx)
        ```

        출력해주는 함수

        ```python
        def get_recommendations(title, cosine_sim = cosine_sim):
          # 선택한 영화 제목의 인덱스를 저장한다.
          idx = indices[title]
          
          # 모든 영화에 대해서 해당 영화와의 유사도를 쌍으로 구한다. 
          sim_scores = list(enumerate(cosine_sim[idx]))

          # 유사도에 따라 영화들을 정렬한다.
          sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

          # 가장 유사한 10개의 영화를 받아온다.
          sim_scores = sim_scores[1:11]

          # 가장 유사한 10개의 영화의 인덱스를 받아온다.
          movie_indices = [i[0] for i in sim_scores]

          # 가장 유사한 10개의 영화의 제목을 리턴한다.
          return data['title'].iloc[movie_indices]

        ```

        토이스토리와 가장 유사한 내용의 영화를 추천 받는다.

        ```python
        get_recommendations('Toy Story')

        #2997 Toy Story 2
        #1071 Rebel Without a Cause
        #485 Malice
        #1932 Condorman
        #448 For Love or Money
        #1032 The Sunchaser
        #2157 Indecent Proposal
        #1884 Child's Play 3
        #2635 Radio Days
        #2681 Funny Farm Name: title, dtype: object
        ```

    - Collaborative Filtering - 거리 구하기 (유사도 구하기)

        2. Recommendation 기본 알고리즘

        2.1. Popularity, High Rated Based (가장 단순함)가장 쉽게 인기도, 즉 높은 평점을 갖는 item을 추천 가능모두에게 동일한 item이 추천 됨

        In [1]:

        ```python
        ratings={ 
        'Dave':{'달콤한인생':5,'범죄도시':3,'샤인':3}, 
        'David':{'달콤한인생':5,'범죄도시':1,'샤인':4}, 
        'Alex':{'달콤한인생':0,'범죄도시':4,'샤인':5}, 
        'Andy':{'달콤한인생':2,'범죄도시':1,'샤인':5}
        }
        ```

        **영화중 가장 평점이 높은 순으로 추천해주면 됨**

        **평점이 가장 높은 두 영화 출력하기**

        **In [2]:**

        ```python
        movie_dict = dict()
        for rating in ratings: 
        		for movie in ratings[rating].keys(): 
        				if movie not in movie_dict:
        						movie_dict[movie] = ratings[rating][movie] 
        				else: 
        						movie_dict[movie] = (movie_dict[movie] + ratings[rating][movie])

        for movie in ratings[rating].keys(): 
        		movie_dict[movie] = movie_dict[movie] / 4

        import operator
        sorted_x = sorted(movie_dict.items(), key=operator.itemgetter(1), reverse=True)

        print(sorted_x[:2])

        [('샤인', 4.25), ('달콤한인생', 3.0)]
        ```

        **2.2. Collaborative Filtering**

        **데이터 구성 : 사용자가 입력한 선호도(평점)를 사용하여 사용자-항목 선호도(평점) 행렬을 만든다.유사도 계산 : 1 단계에서 만들어진 행렬을 사용하여 사용자들 간의 유사도를 계산한다.예측 값 계산 및 추천 목록 생성 : 사용자들 간의 유사도를 바탕으로 모든 항목에 대해 예측 값을 계산하고 높은 예측 값을 갖는 상위 N개의 추천 목록을 생성한다.**

        **1. 데이터 구성**

        **In [3]:**

        ```python
        ratings={ 
        'Dave':{'달콤한인생':5,'범죄도시':3,'샤인':3}, 
        'David':{'달콤한인생':2,'범죄도시':1,'샤인':4}, 
        'Alex':{'범죄도시':4,'샤인':5}, 
        'Andy':{'달콤한인생':2,'범죄도시':1,'샤인':5}
        }
        ```

        **In [4]:**

        ```python
        ratings.get('Dave')
        ```

        **Out[4]:**

        ```python
        {'달콤한인생': 5, '범죄도시': 3, '샤인': 3}
        ```

        **In [5]:**

        ```python
        ratings.get('Dave').get('샤인')
        ```

        **Out[5]:**

        ```python
        3
        ```

        **2. 유사도를 구해보자 (피타고라스 공식을 통한 거리 계산)**

        **In [6]:**

        ```python
        import math
        def sim(i, j): 
        		return math.sqrt(pow(i,2)+pow(j,2))
        ```

        **In [7]:**

        ```python
        var1 = ratings['Alex']['범죄도시'] - ratings['Andy']['범죄도시']
        ```

        **In [8]:**

        ```python
        var1
        ```

        **Out[8]:**

        ```python
        3
        ```

        **In [9]:**

        ```python
        var2 = ratings['Alex']['샤인'] - ratings['Andy']['샤인']
        ```

        **In [10]:**

        ```python
        var2
        ```

        **Out[10]:**

        ```python
        0
        ```

        **In [11]:**

        ```python
        sim(var1,var2)
        ```

        **Out[11]:**

        ```python
        3.0
        ```

        **Alex가 평가한 범죄도시, 샤인을 모두 평가한 사용자와 모두 거리 구하기 (유사도 구하기)**

        **In [12]:**

        ```python
        for i in ratings: 
        		if i!='Alex': 
        				num1 = ratings.get('Alex').get('범죄도시') - ratings.get(i).get('범죄도시') 
        				num2 = ratings.get('Alex').get('샤인') - ratings.get(i).get('샤인')
        				print(i," : ", sim(num1,num2))

        Dave : 2.23606797749979
        David : 3.1622776601683795
        Andy : 3.0
        ```

        정규화를 통해 유사도 범위를 0과 1사이로 가두고, 1에 가까울 수록 유사도가 높게 변경하기

        In [13]:

        ```python
        for i in ratings: 
        		if i!='Alex': 
        				num1 = ratings.get('Alex').get('범죄도시') - ratings.get(i).get('범죄도시') 
        				num2 = ratings.get('Alex').get('샤인') - ratings.get(i).get('샤인') 
        				print(i," : ", 1 / ( 1 + sim(num1,num2) ) )

        Dave : 0.3090169943749474
        David : 0.2402530733520421
        Andy : 0.25
        ```

        Dave가 평가한 범죄도시와 샤인 모두 평가한 사용자와의 거리를 구해서, 가장 Dave와 유사한 사용자 구하기

        In [14]:

        ```python
        for i in ratings: 
        		if i!='Dave': 
        				num1 = ratings.get('Dave').get('범죄도시') - ratings.get(i).get('범죄도시')
        				num2 = ratings.get('Dave').get('샤인') - ratings.get(i).get('샤인') 
        				print(i," : ", 1 / ( 1 + sim(num1,num2) ) )

        David : 0.3090169943749474
        Alex : 0.3090169943749474
        Andy : 0.2612038749637414
        ```

- AWS 추천 서비스 (Amazon Web Services) : 복잡한 기계 학습 작업을 자동화하는 새로운 프로세스인 AutoML을 사용하여 기계 학습 모델의 설계, 훈련 및 배포에 필요한 어려운 작업을 신속하게 수행

## 동영상 분류 데이터 셋

- 유튜브-8M
    - [https://research.google.com/youtube8m/](https://research.google.com/youtube8m/)

        ![Relay09%20%E1%84%92%E1%85%A1%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5%20308cd55a7f55419d99b80376588d06d1/image-20200821171344569.png](Relay09%20%E1%84%92%E1%85%A1%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5%20308cd55a7f55419d99b80376588d06d1/image-20200821171344569.png)

    - Youtube-8M 데이터 셋은 610만 개의 비디오 아이디, 35만 시간 길이, 260억 개의 오디오/영상 특징 정보, 비디오 하나 당 평균 3개의 레이블을 붙인 공개 비디오이며 최소 1,000명 이상이 본 영상으로 이루어졌다.
    - 구글에서 전 세계 연구 개발자를 위해 의미 있는 데이터 셋을 지속적으로 공개하는데 중 하나이다.
    - 이렇게 레이블로 분류된 데이터셋으로 추천 서비스를 개발할 수 있을 것이라고 생각한다.
    - TensorFlow 레코드 파일 형태로 제공 된다.
    - Dataset은 비디오레벨과 프레임 레벨로 제공된다.

- 네이버 영화 크롤링
    - 영상을 가져오는 것이 아니라, 영화 목록을 가져오는 것이라 생각하여 부적합하다고 생각함
- 구글 Video Intelligence API
    - 이 API를 이용하여, B기능을 구현 하였다면, 여기서 tag들을 추출하여 영상과 함꼐 DB에 저장을 하여, 이번 기능에서 그 저장된 데이터를 활용하였으면 좋았을 것 같다.

- 인기 동영상 데이터셋 변경
    - Google API 를 활용해서 JSON 파일로 인기 동영상 데이터를 가지고 옵니다.

    `GET [https://www.googleapis.com/youtube/v3/videos?part=id,snippet&chart=mostPopular&maxResults=50](https://www.googleapis.com/youtube/v3/videos?part=id,snippet&chart=mostPopular&maxResults=50)`

    의 결과를 temp.json에 저장한 상태에서 makedata.js 수행합니다.

    ![Relay09%20%E1%84%92%E1%85%A1%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5%20308cd55a7f55419d99b80376588d06d1/Untitled%202.png](Relay09%20%E1%84%92%E1%85%A1%E1%84%83%E1%85%AE%E1%84%85%E1%85%B5%20308cd55a7f55419d99b80376588d06d1/Untitled%202.png)

### 이전에 올려주신 링크들

- 유튜브8M - [https://research.google.com/youtube8m/explore.html](https://research.google.com/youtube8m/explore.html)
- 캐글 - [https://www.kaggle.com/search?q=recommendation](https://www.kaggle.com/search?q=recommendation)
- 네이버 영화 크롤링 - [https://somjang.tistory.com/entry/Python네이버-영화-데이터-크롤링하기](https://somjang.tistory.com/entry/Python%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%98%81%ED%99%94-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%81%AC%EB%A1%A4%EB%A7%81%ED%95%98%EA%B8%B0)
- 구글 Video Intelligence API - [https://cloud.google.com/video-intelligence?hl=ko](https://cloud.google.com/video-intelligence?hl=ko)
- 코사인 유사도 - [http://blog.bizspring.co.kr/30455](https://wikidocs.net/24603)