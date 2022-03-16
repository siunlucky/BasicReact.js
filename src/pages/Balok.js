/*
    State : sebuah tempat penyimpanan data(Variabel) yang hanya berlaku di lingkup satu komponen saja
    komponen yang memanfaatkan state didalam nya dapat disebut komponen statefull
    sebaliknya komponen yang tidak memanfaatkan state didalamnya disebut komponen stateless
*/
import { useState} from "react";
function Balok(props) {
     //deklarasi panjang, lebar, tinggi, volume
        // mutator method -> fungsi untuk mengubah data pada variabel private
        // setPanjang = mutator method
        let [panjang, setPanjang] = useState(0)
        let [lebar, setLebar] = useState(0)
        let [tinggi, setTinggi] = useState(0)
        let [volume, setVolume] = useState(0)
        let hitungVolume = () => {
            setVolume(panjang * lebar * tinggi)
        }
    return (
        <div className="card">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                Panjang: {panjang}
                <input type={'number'} className="form-control mb2"
                value={panjang}
                onChange={ev => setPanjang(ev.target.value)}
                />

                Lebar: {lebar}
                <input type={'number'} className="form-control mb2"
                value={lebar}
                onChange={ev => setLebar(ev.target.value)}
                />
                

                Tinggi: {tinggi}
                <input type={'number'} className="form-control mb2"
                value={tinggi}
                onChange={ev => setTinggi(ev.target.value)}
                />
                <button className="btn-success" onClick={() => hitungVolume ()}>
                    Hitung
                </button>
                <h4 className="text-primary">
                    {`Volume dari ${props.title}: ${volume} `}
                </h4>
            </div>
        </div>
    )
}
export default Balok;