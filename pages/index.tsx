import Cartao from "@/components/Cartao";
import styles from "../styles/formulario.module.css"
import Link from "next/link";
import EntradaNumerica from "@/components/EntradaNumerica";
import { useState } from "react";

export default function Form() {
  const [qtdeProtas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade Portas?" 
            value={qtdeProtas} 
            onChange={novaQtde => setQtdePortas(novaQtde)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Porta com Presente?" 
            value={comPresente} 
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
            <Link className={styles.link} href={`jogo/${qtdeProtas}/${comPresente}`} >
              <h2 >Iniciar</h2>
            </Link>
        </Cartao>
      </div>
    </div>
  );
}
