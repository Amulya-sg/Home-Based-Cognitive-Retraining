# train_model.py

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import pandas as pd

def train_model():
    data = pd.read_excel('Mental-disorder-symptoms.xlsx')
    y = data['Disorder']
    X = data.loc[:, ~((data.columns == 'Disorder') | (data.columns == 'ag+1:629e') | (data.columns == 'seasonally'))]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = LogisticRegression()
    model.fit(X_train, y_train)

    print(X_test)

    predictions = model.predict(X_test)

    accuracy = accuracy_score(y_test, predictions)
    print("Accuracy:", accuracy * 100, "%")
if __name__ == "__main__":
    train_model()