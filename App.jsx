// File: App.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialFinanceData = [
  { tanggal: "2025-07-25", pemasukan: 2000000, pengeluaran: 750000, keterangan: "Donasi Jumat" },
  { tanggal: "2025-07-26", pemasukan: 500000, pengeluaran: 200000, keterangan: "Operasional" },
];

const initialArticles = [
  { judul: "Keutamaan Shalat Berjamaah", isi: "Shalat berjamaah lebih utama dari shalat sendiri dengan 27 derajat..." },
  { judul: "Makna Hijrah di Era Modern", isi: "Hijrah tak hanya berpindah tempat, namun juga perbaikan diri..." },
];

const initialPetugasJumat = [
  { tanggal: "2025-08-02", khatib: "Ust. Ahmad Zainuri", imam: "Ust. Farid", muadzin: "Ananda Fikri" },
  { tanggal: "2025-08-09", khatib: "Ust. Abdul Aziz", imam: "Ust. Hafidz", muadzin: "Ananda Naufal" },
];

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [financeData, setFinanceData] = useState(initialFinanceData);
  const [newEntry, setNewEntry] = useState({ tanggal: '', pemasukan: '', pengeluaran: '', keterangan: '' });

  const handleInput = (e) => setNewEntry({ ...newEntry, [e.target.name]: e.target.value });

  const addFinanceEntry = () => {
    setFinanceData([...financeData, {
      ...newEntry,
      pemasukan: parseInt(newEntry.pemasukan),
      pengeluaran: parseInt(newEntry.pengeluaran)
    }]);
    setNewEntry({ tanggal: '', pemasukan: '', pengeluaran: '', keterangan: '' });
  };

  return (
    <main className="min-h-screen bg-green-50 text-gray-800 p-4 font-sans">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-800">Website DKM Masjid Al-Hidayah</h1>
        <p className="text-sm text-green-700">Informasi Keuangan, Artikel Islam, dan Petugas Jumat</p>
        <Button className="mt-2" onClick={() => setIsAdmin(!isAdmin)}>
          {isAdmin ? "Keluar Admin" : "Masuk Admin"}
        </Button>
      </div>

      <Tabs defaultValue="keuangan" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 bg-green-100">
          <TabsTrigger value="keuangan">Keuangan</TabsTrigger>
          <TabsTrigger value="artikel">Artikel</TabsTrigger>
          <TabsTrigger value="petugas">Petugas Jumat</TabsTrigger>
        </TabsList>

        <TabsContent value="keuangan">
          <ScrollArea className="h-[300px]">
            {financeData.map((item, i) => (
              <Card key={i} className="my-2">
                <CardContent className="p-4">
                  <p className="text-green-800 font-semibold">{item.tanggal}</p>
                  <p>Pemasukan: Rp{item.pemasukan.toLocaleString()}</p>
                  <p>Pengeluaran: Rp{item.pengeluaran.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{item.keterangan}</p>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>

          {isAdmin && (
            <div className="mt-4 space-y-2">
              <h3 className="text-green-700 font-semibold">Tambah Pencatatan Baru</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Input name="tanggal" value={newEntry.tanggal} onChange={handleInput} placeholder="Tanggal" />
                <Input name="pemasukan" value={newEntry.pemasukan} onChange={handleInput} placeholder="Pemasukan" />
                <Input name="pengeluaran" value={newEntry.pengeluaran} onChange={handleInput} placeholder="Pengeluaran" />
                <Input name="keterangan" value={newEntry.keterangan} onChange={handleInput} placeholder="Keterangan" />
              </div>
              <Button onClick={addFinanceEntry} className="mt-2">Simpan</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="artikel">
          <ScrollArea className="h-[300px]">
            {initialArticles.map((item, i) => (
              <Card key={i} className="my-2">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-green-700">{item.judul}</h3>
                  <p className="text-sm text-gray-700 mt-1">{item.isi}</p>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </TabsContent>

        <TabsContent value="petugas">
          <ScrollArea className="h-[300px]">
            {initialPetugasJumat.map((item, i) => (
              <Card key={i} className="my-2">
                <CardContent className="p-4">
                  <p className="text-green-800 font-semibold">{item.tanggal}</p>
                  <p>Khatib: {item.khatib}</p>
                  <p>Imam: {item.imam}</p>
                  <p>Muadzin: {item.muadzin}</p>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </main>
  );
}
