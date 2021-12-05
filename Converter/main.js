document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerHTML = kgs * 2.205;
})