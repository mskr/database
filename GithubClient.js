fetchLastChangeInfoFromGitHub().then(
  (lastChangeInfo) => document.querySelector("footer .lastChangeInfo").textContent = lastChangeInfo
)
  
function fetchLastChangeInfoFromGitHub() {
  return new Promise(function(resolve, reject) {
    fetch("https://api.github.com/repos/mskr/mskr.github.io/commits?path=/")
    .then((response) => response.json())
    .then((commits) => {
      let date = commits[0]['commit']['author']['date']
      resolve(new Date(date).toLocaleString())
    })
    .catch((error) => reject(error))
  })
}
