"use strict"
var compo = compo || {}
compo =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, compo_vue_js, cookie_js, main_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		compo_vue_js = js + '/vue/compo_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		cookie_js = js + '/cmm/cookie.js'
	}
	let onCreate =x=>{
		alert('여기 들어와야하는데ㅠㅠcompoㅠㅠ')
		init()
		$.when(
			$.getScript(compo_vue_js),
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
		.html(compo_vue.compo_head())
		if( x === 'compo' ){
			alert('compo 들어옴!')
			compo()
		}
		else{
			alert('compo 실패ㅠㅠ')
			main()
		}
	}
	
	let compo =()=>{
		$('body')
		.html(compo_vue.compo_body())
	}

	let main =()=>{
		$('body')
		.html(main_vue.main_body())
	}
	
	return { onCreate }
})()