const createProfileCard = profile => {
    const card = document.createElement("div");
    card.className = "box-item";
    card.innerHTML = `<img src="${profile.anh}" alt="Profile Image">
    <div class="item-title">
    <h5 class="card-title">${profile.hoten}</h5>
    <p class="card-text">${profile.chucvu}</p>
    </div>`;
    return card;
};
fetch('thongtin.json')
.then(response => response.json())
.then(data => data.forEach(representative => document.getElementById("profile-list").appendChild(createProfileCard(representative))))
.catch(error => console.error('Error fetching JSON:', error));
