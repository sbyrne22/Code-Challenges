console.log("Hello");

$( () => {
  const $box = $(".box");
  const $content = $(".content");


  $box.on( "mouseover", () => {
    $(".content").fadeIn( 500 );
  });

  $box.on( "mouseout", () => {
    $(".content").fadeOut( 500 );
  });
});
