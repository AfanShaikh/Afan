let form = document.getElementById("github-form");
let input = document.getElementById("usernameInput");
let infoContainer = document.getElementById("Info");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let username = input.value;
  if (username.trim() === "") {
    showErrorMsg("Username is required");
  } else {
    clearOutput();
    showLoader();
    getUserData(username);
  }
});

function showErrorMsg(message) {
  infoContainer.innerHTML = `<p class="text-red-500">${message}</p>`;
}

function clearOutput() {
  infoContainer.innerHTML = "";
}

function showLoader() {
  infoContainer.innerHTML = `
    <div class="flex justify-center items-center">
      <div class="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  `;
}

function getUserData(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((raw) => raw.json())
    .then((data) => {
      if (data.message === "Not Found") {
        showErrorMsg("User Not Found");
      } else {
        showUserData(data);
        getUserRepos(username);
      }
    })
    .catch(() => {
      showErrorMsg("Network Error Occurred");
    });
}

function showUserData(data) {
  infoContainer.innerHTML = `
    <div class="fade-in space-y-4 text-center">
      <img src="${data.avatar_url}" alt="${data.login}'s avatar"
        class="mx-auto w-24 h-24 rounded-full border-4 border-blue-500 shadow-md" />

      <h2 class="text-xl font-bold">${data.name || data.login}</h2>

      <p>👥 Followers: <b>${data.followers}</b> | Following: <b>${data.following}</b></p>
      <p>📅 Joined on: <b>${new Date(data.created_at).toDateString()}</b></p>
      <p>📁 Public Repos: <b>${data.public_repos}</b></p>

      <a href="${data.html_url}" target="_blank"
         class="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow">
        🔗 Visit GitHub Profile
      </a>

      <div id="repos" class="mt-6 text-left"></div>
    </div>
  `;
}

function getUserRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=5`)
    .then((res) => res.json())
    .then((repos) => {
      const repoList = repos
        .map(
          (repo) => `
          <li class="mb-1">
            <a href="${repo.html_url}" target="_blank" class="text-blue-400 hover:underline">
              ${repo.name}
            </a>
          </li>`
        )
        .join("");

      const reposContainer = document.getElementById("repos");
      reposContainer.innerHTML = `
        <h3 class="text-lg font-semibold mb-2 ">📦 Recent Repositories:</h3>
        <ul class="list-disc list-inside">${repoList}</ul>
      `;
    })
    .catch(() => {
      const reposContainer = document.getElementById("repos");
      reposContainer.innerHTML = `<p class="text-red-400">Unable to load repositories.</p>`;
    });
}