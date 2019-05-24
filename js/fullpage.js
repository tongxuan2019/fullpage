$(function(){
  initAnimate();


    //console.log(tipLeft);
    $(".header__nav-item").each(function(index,element){
        $(element).mouseover(function(){
            $('.header__nav-item-tip').css({"left":parseInt(index*100)});
        }).mouseout(function(){
            var idx=$('.header__nav a.header__nav-item_status_active').index();
            $('.header__nav-item-tip').css({"left":parseInt(idx*100)})
        }).click(function(){
            $(this).siblings().removeClass('header__nav-item_status_active');
            $(this).addClass('header__nav-item_status_active');

        })
    });


});

/*
for(k in screenElements){
    //console.log(k)
    //console.log(screenElements[k]);
    // initTT(screenElements[k],k);
}
function initTT(arr,num){
    console.log(arr);
}*/

var screenElements={
    //age:10,
    '.screen-1':[
        '.screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow'
    ],
    '.screen-2':[
        '.screen-2__heading',
        '.screen-2__phone',
        '.screen-2__subheading',
        '.screen-2__point_i_1',
        '.screen-2__point_i_2',
        '.screen-2__point_i_3'
    ],
    '.screen-3':[
        '.screen-3__heading',
        '.screen-3__phone',
        '.screen-3__subheading',
        '.screen-3__features'
    ],
    '.screen-4':[
        '.screen-4__heading',
        '.screen-4__subheading',
        '.screen-4__type-item_i_1',
        '.screen-4__type-item_i_2',
        '.screen-4__type-item_i_3',
        '.screen-4__type-item_i_4'
    ],
    '.screen-2':[
        '.screen-2__heading',
        '.screen-2__phone',
        '.screen-2__subheading',
        '.screen-2__point_i_1',
        '.screen-2__point_i_2',
        '.screen-2__point_i_3'
    ],
    '.screen-5':[
        '.screen-5__heading',
        '.screen-5__subheading',
        '.screen-5__back'
    ]
}

function setScreenClsFn(idx,setMod){
    for(var i=0;i<screenElements['.screen-'+idx].length;i++){
        if(setMod==0){
            $(screenElements['.screen-'+idx][i]).addClass(screenElements['.screen-'+idx][i].substring(1)+'_done');
        }else{
            $(screenElements['.screen-'+idx][i]).removeClass(screenElements['.screen-'+idx][i].substring(1)+'_done');
        }
        if(idx==1){
            $('.header').removeClass('header_status_black');
            //$('.header__nav-item-tip').css({"left":"0"});
        }else{
            $('.header').addClass('header_status_black');
            //$('.header__nav-item-tip').css({"left":parseInt((idx-1)*100)});
        }

    }
}

function initAnimate(){
  $('#dowebok').fullpage({
    //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
      anchors: ['page1', 'page2', 'page3', 'page4','page5'],//ê��
      //scrollOverflow:true,
      'navigation': true,
      continuousVertical: true,

      afterLoad: function(anchorLink, index){
        $(".header__nav-item").eq(!(index-1)).removeClass('header__nav-item_status_active');
        $(".header__nav-item").eq(index-1).addClass('header__nav-item_status_active');

      if(index == 1){
        setTimeout(function(){
            //console.log(screenElements['.screen-'+index]);
            setScreenClsFn(index,0);
            $('.header__nav-item-tip').css({"left":"0"})

            /*for(var i=0;i<screenElements['.screen-'+index].length;i++){
                $(screenElements['.screen-'+index][i]).addClass(screenElements['.screen-'+index][i].substring(1)+'_done');
            }*/


        },300)
      }
      if(index == 2){
        setTimeout(function(){
            setScreenClsFn(index,0);
            $('.header__nav-item-tip').css({"left":"100"});

        },300)

      }
      if(index == 3){
        setTimeout(function(){
            setScreenClsFn(index,0);
            $('.header__nav-item-tip').css({"left":"200"});
        },300)
        }
      if(index == 4){
        setTimeout(function(){
            setScreenClsFn(index,0);
            $('.header__nav-item-tip').css({"left":"300"});
        },300)
        }
      if(index == 5){
        setTimeout(function(){
            setScreenClsFn(index,0);
            $('.header__nav-item-tip').css({"left":"400"});
        },300)
        }

    },
    //
    onLeave: function(index, direction){
        setScreenClsFn(index,1);
    }

  })
}