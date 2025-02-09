from flask import Flask, request, jsonify, render_template
from generator import generate_design

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    style = data['style']
    size = data['size']
    material = data['material']
    
    design = generate_design(style, size, material)  # Placeholder for AI function
    return jsonify({"success": True, "design": design})

if __name__ == '__main__':
    app.run(debug=True)