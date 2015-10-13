$( function ( ) {
	//リロード時にトップに戻す
	$( "html, body" ).animate ( { scrollTop : 0 }, 1 );
	
	//スムーススクロール
	$( "a[href^=#]" ).click ( function ( ) {
		$( "html, body" ).animate ( {
			scrollTop : $( $( this ).attr( "href" ) ).offset( ).top,
		}, 500, "swing" );
		return false;
	});
			
	//トップの扉の開閉
	var headerChange = function ( ) {
		var pos = $( window ).scrollTop ( ); //スクロールバーの位置を取得
		
		//ウィンドウサイズによって開閉とヘッダーの透過のタイミングを変更
		if( window.matchMedia ( "( min-width : 1025px )" ).matches ) {
			var close = 615, transmit = 720, h = 100, m = 30;
		} else if( window.matchMedia ( "( min-width : 831px )" ).matches ) {
			var close = 530, transmit = 620, h = 80, m = 25;
		} else if( window.matchMedia ( "( min-width : 661px )" ).matches ) {
			var close = 505, transmit = 600, h = 80, m = 25;
		} else if( window.matchMedia ( "( min-width : 581px )" ).matches ) {
			var close = 450, transmit = 550, h = 70, m = 20;
		} else {
			var close = 335, transmit = 500, h = 60, m = 20;
		}
		
		if ( pos >= transmit ) {
			$( "header" ).css ( {
				background : "rgba( 255, 255, 255, "+.8+" )",
				height : h
			});
			$( "nav ul" ).animate ( {
				marginTop : m
			}, 500 );
		} else if ( pos >= close ) {
			$( "header, main" ).css ( {
				background : "white"
			});
			$( "header" ).css ( {
				height : 100
			});
		} else {
			$( "header" ).css ( {
				background : "url(./img/bg_header.png) no-repeat",
				backgroundPosition : "center top",
				height : 205
			});
			$( "main" ).css ( {
				background : "url(./img/bg_main_top.png) no-repeat",
				backgroundPosition : "center top"
			});
		}
	};
	
	$( window ).scroll ( headerChange ); //スクロールバーが操作されたときに実行
	$( "html, body" ).bind ( "touchmove", headerChange ); //スマホでタッチしたまま動かしたときに実行
	
	//トップへ戻るボタン
	$( ".pagetop" ).click ( function ( ) {
		$( "html, body" ).animate( {
			scrollTop: 0
		}, "slow" );
	});
});