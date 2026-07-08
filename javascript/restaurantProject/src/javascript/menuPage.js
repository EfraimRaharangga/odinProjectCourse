const menuPage = `
<section class="text-center my-20">
<h1 class="font-headline-xl text-headline-xl md:text-headline-xl text-primary mb-4">The Culinary Archives</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">A curated selection of traditional Javanese poultry dishes, reimagined with modern precision and heritage flavors.</p>
<div class="mt-12 flex justify-center items-center gap-4">
<div class="gold-line w-24"></div>
<span class="font-label-md text-label-md text-secondary uppercase">Established 2024</span>
<div class="gold-line w-24"></div>
</div>
</section>
<!-- Category: Geprek -->
<section class="mb-24" id="geprek">
<div class="flex items-center gap-4 mb-12">
<h2 class="font-headline-lg text-headline-lg text-primary shrink-0">Ayam Geprek</h2>
<div class="gold-line flex-grow gold-diamond"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
<!-- Item 1 -->
<div class="menu-card flex flex-col pb-6">
<div class="flex justify-between items-end mb-2">
<div class="flex items-center gap-3">
<h3 class="font-headline-md text-headline-md">Original Smash</h3>
<span class="category-badge">Geprek</span>
</div>
<div class="dotted-leader"></div>
<span class="font-headline-md text-headline-md text-primary">Rp 35k</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">Crispy battered chicken thigh, hand-crushed with fresh garlic chili paste. Served with aromatic jasmine rice.</p>
</div>
<!-- Item 2 -->
<div class="menu-card flex flex-col pb-6">
<div class="flex justify-between items-end mb-2">
<div class="flex items-center gap-3">
<h3 class="font-headline-md text-headline-md">Melted Mozza</h3>
<span class="category-badge">Geprek</span>
</div>
<div class="dotted-leader"></div>
<span class="font-headline-md text-headline-md text-primary">Rp 42k</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">Our signature smash chicken topped with a decadent layer of torched mozzarella and bird's eye chili oil.</p>
</div>
<!-- Item 3 -->
<div class="menu-card flex flex-col pb-6">
<div class="flex justify-between items-end mb-2">
<div class="flex items-center gap-3">
<h3 class="font-headline-md text-headline-md">Green Sambal</h3>
<span class="category-badge">Geprek</span>
</div>
<div class="dotted-leader"></div>
<span class="font-headline-md text-headline-md text-primary">Rp 38k</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">Smashed chicken infused with a zesty, fermented green chili salsa and fried shallots.</p>
</div>
<div class="relative group h-full hidden md:block">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="A high-end editorial food photograph of Ayam Geprek featuring crispy golden chicken crushed with vibrant red chili paste. The plate is artisanal ceramic, set on a warm cream linen tablecloth with soft, moody natural lighting highlighting the textures of the spice. Metallic gold cutlery rests to the side, maintaining a minimalist luxury aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7LgTN5bOr2yPR5jh4d3Q7iwoWdiTXuWWzw0JABj9qG7n6nxCNb3aVyBVnzx3JL2tuQSwXOaHHgDUfygKPz2NzOadJ5dmidVVccKjp1eKMYWrPw42M15r1k-v84dh_QWkC_ygKXRzlafGuhOwnSGc5Y5HcTW_hdBM5fgJxsDHe5s6z74ms3OF6ak81gfiUMGXuhnXGWI51KZ_l6QR-f7xLBcmbxhlZvSJN4DI743zr5OvBZQ9lfvML"/>
</div>
</div>
</section>
<!-- Category: Penyet -->
<section class="mb-24" id="penyet">
<div class="flex items-center gap-4 mb-12">
<div class="gold-line flex-grow gold-diamond"></div>
<h2 class="font-headline-lg text-headline-lg text-primary shrink-0">Ayam Penyet</h2>
<div class="gold-line flex-grow"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Item 4 -->
<div class="menu-card flex flex-col pb-6">
<div class="flex justify-between items-end mb-2">
<h3 class="font-headline-md text-headline-md">Heritage Classic</h3>
<span class="category-badge ml-2">Penyet</span>
</div>
<div class="flex justify-between items-center mb-4">
<div class="dotted-leader ml-0"></div>
<span class="font-headline-md text-headline-md text-primary">Rp 36k</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">Traditional smashed fried chicken marinated in 12 indigenous spices, served with sambal terasi and fresh lalapan.</p>
</div>
<!-- Item 5 -->
<div class="menu-card flex flex-col pb-6">
<div class="flex justify-between items-end mb-2">
<h3 class="font-headline-md text-headline-md">Salted Egg Infusion</h3>
<span class="category-badge ml-2">Penyet</span>
</div>
<div class="flex justify-between items-center mb-4">
<div class="dotted-leader ml-0"></div>
<span class="font-headline-md text-headline-md text-primary">Rp 45k</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">Elevated penyet drizzled with a rich, creamy salted egg yolk reduction and curry leaves.</p>
</div>
<!-- Item 6 -->
<div class="menu-card flex flex-col pb-6">
<div class="flex justify-between items-end mb-2">
<h3 class="font-headline-md text-headline-md">Smoky Kecap</h3>
<span class="category-badge ml-2">Penyet</span>
</div>
<div class="flex justify-between items-center mb-4">
<div class="dotted-leader ml-0"></div>
<span class="font-headline-md text-headline-md text-primary">Rp 39k</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">Twice-cooked chicken finished on charcoal with a sweet soy glaze and spicy shrimp paste.</p>
</div>
</div>
</section>
<!-- Category: Goreng -->
<section class="mb-24" id="goreng">
<div class="flex items-center gap-4 mb-12">
<div class="gold-line flex-grow"></div>
<h2 class="font-headline-lg text-headline-lg text-primary shrink-0">Ayam Goreng</h2>
<div class="gold-line flex-grow gold-diamond"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-16">
<div class="relative overflow-hidden aspect-video md:aspect-auto">
<div class="w-full h-full bg-cover bg-center grayscale-50" data-alt="Close up of perfectly fried golden brown chicken pieces garnished with crispy galangal flakes. The lighting is bright and warm, accentuating the crunchy texture. Set against a minimalist background of warm cream and deep burgundy accents, the image feels sophisticated and professional." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCe9CM8XE9LM3LbUDGc7HwxIScPe00Smg7dcsjvMz3e6qohSEzOpsYAthS6ufQPH6fd-wtuqSqK2Z5V-4M-fBhS2UfZvO2Ayd-j0qnWxpyXnbGPftVFAgEf0fnnZMNCG8Eq68h1x9xUyrbFKOfhzzgRYr4IBtJnHSrsPoi1js3aEKh5S3xNPtGy7GV3cxJ8ovafi4I-8h6ic-g_CuA39mjHJklZazw1QI0kkJiv9sIIBmHNFDYFQilj')"></div>
</div>
<div class="flex flex-col gap-12 justify-center">
<!-- Item 7 -->
<div class="menu-card flex flex-col pb-6">
<div class="flex justify-between items-end mb-2">
<div class="flex items-center gap-3">
<h3 class="font-headline-md text-headline-md">Galangal Crisps</h3>
<span class="category-badge">Goreng</span>
</div>
<div class="dotted-leader"></div>
<span class="font-headline-md text-headline-md text-primary">Rp 34k</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">Signature fried chicken topped with mountain-high crispy galangal flakes and lime leaf aroma.</p>
</div>
<!-- Item 8 -->
<div class="menu-card flex flex-col pb-6">
<div class="flex justify-between items-end mb-2">
<div class="flex items-center gap-3">
<h3 class="font-headline-md text-headline-md">Serundeng Gold</h3>
<span class="category-badge">Goreng</span>
</div>
<div class="dotted-leader"></div>
<span class="font-headline-md text-headline-md text-primary">Rp 34k</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">Savoury coconut-infused fried chicken with toasted spice crumbles and sweet pickles.</p>
</div>
</div>
</div>
</section>
<!-- Reservation CTA -->
<section class="bg-surface-container py-16 px-12 border border-[#A0522D] flex flex-col md:flex-row items-center justify-between gap-8">
<div class="text-center md:text-left">
<h2 class="font-headline-md text-headline-md text-primary mb-2">Reserve Your Table</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Experience the art of curated heritage dining in person.</p>
</div>
<div class="flex flex-col sm:flex-row gap-4">
<button class="bg-[#A0522D] text-white px-8 py-4 font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all">Book Now</button>
<button class="border border-[#A0522D] text-primary px-8 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-[#A0522D] hover:text-white transition-all">View Locations</button>
</div>
</section>
`

export default menuPage