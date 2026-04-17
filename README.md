<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>박치헌 포트폴리오</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Apple SD Gothic Neo',sans-serif;background:#0a0a0f;color:#e8e8f0;overflow-x:hidden}

nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:14px 5%;background:rgba(10,10,15,0.8);backdrop-filter:blur(12px);border-bottom:0.5px solid rgba(255,255,255,0.07)}
.nav-logo{font-size:16px;font-weight:700;color:#fff;letter-spacing:-0.5px;flex-shrink:0}
.nav-logo span{color:#7c5cfc}
.nav-links{display:flex;gap:clamp(12px,3vw,28px);align-items:center}
.nav-links a{font-size:13px;color:rgba(255,255,255,0.5);text-decoration:none;cursor:pointer;transition:color .2s;white-space:nowrap;position:relative}
.nav-links a::after{content:'';position:absolute;bottom:-3px;left:0;width:0;height:1.5px;background:#7c5cfc;transition:width .25s}
.nav-links a:hover{color:#fff}
.nav-links a:hover::after{width:100%}
.btn-nav{background:#7c5cfc;color:#fff;font-size:13px;padding:8px clamp(12px,2vw,20px);border-radius:6px;border:none;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:opacity .2s,transform .15s}
.btn-nav:hover{opacity:.85;transform:translateY(-1px)}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}
.hamburger span{display:block;width:22px;height:2px;background:#fff;border-radius:2px;transition:all .3s}
.hamburger.open span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
.hamburger.open span:nth-child(2){opacity:0}
.hamburger.open span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}
.mobile-menu{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(10,10,15,.97);z-index:99;flex-direction:column;align-items:center;justify-content:center;gap:32px}
.mobile-menu.open{display:flex}
.mobile-menu a{font-size:22px;color:rgba(255,255,255,.7);text-decoration:none;font-weight:600}
.mobile-menu a:hover{color:#7c5cfc}
.mobile-menu .btn-m{background:#7c5cfc;color:#fff;font-size:16px;padding:14px 40px;border-radius:8px;border:none;cursor:pointer;font-weight:700}

.hero{position:relative;height:100svh;min-height:500px;display:flex;align-items:center;overflow:hidden}
.hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.4;pointer-events:none}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,10,15,.1) 0%,rgba(10,10,15,.25) 55%,rgba(10,10,15,.9) 100%)}
.hero-content{position:relative;z-index:2;padding:0 5%;max-width:900px}
.hero-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(124,92,252,0.13);border:0.5px solid rgba(124,92,252,0.35);color:#a78bfa;font-size:clamp(11px,1.5vw,15px);padding:6px 14px;border-radius:20px;margin-bottom:clamp(16px,3vh,28px);animation:fadeUp .8s ease both}
.hero-badge::before{content:'';width:6px;height:6px;background:#7c5cfc;border-radius:50%;flex-shrink:0}
.hero h1{font-size:clamp(36px,7vw,72px);font-weight:900;line-height:1.1;color:#fff;margin-bottom:clamp(12px,2vh,22px);letter-spacing:-2px;animation:fadeUp .8s .1s ease both}
.hero h1 em{color:#7c5cfc;font-style:normal}
.hero-desc{font-size:clamp(13px,2vw,18px);color:rgba(255,255,255,0.5);line-height:1.75;margin-bottom:clamp(20px,4vh,36px);animation:fadeUp .8s .2s ease both}
.hero-btns{display:flex;gap:clamp(8px,2vw,14px);flex-wrap:wrap;animation:fadeUp .8s .3s ease both}
.btn-primary{background:#7c5cfc;color:#fff;font-size:clamp(13px,1.8vw,17px);padding:clamp(11px,2vh,15px) clamp(20px,3vw,32px);border-radius:8px;border:none;cursor:pointer;font-weight:700;transition:opacity .2s,transform .15s;white-space:nowrap}
.btn-primary:hover{opacity:.85;transform:translateY(-2px)}
.btn-secondary{background:transparent;color:rgba(255,255,255,0.75);font-size:clamp(13px,1.8vw,17px);padding:clamp(11px,2vh,15px) clamp(20px,3vw,32px);border-radius:8px;border:0.5px solid rgba(255,255,255,0.25);cursor:pointer;transition:border-color .2s,transform .15s;white-space:nowrap}
.btn-secondary:hover{border-color:rgba(255,255,255,.6);transform:translateY(-2px)}
.scroll-hint{position:absolute;bottom:clamp(16px,4vh,32px);left:50%;transform:translateX(-50%);z-index:2;display:flex;flex-direction:column;align-items:center;gap:6px;color:rgba(255,255,255,.3);font-size:10px;animation:bounce 2s infinite}
.scroll-arrow{width:16px;height:16px;border-right:1.5px solid rgba(255,255,255,.3);border-bottom:1.5px solid rgba(255,255,255,.3);transform:rotate(45deg)}

.section{padding:clamp(48px,8vh,80px) 5%;max-width:1200px;margin:0 auto}
.section-tag{font-size:11px;color:#7c5cfc;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px}
.section-title{font-size:clamp(22px,4vw,30px);font-weight:700;color:#fff;margin-bottom:clamp(20px,4vh,36px)}
.divider{height:0.5px;background:rgba(255,255,255,0.05)}
.reveal{opacity:0;transform:translateY(32px);transition:opacity .7s ease,transform .7s ease}
.reveal.visible{opacity:1;transform:translateY(0)}

.tab-row{display:flex;gap:8px;margin-bottom:clamp(16px,3vh,28px);flex-wrap:wrap}
.tab{font-size:clamp(11px,1.5vw,13px);padding:6px clamp(12px,2vw,20px);border-radius:20px;border:0.5px solid rgba(255,255,255,0.15);background:transparent;color:rgba(255,255,255,0.45);cursor:pointer;transition:all .2s}
.tab.on{background:#7c5cfc;color:#fff;border-color:#7c5cfc}

.pgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}
.pgrid.shorts-grid{grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px}
.vcard{background:#13131f;border-radius:10px;border:0.5px solid rgba(255,255,255,0.08);overflow:hidden;text-decoration:none;display:block;transition:border-color .2s,transform .2s}
.vcard:hover{border-color:rgba(124,92,252,.5);transform:translateY(-3px)}
.thumb{position:relative;overflow:hidden;background:#1a1a2e}
.thumb.landscape{aspect-ratio:16/9}
.thumb.portrait{aspect-ratio:9/16}
.thumb img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s}
.vcard:hover .thumb img{transform:scale(1.05)}
.thumb-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.25);opacity:0;transition:opacity .2s}
.vcard:hover .thumb-play{opacity:1}
.play-c{width:40px;height:40px;background:rgba(124,92,252,.9);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.play-c::after{content:'';border-left:14px solid #fff;border-top:9px solid transparent;border-bottom:9px solid transparent;margin-left:3px}
.vtag{position:absolute;top:8px;left:8px;font-size:10px;background:rgba(124,92,252,.85);color:#fff;padding:3px 8px;border-radius:4px}
.vinfo{padding:clamp(8px,1.5vw,12px)}
.vtitle{font-size:clamp(11px,1.4vw,13px);color:rgba(255,255,255,.85);font-weight:500;line-height:1.4;min-height:30px}
.vmeta{font-size:11px;color:rgba(255,255,255,.3);margin-top:4px}

.process-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px}
.process-item{background:#13131f;border:0.5px solid rgba(255,255,255,.08);border-radius:12px;padding:22px 18px;transition:border-color .3s,transform .3s;position:relative;overflow:hidden}
.process-item:hover{border-color:rgba(124,92,252,.5);transform:translateY(-4px)}
.process-item::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:#7c5cfc;transform:scaleX(0);transform-origin:left;transition:transform .3s}
.process-item:hover::before{transform:scaleX(1)}
.step-num{font-size:11px;font-weight:700;color:#7c5cfc;letter-spacing:1px;margin-bottom:10px}
.step-icon{font-size:24px;margin-bottom:10px}
.step-title{font-size:clamp(13px,1.8vw,15px);font-weight:700;color:#fff;margin-bottom:6px}
.step-desc{font-size:clamp(11px,1.3vw,12px);color:rgba(255,255,255,.45);line-height:1.6}

.price-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}
.pcard{background:#13131f;border-radius:12px;border:0.5px solid rgba(255,255,255,0.08);padding:clamp(20px,3vw,28px) clamp(16px,2.5vw,24px);display:flex;flex-direction:column;transition:transform .2s,border-color .2s}
.pcard:hover{transform:translateY(-4px);border-color:rgba(124,92,252,.3)}
.pcard.feat{border:1.5px solid #7c5cfc;position:relative}
.feat-badge{position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:#7c5cfc;color:#fff;font-size:11px;padding:3px 16px;border-radius:20px;white-space:nowrap}
.plan-name{font-size:13px;color:rgba(255,255,255,.45);margin-bottom:8px}
.plan-price{font-size:clamp(22px,3vw,26px);font-weight:700;color:#fff;line-height:1.2}
.plan-price sub{font-size:13px;font-weight:400;color:rgba(255,255,255,.4);vertical-align:baseline}
.plan-unit{font-size:12px;color:rgba(255,255,255,.35);margin-top:4px;margin-bottom:20px}
.pdiv{height:0.5px;background:rgba(255,255,255,.08);margin-bottom:20px}
.pitems{list-style:none;display:flex;flex-direction:column;gap:10px;flex:1}
.pitems li{font-size:clamp(11px,1.5vw,13px);color:rgba(255,255,255,.6);display:flex;align-items:flex-start;gap:8px;line-height:1.5}
.pitems li::before{content:'';width:5px;height:5px;border-radius:50%;background:#7c5cfc;flex-shrink:0;margin-top:6px}
.discount-note{font-size:12px;color:#a78bfa;margin-top:12px;padding:8px 12px;background:rgba(124,92,252,.1);border-radius:6px;line-height:1.5}
.btn-plan{width:100%;margin-top:20px;padding:11px;border-radius:8px;font-size:13px;cursor:pointer;font-weight:500;transition:opacity .2s}
.btn-plan:hover{opacity:.8}
.btn-outline{background:transparent;color:rgba(255,255,255,.7);border:0.5px solid rgba(255,255,255,.2)}
.btn-fill{background:#7c5cfc;color:#fff;border:none}

.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,5vw,52px);align-items:start}
.about-text p{font-size:clamp(13px,1.8vw,15px);color:rgba(255,255,255,.55);line-height:1.9;margin-bottom:16px}
.tools-label{font-size:12px;color:rgba(255,255,255,.35);margin:24px 0 12px;letter-spacing:.5px}
.tools-row{display:flex;flex-wrap:wrap;gap:8px}
.tool-tag{font-size:clamp(11px,1.3vw,12px);background:rgba(124,92,252,.1);color:#a78bfa;border:0.5px solid rgba(124,92,252,.25);padding:5px 12px;border-radius:6px;transition:background .2s,transform .15s;cursor:default}
.tool-tag:hover{background:rgba(124,92,252,.22);transform:translateY(-2px)}
.ai-tag{margin-top:10px;display:inline-flex;align-items:center;gap:8px;font-size:12px;background:rgba(255,200,0,.07);color:#ffd666;border:0.5px solid rgba(255,200,0,.2);padding:6px 16px;border-radius:6px}
.exp-col{display:flex;flex-direction:column;gap:12px}
.ecard{background:#13131f;border-radius:10px;border:0.5px solid rgba(255,255,255,.08);padding:clamp(12px,2vw,16px) clamp(14px,2vw,20px);display:flex;align-items:center;gap:16px;transition:border-color .2s,transform .2s}
.ecard:hover{border-color:rgba(124,92,252,.3);transform:translateX(4px)}
.enum{font-size:clamp(20px,3vw,26px);font-weight:700;color:#7c5cfc;min-width:52px}
.elabel{font-size:clamp(12px,1.6vw,14px);color:rgba(255,255,255,.85);font-weight:600;margin-bottom:2px}
.edesc{font-size:clamp(10px,1.2vw,12px);color:rgba(255,255,255,.4)}

.contact-box{background:#13131f;border-radius:14px;border:0.5px solid rgba(255,255,255,.08);padding:clamp(28px,5vw,48px);text-align:center}
.contact-box h3{font-size:clamp(18px,3vw,26px);font-weight:700;color:#fff;margin-bottom:10px}
.contact-box p{font-size:clamp(13px,1.8vw,15px);color:rgba(255,255,255,.4);margin-bottom:28px;line-height:1.7}
.contact-btns{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}
.btn-kakao{background:#fee500;color:#3c1e1e;font-size:clamp(13px,1.8vw,14px);padding:clamp(11px,2vh,14px) clamp(20px,3vw,30px);border-radius:8px;border:none;cursor:pointer;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:opacity .2s,transform .15s}
.btn-kakao:hover{opacity:.9;transform:translateY(-2px)}
.kakao-ic{width:18px;height:18px;background:#3c1e1e;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:#fee500;flex-shrink:0}
.btn-email{background:#7c5cfc;color:#fff;font-size:clamp(13px,1.8vw,14px);padding:clamp(11px,2vh,14px) clamp(20px,3vw,30px);border-radius:8px;border:none;cursor:pointer;font-weight:600;text-decoration:none;display:inline-block;transition:opacity .2s,transform .15s}
.btn-email:hover{opacity:.85;transform:translateY(-2px)}

footer{padding:clamp(16px,3vh,24px) 5%;border-top:0.5px solid rgba(255,255,255,.05);text-align:center;font-size:clamp(10px,1.3vw,12px);color:rgba(255,255,255,.2)}

@media(hover:hover){
  .cursor-glow{pointer-events:none;position:fixed;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(124,92,252,.07) 0%,transparent 70%);transform:translate(-50%,-50%);z-index:9999;transition:left .08s,top .08s}
}

@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(8px)}}
.load-dots::after{content:'...';animation:dots 1.2s infinite}
@keyframes dots{0%{content:'.'}33%{content:'..'}66%{content:'...'}}

@media(max-width:768px){
  .nav-links,.btn-nav{display:none}
  .hamburger{display:flex}
  .about-grid{grid-template-columns:1fr}
  .pgrid{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}
  .pgrid.shorts-grid{grid-template-columns:repeat(auto-fill,minmax(110px,1fr))}
  .price-grid{grid-template-columns:1fr}
}
@media(max-width:480px){
  .pgrid{grid-template-columns:repeat(2,1fr)}
  .pgrid.shorts-grid{grid-template-columns:repeat(3,1fr)}
  .contact-btns{flex-direction:column;align-items:center}
  .process-grid{grid-template-columns:repeat(2,1fr)}
}
</style>
</head>
<body>

<div class="cursor-glow" id="glow"></div>

<div class="mobile-menu" id="mobileMenu">
  <a href="#portfolio" onclick="closeMobile()">포트폴리오</a>
  <a href="#process" onclick="closeMobile()">프로세스</a>
  <a href="#pricing" onclick="closeMobile()">서비스</a>
  <a href="#about" onclick="closeMobile()">소개</a>
  <a href="#contact" onclick="closeMobile()">연락하기</a>
  <button class="btn-m" onclick="closeMobile();document.getElementById('contact').scrollIntoView({behavior:'smooth'})">의뢰하기</button>
</div>

<nav>
  <div class="nav-logo"><span>P</span>Ch Portfolio</div>
  <div class="nav-links">
    <a href="#portfolio">포트폴리오</a>
    <a href="#process">프로세스</a>
    <a href="#pricing">서비스</a>
    <a href="#about">소개</a>
    <a href="#contact">연락하기</a>
  </div>
  <button class="btn-nav" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">의뢰하기</button>
  <button class="hamburger" id="hamburger" onclick="toggleMobile()">
    <span></span><span></span><span></span>
  </button>
</nav>

<section class="hero" id="home">
  <video class="hero-video" autoplay muted loop playsinline>
    <source src="https://res.cloudinary.com/dsihni53n/video/upload/%ED%8F%AC%ED%8F%B4_%EB%B0%B1_l0wech.mp4" type="video/mp4">
  </video>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="hero-badge">촬영 · 편집 · 연출</div>
    <h1>영상 제작자<br><em>박치헌</em>입니다</h1>
    <p class="hero-desc">관공서 스케치부터 유튜브 콘텐츠, 강의 홍보 영상까지<br>기획부터 최종 납품까지 원스톱으로 진행합니다.</p>
    <div class="hero-btns">
      <button class="btn-primary" onclick="document.getElementById('portfolio').scrollIntoView({behavior:'smooth'})">작업물 보기</button>
      <button class="btn-secondary" onclick="document.getElementById('pricing').scrollIntoView({behavior:'smooth'})">서비스 안내 →</button>
    </div>
  </div>
  <div class="scroll-hint"><div class="scroll-arrow"></div>scroll</div>
</section>

<div class="divider"></div>

<div class="section reveal" id="portfolio">
  <div class="section-tag">Portfolio</div>
  <div class="section-title">작업물</div>
  <div class="tab-row">
    <button class="tab on" data-cat="all">전체</button>
    <button class="tab" data-cat="youtube">유튜브</button>
    <button class="tab" data-cat="pr">홍보/인터뷰</button>
    <button class="tab" data-cat="lecture">경제/강의</button>
    <button class="tab" data-cat="shorts">숏츠</button>
  </div>
  <div id="pgrid" class="pgrid"></div>
</div>

<div class="divider"></div>

<div class="section reveal" id="process">
  <div class="section-tag">Process</div>
  <div class="section-title">작업 프로세스</div>
  <div class="process-grid">
    <div class="process-item">
      <div class="step-num">STEP 01</div>
      <div class="step-icon">💬</div>
      <div class="step-title">문의 & 상담</div>
      <div class="step-desc">카카오톡 또는 메일로 연락 주시면 빠르게 답변드립니다. 영상 방향성과 레퍼런스를 공유해 주세요.</div>
    </div>
    <div class="process-item">
      <div class="step-num">STEP 02</div>
      <div class="step-icon">📋</div>
      <div class="step-title">견적 & 일정 협의</div>
      <div class="step-desc">영상 길이, 난이도, 요청사항을 바탕으로 견적과 납기 일정을 안내해 드립니다.</div>
    </div>
    <div class="process-item">
      <div class="step-num">STEP 03</div>
      <div class="step-icon">🎬</div>
      <div class="step-title">소스 전달</div>
      <div class="step-desc">원본 영상 파일, 자막 원고, 사용할 BGM 등 필요한 소스를 전달해 주시면 됩니다.</div>
    </div>
    <div class="process-item">
      <div class="step-num">STEP 04</div>
      <div class="step-icon">✂️</div>
      <div class="step-title">편집 제작</div>
      <div class="step-desc">협의한 스타일로 컷편집, 자막, BGM, 모션 등 편집을 진행합니다. 중간 확인도 가능합니다.</div>
    </div>
    <div class="process-item">
      <div class="step-num">STEP 05</div>
      <div class="step-icon">🔁</div>
      <div class="step-title">피드백 & 수정</div>
      <div class="step-desc">1차 시안 확인 후 수정사항을 말씀해 주세요. 수정 2회까지 무료로 반영해 드립니다.</div>
    </div>
    <div class="process-item">
      <div class="step-num">STEP 06</div>
      <div class="step-icon">📦</div>
      <div class="step-title">최종 납품</div>
      <div class="step-desc">최종 파일을 원하시는 포맷으로 납품합니다. 업로드 지원도 가능합니다.</div>
    </div>
  </div>
</div>

<div class="divider"></div>

<div class="section reveal" id="pricing">
  <div class="section-tag">Service</div>
  <div class="section-title">편집 패키지</div>
  <div class="price-grid">
    <div class="pcard">
      <div class="plan-name">초 간단 편집</div>
      <div class="plan-price">10,000<sub>원~</sub></div>
      <div class="plan-unit">/ 분 당</div>
      <div class="pdiv"></div>
      <ul class="pitems">
        <li>기본적인 컷편집</li>
        <li>자막</li>
        <li style="color:rgba(255,255,255,.4);font-size:11px">자막 없는 단순 컷편집에 10분이 넘어가신다면 더 저렴하게 제작 가능합니다</li>
      </ul>
      <button class="btn-plan btn-outline" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">문의하기</button>
    </div>
    <div class="pcard feat">
      <div class="feat-badge">가장 인기</div>
      <div class="plan-name">스탠다드 편집</div>
      <div class="plan-price">15,000<sub>원~</sub></div>
      <div class="plan-unit">/ 분 당</div>
      <div class="pdiv"></div>
      <ul class="pitems">
        <li>기본적인 컷편집</li>
        <li>BGM, 효과음 삽입 및 믹싱</li>
        <li>디자인 예능 자막 포함</li>
        <li>썸네일 제작</li>
      </ul>
      <button class="btn-plan btn-fill" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">문의하기</button>
    </div>
    <div class="pcard">
      <div class="plan-name">숏폼</div>
      <div class="plan-price">20,000<sub>원~</sub></div>
      <div class="plan-unit">/ 편 당</div>
      <div class="pdiv"></div>
      <ul class="pitems">
        <li>유튜브 쇼츠 / 릴스 / 틱톡 최적화 편집</li>
        <li>세로형 포맷 제작</li>
      </ul>
      <div class="discount-note">✦ 롱폼 영상 제작 시 숏츠 추가 제작 할인 적용</div>
      <button class="btn-plan btn-outline" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">문의하기</button>
    </div>
  </div>
</div>

<div class="divider"></div>

<div class="section reveal" id="about">
  <div class="section-tag">About</div>
  <div class="section-title">소개</div>
  <div class="about-grid">
    <div>
      <div class="about-text">
        <p>안녕하십니까, 영상 기획, 촬영, 연출, 편집까지 가능한 영상 제작자 <strong style="color:#fff;font-weight:600">박치헌</strong>입니다.</p>
        <p>관공서 스케치 촬영부터 스포츠 유튜브, 강의 홍보 영상, 브이로그, 뮤직비디오 등 다양한 경험을 보유하고 있는 영상 제작자입니다.</p>
        <p>함께 성장해 나아가고 싶으신 유튜버분들, 간단한 컷편집이 필요하신 분들, 스케치 촬영이 필요한 관공서 모두 협업 가능합니다.</p>
      </div>
      <div class="tools-label">사용 가능 툴</div>
      <div class="tools-row">
        <span class="tool-tag">Adobe Photoshop</span>
        <span class="tool-tag">After Effects</span>
        <span class="tool-tag">Premiere Pro</span>
        <span class="tool-tag">Illustrator</span>
      </div>
      <div class="ai-tag">✦ AI 영상 생성 가능</div>
    </div>
  </div>
</div>

<div class="divider"></div>

<div class="section reveal" id="contact">
  <div class="contact-box">
    <h3>지금 바로 의뢰해보세요</h3>
    <p>유튜버, 관공서, 기업 홍보 등 모든 영상 의뢰 환영합니다.<br>편하신 방법으로 연락 주시면 빠르게 답변 드립니다.</p>
    <div class="contact-btns">
      <a class="btn-kakao" href="https://open.kakao.com/o/sXCETsqi" target="_blank" rel="noopener">
        <span class="kakao-ic">K</span>카카오톡 오픈프로필
      </a>
      <a class="btn-email" href="mailto:clgjsdl12@gmail.com">메일 보내기</a>
    </div>
  </div>
</div>

<footer>© 2026 박치헌 포트폴리오 · 영상 기획 · 촬영 · 편집 · 연출 · 서울, 대한민국</footer>

<script>
function toggleMobile(){
  const m=document.getElementById('mobileMenu'),h=document.getElementById('hamburger');
  m.classList.toggle('open');h.classList.toggle('open');
  document.body.style.overflow=m.classList.contains('open')?'hidden':'';
}
function closeMobile(){
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow='';
}

const glow=document.getElementById('glow');
if(glow) document.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});

const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible');}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

function vid(url){const m=url.match(/(?:youtu\.be\/|shorts\/|[?&]v=)([\w-]+)/);return m?m[1]:'';}
function thumb(url){const id=vid(url);return id?`https://i.ytimg.com/vi/${id}/hqdefault.jpg`:'';}
const catLabel={youtube:"유튜브",pr:"홍보/인터뷰",lecture:"경제/강의",shorts:"숏츠"};

const videos=[
  {url:"https://youtu.be/i6Qa6d2Jlzc",cat:"youtube"},
  {url:"https://www.youtube.com/watch?v=r_94zBPR0qU",cat:"youtube"},
  {url:"https://youtu.be/gnAzFUbF574",cat:"youtube"},
  {url:"https://youtu.be/NGq1oz5PUzk",cat:"youtube"},
  {url:"https://www.youtube.com/watch?v=LqQIxuT-E88",cat:"youtube"},
  {url:"https://youtu.be/LFJO4QHHc_4",cat:"youtube"},
  {url:"https://www.youtube.com/watch?v=mp8e2UBhqO0",cat:"youtube"},
  {url:"https://www.youtube.com/watch?v=wFDLRLagsck",cat:"youtube"},
  {url:"https://www.youtube.com/watch?v=VKYpceGnvtg",cat:"youtube"},
  {url:"https://www.youtube.com/watch?v=ZqAlakwcD_A",cat:"youtube"},
  {url:"https://youtu.be/mUO9dahc6H4",cat:"pr"},
  {url:"https://www.youtube.com/watch?v=FEsH7DMxro4",cat:"pr"},
  {url:"https://www.youtube.com/watch?v=jZaAHcE_hik",cat:"pr"},
  {url:"https://youtu.be/c25pVN3qHi8",cat:"pr"},
  {url:"https://youtu.be/4v2YyKGBCcM",cat:"pr"},
  {url:"https://youtu.be/GyJso2K2upY",cat:"pr"},
  {url:"https://youtu.be/V_l4qCgY7OA",title:"달러약세",cat:"lecture"},
  {url:"https://youtu.be/TTU17vFbM2E",title:"30분 이상 롱폼",cat:"lecture"},
  {url:"https://www.youtube.com/shorts/arm5oq2zGNk",cat:"shorts"},
  {url:"https://www.youtube.com/shorts/n2Iy9KXwuog",cat:"shorts"},
  {url:"https://www.youtube.com/shorts/mx5nvdaTeLI",cat:"shorts"},
  {url:"https://www.youtube.com/shorts/00J9c2HU2yI",cat:"shorts"},
  {url:"https://www.youtube.com/shorts/hQ_kcmHYoNw",cat:"shorts"},
  {url:"https://www.youtube.com/shorts/y3t1w3OJkyo",cat:"shorts"},
  {url:"https://www.youtube.com/shorts/-jkEsbLNUXg",cat:"shorts"},
  {url:"https://www.youtube.com/shorts/HhebzEC_sf4",cat:"shorts"}
].map(v=>({title:"",cat:"youtube",...v}));

async function loadTitles(){
  await Promise.all(videos.map(async v=>{
    const id=vid(v.url);
    if(!id)return;
    try{
      const r=await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`);
      if(r.ok){const d=await r.json();v.title=d.title||"";}
    }catch(e){}
  }));
}

function render(cat){
  const g=document.getElementById('pgrid');
  const isS=cat==='shorts';
  const list=cat==='all'?videos:videos.filter(v=>v.cat===cat);
  g.className='pgrid'+(isS?' shorts-grid':'');
  g.innerHTML=list.map(v=>`
    <a class="vcard" href="${v.url}" target="_blank" rel="noopener">
      <div class="thumb ${v.cat==='shorts'?'portrait':'landscape'}">
        <img src="${thumb(v.url)}" alt="${v.title||''}" loading="lazy"
          onerror="this.src='https://i.ytimg.com/vi/${vid(v.url)}/mqdefault.jpg'">
        <div class="thumb-play"><div class="play-c"></div></div>
        <div class="vtag">${catLabel[v.cat]||v.cat}</div>
      </div>
      <div class="vinfo">
        <div class="vtitle">${v.title||'<span class="load-dots">로딩 중</span>'}</div>
        <div class="vmeta">▶ YouTube에서 보기</div>
      </div>
    </a>`).join('');
}

document.querySelectorAll('.tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));
    t.classList.add('on');
    render(t.dataset.cat);
  });
});

const g=document.getElementById('pgrid');
g.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:40px;color:rgba(255,255,255,.3);font-size:14px"><span class="load-dots">영상 정보 불러오는 중</span></div>`;
loadTitles().then(()=>render('all'));
</script>
</body>
</html>
