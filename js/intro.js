$ = jQuery;



jQuery( document ).ready(
	function ($) {

			$( '.afsa_create_account' ).click(
				create_account
			);

			$( '.afsa_warpto' ).click(
				function () {
						var d = $( this ).data();

					if (d && typeof d.to !== 'undefined') {
						typeof d.target === 'undefined' ?
								window.location = d.to :
								window.open( d.to, d.target );
					}
				}
			);

	}
);



function create_account() {
	var
			// TODO update ACCOUNT CREATE URL
			u = 'https://dev.afsanalytics.com/manage/account/create.php',
			s = AFSA_site_infos || null;

	if ( ! s) {
		return;
	}

	u += '?sitename=' + encodeURIComponent( s.name )
			+ '&siteurl=' + encodeURIComponent( s.url )
			+ '&siteemail=' + encodeURIComponent( s.email )
			+ '&sitelang=' + encodeURIComponent( s.lng );

	if (s.currency || null) {
		u += '&currency=' + encodeURIComponent( s.currency );
	}

	if (s.desc || null) {
		u += '&sitedes=' + encodeURIComponent( s.desc );
	}

	u +=
			'&cms=' + encodeURIComponent( s.cms )
			+ '&afsa_return_url=' + encodeURIComponent( s.return_url )
			+ '&afsa_state=' + encodeURIComponent( s.state );

	if (s.paa_rc || null) {
		u += '&paa_rc=' + encodeURIComponent( s.paa_rc );
	}

	window.location = u;
}
