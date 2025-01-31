function runCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = "<style>" + document.getElementById("cssCode").value + "</style>";
    const jsCode = "<script>" + document.getElementById("jsCode").value + "</script>";

    const output = document.getElementById("output").contentWindow.document;
    output.open();
    output.write(htmlCode + cssCode + jsCode);
    output.close();
}

function clearCode() {
    document.getElementById("htmlCode").value = "";
    document.getElementById("cssCode").value = "";
    document.getElementById("jsCode").value = "";
}

function downloadCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = "<style>" + document.getElementById("cssCode").value + "</style>";
    const jsCode = "<script>" + document.getElementById("jsCode").value + "</script>";
    const blob = new Blob([htmlCode + cssCode + jsCode], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "code.html";
    a.click();
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
