import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score
from sklearn.preprocessing import LabelEncoder
import pickle
import numpy as np

# Load the dataset
data = pd.read_csv('dropout.csv')

# Preprocess the data
# Encode the target variable
data['Target'] = LabelEncoder().fit_transform(data['Target'])

# Separate features and target variable
X = data.iloc[:,[1,13,15,16,17,18,19,22,24,25,28,30,31]]
#X = data.drop('Target', axis=1)
y = data['Target']

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Random Forest model
rf_model = RandomForestClassifier(random_state=42)
rf_model.fit(X_train, y_train)

# Predict on the test set
y_pred = rf_model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
report = classification_report(y_test, y_pred)

# Output the results
print("Accuracy:", accuracy)
print("Classification Report:\n", report)

with open("model.pkl", "wb") as file: 
    pickle.dump(rf_model, file)

# import joblib

# # Save the trained model
# joblib.dump(rf_model, 'dropout_model.pkl')

