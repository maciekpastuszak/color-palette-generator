from flask import Flask, render_template, request

app = Flask(__name__, template_folder="templates")

@app.route("/palette", methids=["POST"])
def prompt_to_palette():
    #OPEN AI COMPLETION CALL

    #RETURN LIST OF COLORS

@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
