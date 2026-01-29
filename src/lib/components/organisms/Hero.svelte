<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  
  let heroContainer: HTMLElement;

  onMount(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl
      // 1. Badge pop in
      .from(".hero-badge", { 
        scale: 0, 
        opacity: 0, 
        duration: 0.8, 
        ease: "back.out(1.7)" 
      })
      
      // 2. Title naik ke atas
      .from(".hero-title", { 
        y: 100, 
        opacity: 0, 
        duration: 1.2, 
        stagger: 0.15 
      }, "-=0.4")
      
      // 3. Deskripsi fade in
      .from(".hero-desc", { 
        y: 20, 
        opacity: 0, 
        duration: 1 
      }, "-=0.8")
      
      // 4. Tombol slide in (Menggunakan Y axis agar muncul dari bawah ke atas, lebih natural)
      .fromTo(".hero-btn", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 
        "-=0.6"
      )
      
      // 5. Dekorasi background
      .from(".hero-glow", {
        scale: 0.5,
        opacity: 0,
        duration: 2
      }, 0);

    }, heroContainer);

    return () => ctx.revert();
  });
</script>

<div class="relative min-h-[90vh] flex items-center justify-center" bind:this={heroContainer}>
  
  <div class="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-quark-beam/20 blur-[120px] rounded-full pointer-events-none"></div>

  <div class="relative z-10 text-center space-y-8 px-4 max-w-5xl mx-auto">
    
    <div class="flex justify-center">
      <span class="hero-badge inline-flex items-center rounded-full border border-quark-beam/30 bg-quark-beam/10 px-3 py-1 text-xs font-mono font-medium text-quark-beam backdrop-blur-sm">
        SYSTEMS FOR SCALE
      </span>
    </div>

    <div class="space-y-2">
      <h1 class="hero-title font-display text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
        We Build
      </h1>
      <h1 class="hero-title font-display text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 md:text-7xl lg:text-8xl">
        Digital Empires
      </h1>
    </div>

    <p class="hero-desc mx-auto max-w-2xl text-lg text-zinc-300 leading-relaxed font-sans">
      A founder-led software laboratory specializing in high-performance SaaS, AI automation, and legacy system modernization.
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 sm:gap-6">
      
      <a href="/contact" class="hero-btn group relative inline-flex min-w-[160px] items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-void transition-all hover:bg-quark-beam hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
        Start a Project
      </a>
      
      <a href="/projects" class="hero-btn group inline-flex min-w-[160px] items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
        View Our Work
      </a>
      
    </div>

  </div>
</div>