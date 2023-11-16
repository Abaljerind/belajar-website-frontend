function Introduction(property) {
  return (
    <div>
      <h1>Introduction</h1>

      {/* disini, introduction.js menerima data yang dikirim dari App.js */}
      <p>halo, nama saya adalah: {property.name}</p>
    </div>
  );
}

export default Introduction;
