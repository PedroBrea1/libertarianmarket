$(function(){

			$('#electronics').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#communication').show(500);
					$('#cameras').show(500);
					$('#tv').show(500);
					$('#homeaudio').show(500);
					$('#portableelectronics').show(500);
					$('#accesories').show(500);
					$('#audiovisual').show(500);
					$('#mobileelectronics').show(500);
					$('#musicalinstruments').show(500);
					//De elemento 2
					$('#kidsandtoys').removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
				}
			});

			$('#communication').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#mobile').show(500);
					$('#smartwatches').show(500);
					$('#mobileaccesories').show(500);
					$('#twowayradios').show(500);
					$('#phones').show(500);
					$('#seeall').show(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De tv
					$('#tvs').hide(500);
					$('#settopboxes').hide(500);
					$('#blurayplayers').hide(500);
					$('#mediastreamingdevices').hide(500);
					$('#projectors').hide(500);
					$('#seeall3').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#cameras').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#digitalcameras').show(500);
					$('#camerasaccesories').show(500);
					$('#drones').show(500);
					$('#cameralenses').show(500);
					$('#camcorders').show(500);
					$('#seeall2').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De tv
					$('#tvs').hide(500);
					$('#settopboxes').hide(500);
					$('#blurayplayers').hide(500);
					$('#mediastreamingdevices').hide(500);
					$('#projectors').hide(500);
					$('#seeall3').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#tv').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#tvs').hide(500);
					$('#settopboxes').hide(500);
					$('#blurayplayers').hide(500);
					$('#mediastreamingdevices').hide(500);
					$('#projectors').hide(500);
					$('#seeall3').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#tvs').show(500);
					$('#settopboxes').show(500);
					$('#blurayplayers').show(500);
					$('#mediastreamingdevices').show(500);
					$('#projectors').show(500);
					$('#seeall3').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#homeaudio').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#headphones').show(500);
					$('#speakers').show(500);
					$('#radioplayers').show(500);
					$('#hometheater').show(500);
					$('#amplifier').show(500);
					$('#seeall4').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#portableelectronics').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#portablespeaker').show(500);
					$('#ebookreader').show(500);
					$('#pdrecorders').show(500);
					$('#pcdplayers').show(500);
					$('#ebaccesories').show(500);
					$('#seeall5').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#accesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#homesecurity').show(500);
					$('#homeautomation').show(500);
					$('#securitysystems').show(500);
					$('#batteries').show(500);
					$('#remotecontrol').show(500);
					$('#seeall6').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#audiovisual').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#audioaccesories').show(500);
					$('#studioequipment').show(500);
					$('#avcables').show(500);
					$('#seeall7').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#mobileelectronics').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#gpsdevices').show(500);
					$('#gpsaccesories').show(500);
					$('#mp3media').show(500);
					$('#seeall8').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#musicalinstruments').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#musickeyboards').show(500);
					$('#guitars').show(500);
					$('#drums').show(500);
					$('#iaccesories').show(500);
					$('#violins').show(500);
					$('#seeall9').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
				}
			});



































		$('#kidsandtoys').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#carriersandseats').show(500);
					$('#toysandgames').show(500);
					$('#babycare').show(500);
					$('#schoolsupplies').show(500);
					//De elemento 1
					$('#electronics').removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
				}
			});

			$('#carriersandseats').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#strollers').hide(500);
					$('#babycarseats').hide(500);
					$('#babycarriers').hide(500);
					$('#seeall10').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#strollers').show(500);
					$('#babycarseats').show(500);
					$('#babycarriers').show(500);
					$('#seeall10').show(500);
					//De toys and games
					$('#oa').hide(500);
					$('#educationaltoys').hide(500);
					$('#dolls').hide(500);
					$('#babytoys').hide(500);
					$('#buildingsm').hide(500);
					$('#seeall11').hide(500);
					//De babycare
					$('#babyfurniture').hide(500);
					$('#babyaccesories').hide(500);
					$('#nursingandfeeding').hide(500);
					$('#bathandpotty').hide(500);
					$('#babbybedding').hide(500);
					$('#seeall12').hide(500);
					//De schoolsupplies
					$('#schoolstationery').hide(500);
					$('#seeall13').hide(500);
				}
			});

			$('#toysandgames').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#oa').hide(500);
					$('#educationaltoys').hide(500);
					$('#dolls').hide(500);
					$('#babytoys').hide(500);
					$('#buildingsm').hide(500);
					$('#seeall11').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#oa').show(500);
					$('#educationaltoys').show(500);
					$('#dolls').show(500);
					$('#babytoys').show(500);
					$('#buildingsm').show(500);
					$('#seeall11').show(500);
					//De carriers and seats
					$('#strollers').hide(500);
					$('#babycarseats').hide(500);
					$('#babycarriers').hide(500);
					$('#seeall10').hide(500);
					//De babycare
					$('#babyfurniture').hide(500);
					$('#babyaccesories').hide(500);
					$('#nursingandfeeding').hide(500);
					$('#bathandpotty').hide(500);
					$('#babbybedding').hide(500);
					$('#seeall12').hide(500);
					//De schoolsupplies
					$('#schoolstationery').hide(500);
					$('#seeall13').hide(500);
				}
			});

			$('#babycare').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#babyfurniture').hide(500);
					$('#babyaccesories').hide(500);
					$('#nursingandfeeding').hide(500);
					$('#bathandpotty').hide(500);
					$('#babbybedding').hide(500);
					$('#seeall12').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#babyfurniture').show(500);
					$('#babyaccesories').show(500);
					$('#nursingandfeeding').show(500);
					$('#bathandpotty').show(500);
					$('#babbybedding').show(500);
					$('#seeall12').show(500);
					//De carriers and seats
					$('#strollers').hide(500);
					$('#babycarseats').hide(500);
					$('#babycarriers').hide(500);
					$('#seeall10').hide(500);
					//De toys and games
					$('#oa').hide(500);
					$('#educationaltoys').hide(500);
					$('#dolls').hide(500);
					$('#babytoys').hide(500);
					$('#buildingsm').hide(500);
					$('#seeall11').hide(500);
					//De schoolsupplies
					$('#schoolstationery').hide(500);
					$('#seeall13').hide(500);
				}
				
			});

			$('#schoolsupplies').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#schoolstationery').hide(500);
					$('#seeall13').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#schoolstationery').show(500);
					$('#seeall13').show(500);
					//De carriers and seats
					$('#strollers').hide(500);
					$('#babycarseats').hide(500);
					$('#babycarriers').hide(500);
					$('#seeall10').hide(500);
					//De toys and games
					$('#oa').hide(500);
					$('#educationaltoys').hide(500);
					$('#dolls').hide(500);
					$('#babytoys').hide(500);
					$('#buildingsm').hide(500);
					$('#seeall11').hide(500);
					//De babycare
					$('#babyfurniture').hide(500);
					$('#babyaccesories').hide(500);
					$('#nursingandfeeding').hide(500);
					$('#bathandpotty').hide(500);
					$('#babbybedding').hide(500);
					$('#seeall12').hide(500);
				}
			});

			




			






























			$('#homeandgarden').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					
				}
				else{
					$(this).addClass('activado');
					$('#homeappliances').show(500);
					$('#petsupplies').show(500);
					$('#kitchenaccesories').show(500);
					$('#furniture').show(500);
					$('#toolsandhardware').show(500);
					//De elemento 1
					
				}
			});

			$('#homeappliances').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#vacuums').hide(500);
					$('#refrigerators').hide(500);
					$('#airconditioners').hide(500);
					$('#washingm').hide(500);
					$('#ovens').hide(500);
					$('#seeall14').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#vacuums').show(500);
					$('#refrigerators').show(500);
					$('#airconditioners').show(500);
					$('#washingm').show(500);
					$('#ovens').show(500);
					$('#seeall14').show(500);
					//De petsupplies
					$('#dogsupplies').hide(500);
					$('#catsupplies').hide(500);
					$('#sasupplies').hide(500);
					$('#birdsupplies').hide(500);
					$('#fishsupplies').hide(500);
					$('#seeall15').hide(500);
					//De kitchenaccesories
					$('#kitchensupplies').hide(500);
					$('#sinksandtaps').hide(500);
					$('#cookware').hide(500);
					$('#dinnerware').hide(500);
					$('#bbqa').hide(500);
					$('#seeall16').hide(500);
					//De furniture
					$('#shelves').hide(500);
					$('#mattresses').hide(500);
					$('#sofa').hide(500);
					$('#seats').hide(500);
					$('#tables').hide(500);
					$('#seeall17').hide(500);
					//De toolsandhardware
					$('#garden').hide(500);
					$('#powertools').hide(500);
					$('#generators').hide(500);
					$('#htools').hide(500);
					$('#measuring').hide(500);
					$('#seeall18').hide(500);
				}
			});

			$('#petsupplies').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#dogsupplies').hide(500);
					$('#catsupplies').hide(500);
					$('#sasupplies').hide(500);
					$('#birdsupplies').hide(500);
					$('#fishsupplies').hide(500);
					$('#seeall15').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#dogsupplies').show(500);
					$('#catsupplies').show(500);
					$('#sasupplies').show(500);
					$('#birdsupplies').show(500);
					$('#fishsupplies').show(500);
					$('#seeall15').show(500);
					//De homeappliances
					$('#vacuums').hide(500);
					$('#refrigerators').hide(500);
					$('#airconditioners').hide(500);
					$('#washingm').hide(500);
					$('#ovens').hide(500);
					$('#seeall14').hide(500);
					//De kitchenaccesories
					$('#kitchensupplies').hide(500);
					$('#sinksandtaps').hide(500);
					$('#cookware').hide(500);
					$('#dinnerware').hide(500);
					$('#bbqa').hide(500);
					$('#seeall16').hide(500);
					//De furniture
					$('#shelves').hide(500);
					$('#mattresses').hide(500);
					$('#sofa').hide(500);
					$('#seats').hide(500);
					$('#tables').hide(500);
					$('#seeall17').hide(500);
					//De toolsandhardware
					$('#garden').hide(500);
					$('#powertools').hide(500);
					$('#generators').hide(500);
					$('#htools').hide(500);
					$('#measuring').hide(500);
					$('#seeall18').hide(500);
				}
			});

			$('#kitchenaccesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#kitchensupplies').hide(500);
					$('#sinksandtaps').hide(500);
					$('#cookware').hide(500);
					$('#dinnerware').hide(500);
					$('#bbqa').hide(500);
					$('#seeall16').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#kitchensupplies').show(500);
					$('#sinksandtaps').show(500);
					$('#cookware').show(500);
					$('#dinnerware').show(500);
					$('#bbqa').show(500);
					$('#seeall16').show(500);
					//De homeappliances
					$('#vacuums').hide(500);
					$('#refrigerators').hide(500);
					$('#airconditioners').hide(500);
					$('#washingm').hide(500);
					$('#ovens').hide(500);
					$('#seeall14').hide(500);
					//De petsupplies
					$('#dogsupplies').hide(500);
					$('#catsupplies').hide(500);
					$('#sasupplies').hide(500);
					$('#birdsupplies').hide(500);
					$('#fishsupplies').hide(500);
					$('#seeall15').hide(500);
					//De furniture
					$('#shelves').hide(500);
					$('#mattresses').hide(500);
					$('#sofa').hide(500);
					$('#seats').hide(500);
					$('#tables').hide(500);
					$('#seeall17').hide(500);
					//De toolsandhardware
					$('#garden').hide(500);
					$('#powertools').hide(500);
					$('#generators').hide(500);
					$('#htools').hide(500);
					$('#measuring').hide(500);
					$('#seeall18').hide(500);
				}
			});

			$('#furniture').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#shelves').hide(500);
					$('#mattresses').hide(500);
					$('#sofa').hide(500);
					$('#seats').hide(500);
					$('#tables').hide(500);
					$('#seeall17').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#shelves').show(500);
					$('#mattresses').show(500);
					$('#sofa').show(500);
					$('#seats').show(500);
					$('#tables').show(500);
					$('#seeall17').show(500);
					//De homeappliances
					$('#vacuums').hide(500);
					$('#refrigerators').hide(500);
					$('#airconditioners').hide(500);
					$('#washingm').hide(500);
					$('#ovens').hide(500);
					$('#seeall14').hide(500);
					//De petsupplies
					$('#dogsupplies').hide(500);
					$('#catsupplies').hide(500);
					$('#sasupplies').hide(500);
					$('#birdsupplies').hide(500);
					$('#fishsupplies').hide(500);
					$('#seeall15').hide(500);
					//De kitchenaccesories
					$('#kitchensupplies').hide(500);
					$('#sinksandtaps').hide(500);
					$('#cookware').hide(500);
					$('#dinnerware').hide(500);
					$('#bbqa').hide(500);
					$('#seeall16').hide(500);
					//De toolsandhardware
					$('#garden').hide(500);
					$('#powertools').hide(500);
					$('#generators').hide(500);
					$('#htools').hide(500);
					$('#measuring').hide(500);
					$('#seeall18').hide(500);
				}
			});


			$('#toolsandhardware').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#garden').hide(500);
					$('#powertools').hide(500);
					$('#generators').hide(500);
					$('#htools').hide(500);
					$('#measuring').hide(500);
					$('#seeall18').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#garden').show(500);
					$('#powertools').show(500);
					$('#generators').show(500);
					$('#htools').show(500);
					$('#measuring').show(500);
					$('#seeall18').show(500);
					//Dehomeappliances
					$('#vacuums').hide(500);
					$('#refrigerators').hide(500);
					$('#airconditioners').hide(500);
					$('#washingm').hide(500);
					$('#ovens').hide(500);
					$('#seeall14').hide(500);
					//De petsupplies
					$('#dogsupplies').hide(500);
					$('#catsupplies').hide(500);
					$('#sasupplies').hide(500);
					$('#birdsupplies').hide(500);
					$('#fishsupplies').hide(500);
					$('#seeall15').hide(500);
					//De kitchenaccesories
					$('#kitchensupplies').hide(500);
					$('#sinksandtaps').hide(500);
					$('#cookware').hide(500);
					$('#dinnerware').hide(500);
					$('#bbqa').hide(500);
					$('#seeall16').hide(500);
					//De furniture
					$('#shelves').hide(500);
					$('#mattresses').hide(500);
					$('#sofa').hide(500);
					$('#seats').hide(500);
					$('#tables').hide(500);
					$('#seeall17').hide(500);
				}
			});















































			$('#booksanddvds').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#books').show(500);
					$('#movies').show(500);
					$('#music').show(500);
					$('#comicsandmagazines').show(500);
					//De elemento 1
					
				}
			});

			$('#books').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#miscbooks').hide(500);
					$('#childbooks').hide(500);
					$('#cookbooks').hide(500);
					$('#abooks').hide(500);
					$('#cbooks').hide(500);
					$('#seeall26').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#miscbooks').show(500);
					$('#childbooks').show(500);
					$('#cookbooks').show(500);
					$('#abooks').show(500);
					$('#cbooks').show(500);
					$('#seeall26').show(500);
					//movies
					$('#miscmovies').hide(500);
					$('#tseries').hide(500);
					$('#amovies').hide(500);
					$('#cmovies').hide(500);
					$('#seeall27').hide(500);
					//music
					$('#mmusic').hide(500);
					$('#cmusic').hide(500);
					$('#rmusic').hide(500);
					$('#vrecords').hide(500);
					$('#hhmusic').hide(500);
					$('#seeall28').hide(500);
					//comicsandmagazines
					$('#magazines').hide(500);
					$('#comicbooks').hide(500);
					$('#seeall29').hide(500);					
				}
			});

			$('#movies').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#miscmovies').hide(500);
					$('#tseries').hide(500);
					$('#amovies').hide(500);
					$('#cmovies').hide(500);
					$('#seeall27').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#miscmovies').show(500);
					$('#tseries').show(500);
					$('#amovies').show(500);
					$('#cmovies').show(500);
					$('#seeall27').show(500);
					//books
					$('#miscbooks').hide(500);
					$('#childbooks').hide(500);
					$('#cookbooks').hide(500);
					$('#abooks').hide(500);
					$('#cbooks').hide(500);
					$('#seeall26').hide(500);
					//music
					$('#mmusic').hide(500);
					$('#cmusic').hide(500);
					$('#rmusic').hide(500);
					$('#vrecords').hide(500);
					$('#hhmusic').hide(500);
					$('#seeall28').hide(500);
					//comicsandmagazines
					$('#magazines').hide(500);
					$('#comicbooks').hide(500);
					$('#seeall29').hide(500);					
				}
			});

			$('#music').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#mmusic').hide(500);
					$('#cmusic').hide(500);
					$('#rmusic').hide(500);
					$('#vrecords').hide(500);
					$('#hhmusic').hide(500);
					$('#seeall28').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#mmusic').show(500);
					$('#cmusic').show(500);
					$('#rmusic').show(500);
					$('#vrecords').show(500);
					$('#hhmusic').show(500);
					$('#seeall28').show(500);
					//books
					$('#miscbooks').hide(500);
					$('#childbooks').hide(500);
					$('#cookbooks').hide(500);
					$('#abooks').hide(500);
					$('#cbooks').hide(500);
					$('#seeall26').hide(500);
					//movies
					$('#miscmovies').hide(500);
					$('#tseries').hide(500);
					$('#amovies').hide(500);
					$('#cmovies').hide(500);
					$('#seeall27').hide(500);
					//comicsandmagazines
					$('#magazines').hide(500);
					$('#comicbooks').hide(500);
					$('#seeall29').hide(500);					
				}
			});

			$('#comicsandmagazines').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#magazines').hide(500);
					$('#comicbooks').hide(500);
					$('#seeall29').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#magazines').show(500);
					$('#comicbooks').show(500);
					$('#seeall29').show(500);
					//books
					$('#miscbooks').hide(500);
					$('#childbooks').hide(500);
					$('#cookbooks').hide(500);
					$('#abooks').hide(500);
					$('#cbooks').hide(500);
					$('#seeall26').hide(500);
					//movies
					$('#miscmovies').hide(500);
					$('#tseries').hide(500);
					$('#amovies').hide(500);
					$('#cmovies').hide(500);
					$('#seeall27').hide(500);
					//music
					$('#mmusic').hide(500);
					$('#cmusic').hide(500);
					$('#rmusic').hide(500);
					$('#vrecords').hide(500);
					$('#hhmusic').hide(500);
					$('#seeall28').hide(500);
				}
			});









			$('#computers').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#hardware').show(500);
					$('#inputdevices').show(500);
					$('#videogames').show(500);
					$('#software').show(500);
					$('#computeraccesories').show(500);
					//De elemento 1
					
				}
			});

			$('#hardware').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#tablet').hide(500);
					$('#laptops').hide(500);
					$('#printers').hide(500);
					$('#monitors').hide(500);
					$('#desktops').hide(500);
					$('#seeall30').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#tablet').show(500);
					$('#laptops').show(500);
					$('#printers').show(500);
					$('#monitors').show(500);
					$('#desktops').show(500);
					$('#seeall30').show(500);
					//inputdevices
					$('#keyboards').hide(500);
					$('#mtb').hide(500);
					$('#microphones').hide(500);
					$('#gtablets').hide(500);
					$('#webcameras').hide(500);
					$('#seeall31').hide(500);
					//videogames
					$('#gconsoles').hide(500);
					$('#vreality').hide(500);
					$('#playstationgames').hide(500);
					$('#gamecontrollers').hide(500);
					$('#gamekeys').hide(500);
					$('#seeall32').hide(500);
					//software
					$('#bsoftware').hide(500);
					$('#santivirus').hide(500);
					$('#operatingsystems').hide(500);
					$('#gmultimedia').hide(500);
					$('#utilities').hide(500);
					$('#seeall33').hide(500);
					//computeraccesories
					$('#tabletaccesories').hide(500);
					$('#lbags').hide(500);
					$('#laccesories').hide(500);
					$('#computerspeakers').hide(500);
					$('#swarranty').hide(500);
					$('#seeall34').hide(500);
				}
			});

			$('#inputdevices').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#keyboards').hide(500);
					$('#mtb').hide(500);
					$('#microphones').hide(500);
					$('#gtablets').hide(500);
					$('#webcameras').hide(500);
					$('#seeall31').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#keyboards').show(500);
					$('#mtb').show(500);
					$('#microphones').show(500);
					$('#gtablets').show(500);
					$('#webcameras').show(500);
					$('#seeall31').show(500);
					//hardware
					$('#tablet').hide(500);
					$('#laptops').hide(500);
					$('#printers').hide(500);
					$('#monitors').hide(500);
					$('#desktops').hide(500);
					$('#seeall30').hide(500);
					//videogames
					$('#gconsoles').hide(500);
					$('#vreality').hide(500);
					$('#playstationgames').hide(500);
					$('#gamecontrollers').hide(500);
					$('#gamekeys').hide(500);
					$('#seeall32').hide(500);
					//software
					$('#bsoftware').hide(500);
					$('#santivirus').hide(500);
					$('#operatingsystems').hide(500);
					$('#gmultimedia').hide(500);
					$('#utilities').hide(500);
					$('#seeall33').hide(500);
					//computeraccesories
					$('#tabletaccesories').hide(500);
					$('#lbags').hide(500);
					$('#laccesories').hide(500);
					$('#computerspeakers').hide(500);
					$('#swarranty').hide(500);
					$('#seeall34').hide(500);
				}
			});

			$('#videogames').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#gconsoles').hide(500);
					$('#vreality').hide(500);
					$('#playstationgames').hide(500);
					$('#gamecontrollers').hide(500);
					$('#gamekeys').hide(500);
					$('#seeall32').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#gconsoles').show(500);
					$('#vreality').show(500);
					$('#playstationgames').show(500);
					$('#gamecontrollers').show(500);
					$('#gamekeys').show(500);
					$('#seeall32').show(500);
					//hardware
					$('#tablet').hide(500);
					$('#laptops').hide(500);
					$('#printers').hide(500);
					$('#monitors').hide(500);
					$('#desktops').hide(500);
					$('#seeall30').hide(500);
					//inputdevices
					$('#keyboards').hide(500);
					$('#mtb').hide(500);
					$('#microphones').hide(500);
					$('#gtablets').hide(500);
					$('#webcameras').hide(500);
					$('#seeall31').hide(500);
					//software
					$('#bsoftware').hide(500);
					$('#santivirus').hide(500);
					$('#operatingsystems').hide(500);
					$('#gmultimedia').hide(500);
					$('#utilities').hide(500);
					$('#seeall33').hide(500);
					//computeraccesories
					$('#tabletaccesories').hide(500);
					$('#lbags').hide(500);
					$('#laccesories').hide(500);
					$('#computerspeakers').hide(500);
					$('#swarranty').hide(500);
					$('#seeall34').hide(500);
				}
			});

			$('#software').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#bsoftware').hide(500);
					$('#santivirus').hide(500);
					$('#operatingsystems').hide(500);
					$('#gmultimedia').hide(500);
					$('#utilities').hide(500);
					$('#seeall33').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#bsoftware').show(500);
					$('#santivirus').show(500);
					$('#operatingsystems').show(500);
					$('#gmultimedia').show(500);
					$('#utilities').show(500);
					$('#seeall33').show(500);
					//hardware
					$('#tablet').hide(500);
					$('#laptops').hide(500);
					$('#printers').hide(500);
					$('#monitors').hide(500);
					$('#desktops').hide(500);
					$('#seeall30').hide(500);
					//inputdevices
					$('#keyboards').hide(500);
					$('#mtb').hide(500);
					$('#microphones').hide(500);
					$('#gtablets').hide(500);
					$('#webcameras').hide(500);
					$('#seeall31').hide(500);
					//videogames
					$('#gconsoles').hide(500);
					$('#vreality').hide(500);
					$('#playstationgames').hide(500);
					$('#gamecontrollers').hide(500);
					$('#gamekeys').hide(500);
					$('#seeall32').hide(500);
					//computeraccesories
					$('#tabletaccesories').hide(500);
					$('#lbags').hide(500);
					$('#laccesories').hide(500);
					$('#computerspeakers').hide(500);
					$('#swarranty').hide(500);
					$('#seeall34').hide(500);
				}
			});

			$('#computeraccesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#tabletaccesories').hide(500);
					$('#lbags').hide(500);
					$('#laccesories').hide(500);
					$('#computerspeakers').hide(500);
					$('#swarranty').hide(500);
					$('#seeall34').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#tabletaccesories').show(500);
					$('#lbags').show(500);
					$('#laccesories').show(500);
					$('#computerspeakers').show(500);
					$('#swarranty').show(500);
					$('#seeall34').show(500);
					//hardware
					$('#tablet').hide(500);
					$('#laptops').hide(500);
					$('#printers').hide(500);
					$('#monitors').hide(500);
					$('#desktops').hide(500);
					$('#seeall30').hide(500);
					//inputdevices
					$('#keyboards').hide(500);
					$('#mtb').hide(500);
					$('#microphones').hide(500);
					$('#gtablets').hide(500);
					$('#webcameras').hide(500);
					$('#seeall31').hide(500);
					//videogames
					$('#gconsoles').hide(500);
					$('#vreality').hide(500);
					$('#playstationgames').hide(500);
					$('#gamecontrollers').hide(500);
					$('#gamekeys').hide(500);
					$('#seeall32').hide(500);
					//software
					$('#bsoftware').hide(500);
					$('#santivirus').hide(500);
					$('#operatingsystems').hide(500);
					$('#gmultimedia').hide(500);
					$('#utilities').hide(500);
					$('#seeall33').hide(500);
				}
			});

















































			$('#carsandaccesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#autoparts').show(500);
					$('#caccesories').show(500);
					$('#caraudio').show(500);
					$('#motorbikesandquads').show(500);
					$('#motorcars').show(500);
					//De elemento 1
					
				}
			});

			$('#autoparts').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#aeparts').hide(500);
					$('#4wdacc').hide(500);
					$('#carseats').hide(500);
					$('#carsuspensions').hide(500);
					$('#wandt').hide(500);
					$('#seeall39').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#aeparts').show(500);
					$('#4wdacc').show(500);
					$('#carseats').show(500);
					$('#carsuspensions').show(500);
					$('#wandt').show(500);
					$('#seeall39').show(500);
					//caccesories
					$('#eca').hide(500);
					$('#cr').hide(500);
					$('#ica').hide(500);
					$('#ccs').hide(500);
					$('#ccp').hide(500);
					$('#seeall40').hide(500);
					//caraudio
					$('#cm').hide(500);
					$('#cs').hide(500);
					$('#ca').hide(500);
					$('#seeall41').hide(500);
					//motorbikesandquads
					$('#motorbik').hide(500);
					$('#motorbikes').hide(500);
					$('#seeall42').hide(500);
					//motorcars
					$('#newcars').hide(500);
					$('#seeall43').hide(500);
				}
			});

			$('#caccesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#eca').hide(500);
					$('#cr').hide(500);
					$('#ica').hide(500);
					$('#ccs').hide(500);
					$('#ccp').hide(500);
					$('#seeall40').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#eca').show(500);
					$('#cr').show(500);
					$('#ica').show(500);
					$('#ccs').show(500);
					$('#ccp').show(500);
					$('#seeall40').show(500);
					//autoparts
					$('#aeparts').hide(500);
					$('#4wdacc').hide(500);
					$('#carseats').hide(500);
					$('#carsuspensions').hide(500);
					$('#wandt').hide(500);
					$('#seeall39').hide(500);
					//caraudio
					$('#cm').hide(500);
					$('#cs').hide(500);
					$('#ca').hide(500);
					$('#seeall41').hide(500);
					//motorbikesandquads
					$('#motorbik').hide(500);
					$('#motorbikes').hide(500);
					$('#seeall42').hide(500);
					//motorcars
					$('#newcars').hide(500);
					$('#seeall43').hide(500);
				}
			});

			$('#caraudio').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#cm').hide(500);
					$('#cs').hide(500);
					$('#ca').hide(500);
					$('#seeall41').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#cm').show(500);
					$('#cs').show(500);
					$('#ca').show(500);
					$('#seeall41').show(500);
					//autoparts
					$('#aeparts').hide(500);
					$('#4wdacc').hide(500);
					$('#carseats').hide(500);
					$('#carsuspensions').hide(500);
					$('#wandt').hide(500);
					$('#seeall39').hide(500);
					//caccesories
					$('#eca').hide(500);
					$('#cr').hide(500);
					$('#ica').hide(500);
					$('#ccs').hide(500);
					$('#ccp').hide(500);
					$('#seeall40').hide(500);
					//motorbikesandquads
					$('#motorbik').hide(500);
					$('#motorbikes').hide(500);
					$('#seeall42').hide(500);
					//motorcars
					$('#newcars').hide(500);
					$('#seeall43').hide(500);
				}
			});

			$('#motorbikesandquads').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#motorbik').hide(500);
					$('#motorbikes').hide(500);
					$('#seeall42').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#motorbik').show(500);
					$('#motorbikes').show(500);
					$('#seeall42').show(500);
					//autoparts
					$('#aeparts').hide(500);
					$('#4wdacc').hide(500);
					$('#carseats').hide(500);
					$('#carsuspensions').hide(500);
					$('#wandt').hide(500);
					$('#seeall39').hide(500);
					//caccesories
					$('#eca').hide(500);
					$('#cr').hide(500);
					$('#ica').hide(500);
					$('#ccs').hide(500);
					$('#ccp').hide(500);
					$('#seeall40').hide(500);
					//caraudio
					$('#cm').hide(500);
					$('#cs').hide(500);
					$('#ca').hide(500);
					$('#seeall41').hide(500);
					//motorcars
					$('#newcars').hide(500);
					$('#seeall43').hide(500);
				}
			});


			$('#motorcars').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#newcars').hide(500);
					$('#seeall43').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#newcars').show(500);
					$('#seeall43').show(500);
					//autoparts
					$('#aeparts').hide(500);
					$('#4wdacc').hide(500);
					$('#carseats').hide(500);
					$('#carsuspensions').hide(500);
					$('#wandt').hide(500);
					$('#seeall39').hide(500);
					//caccesories
					$('#eca').hide(500);
					$('#cr').hide(500);
					$('#ica').hide(500);
					$('#ccs').hide(500);
					$('#ccp').hide(500);
					$('#seeall40').hide(500);
					//caraudio
					$('#cm').hide(500);
					$('#cs').hide(500);
					$('#ca').hide(500);
					$('#seeall41').hide(500);
					//motorbikesandquads
					$('#motorbik').hide(500);
					$('#motorbikes').hide(500);
					$('#seeall42').hide(500);					
				}
			});











			$('#fashion').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#clothingaccesories').show(500);
					$('#shoes').show(500);
					$('#womensclothing').show(500);
					$('#mensclothing').show(500);
					$('#womenlingerie').show(500);
					//De elemento 1
					
				}
			});

			$('#clothingaccesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#watches').hide(500);
					$('#bags').hide(500);
					$('#sunglasses').hide(500);
					$('#costumes').hide(500);
					$('#wallets').hide(500);
					$('#seeall44').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#watches').show(500);
					$('#bags').show(500);
					$('#sunglasses').show(500);
					$('#costumes').show(500);
					$('#wallets').show(500);
					$('#seeall44').show(500);
					//shoes
					$('#mashoes').hide(500);
					$('#washoes').hide(500);
					$('#wboots').hide(500);
					$('#mcashualshoes').hide(500);
					$('#sandals').hide(500);
					$('#seeall45').hide(500);
					//womensclothing
					$('#fitnessclothing').hide(500);
					$('#dresses').hide(500);
					$('#swimwear').hide(500);
					$('#pants').hide(500);
					$('#tops').hide(500);
					$('#seeall46').hide(500);
					//mensclothing
					$('#sportswear').hide(500);
					$('#menstops').hide(500);
					$('#jackets').hide(500);
					$('#underwear').hide(500);
					$('#mpants').hide(500);
					$('#seeall47').hide(500);
					//womenlingerie	
					$('#bras').hide(500);
					$('#hosiery').hide(500);
					$('#panties').hide(500);
					$('#shapwear').hide(500);
					$('#camisoles').hide(500);
					$('#seeall48').hide(500);
				}
			});

			$('#shoes').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#mashoes').hide(500);
					$('#washoes').hide(500);
					$('#wboots').hide(500);
					$('#mcashualshoes').hide(500);
					$('#sandals').hide(500);
					$('#seeall45').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#mashoes').show(500);
					$('#washoes').show(500);
					$('#wboots').show(500);
					$('#mcashualshoes').show(500);
					$('#sandals').show(500);
					$('#seeall45').show(500);
					//clothingaccesories
					$('#watches').hide(500);
					$('#bags').hide(500);
					$('#sunglasses').hide(500);
					$('#costumes').hide(500);
					$('#wallets').hide(500);
					$('#seeall44').hide(500);
					//womensclothing
					$('#fitnessclothing').hide(500);
					$('#dresses').hide(500);
					$('#swimwear').hide(500);
					$('#pants').hide(500);
					$('#tops').hide(500);
					$('#seeall46').hide(500);
					//mensclothing
					$('#sportswear').hide(500);
					$('#menstops').hide(500);
					$('#jackets').hide(500);
					$('#underwear').hide(500);
					$('#mpants').hide(500);
					$('#seeall47').hide(500);
					//womenlingerie
					$('#bras').hide(500);
					$('#hosiery').hide(500);
					$('#panties').hide(500);
					$('#shapwear').hide(500);
					$('#camisoles').hide(500);
					$('#seeall48').hide(500);
				}
			});

			$('#womensclothing').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#fitnessclothing').hide(500);
					$('#dresses').hide(500);
					$('#swimwear').hide(500);
					$('#pants').hide(500);
					$('#tops').hide(500);
					$('#seeall46').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#fitnessclothing').show(500);
					$('#dresses').show(500);
					$('#swimwear').show(500);
					$('#pants').show(500);
					$('#tops').show(500);
					$('#seeall46').show(500);
					//clothingaccesories
					$('#watches').hide(500);
					$('#bags').hide(500);
					$('#sunglasses').hide(500);
					$('#costumes').hide(500);
					$('#wallets').hide(500);
					$('#seeall44').hide(500);
					//shoes
					$('#mashoes').hide(500);
					$('#washoes').hide(500);
					$('#wboots').hide(500);
					$('#mcashualshoes').hide(500);
					$('#sandals').hide(500);
					$('#seeall45').hide(500);
					//mensclothing
					$('#sportswear').hide(500);
					$('#menstops').hide(500);
					$('#jackets').hide(500);
					$('#underwear').hide(500);
					$('#mpants').hide(500);
					$('#seeall47').hide(500);
					//womenlingerie	
					$('#bras').hide(500);
					$('#hosiery').hide(500);
					$('#panties').hide(500);
					$('#shapwear').hide(500);
					$('#camisoles').hide(500);
					$('#seeall48').hide(500);
				}
			});

			$('#mensclothing').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#sportswear').hide(500);
					$('#menstops').hide(500);
					$('#jackets').hide(500);
					$('#underwear').hide(500);
					$('#mpants').hide(500);
					$('#seeall47').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#sportswear').show(500);
					$('#menstops').show(500);
					$('#jackets').show(500);
					$('#underwear').show(500);
					$('#mpants').show(500);
					$('#seeall47').show(500);
					//clothingaccesories
					$('#watches').hide(500);
					$('#bags').hide(500);
					$('#sunglasses').hide(500);
					$('#costumes').hide(500);
					$('#wallets').hide(500);
					$('#seeall44').hide(500);
					//shoes
					$('#mashoes').hide(500);
					$('#washoes').hide(500);
					$('#wboots').hide(500);
					$('#mcashualshoes').hide(500);
					$('#sandals').hide(500);
					$('#seeall45').hide(500);
					//womensclothing
					$('#fitnessclothing').hide(500);
					$('#dresses').hide(500);
					$('#swimwear').hide(500);
					$('#pants').hide(500);
					$('#tops').hide(500);
					$('#seeall46').hide(500);
					//womenlingerie
					$('#bras').hide(500);
					$('#hosiery').hide(500);
					$('#panties').hide(500);
					$('#shapwear').hide(500);
					$('#camisoles').hide(500);
					$('#seeall48').hide(500);
				}
			});

			$('#womenlingerie').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#bras').hide(500);
					$('#hosiery').hide(500);
					$('#panties').hide(500);
					$('#shapwear').hide(500);
					$('#camisoles').hide(500);
					$('#seeall48').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#bras').show(500);
					$('#hosiery').show(500);
					$('#panties').show(500);
					$('#shapwear').show(500);
					$('#camisoles').show(500);
					$('#seeall48').show(500);
					//clothingaccesories
					$('#watches').hide(500);
					$('#bags').hide(500);
					$('#sunglasses').hide(500);
					$('#costumes').hide(500);
					$('#wallets').hide(500);
					$('#seeall44').hide(500);
					//shoes
					$('#mashoes').hide(500);
					$('#washoes').hide(500);
					$('#wboots').hide(500);
					$('#mcashualshoes').hide(500);
					$('#sandals').hide(500);
					$('#seeall45').hide(500);
					//womensclothing
					$('#fitnessclothing').hide(500);
					$('#dresses').hide(500);
					$('#swimwear').hide(500);
					$('#pants').hide(500);
					$('#tops').hide(500);
					$('#seeall46').hide(500);
					//mensclothing	
					$('#sportswear').hide(500);
					$('#menstops').hide(500);
					$('#jackets').hide(500);
					$('#underwear').hide(500);
					$('#mpants').hide(500);
					$('#seeall47').hide(500);				
				}
			});



















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































			$('#').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
					$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
					$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
					$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
						$('#').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					//De elemento 1
					
				}
			});

			$('#').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					//De toys and games
					//De toys and games
					//De toys and games
					//De toys and games
					//De toys and games
					
				}
			});

			$('#').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					//De toys and games
					//De toys and games
					//De toys and games
					//De toys and games
					//De toys and games
					
				}
			});

			$('#').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					//De toys and games
					//De toys and games
					//De toys and games
					//De toys and games
					//De toys and games
					
				}
			});

			$('#').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
					$('#').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					$('#').show(500);
					//De toys and games
					//De toys and games
					//De toys and games
					//De toys and games
					//De toys and games
					
				}
			});







});