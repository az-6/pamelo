"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Heart,
  Leaf,
  Star,
  MessageCircle,
  Phone,
  AtSign,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Component() {
  // State untuk slider foto kegiatan
  const [currentSlide, setCurrentSlide] = useState(0);
  // State untuk toggle varian lainnya
  const [showOtherVariants, setShowOtherVariants] = useState(false);

  const activityPhotos = [
    {
      src: "/s1.jpg",
      caption: "Proses pembelian dan seleksi kulit jeruk pamelo berkualitas",
    },
    {
      src: "/s2.jpg",
      caption: "Pemilihan bahan alami terbaik untuk formula PAMELIA",
    },
    { src: "/s3.jpg", caption: "Proses sortir dan persiapan bahan baku alami" },
    {
      src: "/s4.jpg",
      caption: "Quality control pemilihan bahan daun kemangi segar",
    },
    { src: "/s5.jpg", caption: "Proses pembuatan sabun cuci piring PAMELIA" },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === activityPhotos.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000); // Ganti slide setiap 4 detik

    return () => clearInterval(timer);
  }, [activityPhotos.length, currentSlide]); // Reset timer ketika currentSlide berubah

  // Function untuk handle manual navigation dan reset timer
  const handleSlideChange = (newSlide: number) => {
    setCurrentSlide(newSlide);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Integrated Logos */}
      <section className="relative bg-gradient-to-br from-green-50 to-yellow-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Partner/Certification Logos */}
          <div className="mb-6 md:mb-8 lg:mb-10">
            <div className="flex flex-nowrap justify-center items-center gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto overflow-x-auto">
              {/* Logo 1 - TUT */}
              <div className="flex items-center justify-center p-1 md:p-2 flex-shrink-0">
                <Image
                  src="/tut.png?height=80&width=160"
                  alt="TUT Logo"
                  width={160}
                  height={80}
                  className="w-auto h-8 md:h-8 lg:h-10 max-w-full object-contain"
                />
              </div>

              {/* Logo 2 - DIKTI */}
              <div className="flex items-center justify-center p-1 md:p-2 flex-shrink-0">
                <Image
                  src="/dikti.png?height=60&width=130"
                  alt="DIKTI Logo"
                  width={130}
                  height={60}
                  className="w-auto h-6 md:h-6 lg:h-8 max-w-full object-contain"
                />
              </div>

              {/* Logo 3 - BELMAWA */}
              <div className="flex items-center justify-center p-1 md:p-2 flex-shrink-0">
                <Image
                  src="/belmawa.png?height=100&width=200"
                  alt="BELMAWA Logo"
                  width={200}
                  height={100}
                  className="w-auto h-12 md:h-16 lg:h-20 max-w-full object-contain"
                />
              </div>

              {/* Logo 4 - P2MW */}
              <div className="flex items-center justify-center p-1 md:p-2 flex-shrink-0">
                <Image
                  src="/p2mw.png?height=80&width=160"
                  alt="P2MW Logo"
                  width={160}
                  height={80}
                  className="w-auto h-10 md:h-12 lg:h-16 max-w-full object-contain"
                />
              </div>

              {/* Logo 5 - Kampus */}
              <div className="flex items-center justify-center p-1 md:p-2 flex-shrink-0">
                <Image
                  src="/kampus.png?height=80&width=160"
                  alt="Kampus Logo"
                  width={160}
                  height={80}
                  className="w-auto h-10 md:h-12 lg:h-16 max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              {/* Product Logo */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white shadow-lg flex items-center justify-center mb-2">
                  <Image
                    src="/logo.png?height=100&width=100"
                    alt="PAMELIA Product Logo"
                    width={100}
                    height={100}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-contain"
                  />
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mx-auto lg:mx-0 w-fit">
                100% Bahan Alami
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                PAMELIA Dishwashing Soap,
                <span className="text-green-600">
                  {" "}
                  Peluntur Lemak Membandel Ramah Lingkungan
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Bebas Lemak & Bau Amis, Aman di Tangan
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500">
                Sabun Cuci Piring Alami, Diformulasikan Tanpa SLS/SLES
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 italic">
                Temukan Kekuatan Alami PAMELIA
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => {
                  document.getElementById("keunggulan")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Pelajari Keunggulannya
              </Button>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8">
                <Image
                  src="original.jpg?height=400&width=400"
                  alt="PAMELIA Natural Dish Soap with Pomelo and Basil"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl md:rounded-2xl"
                />
              </div>
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-yellow-400 rounded-full p-2 md:p-4 shadow-lg">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About PAMELIA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
              Mengapa Memilih PAMELIA?
            </h2>

            <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                Produk kami adalah sabun cuci piring yang berbahan dasar alami
                dari kulit jeruk pamelo. Sabun cuci piring termasuk dalam
                perbekalan kesehatan rumah tangga (PKRT), maka dari itu konsep
                dari produk kami disesuaikan dengan kebutuhan masyarakat akan
                sabun cuci piring alami tanpa bahan kimia yang mampu
                menghilangkan noda membandel.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                Dengan dua varian aroma yaitu original dan ekstrak daun kemangi.
                Sejalan dengan hal tersebut, banyak dari masyarakat yang
                mengalami iritasi pada kulit setelah menggunakan sabun cuci
                piring dikarenakan kandungan bahan kimia yang terdapat pada
                sabun tersebut.
              </p>

              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md border-l-4 border-green-500">
                <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                  <span className="text-green-600 font-bold">PAMELIA</span>{" "}
                  hadir sebagai produk inovatif yang tidak hanya
                  <span className="text-green-600 font-semibold">
                    {" "}
                    aman bagi kulit
                  </span>
                  , tetapi juga
                  <span className="text-green-600 font-semibold">
                    {" "}
                    ramah lingkungan
                  </span>{" "}
                  serta
                  <span className="text-green-600 font-semibold">
                    {" "}
                    bernilai ekonomis
                  </span>
                  , sehingga dapat menjadi solusi yang tepat untuk mengatasi
                  masalah tersebut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section id="keunggulan" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Hook */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Bukan Sekadar Sabun Cuci Piring. Ini Kebaikan Alam untuk Dapur dan
              Bumi Anda.
            </h2>
            <p className="text-lg md:text-xl text-green-600 font-semibold mb-6">
              5 Keunggulan Utama PAMELIA
            </p>
          </div>

          {/* 5 Keunggulan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
            {/* Keunggulan 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center h-full flex flex-col">
                <div className="bg-green-100 rounded-full p-2 sm:p-3 md:p-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  Daya Bersih Maksimal dari Bahan Alami
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 flex-grow">
                  Ekstrak kulit jeruk pamelo dengan kandungan asam sitrat dan
                  d-limonene yang ampuh melarutkan lemak membandel tanpa bahan
                  kimia keras.
                </p>
              </CardContent>
            </Card>

            {/* Keunggulan 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center h-full flex flex-col">
                <div className="bg-yellow-100 rounded-full p-2 sm:p-3 md:p-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  Efektif Hilangkan Bau Amis
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 flex-grow">
                  Minyak esensial jeruk pamelo dengan antimikroba efektif
                  menghilangkan bau amis yang membandel pada peralatan masak.
                </p>
              </CardContent>
            </Card>

            {/* Keunggulan 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center h-full flex flex-col">
                <div className="bg-pink-100 rounded-full p-2 sm:p-3 md:p-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-pink-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  Aman untuk Keluarga, Lembut di Tangan
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 flex-grow">
                  Bahan alami yang lembut, aman untuk seluruh keluarga.
                  Kandungan pektin alami menjaga kelembapan kulit tangan Anda.
                </p>
              </CardContent>
            </Card>

            {/* Keunggulan 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-1 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center h-full flex flex-col">
                <div className="bg-blue-100 rounded-full p-2 sm:p-3 md:p-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  Ramah Lingkungan & Berkelanjutan
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 flex-grow">
                  Kemasan eco-friendly dan refillable untuk mengurangi limbah
                  plastik. Turut serta dalam gerakan pelestarian lingkungan.
                </p>
              </CardContent>
            </Card>

            {/* Keunggulan 5 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-2">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center h-full flex flex-col">
                <div className="bg-orange-100 rounded-full p-2 sm:p-3 md:p-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  Mendukung Kesejahteraan Petani Lokal
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 flex-grow">
                  Setiap pembelian PAMELIA mendukung perekonomian petani jeruk
                  pamelo di Kudus. Bukan hanya piring bersih, tetapi juga dampak
                  positif bagi komunitas lokal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Power of Ingredients */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kekuatan Bahan Alami
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Diperkaya dengan ekstrak alami pilihan untuk hasil pembersihan
              yang optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="bg-yellow-100 rounded-full p-3 md:p-4 flex-shrink-0">
                  <Image
                    src="/pamelo.jpg?height=60&width=60"
                    alt="Pomelo"
                    width={50}
                    height={50}
                    className="w-12 h-12 md:w-15 md:h-15 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                    Kulit Jeruk Pamelo
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Kaya akan limonene, agen pembersih alami yang terbukti
                    efektif melarutkan lemak dan memberikan aroma segar.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="bg-green-100 rounded-full p-3 md:p-4 flex-shrink-0">
                  <Image
                    src="kemangi.jpg?height=60&width=60"
                    alt="Basil Leaves"
                    width={50}
                    height={50}
                    className="w-12 h-12 md:w-15 md:h-15 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                    Daun Kemangi
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Mengandung eugenol yang berfungsi sebagai antibakteri dan
                    penghilang bau alami, menjadikan peralatan makan higienis.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <Image
                src="keunggulan.png?height=500&width=500"
                alt="Natural Ingredients"
                width={500}
                height={500}
                className="w-full h-auto rounded-2xl md:rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Variants */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              PAMELIA Original 1L
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-4">
              Pilihan Terbaik Keluarga Indonesia
            </p>
          </div>

          {/* Best Seller Focus */}
          <div className="max-w-2xl mx-auto mb-8 md:mb-12">
            <Card className="border-3 border-yellow-400 shadow-2xl relative bg-white">
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-yellow-500 text-white font-bold px-3 sm:px-4 md:px-6 py-1 sm:py-2 text-xs sm:text-sm md:text-base lg:text-lg shadow-lg">
                  BEST SELLER
                </Badge>
              </div>
              <CardContent className="p-8 md:p-12 text-center">
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <Image
                    src="original2.jpg?height=250&width=250"
                    alt="PAMELIA Original 1 Liter"
                    width={200}
                    height={200}
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-3 md:mb-4"
                  />
                  <Badge className="bg-yellow-100 text-yellow-800 text-sm sm:text-base lg:text-lg px-3 sm:px-4 py-1 sm:py-2">
                    1 Liter
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                  PAMELIA Original 1L
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
                  Ukuran paling populer! Ideal untuk kebutuhan keluarga
                  sehari-hari dengan nilai ekonomis terbaik. Dipercaya ribuan
                  keluarga Indonesia.
                </p>

                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
                    <span className="text-lg sm:text-xl md:text-2xl text-gray-500 line-through">
                      Rp 35.000
                    </span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">
                      Rp 25.000
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-green-600 font-semibold">
                    Hemat Rp 10.000!
                  </p>
                </div>

                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white text-base sm:text-lg md:text-xl font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  PESAN SEKARANG
                </Button>

                <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <span>✓</span>
                    <span>Bahan 100% Alami</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <span>✓</span>
                    <span>Ramah Lingkungan</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <span>✓</span>
                    <span>Aman di Tangan</span>
                  </div>
                </div>

                {/* Catatan ukuran lain */}
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-600 text-center">
                    <span className="font-medium">Tersedia juga:</span> Ukuran
                    500ml dan 2L untuk kebutuhan yang berbeda
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Toggle Button untuk Varian Lainnya */}
          <div className="text-center mb-4 sm:mb-6">
            <Button
              variant="outline"
              onClick={() => setShowOtherVariants(!showOtherVariants)}
              className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              {showOtherVariants
                ? "▲ Sembunyikan Varian Lainnya"
                : "▼ Lihat Varian Lainnya"}
            </Button>
          </div>

          {/* Slide Down Varian Lainnya */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              showOtherVariants
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
              {/* Varian Ekstrak Kemangi */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="text-center mb-4 md:mb-6">
                    <Image
                      src="kemangi.jpg?height=150&width=150"
                      alt="PAMELIA dengan Ekstrak Kemangi 1L"
                      width={120}
                      height={120}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 rounded-full"
                    />
                    <Badge className="bg-green-100 text-green-800 text-sm sm:text-base">
                      1 Liter
                    </Badge>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center">
                    PAMELIA dengan Ekstrak Kemangi 1L
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 md:mb-6 text-center px-2">
                    Varian dengan tambahan ekstrak daun kemangi untuk aroma yang
                    lebih segar dan khasiat antibakteri yang lebih kuat.
                    Sempurna untuk membersihkan peralatan makan.
                  </p>
                  <div className="text-center mb-4 md:mb-6">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
                      Rp 27.000
                    </span>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm md:text-base py-2 md:py-3">
                    Pilih Varian Kemangi
                  </Button>

                  {/* Catatan ukuran lain untuk varian kemangi */}
                  <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-xs sm:text-sm text-gray-600 text-center">
                      <span className="font-medium">
                        Varian Kemangi tersedia juga:
                      </span>{" "}
                      Ukuran 500ml dan 2L
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kata Pelanggan Kami
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-4">
              Ribuan keluarga telah merasakan manfaat PAMELIA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 italic">
                  "Akhirnya nemu sabun cuci piring yang nggak bikin tangan
                  kering! Wanginya juga enak, alami banget."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold text-sm md:text-base">
                      R
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">
                      Ibu Rina
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">Jakarta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 italic">
                  "Bau amis ikan hilang total! Sekarang cuci piring jadi lebih
                  nyaman dan aman untuk keluarga."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-600 font-bold text-sm md:text-base">
                      S
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">
                      Ibu Sari
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">Bandung</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 italic">
                  "Kulit sensitif saya cocok banget sama PAMELIA. Lemak
                  terangkat sempurna tanpa iritasi."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-pink-600 font-bold text-sm md:text-base">
                      D
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">
                      Ibu Dewi
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">Surabaya</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Profile Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Di Balik PAMELIA: Tim Inovator Kami
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-4 mb-8">
              PAMELIA lahir dari semangat kolaborasi tim mahasiswa program P2MW
              yang bersemangat menciptakan solusi alami untuk keluarga Indonesia
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto overflow-hidden shadow-lg">
                  <Image
                    src="/pfp3.jpg?height=100&width=100"
                    alt="Anggota Tim 1"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-blue-500 rounded-full p-1 md:p-2 shadow-lg">
                  <Heart className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
                </div>
              </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                Triana Rizqi Amelia
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-blue-600 font-medium mb-1 sm:mb-2">
                Chief Executive Officer
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                Pendidikan Guru Sekolah Dasar
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto overflow-hidden shadow-lg">
                  <Image
                    src="/pfp4.jpg?height=100&width=100"
                    alt="Anggota Tim 2"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-green-500 rounded-full p-1 md:p-2 shadow-lg">
                  <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
                </div>
              </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                Ira Khoirunnisa
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-green-600 font-medium mb-1 sm:mb-2">
                Chief Financial Officer
              </p>
              <p className="text-xs md:text-sm text-gray-600">Manajemen</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto overflow-hidden shadow-lg">
                  <Image
                    src="/pfp5.jpg?height=100&width=100"
                    alt="Anggota Tim 3"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-yellow-500 rounded-full p-1 md:p-2 shadow-lg">
                  <Leaf className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
                </div>
              </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                Bagus Stiawan Rahmadhon
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-yellow-600 font-medium mb-1 sm:mb-2">
                Chief Operating Officer
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                Teknik Industri
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto overflow-hidden shadow-lg">
                  <Image
                    src="/pfp2.jpg?height=100&width=100"
                    alt="Anggota Tim 4"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-pink-500 rounded-full p-1 md:p-2 shadow-lg">
                  <Star className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
                </div>
              </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                Atina Risqiyana
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-pink-600 font-medium mb-1 sm:mb-2">
                Chief Marketing Officer
              </p>
              <p className="text-xs md:text-sm text-gray-600">Manajemen</p>
            </div>
          </div>

          {/* Program Badge */}
          <div className="text-center mt-8 md:mt-12">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
              <Sparkles className="w-5 h-5 text-green-600" />
              <span className="font-bold text-green-600 text-sm md:text-base">
                Program P2MW - Inovasi untuk Indonesia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Photos Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami Mengembangkan PAMELIA
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-4">
              Dokumentasi kegiatan riset dan pengembangan produk inovatif kami
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-gray-100">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {activityPhotos.map((photo, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <div className="aspect-[3/4] md:aspect-[4/5] lg:aspect-[5/6] relative">
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Caption */}
                      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                        <p className="text-white text-sm md:text-lg font-medium leading-relaxed">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  {activityPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  handleSlideChange(
                    currentSlide === 0
                      ? activityPhotos.length - 1
                      : currentSlide - 1
                  )
                }
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
              >
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() =>
                  handleSlideChange(
                    currentSlide === activityPhotos.length - 1
                      ? 0
                      : currentSlide + 1
                  )
                }
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
              >
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 md:mt-8">
              <div className="w-full bg-gray-200 rounded-full h-1 md:h-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-green-600 h-1 md:h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((currentSlide + 1) / activityPhotos.length) * 100
                    }%`,
                  }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs md:text-sm text-gray-500">
                <span>
                  Foto {currentSlide + 1} dari {activityPhotos.length}
                </span>
                <span>Scroll otomatis aktif</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 px-2 sm:px-4">
            Siap Beralih ke Dapur yang Lebih Sehat & Bersih?
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-green-100 mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-4">
            Bergabunglah dengan ribuan keluarga yang telah merasakan manfaat
            PAMELIA untuk dapur yang lebih sehat
          </p>

          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-4 sm:px-6 md:px-12 py-3 sm:py-4 text-sm sm:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 mb-6 md:mb-8 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2 md:mr-3" />
            <span className="hidden sm:inline">
              DAPATKAN PAMELIA VIA WHATSAPP SEKARANG
            </span>
            <span className="sm:hidden text-xs">PESAN VIA WHATSAPP</span>
          </Button>

          <div className="space-y-3 sm:space-y-4 md:space-y-6 mt-4 sm:mt-6 md:mt-8">
            <p className="text-green-100 text-sm sm:text-base md:text-lg">
              Ikuti dan Temukan Kami di:
            </p>

            {/* Social Media */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-green-100 font-medium text-xs sm:text-sm md:text-base">
                Sosial Media:
              </p>
              <div className="flex space-x-2 sm:space-x-3">
                <div className="bg-white rounded-lg p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <div className="bg-white rounded-lg p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-600" />
                </div>
                <div className="bg-white rounded-lg p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <AtSign className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                </div>
              </div>
            </div>

            {/* E-commerce */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-green-100 font-medium text-xs sm:text-sm md:text-base">
                E-commerce:
              </p>
              <div className="flex space-x-2 sm:space-x-3">
                <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
                  <Image
                    src="tokped.png"
                    alt="Tokopedia"
                    width={100}
                    height={30}
                    className="w-auto h-4 sm:h-6 md:h-7 max-w-[70px] sm:max-w-[90px] md:max-w-[110px] object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
                  <Image
                    src="shoope.png"
                    alt="Shopee"
                    width={100}
                    height={30}
                    className="w-auto h-4 sm:h-6 md:h-7 max-w-[70px] sm:max-w-[90px] md:max-w-[110px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-3 md:mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-green-400">
              PAMELIA
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Sabun Cuci Piring Alami
            </p>
          </div>
          <p className="text-gray-400 text-xs md:text-sm px-4">
            © 2024 PAMELIA. Semua hak dilindungi. Produk alami untuk keluarga
            sehat.
          </p>
        </div>
      </footer>
    </div>
  );
}
