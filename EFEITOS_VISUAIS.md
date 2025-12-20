# Efeitos Visuais Avançados Implementados

## ✅ 1. Efeito de Fundo Animado (Anti-Gravity Style)

### Hero Section - Partículas Flutuantes
- **Implementação**: Adicionado pseudo-elemento `::before` com gradientes radiais que simulam partículas/estrelas
- **Cores**: Azul/Púrpura (`rgba(100, 150, 255, 0.15)`, `rgba(150, 100, 255, 0.1)`)
- **Animação**: `floatingParticles` - 20 segundos de movimento suave e contínuo
- **Opacidade**: 0.4 a 0.7 (baixa, não prejudica leitura)
- **Efeito**: Campo de estrelas em movimento lento e discreto

## ✅ 2. Animações de Entrada (Scroll Animations)

### Benefícios e Pain Cards
- **Efeito**: Fade In Up (já implementado via `.animate-on-scroll .fade-up`)
- **Glassmorphism**: Adicionado `backdrop-filter: blur(10px)` e background semi-transparente

### Testimonials (Prova Social)
- **Efeito**: Animação escalonada
- **Delays**: 
  - 1º card: 0.1s
  - 2º card: 0.2s  
  - 3º card: 0.3s
- **Hover**: Elevação com sombra azul brilhante

### Offer Box e Guarantee Box
- **Efeito**: Bounce animation (pulo suave)
- **Animação**: `bounceIn` - 0.6s
- **Sequência**: Scale 0.3 → 1.05 → 0.9 → 1.0
- **Trigger**: Quando `.visible` é adicionado pelo IntersectionObserver

## ✅ 3. Glassmorphism (Vidro Fosco)

### Cards com Efeito Aplicado:
- **.pain-card**: `rgba(10, 21, 37, 0.7)` + `blur(10px)`
- **.benefit-card**: `rgba(10, 21, 37, 0.7)` + `blur(10px)`
- **.bonus-card**: `rgba(10, 21, 37, 0.7)` + `blur(10px)`
- **.testimonial-card**: `rgba(10, 21, 37, 0.7)` + `blur(10px)`
- **.offer-box**: `rgba(10, 21, 37, 0.8)` + `blur(15px)`
- **.guarantee-box**: `rgba(10, 21, 37, 0.8)` + `blur(15px)`
- **.accordion-item**: `rgba(10, 21, 37, 0.7)` + `blur(10px)`

### Efeitos de Profundidade:
- **Sombras duplas**: Sombra preta + brilho azul/púrpura sutil
- **Hover**: Elevação + intensificação do brilho
- **Bordas**: `rgba(255, 255, 255, 0.08)` para definição sutil

## ✅ 4. Paleta de Cores Mantida

- ✅ **Azul Marinho**: `#050b14` (fundo principal)
- ✅ **Amarelo Ouro**: `var(--gold)` (títulos e destaques)
- ✅ **Verde-Água/Turquesa**: `var(--teal)` (CTAs)
- ✅ **Texto Branco**: `var(--white)` (legibilidade máxima)
- ✅ **Vermelho**: `var(--red)` (urgência)

## Detalhes Técnicos

### Partículas Animadas
```css
background-image: 
    radial-gradient(2px 2px at 20% 30%, rgba(100, 150, 255, 0.15), transparent),
    radial-gradient(2px 2px at 60% 70%, rgba(150, 100, 255, 0.1), transparent),
    /* ... 7 partículas no total */
```

### Bounce Animation
```css
@keyframes bounceIn {
    0% { opacity: 0; transform: scale(0.3); }
    50% { opacity: 1; transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); }
}
```

### Glassmorphism Pattern
```css
background: rgba(10, 21, 37, 0.7);
backdrop-filter: blur(10px);
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 
            0 0 20px rgba(100, 150, 255, 0.05);
```

## Resultado Final

✅ **Elegância**: Efeitos sutis que não distraem  
✅ **Modernidade**: Glassmorphism e partículas flutuantes  
✅ **Profundidade**: Sombras e brilhos criam camadas visuais  
✅ **Performance**: Animações otimizadas com CSS puro  
✅ **Legibilidade**: Opacidades baixas preservam contraste do texto
