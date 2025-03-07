import React from 'react';

const CafeteriaMenu = () => {
  const menuItems = [
    { name: 'Ilish Bhapa', price: 350, description: 'Steamed Hilsa fish with mustard sauce', protein: '24g', calories: 380, available: 10 },
    { name: 'Kacchi Biryani', price: 320, description: 'Traditional Dhaka-style lamb biryani with aromatic rice', protein: '26g', calories: 550, available: 35 },
    { name: 'Tea & Cookies', price: 40, description: 'Hot tea with 2 chocolate cookies', calories: 150, available: 100 },
    { name: 'Samosa (2pcs)', price: 50, description: 'Crispy vegetable samosas with chutney', calories: 220, available: 80 },
    { name: 'Banana Cake', price: 60, description: 'Fresh homemade banana cake slice', calories: 180, available: 35 },
    { name: 'Singara (3pcs)', price: 45, description: 'Traditional Bengali snack with potato filling', calories: 240, available: 80 },
    { name: 'Coffee', price: 70, description: 'Fresh brewed coffee (hot/cold)', calories: 5, available: 200 },
  ];

  return (
    <div className="cafeteria-menu">
      <h1>Cafeteria Menu</h1>
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Protein: {item.protein}</p>
          <p>Calories: {item.calories}</p>
          <p>Available: {item.available}</p>
          <button>Pre-order</button>
        </div>
      ))}
    </div>
  );
};

export default CafeteriaMenu;
