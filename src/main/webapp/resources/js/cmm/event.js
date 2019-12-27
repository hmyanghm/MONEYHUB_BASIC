"use strict"
var event = event || {}
event =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, event_vue_js, cookie_js, main_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		event_vue_js = js + '/vue/event_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		cookie_js = js + '/cmm/cookie.js'
	}
	let onCreate =x=>{
		init()
		$.when(
			$.getScript(event_vue_js),
			$.getScript(main_vue_js),
			$.getScript(cookie_js)
		)
		.done(()=>{
			setContentView(x)
			
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =x=>{
		$('head')
		.html(event_vue.event_head())
		if( x === 'event' ){
			alert('이벤트도 여기로 들어와야해ㅠㅠ제발')
			event()
		}
		else{
			alert('이벤트 실패..ㅠㅠ')
			main()
		}
	}
	
	let event =()=>{
		alert('이벤트 들어온건데 맞지? 이벤트 바디말야')
		$('body')
		.html(event_vue.event_body())
		
	}
	
	return { onCreate }
})()