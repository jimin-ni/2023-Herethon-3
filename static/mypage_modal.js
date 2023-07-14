// 모달용 jQuery

//modal click 이벤트
$(".get-modal-btn").click(function () {
    $(".modal").fadeIn();
  });
  
  $("#close-btn").click(function () {
    $(".modal").fadeOut();
  });
  
  //별에 마우스 오버시 별 색이 채워짐
  $("label").hover(
    function () {
      $(this).find("img").attr("src", "../images/icFilledStar.png");
      $(this).prevAll().find("img").attr("src", "./icFilledStar.png");
      $(this).nextAll().find("img").attr("src", "./icEmptyStar.png");
    },
    function () {
      $(this).find("img").attr("src", "./icEmptyStar.png");
    }
  );
  
  //별 클릭시 클릭된 별의 value가 점수로 표시됨
  $("input[name='star']").change(function () {
    var score = $("input[name='star']:checked").val();
  
    var form = $(this).parent().parent();
    var scoreSpan = form.prev().children().last();
  
    scoreSpan.html(`${score}점`);
  });