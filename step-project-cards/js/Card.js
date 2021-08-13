export default class Card {
  createCardTherapist({ name, doctor, description, age, priority, title, id }) {
    const card = `
                <div class="col">
                  <div class="card" style="width: 18rem;">
                  <p class="mb-2 close-btn">
                  <button class="btn-close btn-close-darck" id="${id}"></button>
                  </p>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Pattient name: ${name}</li>
                        <li class="list-group-item">Doctor: ${doctor}</li>
                        <li class="list-group-item" style= "display: none">Aim of visit: ${title}</li>
                        <li class="list-group-item" style= "display: none">Priopyty: ${priority}</li>
                        <li class="list-group-item" style= "display: none">Description: ${description}</li>
                        <li class="list-group-item" style= "display: none">Pattient age: ${age}</li>
                      </ul>
                      <div class="card-body">
                        <button  type="submit" class="btn btn-dark">Change card</button>
                        <button  type="submit" class="btn btn-secondary">Show more</button>
                      </div>
                    </div>
                `;
    this._insertToPage(document.getElementById("card-wrap"), card);
  }
  createCardDentist({
    name,
    doctor,
    title,
    description,
    lastVisit,
    priority,
    id,
  }) {
    const card = `
                <div class="col">
                  <div class="card" style="width: 18rem;">
                  <p class="mb-2 close-btn">
                  <button class="btn-close btn-close-darck" id="${id}"></button>
                  </p>
                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">Pattient name: ${name}</li>
                      <li class="list-group-item">Doctor: ${doctor}</li>
                      <li class="list-group-item" style= "display: none">Aim of visit: ${title}</li>
                      <li class="list-group-item" style= "display: none">Priopyty: ${priority}</li>
                      <li class="list-group-item" style= "display: none">Description: ${description}</li>
                        <li class="list-group-item" style= "display: none">Last visit: ${lastVisit}</li>
                      </ul>
                      <div class="card-body">
                        <button  type="submit" class="btn btn-dark">Change card</button>
                        <button  type="submit" class="btn btn-secondary">Show more</button>
                      </div>
                    </div>
                `;
    this._insertToPage(document.getElementById("card-wrap"), card);
  }
  createCardCardiologist({
    name,
    doctor,
    title,
    description,
    priority,
    pressure,
    massIndex,
    diseases,
    age,
    id,
  }) {
    const card = `
                <div class="col">
                  <div class="card" style="width: 18rem;">
                  <p class="mb-2 close-btn">
                  <button class="btn-close btn-close-darck" id="${id}"></button>
                  </p>
                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">Pattient name: ${name}</li>
                      <li class="list-group-item">Doctor: ${doctor}</li>
                      <li class="list-group-item" style= "display: none">Aim of visit: ${title}</li>
                      <li class="list-group-item" style= "display: none">Priopyty: ${priority}</li>
                      <li class="list-group-item" style= "display: none">Description: ${description}</li>
                        <li class="list-group-item" style= "display: none">Pressuare: ${pressure}</li>
                        <li class="list-group-item" style= "display: none">Mass index: ${massIndex}</li>
                        <li class="list-group-item" style= "display: none">Diseases: ${diseases}</li>
                        <li class="list-group-item" style= "display: none">Pattient age: ${age}</li>
                      </ul>
                      <div class="card-body">
                        <button  type="submit" class="btn btn-dark">Change card</button>
                        <button  type="submit" class="btn btn-secondary">Show more</button>
                      </div>
                    </div>
                `;
    this._insertToPage(document.getElementById("card-wrap"), card);
  }
  _insertToPage(elemToAttach, data) {
    elemToAttach.innerHTML += data;
  }
}
