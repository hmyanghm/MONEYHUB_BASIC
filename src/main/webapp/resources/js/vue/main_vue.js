var main_vue = main_vue || {}
main_vue ={
	main_head : ()=>{
		return '<head>'+
		'	<meta charset="utf-8">'+
		'	<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
		'	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, viewport-fit=cover">'+
		'	<meta name="description" content="빠르고 저렴하게 해외로 돈을 보낼 수 있는 해외송금서비스, 중국송금, 일본송금, 싱가포르송금, 미국송금, 호주송금">'+
		'	<meta property="og:type" content="website">'+
		'	<meta property="og:title" content="머니허브(MONEYHUB) 해외송금">'+
		'	<meta property="og:description" content="빠르고 저렴하게 해외로 돈을 보낼 수 있는 해외송금서비스">'+
		'	<meta property="og:image" content="https://img.themoin.com/public/img/meta_link_thumbnail.png">'+
		'	<meta property="og:url" content="https://www.themoin.com">'+
		'	<meta name="application-name" content="머니허브(MONEYHUB) 해외송금">'+
		'	<meta name="msapplication-TileColor" content="#ffffff">'+
		'	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">'+
		'	<meta name="theme-color" content="#ffffff">'+
		'	<link rel="canonical" href="https://www.themoin.com">'+
		'	<link rel="manifest" href="https://www.themoin.com/manifest.json">'+
		'	<link rel="alternate" hreflang="ko" href="https://www.themoin.com/ko">'+
		'	<link rel="alternate" hreflang="en" href="https://www.themoin.com/en">'+
		'	<link rel="alternate" hreflang="x-default" href="https://www.themoin.com/">'+
		
		'<!-- Add a banner for Appstore link -->'+
		'	<meta name="apple-itunes-app" content="app-id=1228063143">'+
		'	<title>머니허브(MONEYHUB) 해외송금</title>'+
		
		'<!-- Google Tag Manager -->'+
		'<!--	<script type="text/javascript" async="" src="//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"></script> '+
		'	<script type="text/javascript" async="" src="https://cdn.channel.io/plugin/ch-plugin-web.js" charset="UTF-8"></script>'+
		'	<script async="" crossorigin="anonymous" src="https://edge.fullstory.com/s/fs.js"></script>'+
		'	<script type="text/javascript" async="" src="//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"></script>'+
		'	<script src="https://connect.facebook.net/signals/config/990202451106612?v=2.9.13&amp;r=stable" async=""></script>'+
		'	<script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>'+
		'	<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>'+
		' -->'+
		'	<!-- Bootstrap core CSS -->'+
		'	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">'+
		'	<link href="https://www.themoin.com/moin.bundle.css" rel="stylesheet">'+
		'	<script src="https://cdn.onesignal.com/sdks/OneSignalPageSDKES6.js?v=150710" async=""></script>'+
		'</head>'
	},
	main_body : ()=>{
		return '<body>'+
		'	<div id="root">'+
		'		<div>'+
		'			<nav class="themoin-header">'+
		'				<div>'+
		'					<a class="logo">'+
		'						<img src="https://img.themoin.com/public/img/img-new-moin-logo.svg">'+
		'					</a>'+
		'					<div class="spacer"></div>'+
		'					<a class="menu">'+
		'						<div class="line1"></div>'+
		'						<div class="line2"></div>'+
		'					</a>'+
		'					<ul class="">'+
		'						<li><a id="login">로그인</a></li>'+
		'						<li><a id="join">회원가입</a></li>'+
		'						<li class="mobile">'+
		'							<div class="themoin-language-dropdown" tabindex="0">'+
		'								<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'								<a> 한국어 </a>'+
		'								<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'								<ul>'+
		'									<li>'+
		'										<div class="spacer"></div>'+
		'										<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>'+
		'									</li>'+
		'									<li>'+
		'										<div class="spacer"></div>'+
		'										<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>'+
		'									</li>'+
		'								</ul>'+
		'							</div>'+
		'						</li>'+
		'					</ul>'+
		'					<div class="language">'+
		'						<div class="themoin-language-dropdown" tabindex="0">'+
		'							<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'							<a> 한국어 </a>'+
		'							<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'							<ul>'+
		'								<li>'+
		'									<div class="spacer"></div>'+
		'									<a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a>'+
		'								</li>'+
		'								<li>'+
		'									<div class="spacer"></div>'+
		'									<a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a>'+
		'								</li>'+
		'							</ul>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'			</nav>'+
		
		'			<div class="themoin-landing">'+
		'				<div class="intro">'+
		'					<img src="https://img.themoin.com/public/img/group-446.svg">'+
		'					<div>'+
		'						<div class="badge">&lt;송금한도 향상 기념 이벤트&gt;</div>'+
		'						<div class="newmoin-text-header">건당 300만원 → 550만원</div>'+
		'						<div class="newmoin-text-header">연간 3150만원 → 5500만원</div><br>'+
		'						<p class="newmoin-text-subtitle-grey">송금 한도 향상을 애타게 기다리셨던 분들, 더 많이 송금해보세요<br> '+
		'						"상담하기" 누르면 쿠폰을 받아볼 수 있습니다</p>'+
		'					</div>'+
		'				</div>'+
		'				<div class="themoin-remit-component">'+
		'					<div id="moin-event-amount" class="moin-event-amount">'+
		'						<p class="color-deepgrey"></p>'+
		'					</div>'+
		'					<div class="moin-amount">'+
		'						<div class="money-graph">'+
		'							<h3 class="index-money-title">실제로 받는 금액</h3>'+
		'							<div class="index-money-rank">'+
		'								<div id="rank-moin" class="index-money-moin">'+
		'									<div class="index-money-name">머니허브</div>'+
		'									<div class="index-money-bar">'+
		'										<div style="height: 100%; width: 100%;"></div>'+
		'									</div>'+
		'									<div class="index-money-amount">4,196.92</div>'+
		'									<div class="index-money-unit">EUR</div>'+
		'								</div>'+
		'								<div id="rank-kb" class="index-money-bank">'+
		'									<div class="index-money-name">국민은행</div>'+
		'									<div class="index-money-bar">'+
		'										<div style="height: 100%; width: 50%;"></div>'+
		'									</div>'+
		'									<div class="index-money-amount">4,141.75</div>'+
		'									<div class="index-money-unit">EUR</div>'+
		'								</div>'+
		'								<div id="rank-hana" class="index-money-bank">'+
		'									<div class="index-money-name">하나은행</div>'+
		'									<div class="index-money-bar">'+
		'										<div style="height: 100%; width: 50%;"></div>'+
		'									</div>'+
		'									<div class="index-money-amount">4,141.75</div>'+
		'									<div class="index-money-unit">EUR</div>'+
		'								</div>'+
		'								<div id="rank-woori" class="index-money-bank">'+
		'									<div class="index-money-name">우리은행</div>'+
		'									<div class="index-money-bar">'+
		'										<div style="height: 100%; width: 50%;"></div>'+
		'									</div>'+
		'									<div class="index-money-amount">4,141.75</div>'+
		'									<div class="index-money-unit">EUR</div>'+
		'								</div>'+
		'								<div id="rank-shinhan" class="index-money-bank">'+
		'									<div class="index-money-name">신한은행</div>'+
		'									<div class="index-money-bar">'+
		'										<div style="height: 100%;"></div>'+
		'									</div>'+
		'									<div class="index-money-amount">3,809.81</div>'+
		'									<div class="index-money-unit">EUR</div>'+
		'								</div>'+
		'								<div id="rank-moin-verify" class="index-money-moin-event">'+
		'									<div class="index-money-name">학생인증</div>'+
		'									<div class="index-money-bar">'+
		'										<div style="height: 100%;"></div>'+
		'									</div>'+
		'									<div class="index-money-amount">0</div>'+
		'									<div class="index-money-unit">EUR</div>'+
		'								</div>'+
		'								<div id="rank-moin-event" class="index-money-moin-event">'+
		'									<div class="index-money-name">머니허브할인</div>'+
		'									<div class="index-money-bar">'+
		'										<div style="height: 100%;"></div>'+
		'									</div>'+
		'									<div class="index-money-amount">0</div>'+
		'									<div class="index-money-unit">EUR</div>'+
		'								</div>'+
		'							</div>'+
		'						</div>'+
		'					<div class="form-calculator main">'+
		'							<div class="amount-row">'+
		'								<div class="">'+
		'									<p>내가 보내는 금액 (수수료 포함)</p>'+
		'									<input class="send-amount" type="text" tabindex="0" value="5,500,000">'+
		'								</div>'+
		'								<div class="unit-select disabled" tabindex="0">'+
		'									<p>대한민국</p>'+
		'									<h3>KRW</h3>'+
		'								</div>'+
		'							</div>'+
		'							<div class="amount-row">'+
		'								<div class="">'+
		'									<p>실제로 받는 금액 (직접입력 가능)</p>'+
		'									<input class="receive-amount" type="text" tabindex="0" value="4,196.92">'+
		'								</div>'+
		'								<div class="unit-select receive" tabindex="0">'+
		'									<p>아일랜드</p>'+
		'									<h3>EUR</h3>'+
		'								</div>'+
		'							</div>'+
		'							<button type="submit" class="index-send-btn moin-body">송금하기</button>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'				</div>'+
		'				<div class="themoin-footer">'+
		'					<div> '+
		'						<div class="section top">   '+
		'    						<div class="contact">   '+
		'        						<h3>언어별 고객 센터</h3>   '+
		'        						<h3 class="phone ko">'+
		'									한국어 '+
		'            						<br>'+
		'									02-333-3333 / 070-123-4567'+
		'        						</h3>'+
		'        					<p>'+
		'								<span>평일 : 09:00 ~ 18:00 (주말/공휴일 휴무)</span>'+
		'            					<br>'+
		'								팩스 : 0504-123-4567'+
		'            					<br>'+
		'								이메일 : support@moneyhub.com'+
		'            					<br>'+
		'								카카오톡 플러스친구 : @머니허브 MONEYHUB'+
		'        					</p>'+
		'        					<h3 class="phone np">नेपाली  '+
		'            					<br>'+
		'								070-123-4567'+
		'							</h3>'+
		'   				     <p>'+
		'							<span>Weekday : 12:45 ~ 21:45</span>'+
		'            				<br>'+
		'							email : abc@moneyhub.com'+
		'        				</p>'+
		'        				<h3 class="business">'+
		'							비즈니스 및 제휴 문의'+
		'            				<br>'+
		'							070-123-4567'+
		'						</h3>'+
		'    				</div>'+
		'    				<div class="spacer"></div>'+
		'    				<div class="social">'+
		'        				<h3 class="desktop">Follow Us</h3>'+
		'        				<a href="https://www.facebook.com/moincompany" target="new">'+
		'        					<img src="https://img.themoin.com/public/img/btn-facebook.svg">'+
		'        					<span class="desktop">머니허브 페이스북 페이지</span>'+
		'        				</a>'+
		'        				<a href="http://blog.naver.com/moin_company" target="new">'+
		'        					<img src="https://img.themoin.com/public/img/btn-blog.svg">'+
		'      					  	<span class="desktop">머니허브 네이버 블로그</span>'+
		'        				</a>'+
		'        				<a href="https://plus.kakao.com/home/ne7qlhac" target="new">'+
		'        					<img src="https://img.themoin.com/public/img/btn-kakaotalk.svg">'+
		'        					<span class="desktop">머니허브 카카오톡 플러스</span>'+
		'        				</a>'+
		'    				</div>'+
		'    				<div class="spacer"></div>'+
		'    				<div class="links">'+
		'    					<h3 class="desktop">Company</h3>'+
		'        				<a id="compo" class="caption">회사 소개</a>'+
		'        				<a class="caption">서비스 소개</a>'+
		'        				<a class="caption">이용약관</a>'+
		'        				<a class="caption">개인정보 취급방침 </a>'+
		'        				<a class="caption">F A Q</a>'+
		'        				<a id="event" class="caption">이벤트 페이지</a>'+
		'        				<a class="caption">공지사항 </a>'+
		'    				</div>'+
		'				</div>'+
		'				<div class="section bottom">'+
		'					<div class="company">'+
		'						<img src="https://img.themoin.com/public/img/footer-logo-2.svg">'+
		'						<p>'+
		'							(주)머니허브 | 대표이사 : 양현미 | 사업자등록번호 : 123-45-67890'+
		'							<br>'+
		'							소액해외송금업 등록번호 : 2019-12'+
		'							<br>'+
		'							주소 : 서울시 마포구 백범로 23 구프라자 3층'+
		'							<br>'+
		'							© 2019 MONEYHUB, Inc. All Rights Reserved.'+
		'						</p>'+
		'					</div>'+
		'					<div class="spacer">'+
		'				</div>'+
		'			</div>'+
		'		</div>'+
		'		<div style="display:none"></div>'+
		'	</div>'+
		'</div>'+
		'</body>'
	}
}