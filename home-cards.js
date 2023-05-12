// fetch JSON data
fetch('./past-projects/past-projects.json')
  .then(response => response.json())
  .then(data => {

    // depending on the day of the week, display a different cards
    const day = new Date().getDay();
    // if it's Monday, display the JavaScript cards
    switch (day) {
      case 1:
        // call the createCards function for projects highlighting JavaScript
        // portfolio website, etch-a-sketch, calculator, rock-paper-scissors, javascript30
        createCards(data.projects.filter(project => project.Skills.includes('JavaScript')));
        break;
      // if it's Tuesday, display the Ruby cards
      case 2:
        // call the createCards function for projects highlighting Ruby
        // tic-tac-toe, mastermind, ruby-exercises
        createCards(data.projects.filter(project => project.Skills.includes('Ruby')));
        break;
      // if it's Wednesday, display the CSS cards
      case 3:
        // call the createCards function for projects highlighting CSS
        createCards(data.projects.filter(project => project.Skills.includes('CSS')));
        break;
      // if it's Thursday, display the Rails cards
      case 4:
        // call the createCards function for projects highlighting Rails
        createCards(data.projects.filter(project => project.Skills.includes('JavaScript')));
        break;
      // if it's Friday, display the React cards
      case 5:
        // call the createCards function for projects highlighting React
        createCards(data.projects.filter(project => project.Skills.includes('Ruby')));
        break;
      // if it's Saturday, display the SQL cards
      case 6:
        // call the createCards function for projects highlighting SQL
        createCards(data.projects.filter(project => project.Skills.includes('CSS')));
        break;
      // if it's Sunday, display the HTML cards
      case 0:
        // call the createCards function for projects highlighting HTML
        createCards(data.projects.filter(project => project.Skills.includes('HTML')));
        break;
    }
  })
  // catch any errors and log them to the console
  .catch(error => {
    console.error(error);
  });

// get the home cards container
const cardsContainer = document.querySelector('#card-container');

// create a new card for each project
function createCards(projects){
  // loop through the data
  projects.forEach(project => {
    // create a new card
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-header">
        <h3>${project["Project Title"]}</h3>
      </div>
      <div class="card-body">
        <p>${project.Description}</p>
        <p><strong>Skills:</strong> ${project.Skills.join(', ')}</p>
      </div>
      <div class="card-footer">
        <a href="${project.Repository}" target="_blank">Repo</a>
        <a href="${project["Live Demo"]}" target="_blank">Demo</a>
      </div>
      `;
    // append the card to the container
    cardsContainer.appendChild(card);
  });
}