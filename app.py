from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    height = float(data['height'])
    weight = float(data['weight'])
    age = int(data.get('age', 30))
    gender = data.get('gender', 'male')
    
    # Basic validation
    if height <= 0 or weight <= 0:
        return jsonify({"error": "Invalid height or weight"}), 400
    
    # BMI Calculation
    height_in_meters = height / 100
    bmi = weight / (height_in_meters ** 2)
    
    # Body Fat % (Deurenberg formula)
    if gender == 'male':
        body_fat = (1.20 * bmi) + (0.23 * age) - 16.2
    else:
        body_fat = (1.20 * bmi) + (0.23 * age) - 5.4
    
    return jsonify({
        "bmi": round(bmi, 1),
        "body_fat": round(max(5, min(100, body_fat)), 1),
        "status": "success"
    })

if __name__ == '__main__':
    app.run(debug=True)
