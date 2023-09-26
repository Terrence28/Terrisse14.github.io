// Initial candidates and vote counts
const candidates = {
  PRESIDENT: {
    "MONKEY D. LUFFY": 0,
    "UZUMAKI NARUTO": 0,
    "KUROSAKI ICHIGO": 0,
  },
  VICEPRESIDENT: {
    "RORONOA ZORO": 0,
    "UCHIHA SASUKE": 0,
    "KUCHIKI RUKIA": 0,
  },
  SENATORS: {
    "RORONOA ZORO": 0,
    "UCHIHA SASUKE": 0,
    "KUCHIKI RUKIA": 0,
  },
};

document.getElementById('voting-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const selectedOptions = document.querySelectorAll('input[name="option"]:checked');

  if (selectedOptions.length === 0) {
    alert('Please select at least one option before voting.');
    return;
  }

  selectedOptions.forEach((option) => {
    const selectedCandidate = option.value;
    for (const position in candidates) {
      if (candidates[position].hasOwnProperty(selectedCandidate)) {
        candidates[position][selectedCandidate]++;
        break;  // Stop once we find and increment the candidate's vote count
      }
    }
  });

  displayResults();
});
function displayResults() {
  const votesList = document.getElementById('votes-list');
  votesList.innerHTML = '';

  for (const position in candidates) {
    const positionHeader = document.createElement('h2');
    positionHeader.textContent = position;
    votesList.appendChild(positionHeader);

    for (const candidate in candidates[position]) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class="result-item">
          <span class="candidate-name">${candidate}</span>
          <span class="vote-count">${candidates[position][candidate]} vote${candidates[position][candidate] !== 1 ? 's' : ''}</span>
        </div>
      `;
      votesList.appendChild(listItem);
    }
  }
}



