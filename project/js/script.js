function isNumberKey(evt){
	var charCode = (evt.which) ? evt.which : evt.keyCode
	return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

$('#counter').countdown('2015/10/27')
.on('update.countdown', function(event){
	$(this).text(event.strftime('%H:%M:%S'));
})
.on('finish.countdown', function(event){
	$('#info-right').css('paddingTop','61px');
	$('#info-right').html('Dow`s Vintage 1997');
	$('#div-promo').hide();
	$('#a-price').html('Compre agora por:');
	$('#b-price').html('R$ 962,00');
	$('#wine-club').html('Sócios ClubeW: R$ 817,70');
	$('#footer').html('*A promoção de 24h foi encerrada no dia 20 de outubro às 24h (horário de Brasília).');
});