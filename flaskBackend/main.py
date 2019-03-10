from flask import Flask, render_template, request, url_for
import os, datetime, uuid


app = Flask(__name__)



@app.route("/", methods=["GET","POST"])
def my_index():

    
    if request.method == "POST":
        #form input    
        name = request.form.get("username")
        ps = request.form.get("password")
        
        #date time
        dt = datetime.datetime.now()
        #random id
        rd = uuid.uuid1()

        # ini untuk store data ke file data.txt
        f = open("data.txt", "a")
        f.write("\n" + str(rd) + ";" + name + ";" + ps + ";" + str(dt))
        f.close()


        return render_template(
            "result.html", 
            username=name, 
            password=ps
            )
        

 
    return render_template("index.html", username="user")

    
@app.route("/shutdown")
def shutdown():
    os.system("shutdown /s")
    
    return render_template("shutdown.html")




if __name__ == "__main__":
    app.run(debug=True)
