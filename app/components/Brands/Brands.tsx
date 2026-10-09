import "./Brands.css";

const brands = ["Assaí Atacadista", "McDonald's", "Lojas Americanas", "Subway", "Muffato", "Gazeta do Povo", "Buscapé"];

export default function Brands() {
  return (
    <section aria-label="Marcas atendidas" className="brands">
      <div className="container brands-inner">
        <p className="eyebrow">Já desenvolvi para</p>
        <div className="brands-list">
          {brands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
