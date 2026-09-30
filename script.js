/**
 * ==============================================================================
 * TALASÉ — MARKETPLACE INTERACTIVE JAVASCRIPT
 * Lapis Talas Sangkuriang Bogor — Tugas MOSAIK 2026
 * Pure Vanilla JavaScript (Tanpa Framework / Library)
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DATA MASTER PRODUK (11 VARIAN RESMI)
       ========================================================================== */
    const PRODUCTS_DATA = [
        {
            id: 'original',
            name: 'Lapis Talas Original',
            price: 34000,
            rating: 4.9,
            reviewsCount: '1.2k',
            category: 'bestseller signature',
            badge: 'BEST SELLER',
            badgeClass: 'badge-yellow',
            image: 'images/talas original.jpg.jpeg',
            shortDesc: 'Perpaduan klasik dua warna ungu talas dan kuning keju dengan limpahan taburan keju cheddar parut.'
        },
        {
            id: 'full-talas',
            name: 'Lapis Full Talas',
            price: 34000,
            rating: 4.9,
            reviewsCount: '890',
            category: 'signature',
            badge: 'FAVORIT BOGOR',
            badgeClass: 'badge-purple',
            image: 'images/talas full.jpg.jpeg',
            shortDesc: 'Dua lapis bolu talas ungu murni dengan aroma taro yang lebih intens dan gurihnya parutan keju.'
        },
        {
            id: 'brownies',
            name: 'Lapis Brownies',
            price: 35000,
            rating: 4.8,
            reviewsCount: '750',
            category: 'cokelat',
            badge: 'COKLAT INTENSE',
            badgeClass: 'badge-yellow',
            image: 'images/brownies.jpg.jpeg',
            shortDesc: 'Kombinasi brownies cokelat pekat fudgy dengan lapisan lembut talas serta taburan cokelat butir.'
        },
        {
            id: 'chocovilla',
            name: 'Lapis Chocovilla',
            price: 35000,
            rating: 4.9,
            reviewsCount: '810',
            category: 'cokelat',
            badge: 'DOUBLE CHOCO',
            badgeClass: 'badge-purple',
            image: 'images/chocovilla.jpg.jpeg',
            shortDesc: 'Harmonisasi istimewa antara cake vanilla custard lembut dan lapisan dark chocolate pekat berkelas.'
        },
        {
            id: 'talas-susu',
            name: 'Lapis Talas Susu',
            price: 35000,
            rating: 5.0,
            reviewsCount: '1.5k',
            category: 'bestseller signature',
            badge: 'BEST SELLER',
            badgeClass: 'badge-yellow',
            image: 'images/talas susu.jpg.jpeg',
            shortDesc: 'Bolu lapis dengan kelembutan krim susu murni berpadu talas ungu yang manis, gurih, dan nagih.'
        },
        {
            id: 'blackforest',
            name: 'Lapis Blackforest',
            price: 35000,
            rating: 4.8,
            reviewsCount: '670',
            category: 'cokelat',
            badge: 'PREMIUM SPECIAL',
            badgeClass: 'badge-coral',
            image: 'images/talas blackforest.jpg.jpeg',
            shortDesc: 'Sensasi mewah kue blackforest khas Eropa dengan cokelat pekat, serpihan ceri, dan bolu talas.'
        }
    ];

    /* ==========================================================================
       1b. MASTER DATA PENGIRIMAN SELURUH INDONESIA (38 PROVINSI)
       ========================================================================== */
    const INDONESIA_PROVINCES = [
        // --- 1. PULAU JAWA ---
        {
            id: 'jabar',
            name: 'Jawa Barat',
            island: 'Pulau Jawa',
            baseOngkir: 12000,
            cities: [
                { id: 'bogor-kota', name: 'Kota Bogor', ongkir: 10000, zip: '16143', etd: 'Hari Ini (Sameday)' },
                { id: 'bogor-kab', name: 'Kabupaten Bogor', ongkir: 12000, zip: '16911', etd: '1 Hari (Next Day)' },
                { id: 'depok', name: 'Kota Depok', ongkir: 12000, zip: '16411', etd: '1 Hari (Next Day)' },
                { id: 'bekasi-kota', name: 'Kota Bekasi', ongkir: 14000, zip: '17111', etd: '1 Hari (Next Day)' },
                { id: 'bekasi-kab', name: 'Kabupaten Bekasi', ongkir: 15000, zip: '17530', etd: '1-2 Hari' },
                { id: 'bandung-kota', name: 'Kota Bandung', ongkir: 15000, zip: '40111', etd: '1 Hari (Next Day)' },
                { id: 'bandung-kab', name: 'Kabupaten Bandung', ongkir: 16000, zip: '40911', etd: '1-2 Hari' },
                { id: 'bandung-barat', name: 'Kabupaten Bandung Barat', ongkir: 16000, zip: '40552', etd: '1-2 Hari' },
                { id: 'cimahi', name: 'Kota Cimahi', ongkir: 15000, zip: '40511', etd: '1 Hari' },
                { id: 'sukabumi-kota', name: 'Kota Sukabumi', ongkir: 14000, zip: '43111', etd: '1 Hari' },
                { id: 'sukabumi-kab', name: 'Kabupaten Sukabumi', ongkir: 16000, zip: '43311', etd: '1-2 Hari' },
                { id: 'cianjur', name: 'Kabupaten Cianjur', ongkir: 14000, zip: '43211', etd: '1-2 Hari' },
                { id: 'cirebon-kota', name: 'Kota Cirebon', ongkir: 16000, zip: '45111', etd: '1 Hari' },
                { id: 'cirebon-kab', name: 'Kabupaten Cirebon', ongkir: 17000, zip: '45611', etd: '1-2 Hari' },
                { id: 'karawang', name: 'Kabupaten Karawang', ongkir: 14000, zip: '41311', etd: '1-2 Hari' },
                { id: 'purwakarta', name: 'Kabupaten Purwakarta', ongkir: 15000, zip: '41111', etd: '1-2 Hari' },
                { id: 'subang', name: 'Kabupaten Subang', ongkir: 15000, zip: '41211', etd: '1-2 Hari' },
                { id: 'tasikmalaya-kota', name: 'Kota Tasikmalaya', ongkir: 16000, zip: '46111', etd: '1-2 Hari' },
                { id: 'garut', name: 'Kabupaten Garut', ongkir: 16000, zip: '44111', etd: '1-2 Hari' },
                { id: 'indramayu', name: 'Kabupaten Indramayu', ongkir: 17000, zip: '45211', etd: '1-2 Hari' },
                { id: 'kuningan', name: 'Kabupaten Kuningan', ongkir: 17000, zip: '45511', etd: '1-2 Hari' },
                { id: 'majalengka', name: 'Kabupaten Majalengka', ongkir: 17000, zip: '45411', etd: '1-2 Hari' },
                { id: 'sumedang', name: 'Kabupaten Sumedang', ongkir: 16000, zip: '45311', etd: '1-2 Hari' },
                { id: 'ciamis', name: 'Kabupaten Ciamis', ongkir: 17000, zip: '46211', etd: '1-2 Hari' },
                { id: 'banjar', name: 'Kota Banjar', ongkir: 17000, zip: '46311', etd: '1-2 Hari' },
                { id: 'pangandaran', name: 'Kabupaten Pangandaran', ongkir: 18000, zip: '46396', etd: '2 Hari' }
            ]
        },
        {
            id: 'dki',
            name: 'DKI Jakarta',
            island: 'Pulau Jawa',
            baseOngkir: 14000,
            cities: [
                { id: 'jaksel', name: 'Jakarta Selatan', ongkir: 14000, zip: '12110', etd: '1 Hari (Next Day)' },
                { id: 'jaktim', name: 'Jakarta Timur', ongkir: 14000, zip: '13110', etd: '1 Hari (Next Day)' },
                { id: 'jakpus', name: 'Jakarta Pusat', ongkir: 14000, zip: '10110', etd: '1 Hari (Next Day)' },
                { id: 'jakbar', name: 'Jakarta Barat', ongkir: 14000, zip: '11110', etd: '1 Hari (Next Day)' },
                { id: 'jakut', name: 'Jakarta Utara', ongkir: 14000, zip: '14110', etd: '1 Hari (Next Day)' },
                { id: 'seribu', name: 'Kepulauan Seribu', ongkir: 20000, zip: '14510', etd: '2 Hari' }
            ]
        },
        {
            id: 'banten',
            name: 'Banten',
            island: 'Pulau Jawa',
            baseOngkir: 15000,
            cities: [
                { id: 'tangsel', name: 'Kota Tangerang Selatan', ongkir: 14000, zip: '15310', etd: '1 Hari' },
                { id: 'tangerang-kota', name: 'Kota Tangerang', ongkir: 14000, zip: '15111', etd: '1 Hari' },
                { id: 'tangerang-kab', name: 'Kabupaten Tangerang', ongkir: 15000, zip: '15710', etd: '1-2 Hari' },
                { id: 'serang-kota', name: 'Kota Serang', ongkir: 16000, zip: '42111', etd: '1-2 Hari' },
                { id: 'cilegon', name: 'Kota Cilegon', ongkir: 16000, zip: '42411', etd: '1-2 Hari' },
                { id: 'serang-kab', name: 'Kabupaten Serang', ongkir: 17000, zip: '42191', etd: '1-2 Hari' },
                { id: 'pandeglang', name: 'Kabupaten Pandeglang', ongkir: 18000, zip: '42211', etd: '2 Hari' },
                { id: 'lebak', name: 'Kabupaten Lebak', ongkir: 18000, zip: '42311', etd: '2 Hari' }
            ]
        },
        {
            id: 'jateng',
            name: 'Jawa Tengah',
            island: 'Pulau Jawa',
            baseOngkir: 18000,
            cities: [
                { id: 'semarang-kota', name: 'Kota Semarang', ongkir: 18000, zip: '50111', etd: '1-2 Hari' },
                { id: 'solo', name: 'Kota Surakarta (Solo)', ongkir: 18000, zip: '57111', etd: '1-2 Hari' },
                { id: 'magelang', name: 'Kota Magelang', ongkir: 19000, zip: '56111', etd: '1-2 Hari' },
                { id: 'salatiga', name: 'Kota Salatiga', ongkir: 19000, zip: '50711', etd: '1-2 Hari' },
                { id: 'pekalongan', name: 'Kota Pekalongan', ongkir: 19000, zip: '51111', etd: '1-2 Hari' },
                { id: 'tegal', name: 'Kota Tegal', ongkir: 18000, zip: '52111', etd: '1-2 Hari' },
                { id: 'banyumas', name: 'Kabupaten Banyumas (Purwokerto)', ongkir: 19000, zip: '53111', etd: '1-2 Hari' },
                { id: 'cilacap', name: 'Kabupaten Cilacap', ongkir: 19000, zip: '53211', etd: '1-2 Hari' },
                { id: 'kudus', name: 'Kabupaten Kudus', ongkir: 19000, zip: '59311', etd: '1-2 Hari' },
                { id: 'jepara', name: 'Kabupaten Jepara', ongkir: 20000, zip: '59411', etd: '2 Hari' },
                { id: 'brebes', name: 'Kabupaten Brebes', ongkir: 18000, zip: '52211', etd: '1-2 Hari' },
                { id: 'klaten', name: 'Kabupaten Klaten', ongkir: 19000, zip: '57411', etd: '1-2 Hari' },
                { id: 'kendal', name: 'Kabupaten Kendal', ongkir: 19000, zip: '51311', etd: '1-2 Hari' },
                { id: 'boyolali', name: 'Kabupaten Boyolali', ongkir: 19000, zip: '57311', etd: '1-2 Hari' },
                { id: 'kebumen', name: 'Kabupaten Kebumen', ongkir: 20000, zip: '54311', etd: '2 Hari' }
            ]
        },
        {
            id: 'diy',
            name: 'DI Yogyakarta',
            island: 'Pulau Jawa',
            baseOngkir: 18000,
            cities: [
                { id: 'jogja-kota', name: 'Kota Yogyakarta', ongkir: 18000, zip: '55111', etd: '1-2 Hari' },
                { id: 'sleman', name: 'Kabupaten Sleman', ongkir: 18000, zip: '55511', etd: '1-2 Hari' },
                { id: 'bantul', name: 'Kabupaten Bantul', ongkir: 18000, zip: '55711', etd: '1-2 Hari' },
                { id: 'kulon-progo', name: 'Kabupaten Kulon Progo', ongkir: 19000, zip: '55611', etd: '1-2 Hari' },
                { id: 'gunung-kidul', name: 'Kabupaten Gunungkidul', ongkir: 20000, zip: '55811', etd: '2 Hari' }
            ]
        },
        {
            id: 'jatim',
            name: 'Jawa Timur',
            island: 'Pulau Jawa',
            baseOngkir: 20000,
            cities: [
                { id: 'surabaya', name: 'Kota Surabaya', ongkir: 20000, zip: '60111', etd: '1-2 Hari' },
                { id: 'malang-kota', name: 'Kota Malang', ongkir: 21000, zip: '65111', etd: '1-2 Hari' },
                { id: 'sidoarjo', name: 'Kabupaten Sidoarjo', ongkir: 20000, zip: '61211', etd: '1-2 Hari' },
                { id: 'gresik', name: 'Kabupaten Gresik', ongkir: 21000, zip: '61111', etd: '1-2 Hari' },
                { id: 'kediri', name: 'Kota Kediri', ongkir: 22000, zip: '64111', etd: '1-2 Hari' },
                { id: 'madiun', name: 'Kota Madiun', ongkir: 21000, zip: '63111', etd: '1-2 Hari' },
                { id: 'batu', name: 'Kota Batu', ongkir: 21000, zip: '65311', etd: '1-2 Hari' },
                { id: 'jember', name: 'Kabupaten Jember', ongkir: 22000, zip: '68111', etd: '2 Hari' },
                { id: 'banyuwangi', name: 'Kabupaten Banyuwangi', ongkir: 23000, zip: '68411', etd: '2 Hari' },
                { id: 'pasuruan', name: 'Kota Pasuruan', ongkir: 21000, zip: '67111', etd: '1-2 Hari' },
                { id: 'probolinggo', name: 'Kota Probolinggo', ongkir: 21000, zip: '67211', etd: '2 Hari' },
                { id: 'bojonegoro', name: 'Kabupaten Bojonegoro', ongkir: 22000, zip: '62111', etd: '2 Hari' },
                { id: 'mojokerto', name: 'Kota Mojokerto', ongkir: 21000, zip: '61311', etd: '1-2 Hari' }
            ]
        },

        // --- 2. PULAU BALI & NUSA TENGGARA ---
        {
            id: 'bali',
            name: 'Bali',
            island: 'Pulau Bali & Nusa Tenggara',
            baseOngkir: 26000,
            cities: [
                { id: 'denpasar', name: 'Kota Denpasar', ongkir: 26000, zip: '80111', etd: '1-2 Hari (Air Cargo)' },
                { id: 'badung', name: 'Kabupaten Badung (Kuta / Canggu)', ongkir: 26000, zip: '80361', etd: '1-2 Hari' },
                { id: 'gianyar', name: 'Kabupaten Gianyar (Ubud)', ongkir: 27000, zip: '80511', etd: '2 Hari' },
                { id: 'tabanan', name: 'Kabupaten Tabanan', ongkir: 27000, zip: '82111', etd: '2 Hari' },
                { id: 'buleleng', name: 'Kabupaten Buleleng (Singaraja)', ongkir: 28000, zip: '81111', etd: '2 Hari' },
                { id: 'karangasem', name: 'Kabupaten Karangasem', ongkir: 28000, zip: '80811', etd: '2-3 Hari' }
            ]
        },
        {
            id: 'ntb',
            name: 'Nusa Tenggara Barat (NTB)',
            island: 'Pulau Bali & Nusa Tenggara',
            baseOngkir: 28000,
            cities: [
                { id: 'mataram', name: 'Kota Mataram', ongkir: 28000, zip: '83111', etd: '2 Hari' },
                { id: 'lombok-barat', name: 'Kabupaten Lombok Barat', ongkir: 28000, zip: '83311', etd: '2 Hari' },
                { id: 'lombok-tengah', name: 'Kabupaten Lombok Tengah (Praya)', ongkir: 29000, zip: '83511', etd: '2-3 Hari' },
                { id: 'lombok-timur', name: 'Kabupaten Lombok Timur', ongkir: 30000, zip: '83611', etd: '2-3 Hari' },
                { id: 'bima', name: 'Kota Bima', ongkir: 32000, zip: '84111', etd: '3 Hari' },
                { id: 'sumbawa', name: 'Kabupaten Sumbawa', ongkir: 32000, zip: '84311', etd: '3 Hari' }
            ]
        },
        {
            id: 'ntt',
            name: 'Nusa Tenggara Timur (NTT)',
            island: 'Pulau Bali & Nusa Tenggara',
            baseOngkir: 38000,
            cities: [
                { id: 'kupang', name: 'Kota Kupang', ongkir: 38000, zip: '85111', etd: '2-3 Hari' },
                { id: 'labuan-bajo', name: 'Kab. Manggarai Barat (Labuan Bajo)', ongkir: 39000, zip: '86711', etd: '2-3 Hari' },
                { id: 'ende', name: 'Kabupaten Ende', ongkir: 40000, zip: '86311', etd: '3 Hari' },
                { id: 'sikka', name: 'Kabupaten Sikka (Maumere)', ongkir: 41000, zip: '86111', etd: '3-4 Hari' },
                { id: 'sumba-timur', name: 'Kabupaten Sumba Timur', ongkir: 42000, zip: '87111', etd: '3-4 Hari' }
            ]
        },

        // --- 3. PULAU SUMATERA ---
        {
            id: 'aceh',
            name: 'Aceh',
            island: 'Pulau Sumatera',
            baseOngkir: 32000,
            cities: [
                { id: 'banda-aceh', name: 'Kota Banda Aceh', ongkir: 32000, zip: '23111', etd: '2 Hari' },
                { id: 'lhokseumawe', name: 'Kota Lhokseumawe', ongkir: 34000, zip: '24311', etd: '2-3 Hari' },
                { id: 'sabang', name: 'Kota Sabang', ongkir: 36000, zip: '23511', etd: '2-3 Hari' },
                { id: 'langsa', name: 'Kota Langsa', ongkir: 34000, zip: '24411', etd: '2-3 Hari' }
            ]
        },
        {
            id: 'sumut',
            name: 'Sumatera Utara',
            island: 'Pulau Sumatera',
            baseOngkir: 28000,
            cities: [
                { id: 'medan', name: 'Kota Medan', ongkir: 28000, zip: '20111', etd: '1-2 Hari (Air Cargo)' },
                { id: 'binjai', name: 'Kota Binjai', ongkir: 29000, zip: '20711', etd: '2 Hari' },
                { id: 'pematangsiantar', name: 'Kota Pematangsiantar', ongkir: 30000, zip: '21111', etd: '2 Hari' },
                { id: 'deli-serdang', name: 'Kabupaten Deli Serdang', ongkir: 29000, zip: '20511', etd: '2 Hari' },
                { id: 'karo', name: 'Kabupaten Karo (Berastagi)', ongkir: 31000, zip: '22111', etd: '2-3 Hari' }
            ]
        },
        {
            id: 'sumbar',
            name: 'Sumatera Barat',
            island: 'Pulau Sumatera',
            baseOngkir: 27000,
            cities: [
                { id: 'padang', name: 'Kota Padang', ongkir: 27000, zip: '25111', etd: '1-2 Hari' },
                { id: 'bukittinggi', name: 'Kota Bukittinggi', ongkir: 28000, zip: '26111', etd: '2 Hari' },
                { id: 'payakumbuh', name: 'Kota Payakumbuh', ongkir: 29000, zip: '26211', etd: '2 Hari' },
                { id: 'pariaman', name: 'Kota Pariaman', ongkir: 28000, zip: '25511', etd: '2 Hari' }
            ]
        },
        {
            id: 'riau',
            name: 'Riau',
            island: 'Pulau Sumatera',
            baseOngkir: 27000,
            cities: [
                { id: 'pekanbaru', name: 'Kota Pekanbaru', ongkir: 27000, zip: '28111', etd: '1-2 Hari' },
                { id: 'dumai', name: 'Kota Dumai', ongkir: 29000, zip: '28811', etd: '2 Hari' },
                { id: 'kampar', name: 'Kabupaten Kampar', ongkir: 28000, zip: '28411', etd: '2 Hari' },
                { id: 'bengkalis', name: 'Kabupaten Bengkalis (Duri)', ongkir: 29000, zip: '28711', etd: '2 Hari' }
            ]
        },
        {
            id: 'kepri',
            name: 'Kepulauan Riau',
            island: 'Pulau Sumatera',
            baseOngkir: 26000,
            cities: [
                { id: 'batam', name: 'Kota Batam', ongkir: 26000, zip: '29411', etd: '1-2 Hari (Air Cargo)' },
                { id: 'tanjungpinang', name: 'Kota Tanjungpinang', ongkir: 28000, zip: '29111', etd: '2 Hari' },
                { id: 'bintan', name: 'Kabupaten Bintan', ongkir: 29000, zip: '29151', etd: '2 Hari' },
                { id: 'karimun', name: 'Kabupaten Karimun', ongkir: 30000, zip: '29611', etd: '2-3 Hari' }
            ]
        },
        {
            id: 'jambi',
            name: 'Jambi',
            island: 'Pulau Sumatera',
            baseOngkir: 25000,
            cities: [
                { id: 'jambi-kota', name: 'Kota Jambi', ongkir: 25000, zip: '36111', etd: '1-2 Hari' },
                { id: 'sungai-penuh', name: 'Kota Sungai Penuh', ongkir: 28000, zip: '37111', etd: '2-3 Hari' },
                { id: 'muaro-jambi', name: 'Kabupaten Muaro Jambi', ongkir: 26000, zip: '36311', etd: '2 Hari' }
            ]
        },
        {
            id: 'sumsel',
            name: 'Sumatera Selatan',
            island: 'Pulau Sumatera',
            baseOngkir: 24000,
            cities: [
                { id: 'palembang', name: 'Kota Palembang', ongkir: 24000, zip: '30111', etd: '1-2 Hari' },
                { id: 'prabumulih', name: 'Kota Prabumulih', ongkir: 26000, zip: '31111', etd: '2 Hari' },
                { id: 'lubuklinggau', name: 'Kota Lubuklinggau', ongkir: 27000, zip: '31611', etd: '2 Hari' },
                { id: 'ogan-ilir', name: 'Kabupaten Ogan Ilir', ongkir: 25000, zip: '30611', etd: '2 Hari' }
            ]
        },
        {
            id: 'babel',
            name: 'Kepulauan Bangka Belitung',
            island: 'Pulau Sumatera',
            baseOngkir: 26000,
            cities: [
                { id: 'pangkalpinang', name: 'Kota Pangkalpinang', ongkir: 26000, zip: '33111', etd: '1-2 Hari' },
                { id: 'bangka', name: 'Kabupaten Bangka (Sungailiat)', ongkir: 27000, zip: '33211', etd: '2 Hari' },
                { id: 'belitung', name: 'Kabupaten Belitung (Tanjung Pandan)', ongkir: 27000, zip: '33411', etd: '2 Hari' }
            ]
        },
        {
            id: 'bengkulu',
            name: 'Bengkulu',
            island: 'Pulau Sumatera',
            baseOngkir: 26000,
            cities: [
                { id: 'bengkulu-kota', name: 'Kota Bengkulu', ongkir: 26000, zip: '38111', etd: '2 Hari' },
                { id: 'rejang-lebong', name: 'Kabupaten Rejang Lebong (Curup)', ongkir: 28000, zip: '39111', etd: '2-3 Hari' }
            ]
        },
        {
            id: 'lampung',
            name: 'Lampung',
            island: 'Pulau Sumatera',
            baseOngkir: 20000,
            cities: [
                { id: 'bandar-lampung', name: 'Kota Bandar Lampung', ongkir: 20000, zip: '35111', etd: '1 Hari' },
                { id: 'metro', name: 'Kota Metro', ongkir: 21000, zip: '34111', etd: '1-2 Hari' },
                { id: 'lampung-selatan', name: 'Kabupaten Lampung Selatan (Kalianda)', ongkir: 21000, zip: '35511', etd: '1-2 Hari' },
                { id: 'pringsewu', name: 'Kabupaten Pringsewu', ongkir: 22000, zip: '35372', etd: '2 Hari' }
            ]
        },

        // --- 4. PULAU KALIMANTAN ---
        {
            id: 'kalbar',
            name: 'Kalimantan Barat',
            island: 'Pulau Kalimantan',
            baseOngkir: 32000,
            cities: [
                { id: 'pontianak', name: 'Kota Pontianak', ongkir: 32000, zip: '78111', etd: '1-2 Hari' },
                { id: 'singkawang', name: 'Kota Singkawang', ongkir: 34000, zip: '79111', etd: '2 Hari' },
                { id: 'kubu-raya', name: 'Kabupaten Kubu Raya', ongkir: 32000, zip: '78391', etd: '2 Hari' },
                { id: 'ketapang', name: 'Kabupaten Ketapang', ongkir: 35000, zip: '78811', etd: '2-3 Hari' }
            ]
        },
        {
            id: 'kalteng',
            name: 'Kalimantan Tengah',
            island: 'Pulau Kalimantan',
            baseOngkir: 34000,
            cities: [
                { id: 'palangka-raya', name: 'Kota Palangka Raya', ongkir: 34000, zip: '73111', etd: '2 Hari' },
                { id: 'kobar', name: 'Kab. Kotawaringin Barat (Pangkalan Bun)', ongkir: 35000, zip: '74111', etd: '2 Hari' },
                { id: 'kotim', name: 'Kabupaten Kotawaringin Timur (Sampit)', ongkir: 35000, zip: '74311', etd: '2 Hari' }
            ]
        },
        {
            id: 'kalsel',
            name: 'Kalimantan Selatan',
            island: 'Pulau Kalimantan',
            baseOngkir: 32000,
            cities: [
                { id: 'banjarmasin', name: 'Kota Banjarmasin', ongkir: 32000, zip: '70111', etd: '1-2 Hari' },
                { id: 'banjarbaru', name: 'Kota Banjarbaru', ongkir: 32000, zip: '70711', etd: '1-2 Hari' },
                { id: 'martapura', name: 'Kabupaten Banjar (Martapura)', ongkir: 33000, zip: '70611', etd: '2 Hari' },
                { id: 'tanah-bumbu', name: 'Kabupaten Tanah Bumbu (Batulicin)', ongkir: 36000, zip: '72211', etd: '2-3 Hari' }
            ]
        },
        {
            id: 'kaltim',
            name: 'Kalimantan Timur',
            island: 'Pulau Kalimantan',
            baseOngkir: 32000,
            cities: [
                { id: 'ikn', name: 'IKN Nusantara (Penajam Paser Utara)', ongkir: 34000, zip: '76144', etd: '2 Hari' },
                { id: 'balikpapan', name: 'Kota Balikpapan', ongkir: 32000, zip: '76111', etd: '1-2 Hari' },
                { id: 'samarinda', name: 'Kota Samarinda', ongkir: 33000, zip: '75111', etd: '1-2 Hari' },
                { id: 'bontang', name: 'Kota Bontang', ongkir: 35000, zip: '75311', etd: '2 Hari' },
                { id: 'kukar', name: 'Kabupaten Kutai Kartanegara (Tenggarong)', ongkir: 35000, zip: '75511', etd: '2 Hari' }
            ]
        },
        {
            id: 'kaltara',
            name: 'Kalimantan Utara',
            island: 'Pulau Kalimantan',
            baseOngkir: 38000,
            cities: [
                { id: 'tarakan', name: 'Kota Tarakan', ongkir: 38000, zip: '77111', etd: '2 Hari' },
                { id: 'bulungan', name: 'Kabupaten Bulungan (Tanjung Selor)', ongkir: 39000, zip: '77211', etd: '2-3 Hari' },
                { id: 'nunukan', name: 'Kabupaten Nunukan', ongkir: 41000, zip: '77482', etd: '3 Hari' }
            ]
        },

        // --- 5. PULAU SULAWESI ---
        {
            id: 'sulut',
            name: 'Sulawesi Utara',
            island: 'Pulau Sulawesi',
            baseOngkir: 35000,
            cities: [
                { id: 'manado', name: 'Kota Manado', ongkir: 35000, zip: '95111', etd: '1-2 Hari' },
                { id: 'tomohon', name: 'Kota Tomohon', ongkir: 36000, zip: '95411', etd: '2 Hari' },
                { id: 'bitung', name: 'Kota Bitung', ongkir: 36000, zip: '95511', etd: '2 Hari' },
                { id: 'kotamobagu', name: 'Kota Kotamobagu', ongkir: 38000, zip: '95711', etd: '2-3 Hari' }
            ]
        },
        {
            id: 'gorontalo',
            name: 'Gorontalo',
            island: 'Pulau Sulawesi',
            baseOngkir: 38000,
            cities: [
                { id: 'gorontalo-kota', name: 'Kota Gorontalo', ongkir: 38000, zip: '96111', etd: '2 Hari' },
                { id: 'gorontalo-kab', name: 'Kabupaten Gorontalo (Limboto)', ongkir: 39000, zip: '96211', etd: '2-3 Hari' }
            ]
        },
        {
            id: 'sulteng',
            name: 'Sulawesi Tengah',
            island: 'Pulau Sulawesi',
            baseOngkir: 36000,
            cities: [
                { id: 'palu', name: 'Kota Palu', ongkir: 36000, zip: '94111', etd: '2 Hari' },
                { id: 'banggai', name: 'Kabupaten Banggai (Luwuk)', ongkir: 39000, zip: '94711', etd: '2-3 Hari' },
                { id: 'poso', name: 'Kabupaten Poso', ongkir: 40000, zip: '94611', etd: '3 Hari' }
            ]
        },
        {
            id: 'sulbar',
            name: 'Sulawesi Barat',
            island: 'Pulau Sulawesi',
            baseOngkir: 38000,
            cities: [
                { id: 'mamuju', name: 'Kabupaten Mamuju', ongkir: 38000, zip: '91511', etd: '2 Hari' },
                { id: 'polman', name: 'Kabupaten Polewali Mandar', ongkir: 39000, zip: '91311', etd: '2-3 Hari' },
                { id: 'majene', name: 'Kabupaten Majene', ongkir: 40000, zip: '91411', etd: '2-3 Hari' }
            ]
        },
        {
            id: 'sulsel',
            name: 'Sulawesi Selatan',
            island: 'Pulau Sulawesi',
            baseOngkir: 32000,
            cities: [
                { id: 'makassar', name: 'Kota Makassar', ongkir: 32000, zip: '90111', etd: '1-2 Hari (Air Cargo)' },
                { id: 'parepare', name: 'Kota Parepare', ongkir: 35000, zip: '91111', etd: '2 Hari' },
                { id: 'palopo', name: 'Kota Palopo', ongkir: 37000, zip: '91911', etd: '2 Hari' },
                { id: 'gowa', name: 'Kabupaten Gowa', ongkir: 33000, zip: '92111', etd: '2 Hari' },
                { id: 'maros', name: 'Kabupaten Maros', ongkir: 33000, zip: '90511', etd: '2 Hari' },
                { id: 'toraja', name: 'Kabupaten Tana Toraja', ongkir: 38000, zip: '91811', etd: '2-3 Hari' }
            ]
        },
        {
            id: 'sultra',
            name: 'Sulawesi Tenggara',
            island: 'Pulau Sulawesi',
            baseOngkir: 36000,
            cities: [
                { id: 'kendari', name: 'Kota Kendari', ongkir: 36000, zip: '93111', etd: '2 Hari' },
                { id: 'baubau', name: 'Kota Baubau', ongkir: 38000, zip: '93711', etd: '2-3 Hari' },
                { id: 'kolaka', name: 'Kabupaten Kolaka', ongkir: 39000, zip: '93511', etd: '2-3 Hari' },
                { id: 'wakatobi', name: 'Kabupaten Wakatobi', ongkir: 43000, zip: '93791', etd: '3 Hari' }
            ]
        },

        // --- 6. KEPULAUAN MALUKU & PAPUA ---
        {
            id: 'maluku',
            name: 'Maluku',
            island: 'Kepulauan Maluku & Papua',
            baseOngkir: 45000,
            cities: [
                { id: 'ambon', name: 'Kota Ambon', ongkir: 45000, zip: '97111', etd: '2 Hari' },
                { id: 'tual', name: 'Kota Tual', ongkir: 48000, zip: '97611', etd: '3 Hari' },
                { id: 'maluku-tengah', name: 'Kabupaten Maluku Tengah (Masohi)', ongkir: 47000, zip: '97511', etd: '3 Hari' }
            ]
        },
        {
            id: 'malut',
            name: 'Maluku Utara',
            island: 'Kepulauan Maluku & Papua',
            baseOngkir: 45000,
            cities: [
                { id: 'ternate', name: 'Kota Ternate', ongkir: 45000, zip: '97711', etd: '2 Hari' },
                { id: 'tidore', name: 'Kota Tidore Kepulauan', ongkir: 46000, zip: '97811', etd: '2-3 Hari' },
                { id: 'halmahera-barat', name: 'Kabupaten Halmahera Barat', ongkir: 48000, zip: '97752', etd: '3 Hari' }
            ]
        },
        {
            id: 'papua',
            name: 'Papua',
            island: 'Kepulauan Maluku & Papua',
            baseOngkir: 55000,
            cities: [
                { id: 'jayapura-kota', name: 'Kota Jayapura', ongkir: 55000, zip: '99111', etd: '2-3 Hari (Air Cargo)' },
                { id: 'jayapura-kab', name: 'Kabupaten Jayapura (Sentani)', ongkir: 55000, zip: '99352', etd: '2-3 Hari' },
                { id: 'biak', name: 'Kabupaten Biak Numfor', ongkir: 58000, zip: '98111', etd: '3 Hari' },
                { id: 'keerom', name: 'Kabupaten Keerom', ongkir: 58000, zip: '99468', etd: '3 Hari' }
            ]
        },
        {
            id: 'papua-barat',
            name: 'Papua Barat',
            island: 'Kepulauan Maluku & Papua',
            baseOngkir: 55000,
            cities: [
                { id: 'manokwari', name: 'Kabupaten Manokwari', ongkir: 55000, zip: '98311', etd: '2-3 Hari' },
                { id: 'fakfak', name: 'Kabupaten Fakfak', ongkir: 58000, zip: '98611', etd: '3 Hari' },
                { id: 'teluk-bintuni', name: 'Kabupaten Teluk Bintuni', ongkir: 59000, zip: '98511', etd: '3 Hari' }
            ]
        },
        {
            id: 'papua-barat-daya',
            name: 'Papua Barat Daya',
            island: 'Kepulauan Maluku & Papua',
            baseOngkir: 54000,
            cities: [
                { id: 'sorong-kota', name: 'Kota Sorong', ongkir: 54000, zip: '98411', etd: '2 Hari (Air Cargo)' },
                { id: 'raja-ampat', name: 'Kabupaten Raja Ampat (Waisai)', ongkir: 58000, zip: '98482', etd: '2-3 Hari' },
                { id: 'sorong-selatan', name: 'Kabupaten Sorong Selatan', ongkir: 59000, zip: '98454', etd: '3 Hari' }
            ]
        },
        {
            id: 'papua-tengah',
            name: 'Papua Tengah',
            island: 'Kepulauan Maluku & Papua',
            baseOngkir: 56000,
            cities: [
                { id: 'mimika', name: 'Kabupaten Mimika (Timika)', ongkir: 56000, zip: '99910', etd: '2-3 Hari' },
                { id: 'nabire', name: 'Kabupaten Nabire', ongkir: 58000, zip: '98811', etd: '3 Hari' },
                { id: 'puncak-jaya', name: 'Kabupaten Puncak Jaya', ongkir: 65000, zip: '98911', etd: '4 Hari' }
            ]
        },
        {
            id: 'papua-pegunungan',
            name: 'Papua Pegunungan',
            island: 'Kepulauan Maluku & Papua',
            baseOngkir: 64000,
            cities: [
                { id: 'jayawijaya', name: 'Kabupaten Jayawijaya (Wamena)', ongkir: 64000, zip: '99511', etd: '3-4 Hari' },
                { id: 'tolikara', name: 'Kabupaten Tolikara', ongkir: 68000, zip: '99562', etd: '4 Hari' },
                { id: 'yahukimo', name: 'Kabupaten Yahukimo', ongkir: 68000, zip: '99571', etd: '4 Hari' }
            ]
        },
        {
            id: 'papua-selatan',
            name: 'Papua Selatan',
            island: 'Kepulauan Maluku & Papua',
            baseOngkir: 58000,
            cities: [
                { id: 'merauke', name: 'Kabupaten Merauke', ongkir: 58000, zip: '99611', etd: '2-3 Hari' },
                { id: 'boven-digoel', name: 'Kabupaten Boven Digoel', ongkir: 64000, zip: '99663', etd: '3-4 Hari' },
                { id: 'asmat', name: 'Kabupaten Asmat (Agats)', ongkir: 65000, zip: '99777', etd: '3-4 Hari' }
            ]
        }
    ];

    /* ==========================================================================
       1c. MASTER DATA EKSPEDISI / KURIR LOGISTIK BERDASARKAN ZONA WILAYAH
       ========================================================================== */
    const COURIERS_BY_ZONE = {
        // Zona 1: Kota & Kab. Bogor (Pengiriman Lokal)
        'bogor': [
            {
                id: 'lokal',
                name: 'Kurir Lokal Sangkuriang (Sameday Bogor)',
                service: 'Sameday Instan Motor Express',
                extraCost: 0,
                icon: '🛵',
                badge: 'Paling Cepat (Hari Ini)',
                desc: 'Khusus Area Kota & Kab. Bogor. Diantar langsung hari ini dalam 2-4 jam oleh armada Sangkuriang.'
            },
            {
                id: 'paxel-bogor',
                name: 'Paxel Cold Chain Bogor (Pendingin)',
                service: 'Cold Chiller Bag',
                extraCost: 2000,
                icon: '❄️',
                badge: 'Suhu Terjaga',
                desc: 'Insulated thermal bag menjaga bolu talas tetap sejuk selama perjalanan.'
            },
            {
                id: 'jne-yes',
                name: 'JNE YES (Yakin Esok Sampai)',
                service: 'Next Day Express',
                extraCost: 2000,
                icon: '📦',
                badge: 'Ekspedisi Kilat',
                desc: 'Layanan kurir resmi JNE 1 hari sampai ke seluruh area Bogor.'
            },
            {
                id: 'sicepat-best',
                name: 'SiCepat BEST (Besok Sampai)',
                service: 'Next Day',
                extraCost: 0,
                icon: '⚡',
                badge: 'Hemat Cepat',
                desc: 'Pengantaran kilat 1 hari standar kurir SiCepat.'
            }
        ],

        // Zona 2: Wilayah Jabodetabek & Jawa Barat Luar Bogor
        'jabar-jabodetabek': [
            {
                id: 'paxel-jabar',
                name: 'Paxel Cold Chain (Next Day Berpendingin)',
                service: 'Dedicated Cold Chiller',
                extraCost: 3000,
                icon: '❄️',
                badge: 'Rekomendasi Utama Fresh',
                desc: 'Kue diangkut dalam mobil berpendingin. Bolu dijamin tetap moist & dingin!'
            },
            {
                id: 'jne-yes',
                name: 'JNE YES (Yakin Esok Sampai 24 Jam)',
                service: 'Prioritas Next Day',
                extraCost: 3000,
                icon: '📦',
                badge: '1 Hari Sampai',
                desc: 'Garansi sampai esok hari untuk Jabodetabek & seluruh kota Jawa Barat.'
            },
            {
                id: 'sicepat-best',
                name: 'SiCepat BEST (Besok Sampai)',
                service: 'Kilat 1 Hari',
                extraCost: 0,
                icon: '⚡',
                badge: 'Ekonomis Cepat',
                desc: 'Pengantaran kilat 1 hari dengan sistem live tracking kurir.'
            },
            {
                id: 'jne-reg',
                name: 'JNE Reguler (1-2 Hari)',
                service: 'Reguler Darat',
                extraCost: 0,
                icon: '🚚',
                badge: 'Standar Hemat',
                desc: 'Pengiriman darat standar 1-2 hari kerja.'
            }
        ],

        // Zona 3: Jawa Tengah, DI Yogyakarta, & Jawa Timur (Antar-Kota Pulau Jawa)
        'jawa-antarkota': [
            {
                id: 'paxel-jawa',
                name: 'Paxel Cold Chain Jawa (Next Day Truk Dingin)',
                service: 'Dedicated Chilled Cargo Jawa',
                extraCost: 4000,
                icon: '❄️',
                badge: 'Rekomendasi Makanan Basah',
                desc: 'Armada truk berpendingin Trans-Jawa ke Jateng, DIY, & Jatim. Suhu stabil 5-8°C.'
            },
            {
                id: 'jne-yes',
                name: 'JNE YES Jawa (Prioritas 1 Hari Tiba)',
                service: 'Next Day Antar-Kota Jawa',
                extraCost: 3000,
                icon: '📦',
                badge: 'Prioritas Kilat',
                desc: 'Layanan kilat prioritas sampai esok hari di kota-kota Pulau Jawa.'
            },
            {
                id: 'sicepat-best',
                name: 'SiCepat BEST Jawa (1-2 Hari Sampai)',
                service: 'Express Darat Cepat',
                extraCost: 0,
                icon: '⚡',
                badge: 'Ekonomis Cepat',
                desc: 'Jalur ekspres darat terpadu ke seluruh kota di Pulau Jawa.'
            },
            {
                id: 'jne-reg',
                name: 'JNE Reguler Jawa (2 Hari)',
                service: 'Reguler Antar-Kota',
                extraCost: 0,
                icon: '🚚',
                badge: 'Standar Hemat',
                desc: 'Pengiriman reguler antar-kota jalur darat Pulau Jawa.'
            }
        ],

        // Zona 4: Luar Pulau Jawa (Sumatera, Kalimantan, Sulawesi, Bali, Nusa Tenggara, Maluku, Papua)
        'luar-jawa': [
            {
                id: 'lion-air',
                name: 'Lion Parcel ONEPACK (Kargo Udara Kilat 1-2 Hari)',
                service: 'Penerbangan Kargo Udara Kilat',
                extraCost: 5000,
                icon: '✈️',
                badge: 'Rekomendasi Luar Pulau',
                desc: 'Terbang via pesawat cargo ke bandara terdekat + Double Thermal Foil & Ice Gel Pack.'
            },
            {
                id: 'jne-yes-air',
                name: 'JNE YES Air Cargo (Pesawat Prioritas 1-2 Hari)',
                service: 'Udara Super Express',
                extraCost: 6000,
                icon: '✈️',
                badge: 'Prioritas Udara',
                desc: 'Prioritas kargo udara kilat sampai esok hari ke seluruh ibukota provinsi.'
            },
            {
                id: 'paxel-air',
                name: 'Paxel Air Cold Cargo (Kota Besar Luar Pulau 2 Hari)',
                service: 'Cold Chain Kargo Udara',
                extraCost: 5000,
                icon: '❄️',
                badge: 'Suhu Terjaga',
                desc: 'Kargo udara berpendingin khusus makanan fresh ke kota-kota besar luar Jawa.'
            },
            {
                id: 'sicepat-halo',
                name: 'SiCepat HALO / Udara Express (2-3 Hari)',
                service: 'Antar-Pulau Cepat',
                extraCost: 2000,
                icon: '⚡',
                badge: 'Cepat & Andal',
                desc: 'Pengiriman kargo udara dengan packing proteksi berlapis tebal.'
            },
            {
                id: 'jne-reg-pulau',
                name: 'JNE Reguler Antar-Pulau (3-4 Hari)',
                service: 'Reguler Antar-Pulau',
                extraCost: 0,
                icon: '🚢',
                badge: 'Standar Antar-Pulau',
                desc: 'Pengiriman reguler antar-pulau ke seluruh pelosok nusantara.'
            }
        ]
    };

    const getDestinationZone = (provId, cityId) => {
        if (provId === 'jabar' && (cityId === 'bogor-kota' || cityId === 'bogor-kab')) {
            return 'bogor';
        }
        if (provId === 'jabar' || provId === 'dki' || provId === 'banten') {
            return 'jabar-jabodetabek';
        }
        if (provId === 'jateng' || provId === 'diy' || provId === 'jatim') {
            return 'jawa-antarkota';
        }
        return 'luar-jawa';
    };

    const getZoneInfo = (zone) => {
        switch (zone) {
            case 'bogor':
                return {
                    icon: '🛵',
                    title: 'Pengiriman Lokal Sameday Bogor',
                    desc: 'Diantar langsung oleh kurir Sangkuriang dengan box anti guncangan. Kue tiba fresh & lembut hari ini!'
                };
            case 'jabar-jabodetabek':
                return {
                    icon: '❄️',
                    title: 'Pengiriman Wilayah Jabodetabek & Jawa Barat',
                    desc: 'Dikemas dengan <strong>Thermal Insulation Foil + Ice Gel Pack Gratis</strong>. Diantar via armada express/cold chain tiba esok hari.'
                };
            case 'jawa-antarkota':
                return {
                    icon: '❄️',
                    title: 'Pengiriman Antar-Kota Jawa (Jateng, DIY, Jatim)',
                    desc: 'Mobil kargo berpendingin Trans-Jawa + <strong>Thermal Foil & Ice Gel</strong> menjaga bolu talas tetap sejuk, moist, & nikmat.'
                };
            case 'luar-jawa':
            default:
                return {
                    icon: '✈️',
                    title: 'Pengiriman Kargo Udara Antar-Pulau (Sabang - Merauke)',
                    desc: 'Jalur prioritas penerbangan kargo udara dengan <strong>Double Thermal Insulation & Cold Pack</strong> ke seluruh penjuru Indonesia.'
                };
        }
    };

    /* ==========================================================================
       2. FORMAT RUPIAH HELPER
       ========================================================================== */
    const formatRupiah = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount).replace('IDR', 'Rp').trim();
    };

    /* ==========================================================================
       3. TOAST NOTIFICATION SYSTEM
       ========================================================================== */
    const toastContainer = document.getElementById('toast-container');

    const showToast = (message, type = 'success') => {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let icon = '✨';
        if (type === 'success') icon = '✓';
        if (type === 'error') icon = '✕';
        if (type === 'warning') icon = '⚠️';

        toast.innerHTML = `
            <span style="font-size: 1.2rem;">${icon}</span>
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        // Auto remove
        setTimeout(() => {
            toast.classList.add('toast-hide');
            setTimeout(() => {
                if (toast.parentElement) toast.parentElement.removeChild(toast);
            }, 300);
        }, 3200);
    };

    /* ==========================================================================
       3b. UI HELPERS: TUTUP DRAWER & MODAL PRODUK
       ========================================================================== */
    const closeCartDrawer = () => {
        const cartToggle = document.getElementById('cart-drawer-toggle');
        if (cartToggle) cartToggle.checked = false;
    };

    const closeAnyProductModal = () => {
        if (/^#modal-/.test(window.location.hash)) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search + '#katalog');
        }
    };

    /* ==========================================================================
       4. SHOPPING CART STATE & MANAGEMENT
       ========================================================================== */
    const defaultInitialCart = [
        { id: 'original', name: 'Lapis Talas Original', price: 34000, image: 'images/talas original.jpg.jpeg', qty: 1 },
        { id: 'talas-susu', name: 'Lapis Talas Susu', price: 35000, image: 'images/talas susu.jpg.jpeg', qty: 2 }
    ];

    let cart = [];
    try {
        const stored = localStorage.getItem('talase_cart');
        if (stored) {
            cart = JSON.parse(stored);
        } else {
            cart = defaultInitialCart;
        }
    } catch (e) {
        cart = defaultInitialCart;
    }

    let activeVoucher = {
        code: 'TALAS10',
        discount: 10000,
        type: 'fixed',
        minSpend: 75000
    };

    const saveCart = () => {
        try {
            localStorage.setItem('talase_cart', JSON.stringify(cart));
        } catch (e) {
            console.error('LocalStorage write error:', e);
        }
    };

    const addToCart = (productId, qtyToAdd = 1) => {
        const product = PRODUCTS_DATA.find(p => p.id === productId);
        if (!product) return;

        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.qty += qtyToAdd;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                qty: qtyToAdd
            });
        }

        saveCart();
        renderCart();
        showToast(`${product.name} (${qtyToAdd} pcs) ditambahkan ke keranjang!`, 'success');

        // Buka drawer keranjang otomatis
        const cartToggle = document.getElementById('cart-drawer-toggle');
        if (cartToggle) cartToggle.checked = true;
    };

    const updateQty = (productId, delta) => {
        const index = cart.findIndex(item => item.id === productId);
        if (index === -1) return;

        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            const removedName = cart[index].name;
            cart.splice(index, 1);
            showToast(`${removedName} dihapus dari keranjang`, 'warning');
        }

        saveCart();
        renderCart();
    };

    const removeFromCart = (productId) => {
        const index = cart.findIndex(item => item.id === productId);
        if (index !== -1) {
            const removedName = cart[index].name;
            cart.splice(index, 1);
            saveCart();
            renderCart();
            showToast(`${removedName} dihapus dari keranjang`, 'warning');
        }
    };

    const getSelectedShippingDetails = () => {
        const provSelect = document.getElementById('cust-province');
        const citySelect = document.getElementById('cust-city');
        const courierSelect = document.getElementById('cust-courier');

        const provId = provSelect ? provSelect.value : 'jabar';
        const cityId = citySelect ? citySelect.value : 'bogor-kota';

        const province = INDONESIA_PROVINCES.find(p => p.id === provId) || INDONESIA_PROVINCES[0];
        let city = province.cities.find(c => c.id === cityId);
        if (!city && province.cities.length > 0) {
            city = province.cities[0];
        }

        const zone = getDestinationZone(provId, city ? city.id : 'bogor-kota');
        const availableCouriers = COURIERS_BY_ZONE[zone] || COURIERS_BY_ZONE['bogor'];

        const courierId = courierSelect ? courierSelect.value : '';
        let courier = availableCouriers.find(c => c.id === courierId);
        if (!courier) {
            courier = availableCouriers[0];
        }

        const baseCost = city ? city.ongkir : (province.baseOngkir || 15000);
        const totalShipping = baseCost + courier.extraCost;

        return {
            province,
            city,
            zone,
            courier,
            availableCouriers,
            totalShipping,
            etd: city ? city.etd : '1-2 Hari'
        };
    };

    const calculateTotals = () => {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

        const shippingDetails = getSelectedShippingDetails();
        let shipping = subtotal > 0 ? shippingDetails.totalShipping : 0;
        let discount = 0;

        if (activeVoucher && subtotal > 0) {
            if (activeVoucher.code === 'TALAS10') {
                if (subtotal >= activeVoucher.minSpend) {
                    discount = 10000;
                }
            } else if (activeVoucher.code === 'BOGORFREESHIP' || activeVoucher.code === 'SEINDONESIA') {
                if (totalItems >= 2) {
                    discount = Math.min(15000, shipping); // Potongan ongkir s/d Rp15.000 ke seluruh Indonesia
                }
            } else if (activeVoucher.code === 'WEEKENDMANIS') {
                if (subtotal >= 100000) {
                    discount = Math.round(subtotal * 0.15);
                }
            }
        }

        const grandTotal = Math.max(0, subtotal + shipping - discount);

        return {
            subtotal,
            shipping,
            discount,
            grandTotal,
            totalItems,
            shippingDetails
        };
    };

    const renderCart = () => {
        const cartContainer = document.getElementById('cart-items-container');
        const countBadges = document.querySelectorAll('.cart-count');
        const cartSubtotalEl = document.getElementById('cart-subtotal');
        const cartOngkirEl = document.getElementById('cart-ongkir');
        const cartTotalEl = document.getElementById('cart-total');

        const totals = calculateTotals();

        // Update Counter Badges
        countBadges.forEach(b => {
            b.textContent = totals.totalItems;
        });

        // Update Drawer Content
        if (cartContainer) {
            if (cart.length === 0) {
                cartContainer.innerHTML = `
                    <div class="cart-empty-state">
                        <div class="cart-empty-icon">🍠</div>
                        <h4 class="cart-empty-title">Keranjang Belanja Kosong</h4>
                        <p class="cart-empty-desc">Yuk pilih varian lapis talas Sangkuriang favoritmu sekarang!</p>
                        <a href="#katalog" class="btn btn-yellow btn-sm" onclick="document.getElementById('cart-drawer-toggle').checked = false;">
                            Lihat Katalog
                        </a>
                    </div>
                `;
            } else {
                cartContainer.innerHTML = cart.map(item => `
                    <div class="cart-item-card" data-cart-id="${item.id}">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">${formatRupiah(item.price * item.qty)}</div>
                            <div class="cart-qty-control">
                                <button type="button" class="btn-qty" data-action="decrease" data-id="${item.id}">-</button>
                                <span class="cart-qty-num">${item.qty}</span>
                                <button type="button" class="btn-qty" data-action="increase" data-id="${item.id}">+</button>
                            </div>
                        </div>
                        <button type="button" class="btn-cart-delete" data-action="remove" data-id="${item.id}" title="Hapus produk">
                            🗑️
                        </button>
                    </div>
                `).join('');
            }
        }

        // Update Drawer Totals
        if (cartSubtotalEl) cartSubtotalEl.textContent = formatRupiah(totals.subtotal);
        if (cartOngkirEl) cartOngkirEl.textContent = formatRupiah(totals.shipping);
        if (cartTotalEl) cartTotalEl.textContent = formatRupiah(totals.grandTotal);

        // Update Checkout Summary & Payment Amounts in Modal
        renderCheckoutSummary(totals);
    };

    const renderCheckoutSummary = (totals) => {
        const checkoutSummaryBody = document.getElementById('checkout-summary-body');
        const checkoutSubtotalEl = document.getElementById('checkout-subtotal');
        const checkoutOngkirEl = document.getElementById('checkout-ongkir');
        const checkoutDiscountEl = document.getElementById('checkout-discount');
        const checkoutGrandTotalEl = document.getElementById('checkout-grand-total');
        const summaryRouteEl = document.getElementById('summary-shipping-route');
        const etdLabelEl = document.getElementById('shipping-etd-label');

        if (summaryRouteEl && totals.shippingDetails) {
            const { city, province, courier } = totals.shippingDetails;
            const cityName = city ? city.name : 'Kota Bogor';
            const provName = province ? province.name : 'Jawa Barat';
            summaryRouteEl.textContent = `${courier.name} — ${cityName}, ${provName}`;
        }

        if (etdLabelEl && totals.shippingDetails) {
            etdLabelEl.textContent = `Estimasi: ${totals.shippingDetails.etd}`;
        }

        if (checkoutSummaryBody) {
            if (cart.length === 0) {
                checkoutSummaryBody.innerHTML = `
                    <tr>
                        <td colspan="2" style="text-align: center; color: var(--color-text-muted); padding: 16px 0;">
                            Belum ada produk di keranjang.
                        </td>
                    </tr>
                `;
            } else {
                checkoutSummaryBody.innerHTML = cart.map(item => `
                    <tr>
                        <td>${item.qty}x ${item.name}</td>
                        <td class="cost-val">${formatRupiah(item.price * item.qty)}</td>
                    </tr>
                `).join('');
            }
        }

        if (checkoutSubtotalEl) checkoutSubtotalEl.textContent = formatRupiah(totals.subtotal);
        if (checkoutOngkirEl) checkoutOngkirEl.textContent = formatRupiah(totals.shipping);
        if (checkoutDiscountEl) {
            checkoutDiscountEl.textContent = totals.discount > 0 ? `-${formatRupiah(totals.discount)}` : 'Rp0';
        }
        if (checkoutGrandTotalEl) checkoutGrandTotalEl.textContent = formatRupiah(totals.grandTotal);

        // Update pay-now label & all dynamic amounts shown in payment method details
        const btnPayLabel = document.getElementById('pay-now-amount-label');
        if (btnPayLabel) {
            btnPayLabel.textContent = formatRupiah(totals.grandTotal);
        }
        document.querySelectorAll('.pay-dynamic-amount').forEach(el => {
            el.textContent = formatRupiah(totals.grandTotal);
        });
    };

    /* ==========================================================================
       5. VOUCHER CODE APPLICATION
       ========================================================================== */
    const voucherInput = document.getElementById('voucher-code-input');
    const applyVoucherBtn = document.getElementById('btn-apply-voucher');
    const voucherFeedback = document.getElementById('voucher-feedback');

    const applyVoucherCode = (code) => {
        const cleanCode = (code || '').trim().toUpperCase();
        const totals = calculateTotals();

        if (cleanCode === 'TALAS10') {
            if (totals.subtotal < 75000) {
                showToast('Voucher TALAS10 butuh min. belanja Rp75.000', 'warning');
                if (voucherFeedback) {
                    voucherFeedback.textContent = 'Minimal belanja Rp75.000 untuk voucher ini!';
                    voucherFeedback.style.color = '#B91C1C';
                }
                return;
            }
            activeVoucher = { code: 'TALAS10', discount: 10000, type: 'fixed', minSpend: 75000 };
            showToast('✓ Voucher TALAS10 berhasil digunakan! Potongan Rp10.000', 'success');
            if (voucherFeedback) {
                voucherFeedback.textContent = '✓ Voucher TALAS10 aktif (Hemat Rp10.000)';
                voucherFeedback.style.color = '#059669';
            }
        } else if (cleanCode === 'BOGORFREESHIP' || cleanCode === 'SEINDONESIA') {
            if (totals.totalItems < 2) {
                showToast('Voucher gratis ongkir butuh minimal 2 box', 'warning');
                if (voucherFeedback) {
                    voucherFeedback.textContent = 'Minimal 2 box untuk potongan ongkir!';
                    voucherFeedback.style.color = '#B91C1C';
                }
                return;
            }
            activeVoucher = { code: cleanCode, discount: 15000, type: 'shipping', minSpend: 0 };
            showToast(`✓ Voucher ${cleanCode} aktif! Potongan ongkir s/d Rp15.000 ke seluruh Indonesia`, 'success');
            if (voucherFeedback) {
                voucherFeedback.textContent = '✓ Potongan Ongkir Seluruh Indonesia Aktif (Hemat s/d Rp15.000)';
                voucherFeedback.style.color = '#059669';
            }
        } else if (cleanCode === 'WEEKENDMANIS') {
            if (totals.subtotal < 100000) {
                showToast('Voucher WEEKENDMANIS butuh min. belanja Rp100.000', 'warning');
                if (voucherFeedback) {
                    voucherFeedback.textContent = 'Minimal belanja Rp100.000 untuk diskon 15%!';
                    voucherFeedback.style.color = '#B91C1C';
                }
                return;
            }
            activeVoucher = { code: 'WEEKENDMANIS', discount: 0.15, type: 'percent', minSpend: 100000 };
            showToast('✓ Voucher WEEKENDMANIS aktif! Diskon 15%', 'success');
            if (voucherFeedback) {
                voucherFeedback.textContent = '✓ Diskon 15% Akhir Pekan aktif!';
                voucherFeedback.style.color = '#059669';
            }
        } else {
            showToast('Kode voucher tidak ditemukan atau telah kedaluwarsa', 'error');
            if (voucherFeedback) {
                voucherFeedback.textContent = 'Kode voucher tidak valid!';
                voucherFeedback.style.color = '#B91C1C';
            }
            return;
        }

        if (voucherInput) voucherInput.value = cleanCode;
        renderCart();
    };

    if (applyVoucherBtn && voucherInput) {
        applyVoucherBtn.addEventListener('click', () => {
            applyVoucherCode(voucherInput.value);
        });

        voucherInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyVoucherCode(voucherInput.value);
            }
        });
    }

    /* ==========================================================================
       6. CHECKOUT MODAL HELPERS (CLOSE + OPEN VALIDATION)
       ========================================================================== */
    const closeCheckoutModal = () => {
        if (window.location.hash === '#checkout') {
            window.history.replaceState(null, '', window.location.pathname + window.location.search + '#hero');
        }
    };

    // Blokir buka modal checkout saat keranjang masih kosong
    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#checkout' && cart.length === 0) {
            showToast('Keranjang Anda masih kosong. Silakan pilih kue terlebih dahulu!', 'warning');
            closeCheckoutModal();
            const katalog = document.getElementById('katalog');
            if (katalog) katalog.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        if (window.location.hash === '#checkout') {
            closeCartDrawer();
        }
    });

    /* ==========================================================================
       6b. EVENT DELEGATION: ADD TO CART & CART BUTTONS
       ========================================================================== */
    document.addEventListener('click', (e) => {
        // Trigger Add To Cart
        const addBtn = e.target.closest('[data-add-to-cart]');
        if (addBtn) {
            e.preventDefault();
            const productId = addBtn.getAttribute('data-add-to-cart');
            if (productId) addToCart(productId, 1);
            if (addBtn.hasAttribute('data-close-modal')) {
                // Tombol "Beli Sekarang": tutup modal produk, langsung buka modal checkout
                closeAnyProductModal();
                closeCartDrawer();
                window.location.hash = '#checkout';
            }
            return;
        }

        // Cart Drawer Qty Increase/Decrease/Delete
        const actionBtn = e.target.closest('[data-action]');
        if (actionBtn && actionBtn.closest('.cart-item-card')) {
            const action = actionBtn.getAttribute('data-action');
            const id = actionBtn.getAttribute('data-id');

            if (action === 'increase') {
                updateQty(id, 1);
            } else if (action === 'decrease') {
                updateQty(id, -1);
            } else if (action === 'remove') {
                removeFromCart(id);
            }
            return;
        }

        // Copy Virtual Account Number
        const copyBtn = e.target.closest('[data-copy]');
        if (copyBtn) {
            const textToCopy = copyBtn.getAttribute('data-copy');
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast(`Nomor ${textToCopy} tersalin ke clipboard!`, 'success');
                }).catch(() => {
                    showToast(`Tersalin: ${textToCopy}`, 'info');
                });
            } else {
                showToast(`Nomor: ${textToCopy}`, 'info');
            }
            return;
        }

        // Tombol Gunakan Voucher di Section Promo
        const useVoucherBtn = e.target.closest('[data-apply-voucher]');
        if (useVoucherBtn) {
            const code = useVoucherBtn.getAttribute('data-apply-voucher');
            applyVoucherCode(code);
            return;
        }
    });

    // ESC menutup modal checkout & modal produk yang sedang terbuka
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (window.location.hash === '#checkout') {
            closeCheckoutModal();
        } else if (/^#modal-/.test(window.location.hash)) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search + '#katalog');
        }
    });
    const searchInput = document.getElementById('catalog-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    let currentCategoryFilter = 'all';
    let currentSearchTerm = '';

    const filterCatalog = () => {
        let visibleCount = 0;

        productCards.forEach(card => {
            const name = (card.querySelector('.product-name')?.textContent || '').toLowerCase();
            const desc = (card.querySelector('.product-short-desc')?.textContent || '').toLowerCase();
            const categories = (card.getAttribute('data-category') || '').toLowerCase();

            const matchesSearch = !currentSearchTerm || 
                name.includes(currentSearchTerm) || 
                desc.includes(currentSearchTerm) || 
                categories.includes(currentSearchTerm);

            const matchesCategory = currentCategoryFilter === 'all' || 
                categories.includes(currentCategoryFilter);

            if (matchesSearch && matchesCategory) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Feedback jika tidak ditemukan
        let noResultEl = document.getElementById('no-product-found');
        const grid = document.querySelector('.products-grid');

        if (visibleCount === 0) {
            if (!noResultEl && grid) {
                noResultEl = document.createElement('div');
                noResultEl.id = 'no-product-found';
                noResultEl.style.gridColumn = '1 / -1';
                noResultEl.style.textAlign = 'center';
                noResultEl.style.padding = '50px 20px';
                noResultEl.innerHTML = `
                    <div style="font-size: 3rem;">🔍</div>
                    <h3 style="margin-top: 10px; color: var(--color-purple-dark);">Varian Rasa Tidak Ditemukan</h3>
                    <p style="color: var(--color-text-muted);">Coba gunakan kata kunci lain seperti "keju", "cokelat", atau "pandan".</p>
                `;
                grid.appendChild(noResultEl);
            }
        } else {
            if (noResultEl && noResultEl.parentElement) {
                noResultEl.parentElement.removeChild(noResultEl);
            }
        }
    };

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.trim().toLowerCase();
            filterCatalog();
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterVal = btn.getAttribute('data-filter') || 'all';
            currentCategoryFilter = filterVal;
            filterCatalog();
        });
    });

    /* ==========================================================================
       7b. DROPDOWN PENGIRIMAN SELURUH INDONESIA (38 PROVINSI & KURIR BERDASARKAN ZONA)
       ========================================================================== */
    let currentActiveZone = null;

    const updateCourierDropdownForZone = (zone, forceSelectFirst = false) => {
        const courierSelect = document.getElementById('cust-courier');
        if (!courierSelect) return;

        const couriers = COURIERS_BY_ZONE[zone] || COURIERS_BY_ZONE['bogor'];
        const previousVal = courierSelect.value;

        courierSelect.innerHTML = couriers.map(c => `
            <option value="${c.id}">
                ${c.icon} ${c.name} ${c.extraCost > 0 ? '(+' + formatRupiah(c.extraCost) + ')' : '(Gratis Tambahan)'} — ${c.badge}
            </option>
        `).join('');

        // Jika opsi sebelumnya masih ada dalam zona baru, pertahankan. Jika tidak ada / dipaksa, pilih opsi pertama (rekomendasi)
        const stillValid = couriers.some(c => c.id === previousVal);
        if (stillValid && !forceSelectFirst) {
            courierSelect.value = previousVal;
        } else {
            courierSelect.value = couriers[0].id;
        }

        // Perbarui tampilan badge informasi pengiriman
        updateShippingBadgeUI(zone);
    };

    const updateShippingBadgeUI = (zone) => {
        const badgeIcon = document.getElementById('shipping-badge-icon');
        const badgeTitle = document.getElementById('shipping-badge-title-text');
        const badgeDesc = document.getElementById('shipping-badge-desc-text');

        const zoneInfo = getZoneInfo(zone);
        if (badgeIcon) badgeIcon.textContent = zoneInfo.icon;
        if (badgeTitle) badgeTitle.textContent = zoneInfo.title;
        if (badgeDesc) badgeDesc.innerHTML = zoneInfo.desc;
    };

    const initIndonesiaShippingDropdowns = () => {
        const provSelect = document.getElementById('cust-province');
        const citySelect = document.getElementById('cust-city');
        const zipInput = document.getElementById('cust-zip');
        const courierSelect = document.getElementById('cust-courier');

        if (!provSelect || !citySelect) return;

        // Kelompokkan 38 provinsi berdasarkan gugusan pulau
        const islandGroups = {
            'Pulau Jawa': [],
            'Pulau Sumatera': [],
            'Pulau Bali & Nusa Tenggara': [],
            'Pulau Kalimantan': [],
            'Pulau Sulawesi': [],
            'Kepulauan Maluku & Papua': []
        };

        INDONESIA_PROVINCES.forEach(prov => {
            if (islandGroups[prov.island]) {
                islandGroups[prov.island].push(prov);
            }
        });

        provSelect.innerHTML = Object.entries(islandGroups).map(([islandName, provList]) => `
            <optgroup label="${islandName}">
                ${provList.map(p => `<option value="${p.id}" ${p.id === 'jabar' ? 'selected' : ''}>${p.name}</option>`).join('')}
            </optgroup>
        `).join('');

        const populateCitiesForProvince = (provId) => {
            const province = INDONESIA_PROVINCES.find(p => p.id === provId) || INDONESIA_PROVINCES[0];
            citySelect.innerHTML = province.cities.map((city, idx) => `
                <option value="${city.id}" data-zip="${city.zip}" data-etd="${city.etd}" ${city.id === 'bogor-kota' || (provId !== 'jabar' && idx === 0) ? 'selected' : ''}>
                    ${city.name} (${formatRupiah(city.ongkir)} • ${city.etd})
                </option>
            `).join('') + `
                <option value="lainnya-${province.id}" data-zip="${province.cities[0]?.zip || '10000'}" data-etd="2-3 Hari">
                    Kecamatan / Area Lainnya di ${province.name} (${formatRupiah(province.baseOngkir || 20000)} • 2-3 Hari)
                </option>
            `;

            // Auto-fill kode pos default
            const selectedOpt = citySelect.options[citySelect.selectedIndex];
            if (selectedOpt && zipInput) {
                zipInput.value = selectedOpt.getAttribute('data-zip') || '';
            }
        };

        // Inisialisasi awal dengan Jawa Barat & Kota Bogor
        populateCitiesForProvince('jabar');
        currentActiveZone = 'bogor';
        updateCourierDropdownForZone('bogor', true);

        const handleLocationChange = (isProvChange = false) => {
            const provId = provSelect.value;
            if (isProvChange) {
                populateCitiesForProvince(provId);
            }

            const cityId = citySelect.value;
            const newZone = getDestinationZone(provId, cityId);
            const zoneChanged = newZone !== currentActiveZone;
            currentActiveZone = newZone;

            // Perbarui daftar kurir jika zona pengiriman berubah
            updateCourierDropdownForZone(newZone, zoneChanged);

            if (zoneChanged) {
                if (newZone === 'bogor') {
                    showToast('🛵 Kurir lokal Sameday Bogor diaktifkan (tiba hari ini)', 'info');
                } else if (newZone === 'jabar-jabodetabek') {
                    showToast('❄️ Ekspedisi disesuaikan untuk Jabodetabek & Jawa Barat (Paxel Cold Chain / Next Day)', 'info');
                } else if (newZone === 'jawa-antarkota') {
                    showToast('❄️ Ekspedisi disesuaikan ke Paxel Truk Dingin & JNE YES Antar-Kota Jawa (Jateng, DIY, Jatim)', 'info');
                } else if (newZone === 'luar-jawa') {
                    showToast('✈️ Ekspedisi dialihkan ke Kargo Udara Kilat (Lion Parcel / JNE Air) + Double Cold Pack', 'info');
                }
            }

            renderCart();
        };

        // Event listener saat ganti provinsi
        provSelect.addEventListener('change', () => {
            handleLocationChange(true);
        });

        // Event listener saat ganti kota
        citySelect.addEventListener('change', () => {
            const selectedOpt = citySelect.options[citySelect.selectedIndex];
            if (selectedOpt && zipInput) {
                zipInput.value = selectedOpt.getAttribute('data-zip') || zipInput.value;
            }
            handleLocationChange(false);
        });

        // Event listener saat ganti kurir
        if (courierSelect) {
            courierSelect.addEventListener('change', () => {
                renderCart();
            });
        }
    };

    /* ==========================================================================
       8. CHECKOUT & PAYMENT SUBMISSION FLOW
       ========================================================================== */
    const btnConfirmPayment = document.getElementById('btn-confirm-payment');

    if (btnConfirmPayment) {
        btnConfirmPayment.addEventListener('click', (e) => {
            e.preventDefault();

            if (cart.length === 0) {
                showToast('Keranjang Anda masih kosong. Silakan pilih kue terlebih dahulu!', 'warning');
                window.location.hash = '#katalog';
                return;
            }

            const nameInput = document.getElementById('cust-name');
            const phoneInput = document.getElementById('cust-phone');
            const addressInput = document.getElementById('cust-address');
            const districtInput = document.getElementById('cust-district');
            const zipInput = document.getElementById('cust-zip');

            const custName = (nameInput?.value || '').trim();
            const custPhone = (phoneInput?.value || '').trim();
            const custAddress = (addressInput?.value || '').trim();
            const custDistrict = (districtInput?.value || '').trim();
            const custZip = (zipInput?.value || '').trim();

            if (!custName || !custPhone || !custAddress) {
                showToast('Harap lengkapi nama, nomor HP, dan alamat pengiriman di modal checkout!', 'error');
                return;
            }

            const totals = calculateTotals();
            const shippingDetails = totals.shippingDetails || getSelectedShippingDetails();
            const cityName = shippingDetails.city ? shippingDetails.city.name : 'Kota Bogor';
            const provName = shippingDetails.province ? shippingDetails.province.name : 'Jawa Barat';

            // Generate Order ID Realistis: TSG-YYYYMMDD-XXXX
            const now = new Date();
            const dateStr = now.getFullYear().toString() + 
                String(now.getMonth() + 1).padStart(2, '0') + 
                String(now.getDate()).padStart(2, '0');
            const randSuffix = Math.floor(1000 + Math.random() * 9000);
            const newOrderId = `TSG-${dateStr}-${randSuffix}`;

            // Ambil metode bayar terpilih
            const selectedMethod = document.querySelector('input[name="payment_choice"]:checked');
            let methodLabel = 'QRIS';
            if (selectedMethod) {
                if (selectedMethod.id === 'pay-bca') methodLabel = 'BCA Virtual Account';
                if (selectedMethod.id === 'pay-bri') methodLabel = 'BRI Virtual Account';
                if (selectedMethod.id === 'pay-bni') methodLabel = 'BNI Virtual Account';
                if (selectedMethod.id === 'pay-mandiri') methodLabel = 'Mandiri Virtual Account';
                if (selectedMethod.id === 'pay-ewallet') methodLabel = 'GoPay / DANA';
                if (selectedMethod.id === 'pay-cod') methodLabel = 'COD (Bayar di Tempat)';
            }

            // Simpan pesanan aktif di state & localStorage
            const activeOrder = {
                orderId: newOrderId,
                customer: custName,
                phone: custPhone,
                address: custAddress,
                district: custDistrict,
                city: cityName,
                province: provName,
                zip: custZip,
                destination: `${cityName}, ${provName}`,
                courier: shippingDetails.courier,
                zone: shippingDetails.zone,
                method: methodLabel,
                total: totals.grandTotal,
                items: [...cart],
                step: 2, // 2 = Pembayaran Dikonfirmasi
                createdAt: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB'
            };

            try {
                localStorage.setItem('talase_latest_order', JSON.stringify(activeOrder));
            } catch (err) {}

            // Update UI Tracking Section
            updateTrackingUI(activeOrder);

            // Tampilkan pesan sukses dan scroll ke tracking
            showToast(`🎉 Pembayaran ${formatRupiah(totals.grandTotal)} Sukses! No. Pesanan: ${newOrderId}`, 'success');

            // Reset cart
            cart = [];
            saveCart();
            renderCart();

            // Tutup modal checkout lalu alihkan ke tracking
            window.history.replaceState(null, '', window.location.pathname + window.location.search + '#hero');
            window.location.hash = '#tracking';
        });
    }

    /* ==========================================================================
       9. LIVE ORDER TRACKING
       ========================================================================== */
    const trackingInput = document.getElementById('tracking-input');
    const btnTrackOrder = document.getElementById('btn-track-order');
    const btnAdvanceStatus = document.getElementById('btn-advance-status');

    let currentOrderSimulation = {
        orderId: 'TSG-20260930-001',
        customer: 'Aulia Rahma',
        address: 'Baranangsiang, Kota Bogor',
        destination: 'Kota Bogor, Jawa Barat',
        courier: COURIERS_BY_ZONE['bogor'][0],
        zone: 'bogor',
        step: 4 // 1=Dibuat, 2=Dikonfirmasi, 3=Diproses, 4=Dikirim, 5=Sampai
    };

    // Muat pesanan terakhir jika ada
    try {
        const storedOrder = localStorage.getItem('talase_latest_order');
        if (storedOrder) {
            currentOrderSimulation = JSON.parse(storedOrder);
        }
    } catch (e) {}

    const updateTrackingUI = (orderData) => {
        if (!orderData) return;

        if (trackingInput) {
            trackingInput.value = orderData.orderId;
        }

        const badgeOrderNumber = document.getElementById('tracking-display-id');
        const badgeCustomerInfo = document.getElementById('tracking-display-cust');
        const badgeStatusPill = document.getElementById('tracking-display-status');

        if (badgeOrderNumber) badgeOrderNumber.textContent = `No. Pesanan: ${orderData.orderId}`;
        if (badgeCustomerInfo) {
            const destText = orderData.destination || (orderData.city ? `${orderData.city}, ${orderData.province}` : orderData.address) || 'Kota Bogor, Jawa Barat';
            badgeCustomerInfo.textContent = `Penerima: ${orderData.customer} • ${destText}`;
        }

        // Driver / Logistics Card Update
        const courierIcon = document.getElementById('tracking-courier-icon');
        const courierName = document.getElementById('tracking-courier-name');
        const courierDesc = document.getElementById('tracking-courier-desc');
        const courierBadge = document.getElementById('tracking-courier-badge');

        const destZone = orderData.zone || (
            (orderData.destination || '').toLowerCase().includes('bogor') ? 'bogor' : 'jabar-jabodetabek'
        );
        const isLocalBogor = destZone === 'bogor' && (!orderData.courier || orderData.courier.id === 'lokal');

        if (isLocalBogor) {
            if (courierIcon) courierIcon.textContent = '🛵';
            if (courierName) courierName.textContent = 'Pak Asep Suhendar (Kurir Express Bogor)';
            if (courierDesc) courierDesc.textContent = 'Honda Vario Hitam (F 4821 BG) • Rating ★ 4.9 • Pengiriman Area Bogor';
            if (courierBadge) courierBadge.textContent = 'Siap Antar';
        } else {
            const courierObj = orderData.courier || (COURIERS_BY_ZONE[destZone] ? COURIERS_BY_ZONE[destZone][0] : COURIERS_BY_ZONE['jabar-jabodetabek'][0]);
            const awbRand = orderData.orderId ? orderData.orderId.replace('TSG-', 'EXP-') : 'EXP-20260930-7781';

            if (courierIcon) courierIcon.textContent = courierObj.icon || '❄️';
            
            if (destZone === 'luar-jawa') {
                if (courierName) courierName.textContent = `${courierObj.name} — Armada Kargo Udara`;
                if (courierDesc) courierDesc.textContent = `No. Resi: ${awbRand} • Layanan: ${courierObj.service} • Double Thermal Foil & Ice Gel Pack Udara`;
                if (courierBadge) courierBadge.textContent = 'Kargo Udara Kilat';
            } else if (destZone === 'jawa-antarkota') {
                if (courierName) courierName.textContent = `${courierObj.name} — Armada Trans-Jawa`;
                if (courierDesc) courierDesc.textContent = `No. Resi: ${awbRand} • Layanan: ${courierObj.service} • Truk Pendingin Dingin & Thermal Foil`;
                if (courierBadge) courierBadge.textContent = 'Trans-Jawa Cold';
            } else {
                if (courierName) courierName.textContent = `${courierObj.name} — Pengiriman Jabodetabek & Jabar`;
                if (courierDesc) courierDesc.textContent = `No. Resi: ${awbRand} • Layanan: ${courierObj.service} • Kemasan Thermal Foil + Ice Gel Aman`;
                if (courierBadge) courierBadge.textContent = 'Cold Chain / Next Day';
            }
        }

        const steps = document.querySelectorAll('.tracking-timeline .timeline-step');
        const stepIndex = orderData.step || 4;

        steps.forEach((st, idx) => {
            const node = st.querySelector('.step-node');
            const title = st.querySelector('.step-title');

            if (!node) return;

            // Reset classes
            node.classList.remove('completed', 'active');
            if (title) title.style.color = '';

            const currentIdx = idx + 1;
            if (currentIdx < stepIndex) {
                node.classList.add('completed');
                node.textContent = '✓';
            } else if (currentIdx === stepIndex) {
                node.classList.add('active');
                node.textContent = '●';
                if (title) title.style.color = 'var(--color-purple)';
            } else {
                node.textContent = '○';
                if (title) title.style.color = 'var(--color-text-muted)';
            }
        });

        if (badgeStatusPill) {
            if (stepIndex === 1) badgeStatusPill.textContent = 'Menunggu Pembayaran';
            else if (stepIndex === 2) badgeStatusPill.textContent = 'Pembayaran Dikonfirmasi';
            else if (stepIndex === 3) badgeStatusPill.textContent = 'Sedang Diproses di Dapur';
            else if (stepIndex === 4) badgeStatusPill.textContent = 'Sedang Diantar Kurir';
            else if (stepIndex >= 5) badgeStatusPill.textContent = 'Pesanan Telah Tiba!';
        }
    };

    // Jalankan inisialisasi tracking awal
    updateTrackingUI(currentOrderSimulation);

    if (btnTrackOrder && trackingInput) {
        btnTrackOrder.addEventListener('click', () => {
            const inputVal = trackingInput.value.trim();
            if (!inputVal) {
                showToast('Masukkan nomor pesanan terlebih dahulu!', 'warning');
                return;
            }
            showToast(`✓ Menampilkan status pesanan ${inputVal}`, 'info');
            currentOrderSimulation.orderId = inputVal;
            updateTrackingUI(currentOrderSimulation);
        });
    }

    if (btnAdvanceStatus) {
        btnAdvanceStatus.addEventListener('click', () => {
            let nextStep = (currentOrderSimulation.step || 1) + 1;
            if (nextStep > 5) nextStep = 1;

            currentOrderSimulation.step = nextStep;
            updateTrackingUI(currentOrderSimulation);

            const stepNames = [
                'Pesanan Dibuat',
                'Pembayaran Dikonfirmasi',
                'Pesanan Diproses Dapur',
                'Sedang Dikirim Kurir Express',
                'Pesanan Sampai di Rumah!'
            ];
            showToast(`Simulasi Status Diperbarui: ${stepNames[nextStep - 1]}`, 'success');
        });
    }

    /* ==========================================================================
       10. INTERACTIVE CUSTOMER REVIEW SUBMISSION
       ========================================================================== */
    const starPicker = document.getElementById('star-picker');
    const ratingInput = document.getElementById('review-rating-val');
    const reviewForm = document.getElementById('customer-review-form');
    const reviewsGrid = document.querySelector('.reviews-grid');

    if (starPicker && ratingInput) {
        const stars = starPicker.querySelectorAll('span');

        stars.forEach(s => {
            s.addEventListener('mouseenter', () => {
                const val = parseInt(s.getAttribute('data-star'), 10);
                stars.forEach((st, i) => {
                    st.classList.toggle('hovered', i < val);
                });
            });

            s.addEventListener('mouseleave', () => {
                stars.forEach(st => st.classList.remove('hovered'));
            });

            s.addEventListener('click', () => {
                const val = parseInt(s.getAttribute('data-star'), 10);
                ratingInput.value = val;
                stars.forEach((st, i) => {
                    st.classList.toggle('selected', i < val);
                });
            });
        });
    }

    if (reviewForm && reviewsGrid) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const authorInput = document.getElementById('review-author');
            const cityInput = document.getElementById('review-city');
            const textInput = document.getElementById('review-text');

            const author = (authorInput?.value || '').trim();
            const city = (cityInput?.value || '').trim();
            const text = (textInput?.value || '').trim();
            const rating = parseInt(ratingInput?.value || '5', 10);

            if (!author || !city || !text) {
                showToast('Harap lengkapi semua kolom ulasan!', 'warning');
                return;
            }

            const starStr = '★'.repeat(rating) + '☆'.repeat(5 - rating);
            const initial = author.charAt(0).toUpperCase();

            const newCard = document.createElement('div');
            newCard.className = 'review-card';
            newCard.style.animation = 'fadeIn 0.5s ease';
            newCard.innerHTML = `
                <div class="review-stars">${starStr}</div>
                <blockquote class="review-quote">"${text}"</blockquote>
                <div class="reviewer-meta">
                    <div class="reviewer-avatar-circle" style="background-color: var(--color-purple-light);">${initial}</div>
                    <div>
                        <div class="reviewer-name">${author}</div>
                        <div class="reviewer-city">${city} • Pembeli Terverifikasi Baru</div>
                    </div>
                </div>
            `;

            reviewsGrid.prepend(newCard);
            reviewForm.reset();
            if (ratingInput) ratingInput.value = '5';
            if (starPicker) {
                const stars = starPicker.querySelectorAll('span');
                stars.forEach(st => st.classList.add('selected'));
            }

            showToast('🎉 Terima kasih! Ulasan Anda berhasil diterbitkan.', 'success');
        });
    }

    /* ==========================================================================
       11. BACK TO TOP BUTTON
       ========================================================================== */
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (backToTopBtn) {
            if (window.scrollY > 350) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ==========================================================================
       12. INITIAL RENDER
       ========================================================================== */
    initIndonesiaShippingDropdowns();
    renderCart();

    console.log('TALASÉ Marketplace JS initialized successfully! (MOSAIK 2026)');
});
