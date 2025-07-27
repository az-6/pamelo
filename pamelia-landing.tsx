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

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-yellow-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                100% Bahan Alami
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bebas Lemak & Bau Amis,
                <span className="text-green-600"> Aman di Tangan</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Temukan Kekuatan Alami PAMELIA
              </p>
              <p className="text-lg text-gray-500">
                Sabun Cuci Piring Alami, Diformulasikan Tanpa SLS/SLES
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Pelajari Keunggulannya
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="PAMELIA Natural Dish Soap with Pomelo and Basil"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Problem */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kulit Tangan Kering Setelah Mencuci Piring?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sabun biasa seringkali mengandung bahan kimia keras yang dapat
              mengiritasi kulit dan berbahaya jika tertelan.
            </p>
          </div>

          {/* Solution */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ampuh Angkat Lemak
                </h3>
                <p className="text-gray-600">
                  Ekstrak kulit jeruk pamelo secara alami melarutkan lemak dan
                  minyak membandel dengan mudah.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Hilangkan Bau Amis
                </h3>
                <p className="text-gray-600">
                  Formula dengan ekstrak daun kemangi efektif menetralisir bau
                  tak sedap dari peralatan masak Anda.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Lembut & Aman di Kulit
                </h3>
                <p className="text-gray-600">
                  Diformulasikan tanpa SLS/SLES, teruji aman bahkan untuk kulit
                  paling sensitif sekalipun.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Power of Ingredients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kekuatan Bahan Alami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diperkaya dengan ekstrak alami pilihan untuk hasil pembersihan
              yang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-yellow-100 rounded-full p-4 flex-shrink-0">
                  <Image
                    src="/pamelo.jpg?height=60&width=60"
                    alt="Pomelo"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Kulit Jeruk Pamelo
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kaya akan limonene, agen pembersih alami yang terbukti
                    efektif melarutkan lemak dan memberikan aroma segar.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-green-100 rounded-full p-4 flex-shrink-0">
                  <Image
                    src="kemangi.jpg?height=60&width=60"
                    alt="Basil Leaves"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Daun Kemangi
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mengandung eugenol yang berfungsi sebagai antibakteri dan
                    penghilang bau alami, menjadikan peralatan makan higienis.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Natural Ingredients"
                width={500}
                height={500}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Variants */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Varian Produk Kami
            </h2>
            <p className="text-lg text-gray-600">
              Pilih varian yang sesuai dengan kebutuhan dapur Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="PAMELIA Original"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <Badge className="bg-yellow-100 text-yellow-800">
                    Original
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  PAMELIA Original
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Untuk kekuatan pembersih maksimal dari ekstrak pamelo dengan
                  aroma sitrus yang menyegarkan.
                </p>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-green-600">
                    Rp 25.000
                  </span>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  Pilih Varian Ini
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="PAMELIA Ekstrak Kemangi"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <Badge className="bg-green-100 text-green-800">
                    Ekstrak Kemangi
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  PAMELIA Ekstrak Kemangi
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Dengan tambahan ekstrak daun kemangi untuk perlindungan ekstra
                  terhadap bau amis yang membandel.
                </p>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-green-600">
                    Rp 28.000
                  </span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Pilih Varian Ini
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Card className="inline-block border-2 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  Paket Hemat
                </h4>
                <p className="text-green-700 mb-4">
                  Beli kedua varian dan hemat Rp 8.000!
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg text-gray-500 line-through">
                    Rp 53.000
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    Rp 45.000
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kata Pelanggan Kami
            </h2>
            <p className="text-lg text-gray-600">
              Ribuan keluarga telah merasakan manfaat PAMELIA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Akhirnya nemu sabun cuci piring yang nggak bikin tangan
                  kering! Wanginya juga enak, alami banget."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">R</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ibu Rina</p>
                    <p className="text-sm text-gray-500">Jakarta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Bau amis ikan hilang total! Sekarang cuci piring jadi lebih
                  nyaman dan aman untuk keluarga."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-600 font-bold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ibu Sari</p>
                    <p className="text-sm text-gray-500">Bandung</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Kulit sensitif saya cocok banget sama PAMELIA. Lemak
                  terangkat sempurna tanpa iritasi."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-pink-600 font-bold">D</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ibu Dewi</p>
                    <p className="text-sm text-gray-500">Surabaya</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Beralih ke Dapur yang Lebih Sehat & Bersih?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan keluarga yang telah merasakan manfaat
            PAMELIA untuk dapur yang lebih sehat
          </p>

          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-6 md:px-12 py-4 text-lg md:text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 mb-8"
          >
            <MessageCircle className="w-6 h-6 mr-2 md:mr-3" />
            <span className="hidden sm:inline">
              DAPATKAN PAMELIA VIA WHATSAPP SEKARANG
            </span>
            <span className="sm:hidden">PESAN VIA WHATSAPP</span>
          </Button>

          <div className="space-y-6 mt-8">
            <p className="text-green-100 text-lg">Ikuti dan Temukan Kami di:</p>

            {/* Social Media */}
            <div className="flex justify-center items-center space-x-4">
              <p className="text-green-100 font-medium">Sosial Media:</p>
              <div className="flex space-x-3">
                <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <Instagram className="w-6 h-6 text-pink-600" />
                </div>
                <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <AtSign className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>

            {/* E-commerce */}
            <div className="flex justify-center items-center space-x-4">
              <p className="text-green-100 font-medium">E-commerce:</p>
              <div className="flex space-x-3">
                <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <Image
                    src="tokped.png"
                    alt="Tokopedia"
                    width={80}
                    height={30}
                  />
                </div>
                <div className="bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <Image src="shoope.png" alt="Shopee" width={80} height={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-green-400">PAMELIA</h3>
            <p className="text-gray-400">Sabun Cuci Piring Alami</p>
          </div>
          <p className="text-gray-400">
            © 2024 PAMELIA. Semua hak dilindungi. Produk alami untuk keluarga
            sehat.
          </p>
        </div>
      </footer>
    </div>
  );
}
