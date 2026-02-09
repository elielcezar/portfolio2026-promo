import Image from "next/image";
import "./Clients.css";

const clients = [
    {
        "name": "Assaí",
        "image": "/clients/logo-assai.webp"
    },
    {
        "name": "McDonald's ",
        "image": "/clients/logo-mc4.webp"
    },
    {
        "name": "Buscapé",
        "image": "/clients/logo-buscape.webp"
    },
    {
        "name": "Subway",
        "image": "/clients/logo-sub.webp"
    },
    {
        "name": "Gazeta do Povo",
        "image": "/clients/logo-gazeta.webp"
    },
    {
        "name": "Uninter",
        "image": "/clients/logo-uninter.webp"
    }
]
export default function Clients() {
    return (
        <section id="clients">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <h2>Já desenvolvi projetos para <strong>grandes marcas</strong></h2>
                    </div>
                    <div className="col-2">
                        <div className="clients-container">
                            {clients.map((client) => (
                                <div key={client.name} className="client">
                                    <Image
                                        src={client.image}
                                        alt={client.name}
                                        width={145}
                                        height={85}
                                        className="client-image" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}