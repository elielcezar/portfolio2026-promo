import Image from "next/image";
import "./Clients.css";

const clients = [
    {
        "name": "Assaí",
        "image": "/clients/assai.png"
    },
    {
        "name": "McDonald's ",
        "image": "/clients/mc.png"
    },
    {
        "name": "Buscapé",
        "image": "/clients/buscape.png"
    },
    {
        "name": "Gazeta do Povo",
        "image": "/clients/gazeta.png"
    },
    {
        "name": "Subway",
        "image": "/clients/sub.png"
    },
    {
        "name": "Uninter",
        "image": "/clients/uninter.png"
    }
]
export default function Clients() {
    return (
        <section id="clients">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <h2>Já desenvolvi projetos para marcas como:</h2>
                    </div>
                    <div className="col-2">
                        <div className="clients-container">
                            {clients.map((client) => (
                                <div key={client.name} className="client">
                                    <Image 
                                        src={client.image} 
                                        alt={client.name} 
                                        width={140}
                                        height={70}
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