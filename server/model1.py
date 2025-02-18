import joblib
from sklearn.linear_model import LogisticRegression
import sys
import json

input_data = sys.stdin.readline()


my_model = joblib.load('model.joblib')

var = json.loads(answer) 

# var1 = []
# var1.append(var[])

res = my_model.predict(var)

print("Prediction:",res)
json.dumps(res)



