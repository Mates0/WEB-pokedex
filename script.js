let arr = []
window.onload = () => {
    fetch("https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json")
        .then(r => r.json())
        .then(r => {
            arr = r
        })
    document.getElementById("searchbutton").addEventListener("click", search)
}

function generate() {
    let value = document.getElementById("searchbar").value
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (count === 8)
            break
        if (arr[i].name.english.includes(value)) {
            count++
            console.log(count)
            document.getElementById("main-content").innerHTML += `<div id="test" class="card" style="width: 18rem;">
  <img src="${arr[i].hires}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${arr[i].name.english}</h5>
    <p class="card-text">${arr[i].description}</p>
  </div>
</div>`
        }
    }
}

function search() {
    try {
        for (let i = 0; i < 8; i++) {
            document.getElementById("test").remove()
        }
        generate()
    } catch (err) {
        generate()
    }
}