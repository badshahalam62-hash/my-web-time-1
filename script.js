<script>
    function startMonitoring() {
            const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;

    if (!name || !mobile) {
        alert("Please enter all details");
    return;
            }

    document.getElementById("log").innerHTML =
    "✅ Consent Granted<br>" +
        "👤 Name: " + name + "<br>" +
            "📱 Mobile: " + mobile + "<br>" +
                "🛡️ Monitoring Started (Demo Only)";
        }
            </script>
!DOCTYPE html>
            <html>
                <head>
                    <title>My Website</title>
                    <link rel="stylesheet" href="style.css">
                </head>
                <body>

                    <h1>Hello Website</h1>
                    <button onclick="showTime()">Time</button>

                    <script src="script.js"></script>
                </body>
            </html>function showTime() {
                alert(new Date().toLocaleTimeString());


