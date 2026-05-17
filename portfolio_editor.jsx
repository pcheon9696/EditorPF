import { useState, useCallback } from "react";

const defaultData = {
  hero: {
    title: "영상 제작자",
    name: "박치헌",
    subtitle: "촬영 · 편집 · 연출",
    description: "관공서 스케치부터 유튜브 콘텐츠, 강의 홍보 영상까지\n기획부터 최종 납품까지 원스톱으로 진행합니다.",
  },
  process: [
    { step: "01", icon: "💬", title: "문의 & 상담", desc: "카카오톡 또는 메일로 연락 주시면 빠르게 답변드립니다. 영상 방향성과 레퍼런스를 공유해 주세요." },
    { step: "02", icon: "📋", title: "견적 & 일정 협의", desc: "영상 길이, 난이도, 요청사항을 바탕으로 견적과 납기 일정을 안내해 드립니다." },
    { step: "03", icon: "🎬", title: "소스 전달", desc: "원본 영상 파일, 자막 원고, 사용할 BGM 등 필요한 소스를 전달해 주시면 됩니다." },
    { step: "04", icon: "✂️", title: "편집 제작", desc: "협의한 스타일로 컷편집, 자막, BGM, 모션 등 편집을 진행합니다. 중간 확인도 가능합니다." },
    { step: "05", icon: "🔁", title: "피드백 & 수정", desc: "1차 시안 확인 후 수정사항을 말씀해 주세요. 수정 2회까지 무료로 반영해 드립니다." },
    { step: "06", icon: "📦", title: "최종 납품", desc: "최종 파일을 원하시는 포맷으로 납품합니다. 업로드 지원도 가능합니다." },
  ],
  pricing: [
    {
      name: "초 간단 편집",
      price: "10,000원~",
      unit: "/ 분 당",
      features: ["기본적인 컷편집", "자막", "자막 없는 단순 컷편집에 10분이 넘어가신다면 더 저렴하게 제작 가능합니다"],
      popular: false,
    },
    {
      name: "스탠다드 편집",
      price: "15,000원~",
      unit: "/ 분 당",
      features: ["기본적인 컷편집", "BGM, 효과음 삽입 및 믹싱", "디자인 예능 자막 포함", "썸네일 제작"],
      popular: true,
    },
    {
      name: "숏폼",
      price: "20,000원~",
      unit: "/ 편 당",
      features: ["유튜브 쇼츠 / 릴스 / 틱톡 최적화 편집", "세로형 포맷 제작", "✦ 롱폼 영상 제작 시 숏츠 추가 제작 할인 적용"],
      popular: false,
    },
  ],
  about: {
    intro: '안녕하십니까, 영상 기획, 촬영, 연출, 편집까지 가능한 영상 제작자 박치헌입니다.',
    detail: '관공서 스케치 촬영부터 스포츠 유튜브, 강의 홍보 영상, 브이로그, 뮤직비디오 등 다양한 경험을 보유하고 있는 영상 제작자입니다.',
    collab: '함께 성장해 나아가고 싶으신 유튜버분들, 간단한 컷편집이 필요하신 분들, 스케치 촬영이 필요한 관공서 모두 협업 가능합니다.',
  },
  contact: {
    cta: "지금 바로 의뢰해보세요",
    ctaDesc: "유튜버, 관공서, 기업 홍보 등 모든 영상 의뢰 환영합니다.\n편하신 방법으로 연락 주시면 빠르게 답변 드립니다.",
    kakao: "https://open.kakao.com/o/sXCETsqi",
    email: "clgjsdl12@gmail.com",
  },
};

function EditableField({ label, value, onChange, multiline = false, small = false }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{
        display: "block",
        fontSize: 11,
        fontWeight: 700,
        color: "#94a3b8",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        marginBottom: 5,
        fontFamily: "'Pretendard', sans-serif",
      }}>{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          style={{
            width: "100%",
            padding: "10px 12px",
            background: "#1e293b",
            border: "1px solid #334155",
            borderRadius: 8,
            color: "#e2e8f0",
            fontSize: small ? 13 : 14,
            fontFamily: "'Pretendard', sans-serif",
            resize: "vertical",
            outline: "none",
            lineHeight: 1.6,
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => e.target.style.borderColor = "#6366f1"}
          onBlur={(e) => e.target.style.borderColor = "#334155"}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            background: "#1e293b",
            border: "1px solid #334155",
            borderRadius: 8,
            color: "#e2e8f0",
            fontSize: small ? 13 : 14,
            fontFamily: "'Pretendard', sans-serif",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => e.target.style.borderColor = "#6366f1"}
          onBlur={(e) => e.target.style.borderColor = "#334155"}
        />
      )}
    </div>
  );
}

function Section({ title, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{
      background: "#0f172a",
      borderRadius: 12,
      border: "1px solid #1e293b",
      marginBottom: 12,
      overflow: "hidden",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#f1f5f9",
          fontFamily: "'Pretendard', sans-serif",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 700 }}>
          <span style={{ fontSize: 20 }}>{icon}</span>
          {title}
        </span>
        <span style={{
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.25s ease",
          fontSize: 18,
          color: "#64748b",
        }}>▾</span>
      </button>
      {open && (
        <div style={{ padding: "4px 20px 20px" }}>
          {children}
        </div>
      )}
    </div>
  );
}

function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>박치헌 포트폴리오</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#0a0a0a;--surface:#111;--surface2:#1a1a1a;--text:#fff;--text-sub:#aaa;--accent:#c8ff00;--accent2:#00e5ff;--border:#222;--radius:16px}
html{scroll-behavior:smooth}
body{font-family:'Noto Sans KR',sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden}
a{color:inherit;text-decoration:none}
/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:20px 40px;display:flex;justify-content:space-between;align-items:center;background:rgba(10,10,10,.85);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.nav-logo{font-weight:900;font-size:1.2rem;letter-spacing:-.02em}
.nav-links{display:flex;gap:32px;list-style:none}
.nav-links a{font-size:.85rem;color:var(--text-sub);transition:color .3s}
.nav-links a:hover{color:var(--text)}
.nav-cta{background:var(--accent);color:#000;padding:10px 24px;border-radius:50px;font-size:.85rem;font-weight:700;transition:transform .3s,box-shadow .3s}
.nav-cta:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(200,255,0,.3)}
.mobile-menu-btn{display:none;background:none;border:none;color:#fff;font-size:1.5rem;cursor:pointer}
/* HERO */
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:120px 40px 80px}
.hero-video{position:absolute;inset:0;z-index:0}
.hero-video video{width:100%;height:100%;object-fit:cover}
.hero-video::after{content:'';position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.5),rgba(10,10,10,1))}
.hero-content{position:relative;z-index:2;text-align:center;max-width:800px}
.hero-badge{display:inline-block;padding:8px 20px;border:1px solid var(--accent);border-radius:50px;font-size:.8rem;color:var(--accent);margin-bottom:32px;letter-spacing:.1em}
.hero h1{font-size:clamp(2.5rem,6vw,4.5rem);font-weight:900;line-height:1.15;margin-bottom:24px;letter-spacing:-.03em}
.hero h1 em{font-style:normal;color:var(--accent)}
.hero p{font-size:1.1rem;color:var(--text-sub);line-height:1.8;margin-bottom:48px}
.hero-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.btn-primary{background:var(--accent);color:#000;padding:16px 36px;border-radius:50px;font-weight:700;font-size:.95rem;transition:all .3s}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(200,255,0,.3)}
.btn-outline{border:1px solid var(--border);color:var(--text);padding:16px 36px;border-radius:50px;font-size:.95rem;transition:all .3s}
.btn-outline:hover{border-color:var(--text);transform:translateY(-2px)}
.scroll-indicator{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);z-index:2;display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--text-sub);font-size:.75rem;letter-spacing:.2em}
.scroll-indicator::after{content:'';width:1px;height:40px;background:linear-gradient(to bottom,var(--text-sub),transparent);animation:scrollPulse 2s infinite}
@keyframes scrollPulse{0%,100%{opacity:.3}50%{opacity:1}}
/* SECTIONS */
.section{padding:120px 40px}
.section-label{font-size:.75rem;color:var(--accent);letter-spacing:.2em;text-transform:uppercase;margin-bottom:8px}
.section-title{font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-.03em;margin-bottom:60px}
/* PORTFOLIO */
.portfolio-filters{display:flex;gap:12px;margin-bottom:48px;flex-wrap:wrap}
.filter-btn{padding:10px 24px;border-radius:50px;border:1px solid var(--border);background:transparent;color:var(--text-sub);font-size:.85rem;cursor:pointer;transition:all .3s}
.filter-btn.active,.filter-btn:hover{background:var(--accent);color:#000;border-color:var(--accent)}
.portfolio-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:20px}
.portfolio-card{position:relative;border-radius:var(--radius);overflow:hidden;aspect-ratio:16/9;background:var(--surface2);border:1px solid var(--border);cursor:pointer;transition:transform .4s,box-shadow .4s}
.portfolio-card:hover{transform:translateY(-8px);box-shadow:0 20px 60px rgba(0,0,0,.5)}
/* PROCESS */
.process-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px}
.process-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:36px;transition:transform .3s,border-color .3s}
.process-card:hover{transform:translateY(-4px);border-color:var(--accent)}
.process-step{font-size:.7rem;color:var(--accent);letter-spacing:.15em;margin-bottom:16px;font-weight:700}
.process-icon{font-size:2rem;margin-bottom:16px}
.process-card h3{font-size:1.1rem;font-weight:700;margin-bottom:12px}
.process-card p{font-size:.9rem;color:var(--text-sub);line-height:1.7}
/* PRICING */
.pricing-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px}
.pricing-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:40px;position:relative;transition:transform .3s}
.pricing-card:hover{transform:translateY(-4px)}
.pricing-card.popular{border-color:var(--accent);background:linear-gradient(135deg,rgba(200,255,0,.05),transparent)}
.pricing-badge{position:absolute;top:-1px;right:24px;background:var(--accent);color:#000;padding:6px 16px;border-radius:0 0 8px 8px;font-size:.75rem;font-weight:700}
.pricing-card h3{font-size:1.2rem;font-weight:700;margin-bottom:8px}
.pricing-price{font-size:2rem;font-weight:900;color:var(--accent);margin-bottom:4px}
.pricing-unit{font-size:.85rem;color:var(--text-sub);margin-bottom:24px}
.pricing-features{list-style:none;margin-bottom:32px}
.pricing-features li{padding:8px 0;font-size:.9rem;color:var(--text-sub);border-bottom:1px solid var(--border)}
.pricing-features li::before{content:'✓ ';color:var(--accent)}
.pricing-btn{display:block;text-align:center;padding:14px;border-radius:50px;font-weight:700;font-size:.9rem;transition:all .3s}
.pricing-card.popular .pricing-btn{background:var(--accent);color:#000}
.pricing-card:not(.popular) .pricing-btn{border:1px solid var(--border);color:var(--text)}
.pricing-btn:hover{transform:translateY(-2px)}
/* ABOUT */
.about-content{max-width:700px}
.about-content p{font-size:1.05rem;color:var(--text-sub);line-height:1.9;margin-bottom:20px}
.about-content strong{color:var(--text);font-weight:700}
.tools{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px}
.tool-tag{padding:10px 20px;background:var(--surface);border:1px solid var(--border);border-radius:50px;font-size:.85rem;color:var(--text-sub)}
.ai-tag{color:var(--accent);border-color:var(--accent)}
/* CTA */
.cta-section{text-align:center;padding:120px 40px;background:linear-gradient(135deg,rgba(200,255,0,.03),rgba(0,229,255,.03))}
.cta-section h2{font-size:clamp(1.8rem,3vw,2.5rem);font-weight:900;margin-bottom:16px}
.cta-section p{color:var(--text-sub);margin-bottom:40px;line-height:1.8}
.cta-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.btn-kakao{background:#fee500;color:#000;padding:16px 32px;border-radius:50px;font-weight:700;display:flex;align-items:center;gap:8px;transition:transform .3s}
.btn-kakao:hover{transform:translateY(-2px)}
.btn-mail{background:var(--surface2);color:var(--text);padding:16px 32px;border-radius:50px;font-weight:700;border:1px solid var(--border);transition:all .3s}
.btn-mail:hover{border-color:var(--text);transform:translateY(-2px)}
/* FOOTER */
footer{text-align:center;padding:40px;color:var(--text-sub);font-size:.8rem;border-top:1px solid var(--border)}
@media(max-width:768px){
.nav-links{display:none}.mobile-menu-btn{display:block}
.hero{padding:100px 20px 60px}.section{padding:80px 20px}
.portfolio-grid{grid-template-columns:1fr}
.pricing-grid{grid-template-columns:1fr}
.process-grid{grid-template-columns:1fr}
}
</style>
</head>
<body>
<nav class="nav">
<div class="nav-logo">PCh Portfolio</div>
<ul class="nav-links">
<li><a href="#portfolio">포트폴리오</a></li>
<li><a href="#process">프로세스</a></li>
<li><a href="#pricing">서비스</a></li>
<li><a href="#about">소개</a></li>
<li><a href="#contact">연락하기</a></li>
</ul>
<a href="#contact" class="nav-cta">의뢰하기</a>
<button class="mobile-menu-btn">☰</button>
</nav>

<section class="hero">
<div class="hero-video">
<video autoplay muted loop playsinline>
<source src="https://res.cloudinary.com/dsihni53n/video/upload/%ED%8F%AC%ED%8F%B4_%EB%B0%B1_l0wech.mp4" type="video/mp4">
</video>
</div>
<div class="hero-content">
<div class="hero-badge">${data.hero.subtitle}</div>
<h1>${data.hero.title} <em>${data.hero.name}</em>입니다</h1>
<p>${data.hero.description.replace(/\n/g, '<br>')}</p>
<div class="hero-buttons">
<a href="#portfolio" class="btn-primary">작업물 보기</a>
<a href="#pricing" class="btn-outline">서비스 안내 →</a>
</div>
</div>
<div class="scroll-indicator">scroll</div>
</section>

<section class="section" id="portfolio">
<div class="section-label">Portfolio</div>
<div class="section-title">작업물</div>
<div class="portfolio-filters">
<button class="filter-btn active">전체</button>
<button class="filter-btn">유튜브</button>
<button class="filter-btn">홍보/인터뷰</button>
<button class="filter-btn">경제/강의</button>
<button class="filter-btn">숏츠</button>
</div>
<div class="portfolio-grid"></div>
</section>

<section class="section" id="process">
<div class="section-label">Process</div>
<div class="section-title">작업 프로세스</div>
<div class="process-grid">
${data.process.map(p => `<div class="process-card">
<div class="process-step">STEP ${p.step}</div>
<div class="process-icon">${p.icon}</div>
<h3>${p.title}</h3>
<p>${p.desc}</p>
</div>`).join('\n')}
</div>
</section>

<section class="section" id="pricing">
<div class="section-label">Service</div>
<div class="section-title">편집 패키지</div>
<div class="pricing-grid">
${data.pricing.map(p => `<div class="pricing-card${p.popular ? ' popular' : ''}">
${p.popular ? '<div class="pricing-badge">가장 인기</div>' : ''}
<h3>${p.name}</h3>
<div class="pricing-price">${p.price}</div>
<div class="pricing-unit">${p.unit}</div>
<ul class="pricing-features">
${p.features.map(f => `<li>${f}</li>`).join('\n')}
</ul>
<a href="#contact" class="pricing-btn">문의하기</a>
</div>`).join('\n')}
</div>
</section>

<section class="section" id="about">
<div class="section-label">About</div>
<div class="section-title">소개</div>
<div class="about-content">
<p>${data.about.intro}</p>
<p>${data.about.detail}</p>
<p>${data.about.collab}</p>
<div style="margin-top:16px;font-size:.85rem;color:var(--text-sub)">사용 가능 툴</div>
<div class="tools">
<span class="tool-tag">Adobe Photoshop</span>
<span class="tool-tag">After Effects</span>
<span class="tool-tag">Premiere Pro</span>
<span class="tool-tag">Illustrator</span>
<span class="tool-tag ai-tag">✦ AI 영상 생성 가능</span>
</div>
</div>
</section>

<section class="cta-section" id="contact">
<h2>${data.contact.cta}</h2>
<p>${data.contact.ctaDesc.replace(/\n/g, '<br>')}</p>
<div class="cta-buttons">
<a href="${data.contact.kakao}" class="btn-kakao" target="_blank">K카카오톡 오픈프로필</a>
<a href="mailto:${data.contact.email}" class="btn-mail">메일 보내기</a>
</div>
</section>

<footer>
© 2026 박치헌 포트폴리오 · 영상 기획 · 촬영 · 편집 · 연출 · 서울, 대한민국
</footer>
</body>
</html>`;
}

export default function PortfolioEditor() {
  const [data, setData] = useState(defaultData);
  const [activeTab, setActiveTab] = useState("hero");
  const [saved, setSaved] = useState(false);

  const update = useCallback((path, value) => {
    setData(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const keys = path.split(".");
      let obj = next;
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return next;
    });
  }, []);

  const downloadHTML = useCallback(() => {
    const html = generateHTML(data);
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "youtube_editor_portfolio2.html";
    a.click();
    URL.revokeObjectURL(url);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [data]);

  const tabs = [
    { id: "hero", label: "히어로", icon: "🎬" },
    { id: "process", label: "프로세스", icon: "⚡" },
    { id: "pricing", label: "서비스", icon: "💰" },
    { id: "about", label: "소개", icon: "👤" },
    { id: "contact", label: "연락처", icon: "📬" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#020617",
      color: "#e2e8f0",
      fontFamily: "'Pretendard', -apple-system, sans-serif",
    }}>
      <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet" />

      {/* Header */}
      <div style={{
        padding: "20px 24px",
        borderBottom: "1px solid #1e293b",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(2,6,23,0.9)",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
          }}>✏️</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em" }}>포트폴리오 에디터</div>
            <div style={{ fontSize: 11, color: "#64748b" }}>pcheon9696.github.io</div>
          </div>
        </div>
        <button
          onClick={downloadHTML}
          style={{
            padding: "10px 22px",
            background: saved ? "#22c55e" : "linear-gradient(135deg, #6366f1, #8b5cf6)",
            border: "none",
            borderRadius: 10,
            color: "#fff",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'Pretendard', sans-serif",
            transition: "all 0.3s",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {saved ? "✓ 다운로드 완료!" : "⬇ HTML 다운로드"}
        </button>
      </div>

      {/* Tab Navigation */}
      <div style={{
        display: "flex",
        gap: 4,
        padding: "12px 24px",
        overflowX: "auto",
        borderBottom: "1px solid #1e293b",
        background: "#020617",
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px 18px",
              background: activeTab === tab.id ? "#1e293b" : "transparent",
              border: activeTab === tab.id ? "1px solid #334155" : "1px solid transparent",
              borderRadius: 10,
              color: activeTab === tab.id ? "#f1f5f9" : "#64748b",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Pretendard', sans-serif",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: 15 }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "20px 24px", maxWidth: 640, margin: "0 auto" }}>

        {activeTab === "hero" && (
          <Section title="히어로 섹션" icon="🎬" defaultOpen>
            <EditableField label="상단 배지 (부제)" value={data.hero.subtitle} onChange={v => update("hero.subtitle", v)} />
            <EditableField label="메인 타이틀" value={data.hero.title} onChange={v => update("hero.title", v)} />
            <EditableField label="이름 (강조)" value={data.hero.name} onChange={v => update("hero.name", v)} />
            <EditableField label="설명문" value={data.hero.description} onChange={v => update("hero.description", v)} multiline />
          </Section>
        )}

        {activeTab === "process" && (
          <>
            {data.process.map((p, i) => (
              <Section key={i} title={`STEP ${p.step} — ${p.title}`} icon={p.icon} defaultOpen={i === 0}>
                <EditableField label="아이콘" value={p.icon} onChange={v => update(`process.${i}.icon`, v)} />
                <EditableField label="단계 제목" value={p.title} onChange={v => update(`process.${i}.title`, v)} />
                <EditableField label="설명" value={p.desc} onChange={v => update(`process.${i}.desc`, v)} multiline />
              </Section>
            ))}
          </>
        )}

        {activeTab === "pricing" && (
          <>
            {data.pricing.map((p, i) => (
              <Section key={i} title={p.name} icon={p.popular ? "⭐" : "📦"} defaultOpen={i === 0}>
                <EditableField label="패키지 이름" value={p.name} onChange={v => update(`pricing.${i}.name`, v)} />
                <EditableField label="가격" value={p.price} onChange={v => update(`pricing.${i}.price`, v)} />
                <EditableField label="단위" value={p.unit} onChange={v => update(`pricing.${i}.unit`, v)} />
                <div style={{ marginBottom: 14 }}>
                  <label style={{
                    display: "block",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 8,
                    fontFamily: "'Pretendard', sans-serif",
                  }}>특징 목록</label>
                  {p.features.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "center" }}>
                      <input
                        type="text"
                        value={f}
                        onChange={(e) => {
                          const next = [...p.features];
                          next[fi] = e.target.value;
                          update(`pricing.${i}.features`, next);
                        }}
                        style={{
                          flex: 1,
                          padding: "8px 12px",
                          background: "#1e293b",
                          border: "1px solid #334155",
                          borderRadius: 8,
                          color: "#e2e8f0",
                          fontSize: 13,
                          fontFamily: "'Pretendard', sans-serif",
                          outline: "none",
                        }}
                      />
                      <button
                        onClick={() => {
                          const next = p.features.filter((_, idx) => idx !== fi);
                          update(`pricing.${i}.features`, next);
                        }}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: "#1e293b",
                          border: "1px solid #334155",
                          color: "#ef4444",
                          cursor: "pointer",
                          fontSize: 14,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >✕</button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const next = [...p.features, "새 항목"];
                      update(`pricing.${i}.features`, next);
                    }}
                    style={{
                      marginTop: 4,
                      padding: "8px 16px",
                      background: "transparent",
                      border: "1px dashed #334155",
                      borderRadius: 8,
                      color: "#64748b",
                      fontSize: 12,
                      cursor: "pointer",
                      fontFamily: "'Pretendard', sans-serif",
                      width: "100%",
                    }}
                  >+ 항목 추가</button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                  <input
                    type="checkbox"
                    checked={p.popular}
                    onChange={(e) => update(`pricing.${i}.popular`, e.target.checked)}
                    style={{ accentColor: "#6366f1" }}
                  />
                  <span style={{ fontSize: 13, color: "#94a3b8" }}>인기 태그 표시</span>
                </div>
              </Section>
            ))}
          </>
        )}

        {activeTab === "about" && (
          <Section title="소개" icon="👤" defaultOpen>
            <EditableField label="인사말" value={data.about.intro} onChange={v => update("about.intro", v)} multiline />
            <EditableField label="경력 소개" value={data.about.detail} onChange={v => update("about.detail", v)} multiline />
            <EditableField label="협업 안내" value={data.about.collab} onChange={v => update("about.collab", v)} multiline />
          </Section>
        )}

        {activeTab === "contact" && (
          <Section title="연락처 / CTA" icon="📬" defaultOpen>
            <EditableField label="CTA 제목" value={data.contact.cta} onChange={v => update("contact.cta", v)} />
            <EditableField label="CTA 설명" value={data.contact.ctaDesc} onChange={v => update("contact.ctaDesc", v)} multiline />
            <EditableField label="카카오톡 링크" value={data.contact.kakao} onChange={v => update("contact.kakao", v)} />
            <EditableField label="이메일 주소" value={data.contact.email} onChange={v => update("contact.email", v)} />
          </Section>
        )}

        {/* Usage Guide */}
        <div style={{
          marginTop: 24,
          padding: "16px 20px",
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.2)",
          borderRadius: 12,
          fontSize: 13,
          color: "#94a3b8",
          lineHeight: 1.7,
        }}>
          <strong style={{ color: "#a5b4fc" }}>사용 방법</strong><br />
          ① 각 섹션의 텍스트를 수정합니다<br />
          ② 상단의 "HTML 다운로드" 버튼을 클릭합니다<br />
          ③ 다운받은 파일을 GitHub 레포지토리에 업로드합니다<br />
          <span style={{ fontSize: 12, color: "#64748b" }}>→ github.com/pcheon9696/pcheon9696.github.io → Add file → Upload files</span>
        </div>
      </div>
    </div>
  );
}
