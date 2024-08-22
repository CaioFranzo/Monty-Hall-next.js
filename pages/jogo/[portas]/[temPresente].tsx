import styles from "../../../styles/jogo.module.css"
import { use, useEffect, useState } from "react";
import { atualizarPortas, criarPortas } from "@/functions/portas";
import Porta from "../../../components/Porta"
import Link from "next/link";
import { useRouter } from "next/router";

export default function jogo() {
    const router = useRouter()

    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    useEffect(() =>{
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        const qtdePortasValidas = portas >= 3 && portas <= 5
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        setValido(qtdePortasValidas && temPresenteValido)
    }, [portas])

    useEffect(() =>{
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    function renderizarPortas(){
        return valido && portas.map(porta => {
        return <Porta key={porta.numero} value={porta} 
            onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
        })
    }
    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? 
                    renderizarPortas()
                    : <h2>Valores inválidos</h2>
                }
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link> 
            </div>
        </div>
    )
}