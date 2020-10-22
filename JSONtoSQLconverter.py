import pandas as pd
from sqlalchemy import create_engine
# import sqlite3
import json

with open('prefectures.json') as f :
    data = json.load(f)

df = pd.DataFrame(data)
df.head()

df.columns

# conn = sqlite3.connect("prefectures.db")
# c = conn.cursor()
# df.to_sql("prefectures",conn)

engine = create_engine("sqlite:///prefectures.db")

df.to_sql("prefectures",engine)