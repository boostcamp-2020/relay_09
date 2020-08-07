import os
from urllib import parse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from keras_preprocessing.sequence import pad_sequences
from keras_preprocessing.text import Tokenizer
from tensorflow.python.keras.models import load_model
from konlpy.tag import Okt
import pickle

def sentiment_predict(new_sentence):
    file_name = os.path.dirname(__file__) + '\\best_model.h5'
    pickle_name = os.path.dirname(__file__) + '\\tokenizer.pickle'
    loaded_model = load_model(file_name)
    max_len = 30
    okt = Okt()
    tokenizer = Tokenizer()
    with open(pickle_name, 'rb') as handle:
        tokenizer = pickle.load(handle)

    stopwords = ['의', '가', '이', '은', '들', '는', '좀', '잘', '걍', '과', '도', '를', '으로', '자', '에', '와', '한', '하다']
    new_sentence = okt.morphs(new_sentence, stem=True) # 토큰화
    new_sentence = [word for word in new_sentence if not word in stopwords] # 불용어 제거
    encoded = tokenizer.texts_to_sequences([new_sentence]) # 정수 인코딩
    pad_new = pad_sequences(encoded, maxlen = max_len) # 패딩
    score = float(loaded_model.predict(pad_new)) # 예측
    if(score > 0.5):
        return (score * 100), 'positive'
        # print("{:.2f}% 확률로 긍정 리뷰입니다.\n".format(score * 100))
    else:
        return (1 - score) * 100, 'negative'
        # print("{:.2f}% 확률로 부정 리뷰입니다.\n".format((1 - score) * 100))

@csrf_exempt
def nlp(request, words):
    if request.method == 'GET':
        res_data = {}
        parsed_words = parse.unquote(words)
        score, result = sentiment_predict(parsed_words)
        res_data['data'] = parsed_words
        res_data['score'] = score
        res_data['result'] = result
        return JsonResponse(res_data)
    if request.method == 'POST':
        words = request.POST.get('words', None)
        parsed_words = parse.unquote(words)
        score, result = sentiment_predict(parsed_words)
        res_data = {}
        res_data['data'] = parsed_words
        res_data['score'] = score
        res_data['result'] = result
        return JsonResponse(res_data)