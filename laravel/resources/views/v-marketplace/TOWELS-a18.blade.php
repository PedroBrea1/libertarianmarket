@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Statue of Liberty Painting Adult Beach Towel Pool Towel Bath Towel 31" X 51"</div>

@include('v-marketplace.TOWELS-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/towels/TOWEL-a18.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B08439BQFL/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B08439BQFL&linkCode=as2&tag=pedrobrea-22&linkId=bd64d741826caebd07903c788c6df688">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B08439BQFL" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Size: 31.5"x 51" (80x130cm). Towel will get more absorbent, thick and soft after first wash.</h6>
              <h6>•     Made of 100% high quality polyester, super soft and lightweight, easy to carry with.</h6>
              <h6>•     VERSATILITY: Perfect for the beach, pool and outdoors or indoors activities. THIN and Light to carry, compact to save space in your bag, sand resistant on colorful printed side and absorbent on reverse side to dry you quickly.</h6>
              <h6>•     Machines Washable: Cold gentle machine wash, tumble warm dry in low temperature</h6>
              <h6>•     Sand prevention: Don't stick sand to beach towels, leave more sand to make a castle. All beach towels are printed on both sides. Adopting stylish design, customers will be absolutely unique on the beach. This product is a special wonderful gift. Ideal as a gift for family, lovers and friends!</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>