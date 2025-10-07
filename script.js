// Demo data array we will use in all examples
const foods = ['Pizza', 'Tacos', 'Ice Cream', 'Burgers', 'Pasta']

// helper function: will display whatever HTML/text we pass into the #out div
function render(html) {
    document.getElementById('out').innerHTML = html
}

// 1) listFoods()
function listFoods() {
    let output = ""
    for (const food of foods) {
        output += `<p>${food}</p>`
    }
    render(output)
}

// 2) numberedFoods()
function numberedFoods() {
    let output = `<ol class="list-group list-group-numbered">`
    for (let i = 0; i < foods.length; i++) {
        output += `<li class="list-group-item">${foods[i]}</li>`
    }
    output += `</ol>`
    render(output)
}

// 3) filterFoods()
function filterFoods() {
    const letter = prompt("Pick a letter to filter foods that start with that letter")
    if (!letter) {
        render(`<p class="text-muted m-0">Enter a letter.</p>`)
        return
    }

    const lower = letter.toLowerCase()
    const matches = foods.filter(f => f.toLowerCase().startsWith(lower))

    if (matches.length === 0) {
        render(`<p class="m-0">There are no foods that start with '<strong>${letter}</strong>'</p>`)
        return
    }

    const list = matches.map(item => `<li class="list-group-item">${item}</li>`).join('')
    render(`<ul class="list-group">${list}</ul>`)
}

// 4) forEachFoods()
function forEachFoods() {
    let cards = '<div class="row justify-content-center">'
    foods.forEach(food => {
        cards += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div class="card h-100 text-center">
                <div class="card-body">
                    <h5 class="card-title">${food}</h5>
                </div>
            </div>
        </div>`
    })
    cards += '</div>'
    render(cards)
}

// ---- STUDENT WORK SECTION ----

// Task 1 — Uppercase List
function uppercaseList() {
    const upperFoods = foods.map(f => f.toUpperCase())
    const list = upperFoods.map(item => `<li class="list-group-item">${item}</li>`).join('')
    render(`<ul class="list-group">${list}</ul>`)
}

// Task 2 — Reverse List
function reverseList() {
    const reversed = [...foods].reverse()
    const list = reversed.map(item => `<li class="list-group-item">${item}</li>`).join('')
    render(`<ul class="list-group">${list}</ul>`)
}

// Task 3 — Random Food Picker
function randomFoodPicker() {
    const randomIndex = Math.floor(Math.random() * foods.length)
    const food = foods[randomIndex]
    const html = `
    <div class="card text-center mx-auto" style="max-width: 18rem;">
      <div class="card-header bg-success text-white">Today's Pick</div>
      <div class="card-body">
        <h5 class="card-title">${food}</h5>
      </div>
    </div>`
    render(html)
}

// Task 4 — Word Lengths
function wordLengths() {
    const list = foods.map(f => `<li class="list-group-item">${f} — ${f.length} letters</li>`).join('')
    render(`<ul class="list-group">${list}</ul>`)
}

// ---- Event listeners (buttons) ----
document.getElementById('btnList').addEventListener('click', listFoods)
document.getElementById('btnNums').addEventListener('click', numberedFoods)
document.getElementById('btnFilter').addEventListener('click', filterFoods)
document.getElementById('btnForEach').addEventListener('click', forEachFoods)
document.getElementById('btnUppercase').addEventListener('click', uppercaseList)
document.getElementById('btnReverse').addEventListener('click', reverseList)
document.getElementById('btnRandom').addEventListener('click', randomFoodPicker)
document.getElementById('btnLengths').addEventListener('click', wordLengths)
