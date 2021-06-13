var navBtn = document.getElementById('nav-btn');
        var navDropdown = document.getElementById('nav-dropdown-menu');
        var isOpened = false;

        navBtn.onclick = function() {
            if (isOpened) {
                navDropdown.style.display = 'none';
                isOpened = false;
                return;
            }
            navDropdown.style.display = 'block';
            isOpened = true;
        }

        var subBtn = document.querySelectorAll('#nav-dropdown-menu > li');
        var subDropdown = document.querySelectorAll('#nav-dropdown-menu .sub-dropdown');
        
        for (var i = 0; i < subBtn.length; i++) {
            var btn = subBtn[i];
            btn.onclick = function() {
                var isSubDropdown = this.nextElementSibling && this.nextElementSibling.classList.contains('sub-dropdown');
                // console.log(isSubDropdown);
                if (isSubDropdown) {
                    if (this.nextElementSibling.style.display === 'none') {
                        this.nextElementSibling.style.display = 'block';
                    } else {
                        this.nextElementSibling.style.display = 'none';
                    }
                }
            }
        }