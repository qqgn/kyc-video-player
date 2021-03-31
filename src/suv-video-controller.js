var suv_video_controller = document.getElementById('suv-video-video');

function VideoStart(){

  suv_video_controller.play();
  console.log("suv_video_controller : "+"動画の再生を開始しました。");

  let suv_video_time_all = suv_video_controller.duration;
  console.log("suv_video_time_all : "+ "動画全体の秒数を取得しました。");
  console.log("suv_video_time_all : "+suv_video_time_all);

  suv_video_controller.addEventListener('timeupdate', function() {
    let suv_video_time_now = suv_video_controller.currentTime;
    let suv_video_time_proportion = Math.ceil(suv_video_time_now/suv_video_time_all* 100) / 100*100;
    let suv_video_time_proportion_off_decimal = Math.trunc(suv_video_time_proportion);

    let suv_video_range_value = document.getElementById('suv-video-range');
    suv_video_range_value.value = suv_video_time_proportion_off_decimal;

    suv_video_range_value.addEventListener("input", (e) => {
      suv_video_controller.currentTime = suv_video_range_value.value/100*suv_video_time_all;

  });

      if (suv_video_controller.currentTime !== 0) {
        console.log("suv_video_time_all : "+ "現在の再生位置の秒数を取得しました。");
        console.log("suv_video_time_now : "+ suv_video_time_now);
        console.log("suv_video_time_all : "+ "現在の再生位置の秒数の割合を取得しました。");
        console.log("suv_video_time_proportion : "+suv_video_time_proportion_off_decimal+"%");
        
      } else {
        console.log('0.00');
      }
    });
    
}

function VideoStop(){
    suv_video_controller.pause();
    console.log("suv_video_controller : "+"動画の再生を停止しました。");
}

