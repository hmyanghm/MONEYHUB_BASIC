var event_vue = event_vue || {}
event_vue ={
	event_head : ()=>{
		alert('여기 들어왔어ㅠㅠ?')
		return '<head>'+
		'	<meta charset="utf-8">'+
		'	<meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width, user-scalable=no">'+
		'	<meta name="format-detection" content="telephone=no">'+
		'	<meta name="description" content="머니허브 이벤트">'+
		'	<meta property="og:description" content="머니허브 이벤트">'+
		'	<meta property="og:type" content="website">'+
		'	<meta property="og:title" content="머니허브 이벤트">'+
		'	<meta property="og:url" content="https://www.kakaobank.com/events">'+
		'	<meta property="og:image" content="https://www.kakaobank.com/products_static/images/common/kakaobank_og_img.png">'+
		'	<meta property="og:site_name" content="www.kakaobank.com">'+
		'	<title>이벤트 | 머니허브</title>'+
		'	<link rel="icon" href="/products_static/images/common/B16.gif" sizes="16x16">'+
		'	<link rel="icon" href="/products_static/images/common/B96.gif" sizes="96x96">'+
		'	<link rel="icon" href="/products_static/images/common/B120.gif" sizes="120x120">'+
		'	<link rel="icon" href="/products_static/images/common/B256.gif" sizes="256x256">'+
		'<!-- Google Tag Manager -->'+
		'	<script src="https://connect.facebook.net/signals/config/394144084521930?v=2.9.15&amp;r=stable" async=""></script>'+
		'	<script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>'+
		'	<script type="text/javascript" async="" src="//static.criteo.net/js/ld/ld.js"></script>'+
		'	<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>'+
		'	<script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-NNBFK9V"></script>'+
		'<!-- End Google Tag Manager -->'+
		'	<link href="/products_static/css/common/pc.css" rel="stylesheet" type="text/css">'+
		'	<link href="/products_static/css/event/list/style.css" rel="stylesheet" type="text/css">'+
		'</head>'
	},
	event_body : ()=>{
		return '  <div id="mArticle">'+
		'    <h1 class="screen_out">이벤트 목록</h1>'+
		'    <div class="event-list">'+
		'      <ul class="tab-event" role="tablist">'+
		'          <li class="item on"><a href="?expired=false" class="link" role="tab" aria-selected="true">진행중 이벤트</a></li>'+
		'          <li class="item"><a href="?expired=true" class="link" role="tab" aria-selected="false">종료된 이벤트</a></li>'+
		'      </ul>'+
		'      <div class="tab-event-content">'+
		'          <ul id="listEvent" class="list-event" data-list-cnt="30">'+
		'              <li class="item ">'+
		'                  <a href="https://event.kakaobank.com/p/hairshop_2019" class="link-thumb" target="_blank"><img src="https://og.kakaobank.io/view/d231c47e-c42b-4fab-b6a8-58cf81391f60" alt="고객이라면 누구나 최대 15,000원 할인" class="img"></a>'+
		'                  <em class="emph">#머니허브헤어샵 #연말이벤트</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="https://event.kakaobank.com/p/hairshop_2019" target="_blank">고객이라면 누구나 최대 15,000원 할인</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-12-16">2019.12.16</time>'+
		'                  ~ <time datetime="2019-12-31">12.31</time>'+
		'                </span>'+
		'              </li>'+
		'              <li class="item ">'+
		'                  <a href="https://www.kakaobank.com/events/9" class="link-thumb" target="_blank"><img src="https://og.kakaobank.io/view/16fd20cb-267c-4f48-821b-6d5e33104854" alt="K현대미술관 칼더전 관람요금 30% 할인 혜택 " class="img"></a>'+
		'                  <em class="emph">#체크카드 #K현대미술관 #칼더전</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="https://www.kakaobank.com/events/9" target="_blank">K현대미술관 칼더전 관람요금 30% 할인 혜택 </a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-12-13">2019.12.13</time>'+
		'                  ~ <time datetime="2020-02-29">02.29</time>'+
		'                </span>'+
		'              </li>'+
		'              <li class="item ">'+
		'                  <a href="https://www.kakaobank.com/events/8" class="link-thumb" target="_blank"><img src="https://og.kakaobank.io/view/f6e32b1f-ac92-4844-a162-1cc1e2bb6762" alt="머니허브 체크카드로 결제하면, 입장료 50% 할인" class="img"></a>'+
		'                  <em class="emph">#체크카드 #라뜰리에</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="https://www.kakaobank.com/events/8" target="_blank">머니허브 체크카드로 결제하면, 입장료 50% 할인</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-11-01">2019.11.01</time>'+
		'                  ~ <time datetime="2019-12-31">12.31</time>'+
		'                </span>'+
		'              </li>'+
		'              <li class="item ">'+
		'                  <a href="https://www.kakaobank.com/events/5" class="link-thumb" target="_blank"><img src="https://og.kakaobank.io/view/f730a33f-0520-4d13-aa4f-49156db9795b" alt="머니허브 주식계좌 개설하기 이벤트 연장" class="img"></a>'+
		'                  <em class="emph">#주식계좌 #한국투자증권</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="https://www.kakaobank.com/events/5" target="_blank">머니허브 주식계좌 개설하기 이벤트 연장</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-08-01">2019.08.01</time>'+
		'                  ~ <time datetime="2019-12-31">12.31</time>'+
		'                </span>'+
		'              </li>'+
		'              <li class="item ">'+
		'                  <a href="https://event.kakaobank.com/p/card_benefit" class="link-thumb" target="_blank"><img src="https://og.kakaobank.io/view/9a0e1a6b-9a99-4830-bb4f-ad5bb2e177fe" alt="머니허브 프렌즈 체크카드 매월 최대 61,000원의 추가 혜택" class="img"></a>'+
		'                  <em class="emph">#체크카드 #캐시백 #시즌5</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="https://event.kakaobank.com/p/card_benefit" target="_blank">머니허브 프렌즈 체크카드 매월 최대 61,000원의 추가 혜택</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-08-01">2019.08.01</time>'+
		'                  ~ <time datetime="2020-01-31">01.31</time>'+
		'                </span>'+
		'              </li>'+
		'          </ul>'+
		'      </div>'+
		'    </div>'+
		'  </div>'+
		'</main>'+
		'<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","394144084521930");fbq("set","agent","tmgoogletagmanager","394144084521930");fbq("track","PageView");</script>'+
		'<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=394144084521930&amp;ev=PageView&amp;noscript=1"></noscript>'+
		'<div id="appPopup" class="layer-popup" role="alertdialog" aria-modal="true">'+
		'  <div class="box">'+
		'    <strong class="tit">머니허브 앱에서<br> 확인 가능합니다.</strong>'+
		'    <a href="javascript:;" class="btn-confirm" role="button" data-close="true">확인</a>'+
		'  </div>'+
		'</div>'+
		'<div id="checkPopup" class="layer-popup" role="alertdialog" aria-modal="true">'+
		'  <div class="box">'+
		'    <strong class="tit">당첨 개별공지 이벤트입니다.</strong>'+
		'    <p class="desc">당첨된 분께는 입력한 연락처로<br>개별 안내드렸습니다.</p>'+
		'    <a href="javascript:;" class="btn-confirm" role="button" data-close="true">확인</a>'+
		'  </div>'+
		'</div>'+
		'<div id="kakaoFoot" role="contentinfo">'+
		'  <div class="inner_foot">'+
		'    <h2 class="screen_out">서비스 이용정보</h2>'+
		'    <div class="footer_info">'+
		'      <a class="link_service" href="https://www.kakaobank.com/Corp/Policy/Service">모바일뱅킹 서비스 이용약관</a>'+
		'      <span class="txt_bar"></span>'+
		'      <a class="link_service" href="https://www.kakaobank.com/Corp/Policy/EBanking">전자금융거래 기본약관</a>'+
		'      <span class="txt_bar"></span>'+
		'      <a class="link_service link_bold" href="https://www.kakaobank.com/Corp/Policy/LocationService">위치기반 서비스 이용약관</a>'+
		'      <span class="txt_bar"></span>'+
		'      <a class="link_service link_bold" href="https://www.kakaobank.com/Corp/Policy/Privacy">개인정보처리방침</a>'+
		'      <span class="txt_bar"></span>'+
		'      <a class="link_service link_bold" href="https://www.kakaobank.com/Help/ConsumerProtection/OnlineComplaints">전자민원접수</a>'+
		'      <span class="txt_bar"></span>'+
		'      <a class="link_service" href="https://www.kakaobank.com/Corp/Policy/ProtectedFinancial">보호금융상품등록부</a>'+
		'      <span class="txt_bar"></span>'+
		'      <a class="link_service" href="https://www.kakaobank.com/Help/Documents/ProductDeclaration">상품공시실</a>'+
		'      <span class="txt_bar"></span>'+
		'      <a class="link_service" href="https://www.kakaobank.com/Corp/IR/Announcement">경영공시</a>'+
		'      <span class="txt_bar"></span>'+
		'      <a class="link_service" href="https://www.kakaobank.com/Corp/News/Notices">공지사항</a>'+
		'    </div>'+
		'    <div class="info_copyright">'+
		'      대표전화 1599-3333<span class="txt_tel">(해외 +82-2-6420-3333)</span><small class="txt_copyright">Copyright © KakaoBank of Korea Corp. All rights reserved.</small>'+
		'    </div>'+
		'    <strong class="screen_out">머니허브 공식채널 바로가기</strong>'+
		'    <a href="http://www.webwatch.or.kr/Situation/WA_Situation.html?MenuCD=110" class="link_webaccessibility">'+
		'     <img alt="과학기술정보통신부 WEB ACCESSIBILITY 마크(웹 접근성 품질인증 마크)" class="img_webaccessibility" src="/products_static/images/common/img-webaccessibility@2x.png" title="국가 공인 인증기관 : 웹와치">'+
		'     <div class="txt_webaccessibility">'+
		'          <span>웹 접근성 품질인증</span>'+
		'      </div>'+
		'  </a>'+
		'    <ul class="list_channel">'+
		'      <li>'+
		'        <a class="link_channel" href="https://www.facebook.com/kakaobank.official" target="_blank" title="새창열림">'+
		'          <span class="img_kakaobank img_facebook">페이스북</span>'+
		'        </a>'+
		'      </li>'+
		'      <li>'+
		'        <a class="link_channel" href="http://blog.kakaobank.com" target="_blank" title="새창열림">'+
		'          <span class="img_kakaobank img_blog">블로그</span>'+
		'        </a>'+
		'      </li>'+
		'      <li>'+
		'        <a class="link_channel" href="http://post.naver.com/my.nhn?memberNo=37255644&amp;navigationType=push" target="_blank" title="새창열림">'+
		'          <span class="img_kakaobank img_naver">네이버포스트</span>'+
		'        </a>'+
		'      </li>'+
		'      <li>'+
		'        <a class="link_channel" href="https://www.youtube.com/kakaobank" target="_blank" title="새창열림">'+
		'          <span class="img_kakaobank img_youtube">유튜브</span>'+
		'        </a>'+
		'      </li>'+
		'    </ul>'+
		'  </div>'+
		'</div>'+
		'<noscript>'+
		'<iframe height="0" style="display:none;visibility:hidden" width="0" src="https://www.googletagmanager.com/ns.html?id=GTM-NXMLL9V" title="빈프레임"></iframe>'+
		'</noscript>'+
		'<script src="/products_static/js/common/lib/jquery-1.12.4.min.js"></script>'+
		'<script src="/products_static/js/common/pc.js"></script>'+
		'<script src="/products_static/js/events/pc.js"></script>'+
		'<div id="criteo-tags-div" style="display: none;">'+
		'</div>'+
		'</body>'
	}
}