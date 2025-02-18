import tensorflow as tf
# from tensorflow.keras.models import load_model
import numpy as np
import json
import sys
import requests

data = sys.stdin.read()
answer = json.loads(data)
loaded_model = tf.keras.models.load_model(r"C:\Users\91996\Desktop\letusjs\server\my_model3.keras")

a = []
a.append(answer)
pred = loaded_model.predict(a)
binary_predictions = (pred > 0.5).astype(int)

print(binary_predictions)
