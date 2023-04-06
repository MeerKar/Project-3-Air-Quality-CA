from flask import Flask, jsonify, render_template
import sqlalchemy as sql

app=Flask(__name__)

engine=sql.create_engine('sqlite:///static/data/db.sqlite')

@app.route('/data')
def return_data(): 
    results=engine.execute('select * from Pollutant').all()
    data=[]
    for each_result in results: 
        data.append(list(each_result))
    return jsonify(data)

@app.route('/')
def home(): 
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)