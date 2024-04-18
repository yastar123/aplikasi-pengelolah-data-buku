import React, { useState, useEffect } from "react";
import Button from "../../Element/Tombol/Button";
import './Content.css'


const Content = () => {
    const [judulBuku, setJudulBuku] = useState("");
    const [penulisBuku, setPenulisBuku] = useState("");
    const [statusBuku, setStatusBuku] = useState(false);
    const [bukuList, setBukuList] = useState([]);

    useEffect(() => {
        // Muat data dari localStorage saat komponen dimuat
        const loadedBukuList = JSON.parse(localStorage.getItem('bukuList') || '[]');
        setBukuList(loadedBukuList);
    }, []);

    useEffect(() => {
        // Simpan bukuList ke localStorage setiap kali bukuList berubah
        localStorage.setItem('bukuList', JSON.stringify(bukuList));
    }, [bukuList]);

    const simpanBuku = () => {
        if (judulBuku && penulisBuku) {
            const newBuku = { judul: judulBuku, penulis: penulisBuku, selesaiDibaca: statusBuku };
            setBukuList([...bukuList, newBuku]);
            setJudulBuku("");
            setPenulisBuku("");
            setStatusBuku(false);
        } else {
            alert('Mohon masukkan judul dan penulis buku');
        }
    };

    const toggleStatus = (index) => {
        const updatedBukuList = bukuList.map((buku, idx) => {
            if (idx === index) {
                return { ...buku, selesaiDibaca: !buku.selesaiDibaca };
            }
            return buku;
        });
        setBukuList(updatedBukuList);
    };

    const hapusBuku = (index) => {
        const updatedBukuList = bukuList.filter((_, idx) => idx !== index);
        setBukuList(updatedBukuList);
    };

    const email = localStorage.getItem('Email');
    const HandleLogout = () => {
        localStorage.removeItem('Email');
        localStorage.removeItem('Password');
        window.location.href = "/";
    }
    return (
        <>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#0099ff" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,117.3C640,128,800,160,960,154.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
            <div className="content">
                <h1>Aplikasi Pengelolaan Data Buku</h1>
                    <h1 style={{ color: "#007bff" }}>Selamat Datang <span style={{ color: "black" }}>{email}</span></h1>
                    <Button onClick={HandleLogout}>
                        Logout
                    </Button>
                <div>
                </div>
                <input type="text" value={judulBuku} onChange={(e) => setJudulBuku(e.target.value)} placeholder="Judul Buku" />
                <input type="text" value={penulisBuku} onChange={(e) => setPenulisBuku(e.target.value)} placeholder="Penulis Buku" />
                <label>
                    <input type="checkbox" checked={statusBuku} onChange={(e) => setStatusBuku(e.target.checked)} /> Selesai Dibaca
                </label>
                <button onClick={simpanBuku}>Simpan Data</button>

                <h2>Rak Buku</h2>
                <div>
                    <h3>Belum Selesai Dibaca</h3>
                    <ul>
                        {bukuList.filter(buku => !buku.selesaiDibaca).map((buku, index) => (
                            <li key={index}>
                                Judul: {buku.judul}, Penulis: {buku.penulis}
                                <button onClick={() => toggleStatus(index)}>Pindah ke Selesai</button>
                                <button onClick={() => hapusBuku(index)}>Hapus</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Selesai Dibaca</h3>
                    <ul>
                        {bukuList.filter(buku => buku.selesaiDibaca).map((buku, index) => (
                            <li key={index}>
                                Judul: {buku.judul}, Penulis: {buku.penulis}
                                <button onClick={() => toggleStatus(index)}>Pindah ke Belum Selesai</button>
                                <button onClick={() => hapusBuku(index)}>Hapus</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#0099ff" fill-opacity="1" d="M0,96L1440,64L1440,320L0,320Z"></path></svg>
            </div></>
    );
};

export default Content;
