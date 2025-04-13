// Navbar Component

export const renderNavbar = () => {
    const navbar = document.createElement('nav');

    navbar.className = 'bg-blue-600 text-white px-6 py-2 shadow';
    navbar.innerHTML = `
      <div class="text-3xl font-bold text-white-600 mb-2">
        JavaScript Next Gen Praktikum
      </div>
    `;
  
    document.body.prepend(navbar);
  };


  