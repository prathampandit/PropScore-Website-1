 <script>
    const overlay = document.getElementById('searchOverlay');
    const mainSearchBar = document.getElementById('mainSearchBar');
    const closeBtn = document.getElementById('closeSearch');
    const searchInput = document.getElementById('districtSearch');
    const districtList = document.getElementById('districtList');
    const imageCards = document.querySelectorAll('.image-card');
    const goBtn = document.getElementById('goBtn');

    const districts = [
      "Mumbai", "Delhi", "Bengaluru", "Chennai", "Pune", "Kolkata",
      "Hyderabad", "Ahmedabad", "Jaipur", "Lucknow", "Indore",
      "Patna", "Bhopal", "Nagpur", "Raipur", "Chandigarh", "Surat"
    ];

    let selectedDistrict = "";
    let selectedBuilding = "";

    mainSearchBar.addEventListener('focus', () => {
      overlay.style.display = 'flex';
      searchInput.focus();
    });

    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    searchInput.addEventListener('input', function() {
      const val = this.value.toLowerCase();
      districtList.innerHTML = "";

      const filtered = districts.filter(d => d.toLowerCase().startsWith(val));
      filtered.forEach(d => {
        const li = document.createElement("li");
        li.textContent = d;
        li.addEventListener("click", function() {
          selectedDistrict = d;
          searchInput.value = d;
          districtList.innerHTML = "";
          checkReady();
        });
        districtList.appendChild(li);
      });
    });

    imageCards.forEach(card => {
      card.addEventListener("click", function() {
        imageCards.forEach(c => c.classList.remove("selected"));
        this.classList.add("selected");
        selectedBuilding = this.getAttribute("data-type");
        checkReady();
      });
    });

    function checkReady() {
      goBtn.disabled = !(selectedDistrict && selectedBuilding);
    }

    goBtn.addEventListener("click", function() {
      const url = `property.html?district=${encodeURIComponent(selectedDistrict)}&type=${encodeURIComponent(selectedBuilding)}`;
      window.location.href = url;
    });
  </script>