const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")

// Show Sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// Close Sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
    // Animatable.animate(keyframes: Keyframe[400] | PropertyIndexedKeyframes, options? : number | KeyframeAnimationOptions): Animation
})

// Change Theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

Customers.forEach(customers => {
    let tr = document.createElement('tr');
    let trcontent = `
                        <td>${customers.Number}</td>
                        <td>${customers.Name}</td>
                        <td>${customers.Country}</td>
                        <td>${customers.Region}</td>
                            `;
    tr.innerHTML = trcontent;
    document.querySelector('table tbody').appendChild(tr);
})